# latitudesh

Model Context Protocol (MCP) Server for the *latitudesh* API.

<div align="left" style="margin-bottom: 0;">
    <a href="https://www.speakeasy.com/?utm_source=latitudesh&utm_campaign=mcp-typescript" class="badge-link">
        <span class="badge-container">
            <span class="badge-icon-section">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill="none" style="vertical-align: middle;"><title>Speakeasy Logo</title><path fill="currentColor" d="m20.639 27.548-19.17-2.724L0 26.1l20.639 2.931 8.456-7.336-1.468-.208-6.988 6.062Z"></path><path fill="currentColor" d="m20.639 23.1 8.456-7.336-1.468-.207-6.988 6.06-6.84-.972-9.394-1.333-2.936-.417L0 20.169l2.937.416L0 23.132l20.639 2.931 8.456-7.334-1.468-.208-6.986 6.062-9.78-1.39 1.468-1.273 8.31 1.18Z"></path><path fill="currentColor" d="m20.639 18.65-19.17-2.724L0 17.201l20.639 2.931 8.456-7.334-1.468-.208-6.988 6.06Z"></path><path fill="currentColor" d="M27.627 6.658 24.69 9.205 20.64 12.72l-7.923-1.126L1.469 9.996 0 11.271l11.246 1.596-1.467 1.275-8.311-1.181L0 14.235l20.639 2.932 8.456-7.334-2.937-.418 2.937-2.549-1.468-.208Z"></path><path fill="currentColor" d="M29.095 3.902 8.456.971 0 8.305l20.639 2.934 8.456-7.337Z"></path></svg>
            </span>
            <span class="badge-text badge-text-section">BUILT BY SPEAKEASY</span>
        </span>
    </a>
    <a href="https://opensource.org/licenses/MIT" class="badge-link">
        <span class="badge-container blue">
            <span class="badge-text badge-text-section">LICENSE // MIT</span>
        </span>
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This MCP Server is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/latitude/latitude). Delete this notice before publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Latitude.sh API: The Latitude.sh API is a RESTful API to manage your Latitude.sh account. It allows you to perform the same actions as the Latitude.sh dashboard.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [latitudesh](#latitudesh)
  * [Installation](#installation)
  * [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

> [!TIP]
> To finish publishing your MCP Server to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).
<details>
<summary>DXT (Desktop Extension)</summary>

Install the MCP server as a Desktop Extension using the pre-built [`mcp-server.dxt`](./mcp-server.dxt) file:

Simply drag and drop the [`mcp-server.dxt`](./mcp-server.dxt) file onto Claude Desktop to install the extension.

The DXT package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> DXT (Desktop Extensions) provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=Latitudesh&config=eyJtY3BTZXJ2ZXJzIjp7IkxhdGl0dWRlc2giOnsiY29tbWFuZCI6Im5weCIsImFyZ3MiOlsibGF0aXR1ZGVzaCIsInN0YXJ0IiwiLS1zZXJ2ZXItaW5kZXgiLCIuLi4iLCItLWxhdGl0dWRlLWFwaS1rZXkiLCIuLi4iLCItLWJlYXJlciIsIi4uLiJdfX19)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--server-index",
        "...",
        "--latitude-api-key",
        "...",
        "--bearer",
        "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add latitudesh npx latitudesh start -- --server-index ... --latitude-api-key ... --bearer ...
```

</details>
<details>
<summary>Windsurf</summary>

Refer to [Official Windsurf documentation](https://docs.windsurf.com/windsurf/cascade/mcp#adding-a-new-mcp-plugin) for latest information

1. Open Windsurf Settings
2. Select Cascade on left side menu
3. Click on `Manage MCPs`. (To Manage MCPs you should be signed in with a Windsurf Account)
4. Click on `View raw config` to open up the mcp configuration file.
5. If the configuration file is empty paste the full json
```
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--server-index",
        "...",
        "--latitude-api-key",
        "...",
        "--bearer",
        "..."
      ]
    }
  }
}
```
</details>
<details>
<summary>VS Code</summary>

Refer to [Official VS Code documentation](https://code.visualstudio.com/api/extension-guides/ai/mcp) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search and open `MCP: Open User Configuration`. This should open mcp.json file
2. If the configuration file is empty paste the full json
```
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--server-index",
        "...",
        "--latitude-api-key",
        "...",
        "--bearer",
        "..."
      ]
    }
  }
}
```

</details>
<details>
<summary>Claude Desktop</summary>
Claude Desktop doesn't yet support SSE/remote MCP servers.

You need to do the following
1. Open claude Desktop
2. Open left hand side pane, then click on your Username
3. Go to `Settings`
4. Go to `Developer` tab (on the left hand side)
5. Click on `Edit Config`
Paste the following config in the configuration

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--server-index",
        "...",
        "--latitude-api-key",
        "...",
        "--bearer",
        "..."
      ]
    }
  }
}
```

</details>


<details>
<summary> Stdio installation via npm </summary>
To start the MCP server, run:

```bash
npx latitudesh start --server-index ... --latitude-api-key ... --bearer ...
```

For a full list of server arguments, run:

```
npx latitudesh --help
```

</details>
<!-- End Installation [installation] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Development

Run locally without a published npm package:
1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Run `node ./bin/mcp-server.js start --server-index ... --latitude-api-key ... --bearer ...`
To use this local version with Cursor, Claude or other MCP Clients, you'll need to add the following config:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "node",
      "args": [
        "./bin/mcp-server.js",
        "start",
        "--server-index",
        "...",
        "--latitude-api-key",
        "...",
        "--bearer",
        "..."
      ]
    }
  }
}
```

Or to debug the MCP server locally, use the official MCP Inspector: 

```bash
npx @modelcontextprotocol/inspector node ./bin/mcp-server.js start --server-index ... --latitude-api-key ... --bearer ...
```



## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=latitudesh&utm_campaign=mcp-typescript)
