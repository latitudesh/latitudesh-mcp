# Latitude.sh MCP Server

> Model Context Protocol (MCP) server for the [Latitude.sh API](https://www.latitude.sh/docs/api-reference)

## Overview

The Latitude.sh MCP Server exposes your Latitude.sh REST API as an AI-ready interface, allowing developer tools and assistants to list, create, and manage your infrastructure resources programmatically.

Use natural language to:

- 🔎 List and inspect servers, projects, and SSH keys
- ⚙️ Create or delete bare-metal instances
- 📡 Manage networking and automation directly from chat-based IDEs


## Installation

> 🪶 Prerequisite: You’ll need a [Latitude.sh API Key](https://www.latitude.sh/dashboard/api-keys).

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
        "<YOUR_API_KEY>"
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
<summary>Codex</summary>

Add the MCP server with the Codex CLI:

```bash
codex mcp add Latitudesh -- npx latitudesh start --bearer YOUR_LATITUDE_API_TOKEN
```

Or add it directly to `~/.codex/config.toml`:

```toml
[mcp_servers.Latitudesh]
command = "npx"
args = ["latitudesh", "start", "--bearer", "YOUR_LATITUDE_API_TOKEN"]
```

Verify it is configured:

```bash
codex mcp list
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
5. If the configuration file is empty paste the full json
```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--bearer",
        "<YOUR_API_KEY>"
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
```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": [
        "latitudesh",
        "start",
        "--bearer",
        "<YOUR_API_KEY>"
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
        "--bearer",
        "<YOUR_API_KEY>"
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

## Development

Run locally without a published npm package:

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Run `node ./bin/mcp-server.js start --bearer <YOUR_API_KEY>`

To use this local version with MCP Clients, you'll need to add the following config:

```json
{
  "mcpServers": {
    "Latitudesh": {
      "command": "node",
      "args": [
        "/absolute/path/to/latitudesh-mcp/bin/mcp-server.js",
        "start",
        "--bearer",
        "<YOUR_API_KEY>"
      ]
    }
  }
}
```

### Debug locally

Use the official [MCP Inspector](https://www.npmjs.com/package/@modelcontextprotocol/inspector):

```bash
npx @modelcontextprotocol/inspector node ./bin/mcp-server.js start --bearer <YOUR_API_KEY>
```

This opens an interactive UI at http://localhost:6274.

## 🤝 Contributions

While we welcome contributions, most of this code is auto-generated. Manual edits to generated files will be overwritten on regeneration.

If you'd like to suggest improvements:

- Open an Issue or PR with your proof of concept
- We'll review and include it in future releases when possible

<!-- Start Summary [summary] -->
## Summary

Latitude.sh API: The Latitude.sh API is a RESTful API to manage your Latitude.sh account. It allows you to perform the same actions as the Latitude.sh dashboard.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Latitude.sh MCP Server](#latitudesh-mcp-server)
  * [Overview](#overview)
  * [Installation](#installation)
  * [Development](#development)
  * [🤝 Contributions](#contributions)
  * [Installation](#installation-1)
  * [Progressive Discovery](#progressive-discovery)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

Deployed at https://mcp.latitude.sh
<details>
<summary>Claude Desktop</summary>

Install the MCP server as a Desktop Extension using the pre-built [`mcp-server.mcpb`](https://github.com/latitudesh/latitudesh-mcp/releases/download/v0.2.3/mcp-server.mcpb) file:

Simply drag and drop the [`mcp-server.mcpb`](https://github.com/latitudesh/latitudesh-mcp/releases/download/v0.2.3/mcp-server.mcpb) file onto Claude Desktop to install the extension.

The MCP bundle package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> MCP bundles provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=Latitudesh&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIm1jcC1yZW1vdGVAMC4xLjI1IiwiaHR0cHM6Ly9tY3AubGF0aXR1ZGUuc2gvc3NlIiwiLS1oZWFkZXIiLCJzZXJ2ZXItaW5kZXg6JHtTRVJWRVJfSU5ERVh9IiwiLS1oZWFkZXIiLCJsYXRpdHVkZS1hcGkta2V5OiR7TEFUSVRVREVfQVBJX0tFWX0iLCItLWhlYWRlciIsImJlYXJlcjoke0JFQVJFUn0iXX0=)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "command": "npx",
  "args": [
    "latitudesh",
    "start",
    "--server-index",
    "0",
    "--latitude-api-key",
    "<insert your api key here>",
    "--bearer",
    ""
  ]
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add Latitudesh -- npx -y latitudesh start --server-index 0 --latitude-api-key <insert your api key here> --bearer 
```

</details>
<details>
<summary>Gemini</summary>

```bash
gemini mcp add Latitudesh -- npx -y latitudesh start --server-index 0 --latitude-api-key <insert your api key here> --bearer 
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

```bash
{
  "command": "npx",
  "args": [
    "latitudesh",
    "start",
    "--server-index",
    "0",
    "--latitude-api-key",
    "<insert your api key here>",
    "--bearer",
    ""
  ]
}
```
</details>
<details>
<summary>VS Code</summary>

[![Install in VS Code](https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20Latitudesh%20MCP&color=0098FF)](vscode://ms-vscode.vscode-mcp/install?name=Latitudesh&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsIm1jcC1yZW1vdGVAMC4xLjI1IiwiaHR0cHM6Ly9tY3AubGF0aXR1ZGUuc2gvc3NlIiwiLS1oZWFkZXIiLCJzZXJ2ZXItaW5kZXg6JHtTRVJWRVJfSU5ERVh9IiwiLS1oZWFkZXIiLCJsYXRpdHVkZS1hcGkta2V5OiR7TEFUSVRVREVfQVBJX0tFWX0iLCItLWhlYWRlciIsImJlYXJlcjoke0JFQVJFUn0iXX0=)

Or manually:

Refer to [Official VS Code documentation](https://code.visualstudio.com/api/extension-guides/ai/mcp) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search and open `MCP: Open User Configuration`. This should open mcp.json file
2. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "latitudesh",
    "start",
    "--server-index",
    "0",
    "--latitude-api-key",
    "<insert your api key here>",
    "--bearer",
    ""
  ]
}
```

</details>
<details>
<summary> Stdio installation via npm </summary>
To start the MCP server, run:

```bash
npx latitudesh start --server-index 0 --latitude-api-key <insert your api key here> --bearer 
```

For a full list of server arguments, run:

```
npx latitudesh --help
```

</details>
<!-- End Installation [installation] -->

<!-- Start Progressive Discovery [dynamic-mode] -->
## Progressive Discovery

MCP servers with many tools can bloat LLM context windows, leading to increased token usage and tool confusion. Dynamic mode solves this by exposing only a small set of meta-tools that let agents progressively discover and invoke tools on demand.

To enable dynamic mode, pass the `--mode dynamic` flag when starting your server:

```jsonc
{
  "mcpServers": {
    "Latitudesh": {
      "command": "npx",
      "args": ["latitudesh", "start", "--mode", "dynamic"],
      // ... other server arguments
    }
  }
}
```

In dynamic mode, the server registers only the following meta-tools instead of every individual tool:

- **`list_tools`**: Lists all available tools with their names and descriptions.
- **`describe_tool_input`**: Returns the input schema for one or more tools by name.
- **`execute_tool`**: Executes a tool by name with its arguments.

This approach significantly reduces the number of tokens sent to the LLM on each request, which is especially useful for servers with a large number of tools.
<!-- End Progressive Discovery [dynamic-mode] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
