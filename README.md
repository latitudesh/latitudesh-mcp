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

> [!NOTE]
> You'll need your Latitude.sh API bearer token. Get it from your [Latitude.sh dashboard](https://latitude.sh).
>
> The `--bearer` flag is **required**. The `--server-index` and `--latitude-api-key` flags are optional.
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

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. Paste the following JSON into the MCP Server Configuration:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--bearer",
        "YOUR_LATITUDE_API_TOKEN"
      ]
    }
  }
}
```

**Note:** Replace `YOUR_LATITUDE_API_TOKEN` with your actual Latitude.sh bearer token.

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add latitudesh npx latitudesh start -- --bearer YOUR_LATITUDE_API_TOKEN
```

**Note:** Replace `YOUR_LATITUDE_API_TOKEN` with your actual Latitude.sh bearer token.

</details>
<details>
<summary>Windsurf</summary>

Refer to [Official Windsurf documentation](https://docs.windsurf.com/windsurf/cascade/mcp#adding-a-new-mcp-plugin) for latest information

1. Open Windsurf Settings
2. Select Cascade on left side menu
3. Click on `Manage MCPs`. (To Manage MCPs you should be signed in with a Windsurf Account)
4. Click on `View raw config` to open up the mcp configuration file.
5. Paste the configuration:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--bearer",
        "YOUR_LATITUDE_API_TOKEN"
      ]
    }
  }
}
```

**Note:** Replace `YOUR_LATITUDE_API_TOKEN` with your actual Latitude.sh bearer token.

</details>
<details>
<summary>VS Code</summary>

Refer to [Official VS Code documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. Search and open `MCP: Open User Configuration` to open the mcp.json file
3. Add the configuration:

```json
{
  "servers": {
    "Latitudesh": {
      "type": "stdio",
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--bearer",
        "YOUR_LATITUDE_API_TOKEN"
      ]
    }
  }
}
```

4. Save the file and restart VS Code
5. Open Copilot Chat (`Cmd+Alt+I` / `Ctrl+Alt+I`) and enable **Agent mode**
6. The Latitudesh tools will be available automatically

**Note:** Replace `YOUR_LATITUDE_API_TOKEN` with your actual Latitude.sh bearer token.

**Tips for using with VS Code:**
- Be explicit in your prompts: "List my servers from Latitude.sh" instead of just "list servers"
- Mention "Latitude.sh" or "MCP" to avoid Copilot searching local files

</details>
<details>
<summary>Claude Desktop</summary>

1. Open Claude Desktop
2. Click on your Username in the left sidebar
3. Go to `Settings` → `Developer` tab
4. Click `Edit Config`
5. Add the configuration:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--bearer",
        "YOUR_LATITUDE_API_TOKEN"
      ]
    }
  }
}
```

6. Save and restart Claude Desktop

**Note:** Replace `YOUR_LATITUDE_API_TOKEN` with your actual Latitude.sh bearer token.

</details>


<details>
<summary>Standalone CLI Usage</summary>

To start the MCP server directly:

```bash
npx latitudesh start --bearer YOUR_LATITUDE_API_TOKEN
```

**Optional flags:**
- `--server-index <0|1>` - Select server (0=https://api.latitude.sh, 1=http://api.latitude.sh) [default: 0]
- `--latitude-api-key <key>` - API key for URL templating
- `--log-level <level>` - Log level (debug|warning|info|error) [default: info]

For a full list of server arguments:

```bash
npx latitudesh --help
```

</details>
<!-- End Installation [installation] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Development

Run locally without a published npm package:

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the server:
   ```bash
   npm run build
   ```
4. Run the server:
   ```bash
   node ./bin/mcp-server.js start --bearer YOUR_LATITUDE_API_TOKEN
   ```

### Using Local Version with MCP Clients

For **VS Code**, use this configuration in `mcp.json`:

```json
{
  "servers": {
    "Latitudesh": {
      "type": "stdio",
      "command": "node",
      "args": [
        "/absolute/path/to/latitudesh-mcp/bin/mcp-server.js",
        "start",
        "--bearer",
        "YOUR_LATITUDE_API_TOKEN"
      ]
    }
  }
}
```

For **Cursor, Claude Desktop, Windsurf**, use:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "node",
      "args": [
        "/absolute/path/to/latitudesh-mcp/bin/mcp-server.js",
        "start",
        "--bearer",
        "YOUR_LATITUDE_API_TOKEN"
      ]
    }
  }
}
```

### Debugging with MCP Inspector

To debug the MCP server locally:

```bash
npx @modelcontextprotocol/inspector node ./bin/mcp-server.js start --bearer YOUR_LATITUDE_API_TOKEN
```

This will open a web interface at `http://localhost:6274` where you can test all 112 tools interactively.



## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=latitudesh&utm_campaign=mcp-typescript)
