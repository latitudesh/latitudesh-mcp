// Auto-generated at build time
export const toolNames: Array<{ name: string; description: string }>= [
  {
    "name": "api-keys-list",
    "description": "List API keys\n\nReturns a list of all API keys.\n"
  },
  {
    "name": "api-keys-create",
    "description": "Create API key\n\nCreate a new API Key that is tied to the current user account. The created API key is only listed ONCE upon creation. It can however be regenerated or deleted.\n"
  },
  {
    "name": "api-keys-update",
    "description": "Rotate API key\n\nRotate an existing API Key, generating a new token. This invalidates the previous key.\nUse PATCH to update settings without rotating the token.\n"
  },
  {
    "name": "api-keys-delete",
    "description": "Delete API key\n\nDelete an existing API Key. Once deleted, the API Key can no longer be used to access the API.\n"
  },
  {
    "name": "api-keys-update-api-key",
    "description": "Update API key settings\n\nUpdate API Key settings (name, read_only, allowed_ips) without rotating the token.\nUse PUT to rotate the token.\n"
  },
  {
    "name": "billing-list-usage",
    "description": "Retrieve billing usage\n\nReturns the billing usage of a project\n"
  },
  {
    "name": "events-list",
    "description": "List events\n\nLists actions performed by users on your account.\n"
  },
  {
    "name": "firewalls-get-all-firewall-assignments",
    "description": "List firewall assignments\n\nReturns a list of all servers assigned to one or more firewalls."
  },
  {
    "name": "firewalls-create",
    "description": "Create firewall\n\nCreate a firewall"
  },
  {
    "name": "firewalls-list",
    "description": "List firewalls\n\nList firewalls"
  },
  {
    "name": "firewalls-get",
    "description": "Retrieve firewall\n\nReturns a single firewall by its ID."
  },
  {
    "name": "firewalls-update",
    "description": "Update firewall\n\nUpdates a firewall by its ID."
  },
  {
    "name": "firewalls-delete",
    "description": "Delete firewall"
  },
  {
    "name": "firewalls-list-assignments",
    "description": "Firewall assignments\n\nReturns a list of all servers assigned to a particular firewall."
  },
  {
    "name": "firewalls-delete-assignment",
    "description": "Delete assignment\n\nRemoves a server from a firewall by its ID."
  },
  {
    "name": "elastic-ips-list-elastic-ips",
    "description": "List Elastic IPs\n\nList all Elastic IPs for the authenticated team. Elastic IPs are static public IP addresses that can be assigned to servers and moved between servers within the same project.\n\n**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. When the flag is disabled, the endpoint returns an empty list.\n"
  },
  {
    "name": "elastic-ips-create-elastic-ip",
    "description": "Create an Elastic IP\n\nCreates a new Elastic IP and assigns it to the specified server. The IP is provisioned asynchronously—the response will show status `configuring` and the `id` will be `null` until provisioning completes.\n\n**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. Currently only IPv4 /32 addresses in routed mode are supported.\n"
  },
  {
    "name": "elastic-ips-get-elastic-ip",
    "description": "Retrieve an Elastic IP\n\nReturns a single Elastic IP by its ID.\n\n**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team.\n"
  },
  {
    "name": "elastic-ips-delete-elastic-ip",
    "description": "Release an Elastic IP\n\nReleases an Elastic IP, returning it to the available pool. The IP will transition to `releasing` status before being fully removed.\n\n**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. Only Elastic IPs with status `active` or `error` can be released.\n"
  },
  {
    "name": "elastic-ips-update-elastic-ip",
    "description": "Move an Elastic IP\n\nMoves an Elastic IP to a different server within the same project. The reassignment is performed asynchronously.\n\n**Note:** This feature requires the `elastic_ips` feature flag to be enabled for your team. The Elastic IP must be in `active` status and the target server must belong to the same project.\n"
  },
  {
    "name": "firewalls-assignments-create",
    "description": "Assign server to firewall\n\nAssigns a server to a firewall by its ID."
  },
  {
    "name": "ip-addresses-list",
    "description": "List IPs\n\nList all Management and Additional IP Addresses.\n • Management IPs are IPs that are used for the management IP of a device.\n   This is a public IP address that a device is born and dies with. It never changes during the lifecycle of the device.\n • Additional IPs are individual IPs that can be added to a device as an additional IP that can be used.\n"
  },
  {
    "name": "ip-addresses-get",
    "description": "Retrieve an IP\n\nRetrieve an IP Address"
  },
  {
    "name": "teams-members-get-team-members",
    "description": "List members"
  },
  {
    "name": "team-members-post-team-members",
    "description": "Create member"
  },
  {
    "name": "team-members-delete",
    "description": "Remove a member"
  },
  {
    "name": "operating-systems-list-plans",
    "description": "List operating systems\n\nLists all operating systems available to deploy and reinstall.\n"
  },
  {
    "name": "kubernetes-clusters-list-kubernetes-clusters",
    "description": "List Kubernetes Clusters\n\nLists all Kubernetes clusters for a project.\n"
  },
  {
    "name": "kubernetes-clusters-create-kubernetes-cluster",
    "description": "Create a Kubernetes Cluster\n\nCreates a new managed Kubernetes cluster. The cluster will be provisioned using Cluster API (CAPI) on the Management Cluster.\n\n**Note:** This feature requires the `managed_k8s_clusters_api` feature flag to be enabled for your team. Maximum of 1 cluster per project.\n\nCluster names must follow Kubernetes naming rules: lowercase alphanumeric characters or hyphens, must start and end with an alphanumeric character, and be at most 63 characters long.\n"
  },
  {
    "name": "kubernetes-clusters-get-kubernetes-cluster",
    "description": "Get a Kubernetes Cluster\n\nRetrieves detailed information about a Kubernetes cluster including its status, control plane, and worker node details.\n"
  },
  {
    "name": "kubernetes-clusters-delete-kubernetes-cluster",
    "description": "Delete a Kubernetes Cluster\n\nDeletes a Kubernetes cluster. This action is irreversible and will destroy all cluster resources.\n"
  },
  {
    "name": "kubernetes-clusters-get-kubernetes-cluster-fbb",
    "description": "Get Kubernetes Cluster Kubeconfig\n\nRetrieves the kubeconfig file for a Kubernetes cluster. The kubeconfig is only available once the cluster is fully provisioned.\n"
  },
  {
    "name": "plans-list",
    "description": "List plans\n\nLists all plans. Availability by region is included in `attributes.regions.locations.available[*]` node for a given plan.\n"
  },
  {
    "name": "plans-get",
    "description": "Retrieve plan"
  },
  {
    "name": "plans-get-bandwidth",
    "description": "List bandwidth plans\n\nLists all bandwidth plans."
  },
  {
    "name": "plans-update-bandwidth",
    "description": "Update bandwidth packages\n\nAllows to increase or decrease bandwidth packages. Only admins and owners can request.\n"
  },
  {
    "name": "plans-list-storage",
    "description": "List storage plans"
  },
  {
    "name": "plans-vm-list",
    "description": "List VM plans"
  },
  {
    "name": "projects-list",
    "description": "List projects\n\nReturns a list of all projects for the current team\n"
  },
  {
    "name": "projects-create",
    "description": "Create project"
  },
  {
    "name": "projects-update",
    "description": "Update project"
  },
  {
    "name": "projects-delete",
    "description": "Delete project"
  },
  {
    "name": "SSH-keys-list",
    "description": "List SSH Keys\n\nList all SSH Keys in the project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-get",
    "description": "Retrieve Project SSH Key\n\nList all SSH Keys in the project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-modify-project-key",
    "description": "Update Project SSH Key\n\nAllow you update SSH Key in a project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-remove-from-project",
    "description": "Delete Project SSH Key\n\nAllow you remove SSH Keys in a project. Remove a SSH Key from the project won't revoke the SSH Keys access for previously deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-list-all",
    "description": "List SSH Keys\n\nList all SSH Keys in the project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-create",
    "description": "Create SSH Key\n\nAllows you create SSH Keys. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-retrieve",
    "description": "Retrieve SSH Key\n\nList all SSH Keys in the project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-update",
    "description": "Update SSH Key\n\nAllows you update SSH Key in a project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "SSH-keys-delete",
    "description": "Delete SSH Key\n\nAllows you remove SSH Keys in a project. Remove a SSH Key from the project won't revoke the SSH Keys access for previously deploy and reinstall actions.\n"
  },
  {
    "name": "projects-ssh-keys-post-project-ssh-key",
    "description": "Create SSH Key\n\nAllow you create SSH Keys in a project. These keys can be used to access servers after deploy and reinstall actions.\n"
  },
  {
    "name": "user-data-get-project-users-data",
    "description": "List Project user data\n\nList all Users Data in the project. These scripts can be used to configure servers with user data.\n"
  },
  {
    "name": "user-data-get-project-user-data",
    "description": "Retrieve Project user data\n\nGet User Data in the project. These scripts can be used to configure servers with user data.\n"
  },
  {
    "name": "user-data-delete-project-user-data",
    "description": "Delete Project user data\n\nAllow you remove User Data in a project.\n"
  },
  {
    "name": "user-data-create",
    "description": "Create Project user data\n\nAllows you to create User Data in a project, which can be used to perform custom setup on your servers after deploy and reinstall.\n"
  },
  {
    "name": "user-data-update-for-project",
    "description": "Update Project user data\n\nAllow you update User Data in a project.\n"
  },
  {
    "name": "user-data-list",
    "description": "List user data\n\nList all Users Data in the project. These scripts can be used to configure servers with user data.\n"
  },
  {
    "name": "user-data-create-new",
    "description": "Create user data\n\nAllows you to create User Data in a team, which can be used to perform custom setup on your servers after deploy and reinstall.\n"
  },
  {
    "name": "user-data-retrieve",
    "description": "Retrieve user data\n\nGet User Data in the project. These scripts can be used to configure servers with user data.\n"
  },
  {
    "name": "user-data-update",
    "description": "Update user data\n\nAllow you update User Data in a team.\n"
  },
  {
    "name": "user-data-delete",
    "description": "Delete user data"
  },
  {
    "name": "regions-get",
    "description": "List regions\n\nLists all [available locations](https://latitude.sh/locations). For server availability by location, please see the [Plans API](/reference/get-plans).\n\n"
  },
  {
    "name": "regions-fetch",
    "description": "Retrieve region"
  },
  {
    "name": "roles-list",
    "description": "List roles\n\nReturns a list of all roles that can be assigned to users\n"
  },
  {
    "name": "roles-get",
    "description": "Retrieve role"
  },
  {
    "name": "servers-list",
    "description": "List servers\n\nReturns a list of all servers belonging to the team.\n"
  },
  {
    "name": "servers-create",
    "description": "Create server"
  },
  {
    "name": "servers-get",
    "description": "Retrieve server\n\nReturns a server that belongs to the team.\n"
  },
  {
    "name": "servers-update",
    "description": "Update server"
  },
  {
    "name": "servers-delete",
    "description": "Remove server"
  },
  {
    "name": "servers-get-deploy-config",
    "description": "Retrieve deploy config"
  },
  {
    "name": "servers-update-deploy-config",
    "description": "Update deploy config"
  },
  {
    "name": "servers-lock",
    "description": "Lock server\n\nLocks the server. A locked server cannot be deleted or modified and no actions can be performed on it."
  },
  {
    "name": "servers-unlock",
    "description": "Unlock server\n\nUnlocks the server. A locked server cannot be deleted or modified and no actions can be performed on it."
  },
  {
    "name": "servers-start-out-of-band-connection",
    "description": "Create out-of-band connection"
  },
  {
    "name": "servers-get-out-of-band",
    "description": "List out-of-band connections"
  },
  {
    "name": "servers-run-action",
    "description": "Run power action\n\nPerforms an action on a given server:\n- `power_on`\n- `power_off`\n- `reboot`\n"
  },
  {
    "name": "servers-create-ipmi-session",
    "description": "Create IPMI credentials\n\nGenerates IPMI credentials for a given server. Remote access creates a VPN connection to the internal network of your server so you can connect to its IPMI.\nYou will have to use a VPN client such as https://openvpn.net to connect. See `VPN Sessions` API to create a VPN connection.\n\nRelated guide: https://docs.latitude.sh/docs/ipmi\n"
  },
  {
    "name": "servers-start-rescue-mode",
    "description": "Put server in rescue mode\n\nStarts rescue mode on a given server."
  },
  {
    "name": "servers-exit-rescue-mode",
    "description": "Exits rescue mode\n\nExits rescue mode on a given server."
  },
  {
    "name": "servers-schedule-deletion",
    "description": "Schedule server deletion\n\nSchedules the server to be removed at the end of the billing cycle."
  },
  {
    "name": "servers-unschedule-deletion",
    "description": "Unschedule server deletion\n\nUnschedules the server removal at the end of the billing cycle."
  },
  {
    "name": "servers-reinstall",
    "description": "Run Server Reinstall"
  },
  {
    "name": "storage-create-filesystem",
    "description": "Create filesystem\n\nAllows you to add persistent storage to a project. These filesystems can be used to store data across your servers."
  },
  {
    "name": "storage-list-filesystems",
    "description": "List filesystems\n\nLists all the filesystems from a team."
  },
  {
    "name": "storage-delete-filesystem",
    "description": "Delete filesystem\n\nAllows you to remove persistent storage from a project."
  },
  {
    "name": "storage-update-filesystem",
    "description": "Update filesystem\n\nAllow you to upgrade the size of a filesystem."
  },
  {
    "name": "storage-get-storage-volumes",
    "description": "List volumes\n\nLists all the volumes from a team."
  },
  {
    "name": "storage-post-storage-volumes",
    "description": "Create volume\n\nAllows you to add persistent storage to a project. These volumes can be used to store data across your servers."
  },
  {
    "name": "storage-get-storage-volume",
    "description": "Retrieve volume\n\nShows details of a specific volume storage."
  },
  {
    "name": "storage-delete-storage-volumes",
    "description": "Delete volume\n\nAllows you to remove persistent storage from a project."
  },
  {
    "name": "storage-post-storage-volumes-mount",
    "description": "Mount volume\n\nMounts volume storage by adding the client to an allowed list"
  },
  {
    "name": "tags-list",
    "description": "List tags\n\nList all Tags in the team.\n"
  },
  {
    "name": "tags-create",
    "description": "Create tag\n\nCreate a Tag in the team.\n"
  },
  {
    "name": "tags-update",
    "description": "Update tag\n\nUpdate a Tag in the team.\n"
  },
  {
    "name": "tags-delete",
    "description": "Delete tag\n\nUpdate a Tag in the team.\n"
  },
  {
    "name": "teams-get",
    "description": "Retrieve team"
  },
  {
    "name": "teams-create",
    "description": "Create team"
  },
  {
    "name": "teams-update",
    "description": "Update team"
  },
  {
    "name": "traffic-get",
    "description": "Retrieve traffic"
  },
  {
    "name": "traffic-get-quota",
    "description": "Retrieve traffic quota"
  },
  {
    "name": "user-profile-get",
    "description": "Retrieve profile\n\nRetrieve the current user profile\n"
  },
  {
    "name": "user-profile-update",
    "description": "Update profile\n\nUpdate the current user profile\n"
  },
  {
    "name": "user-profile-list-teams",
    "description": "List user teams\n\nReturns a list of all teams the user belongs to\n"
  },
  {
    "name": "virtual-machines-create",
    "description": "Create VM\n\nCreates a new Virtual Machine.\n"
  },
  {
    "name": "virtual-machines-list",
    "description": "List VMs\n\nShow all Team's Virtual Machines.\n"
  },
  {
    "name": "virtual-machines-get",
    "description": "Retrieve VM\n\nShow a Virtual Machine.\n"
  },
  {
    "name": "virtual-machines-delete",
    "description": "Destroy VM\n\nDestroys a Virtual Machine.\n"
  },
  {
    "name": "virtual-machines-update-virtual-machine",
    "description": "Update VM\n\nUpdates a Virtual Machine's display name (hostname).\n"
  },
  {
    "name": "virtual-machines-create-virtual-machine-action",
    "description": "Run VM power action\n\nPerforms a power action on a given virtual machine:\n- `power_on` - Starts the virtual machine\n- `power_off` - Stops the virtual machine\n- `reboot` - Restarts the virtual machine\n"
  },
  {
    "name": "private-networks-list",
    "description": "List VLANs\n\nLists virtual networks assigned to a project\n"
  },
  {
    "name": "private-networks-create",
    "description": "Create VLAN\n\nCreates a new Virtual Network.\n"
  },
  {
    "name": "private-networks-update",
    "description": "Update VLAN\n\nUpdate a Virtual Network.\n"
  },
  {
    "name": "private-networks-get",
    "description": "Retrieve VLAN\n\nRetrieve a Virtual Network.\n"
  },
  {
    "name": "private-networks-list-assignments",
    "description": "List VLAN assignments\n\nReturns a list of all servers assigned to virtual networks.\n"
  },
  {
    "name": "private-networks-assign",
    "description": "Assign VLAN"
  },
  {
    "name": "private-networks-delete-assignment",
    "description": "Delete VLAN assignment\n\nAllow you to remove a Virtual Network assignment.\n"
  },
  {
    "name": "virtual-networks-delete",
    "description": "Delete VLAN\n\nDelete virtual network\n"
  },
  {
    "name": "vpn-sessions-list",
    "description": "List VPN sessions"
  },
  {
    "name": "vpn-sessions-create",
    "description": "Create VPN session\n\nCreates a new VPN Session.\n`NOTE:` The VPN credentials are only listed ONCE upon creation. They can however be refreshed or deleted.\n"
  },
  {
    "name": "vpn-sessions-refresh-password",
    "description": "Refresh VPN session\n\nRefreshing an existing VPN Session will create new credentials for that session\n"
  },
  {
    "name": "vpn-sessions-delete",
    "description": "Delete VPN session\n\nDeletes an existing VPN Session.\n"
  }
];
