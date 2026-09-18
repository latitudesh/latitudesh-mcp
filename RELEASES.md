

## 2026-03-06 00:50:09
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.744.0 (2.850.3) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.1.0] .

## 2026-03-11 00:44:16
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.751.0 (2.858.2) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.1.1] .

## 2026-06-19 11:36:37
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.784.0 (2.911.0) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.2.1] .

## 2026-07-10 00:55:13
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.789.1 (2.916.4) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.2.4] .

## 2026-07-13 13:45:19
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.790.0 (2.917.0) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.3.0] .

## 2026-07-16 14:09:47
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.790.2 (2.918.3) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.3.1] .

## 2026-08-27 01:55:48
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.796.0 (2.932.15) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.3.2] .

## 2026-09-17 18:30:37
### Changes
Based on:
- OpenAPI Doc  
- Speakeasy CLI 1.797.0 (2.937.18) https://github.com/speakeasy-api/speakeasy
### Generated
- [mcp-typescript v0.4.0] .

### Breaking
Six Block Storage MCP tools were renamed upstream. The endpoints and arguments
are unchanged — only the tool names differ, so update any `--tool` allowlist or
saved `tools/call` request that pins the old names:

| Old tool name | New tool name |
| --- | --- |
| `block-storage-get-storage-volumes` | `block-storage-list-volumes` |
| `block-storage-post-storage-volumes` | `block-storage-create-volume` |
| `block-storage-get-storage-volume` | `block-storage-retrieve-volume` |
| `block-storage-delete-storage-volumes` | `block-storage-delete-volume` |
| `block-storage-post-storage-volumes-map` | `block-storage-map-volume` |
| `block-storage-post-storage-volumes-mount` | `block-storage-mount-volume` |
