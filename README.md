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

* [applicationApiToken](docs/applicationApiToken.md)  
  Contains all the actions that can be performed against a single [Api Token](https://docs.losant.com/applications/application-tokens/) belonging to an application - for instance, getting info on a single token or revoking a token.

* [applicationApiTokens](docs/applicationApiTokens.md)  
  Contains all of the actions that can be performed against the collection of [Api Tokens](https://docs.losant.com/applications/application-tokens/) belonging to an Application - such as listing all tokens or creating a new token.

* [applicationCertificate](docs/applicationCertificate.md)  
  Contains all the actions that can be performed against a single Application Certificate belonging to an application - for instance, getting info on a single certificate or disabling a certificate.

* [applicationCertificateAuthorities](docs/applicationCertificateAuthorities.md)  
  Contains all the actions that can be performed against a single Application Certificate Authority belonging to an application - for instance, getting info on an authority or disabling an authority.

* [applicationCertificateAuthority](docs/applicationCertificateAuthority.md)  
  Contains all of the actions that can be performed against the collection of Application Certificate Authorities belonging to an Application - such as listing all authorities or creating a new authority.

* [applicationCertificates](docs/applicationCertificates.md)  
  Contains all of the actions that can be performed against the collection of Application Certificates belonging to an Application - such as listing all certificates or creating a new certificate.

* [applicationDashboard](docs/applicationDashboard.md)  
  Contains all the actions that can be performed against a single [Application Dashboard](https://docs.losant.com/dashboards/overview/) - for instance, things like getting info on a dashboard or modifying a dashboard.

* [applicationDashboards](docs/applicationDashboards.md)  
  Contains all of the actions that can be performed against the collection of [Application Dashboards](https://docs.losant.com/dashboards/overview/) belonging to an Application - such as listing all dashboards or creating a new dashboard.

* [applicationKey](docs/applicationKey.md)  
  Contains all the actions that can be performed against a single [Application Key](https://docs.losant.com/applications/access-keys/) - for instance, getting info on a single key or revoking a key.

* [applicationKeys](docs/applicationKeys.md)  
  Contains all of the actions that can be performed against the collection of [Application Keys](https://docs.losant.com/applications/access-keys/) belonging to an Application - such as listing all keys or creating a new key.

* [applications](docs/applications.md)  
  Contains all of the actions that can be performed against the set of [Applications](https://docs.losant.com/applications/overview/) that the currently authenticated user has access to - such as listing the applications or creating a new application.

* [applicationTemplate](docs/applicationTemplate.md)  
  Contains all the actions that can be performed against a single [Application Template](https://docs.losant.com/templates/overview/) - for instance, getting info on a single template.

* [applicationTemplates](docs/applicationTemplates.md)  
  Contains all of the actions that can be performed against the collection of [Application Templates](https://docs.losant.com/templates/overview/) - such as listing all templates or categories.

* [auditLog](docs/auditLog.md)  
  Contains all of the actions that can be performed against a single [Audit Log](https://docs.losant.com/organizations/audit-logs/) that belongs to an organization - such as viewing a log.

* [auditLogs](docs/auditLogs.md)  
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

* [dataTable](docs/dataTable.md)  
  Contains all the actions that can be performed against a single [Data Table](https://docs.losant.com/data-tables/overview/) - for instance, getting info on a single data table or modifying the columns of a data table.

* [dataTableRow](docs/dataTableRow.md)  
  Contains all the actions that can be performed against a single row inside of a [Data Table](https://docs.losant.com/data-tables/overview/) - for instance, getting the contents of a row, or modifying a row.

* [dataTableRows](docs/dataTableRows.md)  
  Contains all of the actions that can be performed against the collection of rows that make up a [Data Table](https://docs.losant.com/data-tables/overview/) - such as querying for rows in that table, or adding a new row to the table.

* [dataTables](docs/dataTables.md)  
  Contains all of the actions that can be performed against the collection of [Data Tables](https://docs.losant.com/data-tables/overview/) belonging to an Application - such as listing all data tables or creating a new data table.

* [device](docs/device.md)  
  Contains all the actions that can be performed against a single [Device](https://docs.losant.com/devices/overview/) - for instance, getting info on a single device or reporting the current state of a device.

* [deviceRecipe](docs/deviceRecipe.md)  
  Contains all the actions that can be performed against a single [Device Recipe](https://docs.losant.com/devices/device-recipes/), which include things like removing a device recipe or creating a device from a device recipe.

* [deviceRecipes](docs/deviceRecipes.md)  
  Contains all the actions that can be performed against the collection of [Device Recipes](https://docs.losant.com/devices/device-recipes/) belonging to an Application - such as listing recipes or creating a new recipe.

* [devices](docs/devices.md)  
  Contains all of the actions that can be performed against the collection of [Devices](https://docs.losant.com/devices/overview/) belonging to an Application - such as listing all devices or sending a command to a set of devices.

* [edgeDeployment](docs/edgeDeployment.md)  
  Contains all the actions that can be performed against a single [Edge Deployment](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as retrieving information on a single deployment.

* [edgeDeployments](docs/edgeDeployments.md)  
  Contains all the actions that can be performed against the collection of [Edge Deployments](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as listing deployments or creating a new deployment.

* [embeddedDeployment](docs/embeddedDeployment.md)  
  Contains all the actions that can be performed against a single [Embedded Deployment](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as retrieving information on a single deployment.

* [embeddedDeployments](docs/embeddedDeployments.md)  
  Contains all the actions that can be performed against the collection of [Embedded Deployments](https://docs.losant.com/edge-compute/deployments/) belonging to an Application - such as listing deployments or creating a new deployment.

* [event](docs/event.md)  
  Contains all the actions that can be performed against a single [Event](https://docs.losant.com/events/overview/), such as commenting on or changing the state of an event.

* [events](docs/events.md)  
  Contains all the actions that can be performed against the collection of [Events](https://docs.losant.com/events/overview/) belonging to an Application - such as listing open events or creating a new event.

* [experience](docs/experience.md)  
  Contains all the actions that can be performed against an application [Experience](https://docs.losant.com/experiences/), such as bootstrapping or clearing resources.

* [experienceDomain](docs/experienceDomain.md)  
  Contains all the actions that can be performed against a single [Experience Domain](https://docs.losant.com/experiences/domains/), such as updating SSL certificate information.

* [experienceDomains](docs/experienceDomains.md)  
  Contains all the actions that can be performed against the collection of [Experience Domains](https://docs.losant.com/experiences/domains/) belonging to an Application - such as listing domains or creating a new domain.

* [experienceEndpoint](docs/experienceEndpoint.md)  
  Contains all the actions that can be performed against a single [Experience Endpoint](https://docs.losant.com/experiences/endpoints/), such as updating route information.

* [experienceEndpoints](docs/experienceEndpoints.md)  
  Contains all the actions that can be performed against the collection of [Experience Endpoints](https://docs.losant.com/experiences/endpoints/) belonging to an Application - such as listing endpoints or creating a new endpoint.

* [experienceGroup](docs/experienceGroup.md)  
  Contains all the actions that can be performed against a single [Experience Group](https://docs.losant.com/experiences/groups/), such as updating member information.

* [experienceGroups](docs/experienceGroups.md)  
  Contains all the actions that can be performed against the collection of [Experience Groups](https://docs.losant.com/experiences/groups/) belonging to an Application - such as listing groups or creating a new group.

* [experienceSlug](docs/experienceSlug.md)  
  Contains all the actions that can be performed against a single [Experience Slug](https://docs.losant.com/experiences/domains/), such as changing the associated version.

* [experienceSlugs](docs/experienceSlugs.md)  
  Contains all the actions that can be performed against the collection of [Experience Slugs](https://docs.losant.com/experiences/domains/) belonging to an Application - such as listing slugs or creating a new slug.

* [experienceUser](docs/experienceUser.md)  
  Contains all the actions that can be performed against a single [Experience User](https://docs.losant.com/experiences/users/), such as changing their email or password.

* [experienceUsers](docs/experienceUsers.md)  
  Contains all the actions that can be performed against the collection of [Experience Users](https://docs.losant.com/experiences/users/) belonging to an Application - such as listing users or creating a new user.

* [experienceVersion](docs/experienceVersion.md)  
  Contains all the actions that can be performed against a single [Experience Version](https://docs.losant.com/experiences/), such as modifying the description.

* [experienceVersions](docs/experienceVersions.md)  
  Contains all the actions that can be performed against the collection of [Experience Versions](https://docs.losant.com/experiences/) belonging to an Application - such as listing versions or creating a new versions.

* [experienceView](docs/experienceView.md)  
  Contains all the actions that can be performed against a single [Experience View](https://docs.losant.com/experiences/views/), such as modifying the body template.

* [experienceViews](docs/experienceViews.md)  
  Contains all the actions that can be performed against the collection of [Experience Views](https://docs.losant.com/experiences/views/) belonging to an Application - such as listing views or creating a new view.

* [file](docs/file.md)  
  Contains all the actions that can be performed against a single [File](https://docs.losant.com/applications/files/), such as moving, renaming, or deleting.

* [files](docs/files.md)  
  Contains all the actions that can be performed against the collection of [Files](https://docs.losant.com/applications/files/) belonging to an Application - such as listing files or uploading a new file.

* [flow](docs/flow.md)  
  Contains all the actions that can be performed against a single [Workflow](https://docs.losant.com/workflows/overview/), such as enabling or disabling a workflow, or triggering a virtual button in the workflow.

* [flows](docs/flows.md)  
  Contains all the actions that can be performed against the collection of [Workflows](https://docs.losant.com/workflows/overview/) belonging to an Application - such as listing the workflows or creating a new workflow.

* [flowVersion](docs/flowVersion.md)  
  Contains all the actions that can be performed against a single [Workflow Version](https://docs.losant.com/workflows/versioning/), such as enabling or disabling a workflow version, or updating the version notes.

* [flowVersions](docs/flowVersions.md)  
  Contains all the actions that can be performed against the collection of [Workflow Versions](https://docs.losant.com/workflows/versioning/) belonging to a Workflow - such as listing the versions or creating a new version.

* [instance](docs/instance.md)  
  Contains all the actions that can be performed against a single [Instance](https://docs.losant.com/instance-manager/overview/), which include things such as updating report configuration or defaults.

* [instanceApiToken](docs/instanceApiToken.md)  
  Contains all the actions that can be performed against a single [Instance API Token](https://docs.losant.com/instance-manager/instance-tokens/) - for instance, getting info on a single token or revoking a token.

* [instanceApiTokens](docs/instanceApiTokens.md)  
  Contains all the actions that can be performed against the collection of [Instance API Tokens](https://docs.losant.com/instance-manager/instance-tokens/) belonging to an Instance - such as listing tokens or creating a new token.

* [instanceAuditLog](docs/instanceAuditLog.md)  
  Contains all of the actions that can be performed against a single [Audit Log](https://docs.losant.com/instance-manager/audit-logs/) belonging to an Instance - such as viewing a log.

* [instanceAuditLogs](docs/instanceAuditLogs.md)  
  Contains all of the actions that can be performed against the set of [Audit Logs](https://docs.losant.com/instance-manager/audit-logs/) belonging to an Instance - such as listing the logs.

* [instanceCustomNode](docs/instanceCustomNode.md)  
  Contains all the actions that can be performed against a single [Instance Custom Node](https://docs.losant.com/instance-manager/instance-custom-nodes/) - for instance, getting info on a single custom node or modifying a custom node.

* [instanceCustomNodes](docs/instanceCustomNodes.md)  
  Contains all the actions that can be performed against the collection of [Instance Custom Nodes](https://docs.losant.com/instance-manager/instance-custom-nodes/) belonging to an Instance - such as listing custom nodes or creating a new custom node.

* [instanceMember](docs/instanceMember.md)  
  Contains all the actions that can be performed against a single [Instance Member](https://docs.losant.com/instance-manager/overview/#managing-membership), which include things such as updating the role or removing the member.

* [instanceMembers](docs/instanceMembers.md)  
  Contains all the actions that can be performed against the collection of [Instance Members](https://docs.losant.com/instance-manager/overview/#managing-membership) belonging to an Instance - such as listing members or adding a new member.

* [instanceNotificationRule](docs/instanceNotificationRule.md)  
  Contains all the actions that can be performed against a single [Instance Notification Rule](https://docs.losant.com/instance-manager/overview/#notifications), which include things such as updating the threshold or the targets.

* [instanceNotificationRules](docs/instanceNotificationRules.md)  
  Contains all the actions that can be performed against the collection of [Instance Notification Rules](https://docs.losant.com/instance-manager/overview/#notifications) belonging to an Instance - such as listing rules or adding a new rule.

* [instanceOrg](docs/instanceOrganization.md)  
  Contains all the actions that can be performed against a single [Instance Organization](https://docs.losant.com/instance-manager/managing-organizations/), which include things such as modifying limits.

* [instanceOrgInvite](docs/instanceOrgInvite.md)  
  Contains all the actions that can be performed against a single [Instance Organization Invite](https://docs.losant.com/instance-manager/managing-organizations/#renewing-and-revoking-invitations), which include things such as revoking the invite.

* [instanceOrgInvites](docs/instanceOrgInvites.md)  
  Contains all the actions that can be performed against the collection of [Instance Organization Invites](https://docs.losant.com/instance-manager/managing-organizations/#renewing-and-revoking-invitations) belonging to an Organization in an Instance - such as listing invites or sending a new invitation.

* [instanceOrgMember](docs/instanceOrgMember.md)  
  Contains all the actions that can be performed against a single [Instance Organization Member](https://docs.losant.com/instance-manager/managing-organizations/#organization-membership), which include things such as changing the role or removing the membership.

* [instanceOrgMembers](docs/instanceOrgMembers.md)  
  Contains all the actions that can be performed against the collection of [Instance Organization Members](https://docs.losant.com/instance-manager/managing-organizations/#organization-membership) belonging to an Organization in an Instance - such as listing members or adding new members.

* [instanceOrgs](docs/instanceOrgs.md)  
  Contains all the actions that can be performed against the collection of [Instance Organizations](https://docs.losant.com/instance-manager/managing-organizations/) belonging to an Instance - such as listing organizations or adding a new organization.

* [instances](docs/instances.md)  
  Contains all the actions that can be performed against the collection of [Instances](https://docs.losant.com/instance-manager/overview/) that the currently authenticated user has access to - such as listing instances.

* [instanceSandbox](docs/instanceSandbox.md)  
  Contains all the actions that can be performed against a single [Instance Sandbox](https://docs.losant.com/instance-manager/managing-sandbox-users/) - for instance, getting info on a single sandbox or deleting the sandbox.

* [instanceSandboxes](docs/instanceSandboxes.md)  
  Contains all the actions that can be performed against the collection of [Instance Sandboxes](https://docs.losant.com/instance-manager/managing-sandbox-users/) belonging to an Instance - such as listing sandboxes.

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

* [org](docs/org.md)  
  Contains all the actions that can be performed against a single [Organization](https://docs.losant.com/organizations/overview/), things like inviting a user to the organization, or modifying the organization.

* [orgInvites](docs/orgInvites.md)  
  Contains all of the actions that can be performed against a invitation to an organization, such as accepting the invitation.

* [orgs](docs/orgs.md)  
  Contains all of the actions that can be performed against the set of [Organizations](https://docs.losant.com/organizations/overview/) that the currently authenticated user has access to - such as listing the organizations or creating a new organization.

* [resourceJob](docs/resourceJob.md)  
  Contains all the actions that can be performed against a single [Resource Job](https://docs.losant.com/applications/resource-jobs/), such as executing the job.

* [resourceJobs](docs/resourceJobs.md)  
  Contains all the actions that can be performed against the collection of [Resource Jobs](https://docs.losant.com/applications/resource-jobs/) belonging to an Application - such as listing resource jobs or creating a new resource job.

* [userApiToken](docs/userApiToken.md)  
  Contains all the actions that can be performed against a single [User API Token](https://docs.losant.com/user-accounts/user-tokens/), such as revoking the token.

* [userApiTokens](docs/userApiTokens.md)  
  Contains all the actions that can be performed against the collection of [User API Tokens](https://docs.losant.com/user-accounts/user-tokens/) belonging to the currently authenticated user - such as listing tokens or creating a new token.

* [webhook](docs/webhook.md)  
  Contains all the actions that can be performed against a single [Webhook](https://docs.losant.com/applications/webhooks/), for instance modifying the verification settings or removing the webhook.

* [webhooks](docs/webhooks.md)  
  Contains all the actions that can be performed against the collection of [Webhooks](https://docs.losant.com/applications/webhooks/) belonging to an Application - such as listing the webhooks or creating a new webhook.

<br/>

*****

Copyright (c) 2024 Losant IoT, Inc

<https://www.losant.com>
