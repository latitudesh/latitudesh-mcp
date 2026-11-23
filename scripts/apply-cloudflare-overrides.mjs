/*
 * Re-applies the hand-maintained Cloudflare/OAuth overrides that `speakeasy run`
 * clobbers on every regeneration. Run after a regen, before `npm run build`:
 *
 *   node scripts/apply-cloudflare-overrides.mjs && npm run build
 *
 * In CI this runs automatically on the speakeasy-sdk-regen-* branch (see
 * .github/workflows/sdk_generation.yaml).
 *
 * With --verify, nothing is written: the script only checks that every
 * override's marker is present and exits non-zero otherwise. Unlike apply mode,
 * this does not depend on Speakeasy template anchors, so it is safe to run on
 * any branch (see .github/workflows/verify_overrides.yaml).
 *
 * Each edit is IDEMPOTENT (skipped if its marker is already present) and FAILS
 * LOUDLY if neither the generated anchor nor the applied marker is found — that
 * means Speakeasy changed its template and a human needs to update this script,
 * rather than silently shipping a broken worker.
 *
 * NOTE: oauth-entry.ts is hand-written and not regenerated, so it needs no
 * re-apply. These four files are generated and get overwritten.
 */
import { readFileSync, writeFileSync } from "node:fs";

const KV_ID = "2c85f823a5c648558928e37c92553661";

const VERIFY = process.argv.includes("--verify");

let failed = false;

const occurrences = (content, needle) => content.split(needle).length - 1;

/**
 * @param {string} content
 * @param {{label:string, find:string, replace:string, marker:string, all?:boolean, count?:number}} e
 */
function applyEdit(content, e) {
  // For `all` edits the marker alone isn't enough: it must occur exactly
  // `count` times and every occurrence of the generated anchor must be gone,
  // or the override is only partially applied (e.g. a template change turned
  // one of the locations into something this script doesn't recognize).
  const found = occurrences(content, e.marker);
  const stale = e.all && content.includes(e.find);
  const applied = e.all ? found === e.count && !stale : found > 0;
  if (applied) {
    console.log(`  ✓ ${VERIFY ? "present" : "already applied"}: ${e.label}`);
    return content;
  }
  if (VERIFY) {
    const reason = stale
      ? "The generated anchor still occurs alongside the applied marker."
      : found > 0
        ? `Expected ${e.count} occurrences of the applied marker, found ${found}.`
        : "The applied marker was not found — the override is not present.";
    console.error(`  ✗ ${found > 0 ? "PARTIAL" : "MISSING"}: ${e.label}\n    ${reason}`);
    failed = true;
    return content;
  }
  if (!content.includes(e.find)) {
    console.error(
      `  ✗ FAILED: ${e.label}\n` +
        `    Neither the applied marker nor the generated anchor was found${
          found > 0 ? ` at the expected ${e.count} locations` : ""
        }.\n` +
        `    Speakeasy's template likely changed — update scripts/apply-cloudflare-overrides.mjs.`,
    );
    failed = true;
    return content;
  }
  const next = e.all ? content.split(e.find).join(e.replace) : content.replace(e.find, e.replace);
  if (e.all && occurrences(next, e.marker) !== e.count) {
    console.error(
      `  ✗ FAILED: ${e.label}\n` +
        `    Applied, but ended with ${occurrences(next, e.marker)} occurrences of the marker (expected ${e.count}).\n` +
        `    Speakeasy's template likely changed — update scripts/apply-cloudflare-overrides.mjs.`,
    );
    failed = true;
    return next;
  }
  console.log(`  + applied: ${e.label}`);
  return next;
}

function processFile(path, edits) {
  console.log(`\n${path}`);
  let content = readFileSync(path, "utf8");
  for (const e of edits) content = applyEdit(content, e);
  if (!VERIFY) writeFileSync(path, content);
}

// --- wrangler.toml ----------------------------------------------------------
processFile("wrangler.toml", [
  {
    label: "main -> oauth-entry.ts",
    marker: "oauth-entry.ts",
    find: `main = "src/cloudflare-worker/cloudflare-worker.ts"`,
    replace:
      `# Manual override (re-apply after \`speakeasy run\`): point at the hand-written\n` +
      `# OAuth wrapper, not the generated entrypoint.\n` +
      `main = "src/cloudflare-worker/oauth-entry.ts"`,
  },
  {
    label: "custom-domain route",
    marker: "mcp.latitude.sh",
    find: `compatibility_flags = ["nodejs_compat", "enable_request_signal"]`,
    replace:
      `compatibility_flags = ["nodejs_compat", "enable_request_signal"]\n\n` +
      `# Custom domain (Workers Custom Domain — auto-manages DNS + TLS on latitude.sh).\n` +
      `routes = [\n  { pattern = "mcp.latitude.sh", custom_domain = true }\n]`,
  },
  {
    label: "OAUTH_KV namespace binding",
    marker: "OAUTH_KV",
    find: `name = "LATITUDESH_MCP"\nclass_name = "LatitudeshMCP"`,
    replace:
      `name = "LATITUDESH_MCP"\nclass_name = "LatitudeshMCP"\n\n` +
      `# KV for workers-oauth-provider (tokens/grants/clients) + login-bridge state.\n` +
      `[[kv_namespaces]]\nbinding = "OAUTH_KV"\nid = "${KV_ID}"`,
  },
  {
    label: "SQLite-backed Durable Object",
    marker: "new_sqlite_classes",
    find: `new_classes = ["LatitudeshMCP"]`,
    replace: `new_sqlite_classes = ["LatitudeshMCP"]`,
  },
]);

// --- src/cloudflare-worker/cloudflare-worker.ts -----------------------------
processFile("src/cloudflare-worker/cloudflare-worker.ts", [
  {
    label: "logger info (not debug)",
    marker: `createConsoleLogger("info")`,
    find:
      `    logger: createConsoleLogger("debug"),`,
    replace:
      `    // Override: "info" not "debug" (avoid verbose prod logging).\n` +
      `    logger: createConsoleLogger("info"),`,
  },
  {
    label: "auth via bearer / latitude-api-key headers",
    marker: `getHeader("bearer")`,
    find: `    security: async () => ({ Bearer: getHeader("Authorization") }),`,
    replace:
      `    // Override: the Latitude API key arrives as \`bearer\` (set in props by the\n` +
      `    // OAuth grant, or sent as a header on /direct/mcp and /sse), plus an\n` +
      `    // optional \`latitude-api-key\`. The generated "Authorization" lookup\n` +
      `    // never sees it, so every tool call would go out unauthenticated.\n` +
      `    security: async () => ({ Bearer: getHeader("bearer") }),\n` +
      `    latitude_api_key: getHeader("latitude-api-key") || undefined,`,
  },
]);

// --- src/mcp-server/tools.ts (tool display titles) --------------------------
processFile("src/mcp-server/tools.ts", [
  {
    label: "non-empty tool titles",
    marker: "const displayTitle",
    find:
      `    if (tool.args) {\n` +
      `      server.registerTool(\n` +
      `        tool.name,\n` +
      `        {\n` +
      `          description: tool.description,\n` +
      `          inputSchema: mcpInputSchema(tool.args),\n` +
      `          annotations: tool.annotations,\n` +
      `        },\n` +
      `        async (args, ctx) => {\n` +
      `          return tool.tool(getSDK(), args, mcpServerContext(ctx));\n` +
      `        },\n` +
      `      );\n` +
      `    } else {\n` +
      `      server.registerTool(\n` +
      `        tool.name,\n` +
      `        {\n` +
      `          description: tool.description,\n` +
      `          annotations: tool.annotations,\n` +
      `        },\n` +
      `        async (ctx) => {\n` +
      `          return tool.tool(getSDK(), mcpServerContext(ctx));\n` +
      `        },\n` +
      `      );\n` +
      `    }`,
    replace:
      `    // Override: Speakeasy emits annotations.title: "" which renders blank in\n` +
      `    // the Claude connector UI. Derive a readable title from the tool name.\n` +
      `    const displayTitle = tool.annotations.title\n` +
      `      || tool.name.replace(/[-_]+/g, " ").replace(/\\b\\w/g, (c) => c.toUpperCase());\n` +
      `    const annotations = { ...tool.annotations, title: displayTitle };\n\n` +
      `    if (tool.args) {\n` +
      `      server.registerTool(\n` +
      `        tool.name,\n` +
      `        {\n` +
      `          title: displayTitle,\n` +
      `          description: tool.description,\n` +
      `          inputSchema: mcpInputSchema(tool.args),\n` +
      `          annotations,\n` +
      `        },\n` +
      `        async (args, ctx) => {\n` +
      `          return tool.tool(getSDK(), args, mcpServerContext(ctx));\n` +
      `        },\n` +
      `      );\n` +
      `    } else {\n` +
      `      server.registerTool(\n` +
      `        tool.name,\n` +
      `        {\n` +
      `          title: displayTitle,\n` +
      `          description: tool.description,\n` +
      `          annotations,\n` +
      `        },\n` +
      `        async (ctx) => {\n` +
      `          return tool.tool(getSDK(), mcpServerContext(ctx));\n` +
      `        },\n` +
      `      );\n` +
      `    }`,
  },
]);

// --- src/landing-page.ts (OAuth-only client config) -------------------------
processFile("src/landing-page.ts", [
  {
    label: "OAuth-only client config (no static headers)",
    marker: "Override: OAuth-only",
    find:
      `  const headers: Array<{ name: string; env: string }> = runtime === "cloudflare"\n` +
      `    ? [{ "name": "Authorization", "env": "BEARER" }]`,
    replace:
      `  // Override: OAuth-only on Cloudflare. Clients hit /mcp and run the browser\n` +
      `  // auth flow on a 401 — no static headers/keys in client config.\n` +
      `  const headers: Array<{ name: string; env: string }> = runtime === "cloudflare"\n` +
      `    ? []`,
  },
]);

if (failed) {
  console.error(
    VERIFY
      ? "\nOne or more overrides are missing. Run `node scripts/apply-cloudflare-overrides.mjs` to re-apply them."
      : "\nOne or more overrides could not be applied. See errors above.",
  );
  process.exit(1);
}
console.log(`\nAll Cloudflare/OAuth overrides ${VERIFY ? "are present" : "applied"}.`);
