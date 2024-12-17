# Losant Javascript REST API Client

![Build Status](https://github.com/Losant/losant-rest-js/actions/workflows/test.yml/badge.svg?branch=master) [![npm version](https://badge.fury.io/js/losant-rest.svg)](https://badge.fury.io/js/losant-rest)

The [Losant](https://www.losant.com) REST API client provides a simple way to use the comprehensive Losant API. You can authenticate either as a Losant device or with your user account, and have access to all the functionality of the Losant platform.

This client works both in browsers and node.js (v0.12 and newer), and supports both callbacks and promises. It uses [Axios](https://github.com/mzabriskie/axios) under the covers for the actual HTTP communication.

<br/>

## Installation

The latest stable version is available in NPM and can be installed using

```bash
npm install --save losant-rest
```

<br/>

## Example

Below is a high-level example of using the Losant JavaScript REST API client to authenticate against the Losant Platform and report state for a device.

```javascript
var api = require('losant-rest');
var mySensor = require('./my-analog-sensor');

var client = api.createClient();

client.auth.authenticateDevice({ credentials: {
  deviceId: 'my-device-id',
  key: 'my-app-access-key',
  secret: 'my-app-access-secret'
}}).then(function (response) {
  client.setOption('accessToken', response.token);
  var appId = response.applicationId;

  var state = { data: { temperature: mySensor.read() } };
  return client.device.sendState({
    deviceId: 'my-device-id',
    applicationId: appId,
    deviceState: state
  });
})
.then(function (response) {
  console.log(response); // { success: true }
})
.catch(function (error) {
  console.error(error);
});
```

<br/>

## API Documentation

```javascript
var client = api.createClient({ accessToken: undefined, url: 'https://api.losant.com' })
```

The losant-rest module exposes a single function named createClient which
returns a client instance. It takes the following options:

* accessToken  
  The access token to be used for authentication - by default there is no access token. An access token can be acquired through any of the [Auth](docs/auth.md) methods, or can be created for a particular application through [applicationApiTokens](docs/applicationApiTokens.md).

* url  
  The url of the Losant API - by default <https://api.losant.com>.

### Client

A client is a single api instance. By default, it is unauthenticated, but can be given an access token to perform authenticated requests.

#### Functions

* setOption(name, value)  
  The setOption function can be used to change any of the options currently set on the client, such as the access token.

* getOption(name)  
  The getOption function can be used to retrieve the current value of any of the options set on the client instance.

#### Resources

Each of the following is a property on the client instance, and wraps the actions for that particular resource. See each resource documentation file for more information.

* [application](docs/application.md)  
  Contains all of the actions that can be performed against a single [Application](https://docs.losant.com/applications/overview/), which include things like getting info on an application or modifying an application.

* [application_api_token](docs/applicationApiToken.md)  
  Contains all the actions that can be performed against a single [Api Token](https://docs.losant.com/applications/application-tokens/) belonging to an application - for instance, getting info on a single token or revoking a token.

* [application_api_tokens](docs/applicationApiTokens.md)  
  Contains all of the actions that can be performed against the collection of [Api Tokens](https://docs.losant.com/applications/application-tokens/) belonging to an Application - such as listing all tokens or creating a new token.

* [application_certificate](docs/applicationCertificate.md)  
  Contains all the actions that can be performed against a single Application Certificate belonging to an application - for instance, getting info on a single certificate or disabling a certificate.

* [application_certificate_authorities](docs/applicationCertificateAuthorities.md)  
  Contains all the actions that can be performed against a single Application Certificate Authority belonging to an application - for instance, getting info on an authority or disabling an authority.

* [application_certificate_authority](docs/applicationCertificateAuthority.md)  
  Contains all of the actions that can be performed against the collection of Application Certificate Authorities belonging to an Application - such as listing all authorities or creating a new authority.

* [application_certificates](docs/applicationCertificates.md)  
  Contains all of the actions that can be performed against the collection of Application Certificates belonging to an Application - such as listing all certificates or creating a new certificate.

* [application_cashboard](docs/applicationDashboard.md)  
  Contains all the actions that can be performed against a single [Application Dashboard](https://docs.losant.com/dashboards/overview/) - for instance, things like getting info on a dashboard or modifying a dashboard.

* [application_dashboards](docs/applicationDashboards.md)  
  Contains all of the actions that can be performed against the collection of [Application Dashboards](https://docs.losant.com/dashboards/overview/) belonging to an Application - such as listing all dashboards or creating a new dashboard.

* [application_key](docs/applicationKey.md)  
  Contains all the actions that can be performed against a single [Application Key](https://docs.losant.com/applications/access-keys/) - for instance, getting info on a single key or revoking a key.

* [application_keys](docs/applicationKeys.md)  
  Contains all of the actions that can be performed against the collection of [Application Keys](https://docs.losant.com/applications/access-keys/) belonging to an Application - such as listing all keys or creating a new key.

* [applications](docs/applications.md)  
  Contains all of the actions that can be performed against the set of [Applications](https://docs.losant.com/applications/overview/) that the currently authenticated user has access to - such as listing the applications or creating a new application.

* [application_template](docs/applicationTemplate.md)  
  Contains all the actions that can be performed against a single [Application Template](https://docs.losant.com/templates/overview/) - for instance, getting info on a single template.

* [application_templates](docs/applicationTemplates.md)  
  Contains all of the actions that can be performed against the collection of [Application Templates](https://docs.losant.com/templates/overview/) - such as listing all templates or categories.

* [audit_log](docs/auditLog.md)  
  Contains all of the actions that can be performed against a single [Audit Log](https://docs.losant.com/organizations/audit-logs/) that belongs to an organization - such as viewing a log.

* [audit_logs](docs/auditLogs.md)  
  Contains all of the actions that can be performed against the set of [Audit Logs](https://docs.losant.com/organizations/audit-logs/) that belong to an organization - such as listing the logs.

* [auth](docs/auth.md)  
  Contains the actions used for authenticating against the api, either as a user or as a device. The result of authentication calls contain the auth_token needed for authenticated calls - see the examples for more details.

* [credential](docs/credential.md)  
  Contains all the actions that can be performed against a single [Service Credential](https://docs.losant.com/applications/credentials/), such as updating a credential or removing a credential.

* [credentials](docs/credentials.md)  
  Contains all of the actions that can be performed against the set of [Service Credentials](https://docs.losant.com/applications/credentials/) that the currently authenticated user has access to - such as listing the credentials or creating a new credential.

* [dashboard](docs/dashboard.md)  
  Contains all of the actions that can be performed against a single [Dashboard](https://docs.losant.com/dashboards/overview/), which include things like getting info on a dashboard or modifying a dashboard.

* [dashboards](docs/dashboards.md)  
  Contains all of the actions that can be performed against the set of [Dashboards](https://docs.losant.com/dashboards/overview/) that the currently authenticated user has access to - such as listing the dashboards or creating a new dashboard.

* [data](docs/data.md)  
  Contains the actions for querying against historical Device data across an Application.

* [data_table](docs/dataTable.md)  
  Contains all the actions that can be performed against a single [Data Table](https://docs.losant.com/data-tables/overview/) - for instance, getting info on a single data table or modifying the columns of a data table.

* [data_table_row](docs/dataTableRow.md)  
  Contains all the actions that can be performed against a single row inside of a [Data Table](https://docs.losant.com/data-tables/overview/) - for instance, getting the contents of a row, or modifying a row.

* [data_table_rows](docs/dataTableRows.md)  
  Contains all of the actions that can be performed against the collection of rows that make up a [Data Table](https://docs.losant.com/data-tables/overview/) - such as querying for rows in that table, or adding a new row to the table.

* [data_tables](docs/dataTables.md)  
  Contains all of the actions that can be performed against the collection of [Data Tables](https://docs.losant.com/data-tables/overview/) belonging to an Application - such as listing all data tables or creating a new data table.

* [device](docs/device.md)  
  Contains all the actions that can be performed against a single [Device](https://docs.losant.com/devices/overview/) - for instance, getting info on a single device or reporting the current state of a device.

* [device_recipe](docs/deviceRecipe.md)  
  Contains all the actions that can be performed against a single [Device Recipe](https://docs.losant.com/devices/device-recipes/), which include things like removing a device recipe or creating a device from a device recipe.

* [device_recipes](docs/deviceRecipes.md)  
  Contains all the actions that can be performed against the collection of [Device Recipes](https://docs.losant.com/devices/device-recipes/) belonging to an Application - such as listing recipes or creating a new recipe.

* [devices](docs/devices.md)  
  Contains all of the actions that can be performed against the collection of [Devices](https://docs.losant.com/devices/overview/) belonging to an Application - such as listing all devices or sending a command to a set of devices.

* [edge_deployment](docs/edgeDeployment.md)  
  Contains all the actions that can be performed against a single [Edge Deployment](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as retrieving information on a single deployment.

* [edge_deployments](docs/edgeDeployments.md)  
  Contains all the actions that can be performed against the collection of [Edge Deployments](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as listing deployments or creating a new deployment.

* [embedded_deployment](docs/embeddedDeployment.md)  
  Contains all the actions that can be performed against a single [Embedded Deployment](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as retrieving information on a single deployment.

* [embedded_deployments](docs/embeddedDeployments.md)  
  Contains all the actions that can be performed against the collection of [Embedded Deployments](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as listing deployments or creating a new deployment.

* [event](docs/event.md)  
  Contains all the actions that can be performed against a single [Event](https://docs.losant.com/events/overview/), such as commenting on or changing the state of an event.

* [events](docs/events.md)  
  Contains all the actions that can be performed against the collection of [Events](https://docs.losant.com/events/overview/) belonging to an Application - such as listing open events or creating a new event.

* [experience](docs/experience.md)  
  Contains all the actions that can be performed against an application [Experience](https://docs.losant.com/experiences/), such as bootstrapping or clearing resources.

* [experience_domain](docs/experienceDomain.md)  
  Contains all the actions that can be performed against a single [Experience Domain](https://docs.losant.com/experiences/domains/), such as updating SSL certificate information.

* [experience_domains](docs/experienceDomains.md)  
  Contains all the actions that can be performed against the collection of [Experience Domains](https://docs.losant.com/experiences/domains/) belonging to an Application - such as listing domains or creating a new domain.

* [experience_endpoint](docs/experienceEndpoint.md)  
  Contains all the actions that can be performed against a single [Experience Endpoint](https://docs.losant.com/experiences/endpoints/), such as updating route information.

* [experience_endpoints](docs/experienceEndpoints.md)  
  Contains all the actions that can be performed against the collection of [Experience Endpoints](https://docs.losant.com/experiences/endpoints/) belonging to an Application - such as listing endpoints or creating a new endpoint.

* [experience_group](docs/experienceGroup.md)  
  Contains all the actions that can be performed against a single [Experience Group](https://docs.losant.com/experiences/groups/), such as updating member information.

* [experience_groups](docs/experienceGroups.md)  
  Contains all the actions that can be performed against the collection of [Experience Groups](https://docs.losant.com/experiences/groups/) belonging to an Application - such as listing groups or creating a new group.

* [experience_slug](docs/experienceSlug.md)  
  Contains all the actions that can be performed against a single [Experience Slug](https://docs.losant.com/experiences/domains/), such as changing the associated version.

* [experience_slugs](docs/experienceSlugs.md)  
  Contains all the actions that can be performed against the collection of [Experience Slugs](https://docs.losant.com/experiences/domains/) belonging to an Application - such as listing slugs or creating a new slug.

* [experience_user](docs/experienceUser.md)  
  Contains all the actions that can be performed against a single [Experience User](https://docs.losant.com/experiences/users/), such as changing their email or password.

* [experience_users](docs/experienceUsers.md)  
  Contains all the actions that can be performed against the collection of [Experience Users](https://docs.losant.com/experiences/users/) belonging to an Application - such as listing users or creating a new user.

* [experience_version](docs/experienceVersion.md)  
  Contains all the actions that can be performed against a single [Experience Version](https://docs.losant.com/experiences/), such as modifying the description.

* [experience_versions](docs/experienceVersions.md)  
  Contains all the actions that can be performed against the collection of [Experience Versions](https://docs.losant.com/experiences/) belonging to an Application - such as listing versions or creating a new versions.

* [experience_view](docs/experienceView.md)  
  Contains all the actions that can be performed against a single [Experience View](https://docs.losant.com/experiences/views/), such as modifying the body template.

* [experience_views](docs/experienceViews.md)  
  Contains all the actions that can be performed against the collection of [Experience Views](https://docs.losant.com/experiences/views/) belonging to an Application - such as listing views or creating a new view.

* [file](docs/file.md)  
  Contains all the actions that can be performed against a single [File](https://docs.losant.com/applications/files/), such as moving, renaming, or deleting.

* [files](docs/files.md)  
  Contains all the actions that can be performed against the collection of [Files](https://docs.losant.com/applications/files/) belonging to an Application - such as listing files or uploading a new file.

* [flow](docs/flow.md)  
  Contains all the actions that can be performed against a single [Workflow](https://docs.losant.com/workflows/overview/), such as enabling or disabling a workflow, or triggering a virtual button in the workflow.

* [flows](docs/flows.md)  
  Contains all the actions that can be performed against the collection of [Workflows](https://docs.losant.com/workflows/overview/) belonging to an Application - such as listing the workflows or creating a new workflow.

* [flow_version](docs/flowVersion.md)  
  Contains all the actions that can be performed against a single [Workflow Version](https://docs.losant.com/workflows/versioning/), such as enabling or disabling a workflow version, or updating the version notes.

* [flow_versions](docs/flowVersions.md)  
  Contains all the actions that can be performed against the collection of [Workflow Versions](https://docs.losant.com/workflows/versioning/) belonging to a Workflow - such as listing the versions or creating a new version.

* [instance](docs/instance.md)  
  Contains all the actions that can be performed against a single [Instance](https://docs.losant.com/instance-manager/overview/), which include things such as updating report configuration or defaults.

* [instance_api_token](docs/instanceApiToken.md)  
  Contains all the actions that can be performed against a single [Instance API Token](https://docs.losant.com/instance-manager/instance-tokens/) - for instance, getting info on a single token or revoking a token.

* [instance_api_tokens](docs/instanceApiTokens.md)  
  Contains all the actions that can be performed against the collection of [Instance API Tokens](https://docs.losant.com/instance-manager/instance-tokens/) belonging to an Instance - such as listing tokens or creating a new token.

* [instance_audit_log](docs/instanceAuditLog.md)  
  Contains all of the actions that can be performed against a single [Audit Log](https://docs.losant.com/instance-manager/audit-logs/) belonging to an Instance - such as viewing a log.

* [instance_audit_logs](docs/instanceAuditLogs.md)  
  Contains all of the actions that can be performed against the set of [Audit Logs](https://docs.losant.com/instance-manager/audit-logs/) belonging to an Instance - such as listing the logs.

* [instance_custom_node](docs/instanceCustomNode.md)  
  Contains all the actions that can be performed against a single [Instance Custom Node](https://docs.losant.com/instance-manager/instance-custom-nodes/) - for instance, getting info on a single custom node or modifying a custom node.

* [instance_custom_nodes](docs/instanceCustomNodes.md)  
  Contains all the actions that can be performed against the collection of [Instance Custom Nodes](https://docs.losant.com/instance-manager/instance-custom-nodes/) belonging to an Instance - such as listing custom nodes or creating a new custom node.

* [instance_member](docs/instanceMember.md)  
  Contains all the actions that can be performed against a single [Instance Member](https://docs.losant.com/instance-manager/overview/#managing-membership), which include things such as updating the role or removing the member.

* [instance_members](docs/instanceMembers.md)  
  Contains all the actions that can be performed against the collection of [Instance Members](https://docs.losant.com/instance-manager/overview/#managing-membership) belonging to an Instance - such as listing members or adding a new member.

* [instance_notification_rule](docs/instanceNotificationRule.md)  
  Contains all the actions that can be performed against a single [Instance Notification Rule](https://docs.losant.com/instance-manager/overview/#notifications), which include things such as updating the threshold or the targets.

* [instance_notification_rules](docs/instanceNotificationRules.md)  
  Contains all the actions that can be performed against the collection of [Instance Notification Rules](https://docs.losant.com/instance-manager/overview/#notifications) belonging to an Instance - such as listing rules or adding a new rule.

* [instance_org_invite](docs/instanceOrgInvite.md)  
  Contains all the actions that can be performed against a single [Instance Organization Invite](https://docs.losant.com/instance-manager/managing-organizations/#renewing-and-revoking-invitations), which include things such as revoking the invite.

* [instance_org_invites](docs/instanceOrgInvites.md)  
  Contains all the actions that can be performed against the collection of [Instance Organization Invites](https://docs.losant.com/instance-manager/managing-organizations/#renewing-and-revoking-invitations) belonging to an Organization in an Instance - such as listing invites or sending a new invitation.

* [instance_org_member](docs/instanceOrgMember.md)  
  Contains all the actions that can be performed against a single [Instance Organization Member](https://docs.losant.com/instance-manager/managing-organizations/#organization-membership), which include things such as changing the role or removing the membership.

* [instance_org_members](docs/instanceOrgMembers.md)  
  Contains all the actions that can be performed against the collection of [Instance Organization Members](https://docs.losant.com/instance-manager/managing-organizations/#organization-membership) belonging to an Organization in an Instance - such as listing members or adding new members.

* [instance_org](docs/instanceOrganization.md)  
  Contains all the actions that can be performed against a single [Instance Organization](https://docs.losant.com/instance-manager/managing-organizations/), which include things such as modifying limits.

* [instance_orgs](docs/instanceOrgs.md)  
  Contains all the actions that can be performed against the collection of [Instance Organizations](https://docs.losant.com/instance-manager/managing-organizations/) belonging to an Instance - such as listing organizations or adding a new organization.

* [instance_sandbox](docs/instanceSandbox.md)  
  Contains all the actions that can be performed against a single [Instance Sandbox](https://docs.losant.com/instance-manager/managing-sandbox-users/) - for instance, getting info on a single sandbox or deleting the sandbox.

* [instance_sandboxes](docs/instanceSandboxes.md)  
  Contains all the actions that can be performed against the collection of [Instance Sandboxes](https://docs.losant.com/instance-manager/managing-sandbox-users/) belonging to an Instance - such as listing sandboxes.

* [instances](docs/instances.md)  
  Contains all the actions that can be performed against the collection of [Instances](https://docs.losant.com/instance-manager/overview/) that the currently authenticated user has access to - such as listing instances.

* [integration](docs/integration.md)  
  Contains all the actions that can be performed against a single [Integration](https://docs.losant.com/applications/integrations/), which include things like removing an integration or updating integration configuration.

* [integrations](docs/integrations.md)  
  Contains all the actions that can be performed against the collection of [Integrations](https://docs.losant.com/applications/integrations/) belonging to an Application - such as listing integrations or creating a new integration.

* [me](docs/me.md)  
  Contains the actions for operating against the currently authenticated [User](https://docs.losant.com/user-accounts/overview/) such as changing the password or linking against external services.

* [notebook](docs/notebook.md)  
  Contains all the actions that can be performed against a single [Notebook](https://docs.losant.com/notebooks/overview/), which include things like removing a notebook or executing a notebook.

* [notebooks](docs/notebooks.md)  
  Contains all the actions that can be performed against the collection of [Notebooks](https://docs.losant.com/notebooks/overview/) belonging to an Application - such as listing notebooks or creating a new notebook.

* [org_invites](docs/orgInvites.md)  
  Contains all of the actions that can be performed against a invitation to an organization, such as accepting the invitation.

* [org](docs/org.md)  
  Contains all the actions that can be performed against a single [Organization](https://docs.losant.com/organizations/overview/), things like inviting a user to the organization, or modifying the organization.

* [orgs](docs/orgs.md)  
  Contains all of the actions that can be performed against the set of [Organizations](https://docs.losant.com/organizations/overview/) that the currently authenticated user has access to - such as listing the organizations or creating a new organization.

* [resource_job](docs/resourceJob.md)  
  Contains all the actions that can be performed against a single [Resource Job](https://docs.losant.com/applications/resource-jobs/), such as executing the job.

* [resource_jobs](docs/resourceJobs.md)  
  Contains all the actions that can be performed against the collection of [Resource Jobs](https://docs.losant.com/applications/resource-jobs/) belonging to an Application - such as listing resource jobs or creating a new resource job.

* [user_api_token](docs/userApiToken.md)  
  Contains all the actions that can be performed against a single [User API Token](https://docs.losant.com/user-accounts/user-tokens/), such as revoking the token.

* [user_api_tokens](docs/userApiTokens.md)  
  Contains all the actions that can be performed against the collection of [User API Tokens](https://docs.losant.com/user-accounts/user-tokens/) belonging to the currently authenticated user - such as listing tokens or creating a new token.

* [webhook](docs/webhook.md)  
  Contains all the actions that can be performed against a single [Webhook](https://docs.losant.com/applications/webhooks/), for instance modifying the verification settings or removing the webhook.

* [webhooks](docs/webhooks.md)  
  Contains all the actions that can be performed against the collection of [Webhooks](https://docs.losant.com/applications/webhooks/) belonging to an Application - such as listing the webhooks or creating a new webhook.

<br/>

*****

Copyright (c) 2024 Losant IoT, Inc

<https://www.losant.com>
