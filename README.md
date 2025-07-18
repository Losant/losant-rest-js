# Losant Javascript REST API Client

![Build Status](https://github.com/Losant/losant-rest-js/actions/workflows/test.yml/badge.svg?branch=master) [![npm version](https://badge.fury.io/js/losant-rest.svg)](https://badge.fury.io/js/losant-rest)

The [Losant](https://www.losant.com) REST API client provides a simple way to use the comprehensive Losant API. You can authenticate either as a Losant device or with your user account, and have access to all the functionality of the Losant platform.

This client works both in browsers and node.js (v20 and newer), and supports both callbacks and promises. It uses [Axios](https://github.com/mzabriskie/axios) under the covers for the actual HTTP communication.

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
import api from 'losant-rest';
import mySensor from './my-analog-sensor';

const client = api.createClient();
const {
  applicationId, token
} = await client.auth.authenticateDevice({ credentials: {
  deviceId: 'my-device-id',
  key: 'my-app-access-key',
  secret: 'my-app-access-secret'
}});

client.setOption('accessToken', token);
const sendSensorDataToLosant = async () => {
  const state = { data: { temperature: mySensor.read() }, time: Date.now() };
  return client.device.sendState({
    deviceId: 'my-device-id',
    applicationId: appId,
    deviceState: state
  });
};

setInterval(async () => {
  await sendSensorDataToLosant();
}, 60000);
```

OR

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

## API Documentation

```javascript
const client = api.createClient({ accessToken: undefined, url: 'https://api.losant.com' });
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

## API Reference
- [Application](docs/application.md)
- [Application Api Token](docs/applicationApiToken.md)
- [Application Api Tokens](docs/applicationApiTokens.md)
- [Application Certificate](docs/applicationCertificate.md)
- [Application Certificate Authorities](docs/applicationCertificateAuthorities.md)
- [Application Certificate Authority](docs/applicationCertificateAuthority.md)
- [Application Certificates](docs/applicationCertificates.md)
- [Application Dashboard](docs/applicationDashboard.md)
- [Application Dashboards](docs/applicationDashboards.md)
- [Application Job Log](docs/applicationJobLog.md)
- [Application Job Logs](docs/applicationJobLogs.md)
- [Application Key](docs/applicationKey.md)
- [Application Keys](docs/applicationKeys.md)
- [Application Template](docs/applicationTemplate.md)
- [Application Templates](docs/applicationTemplates.md)
- [Applications](docs/applications.md)
- [Audit Log](docs/auditLog.md)
- [Audit Logs](docs/auditLogs.md)
- [Auth](docs/auth.md)
- [Credential](docs/credential.md)
- [Credentials](docs/credentials.md)
- [Dashboard](docs/dashboard.md)
- [Dashboards](docs/dashboards.md)
- [Data](docs/data.md)
- [Data Table](docs/dataTable.md)
- [Data Table Row](docs/dataTableRow.md)
- [Data Table Rows](docs/dataTableRows.md)
- [Data Tables](docs/dataTables.md)
- [Device](docs/device.md)
- [Device Attribute](docs/deviceAttribute.md)
- [Device Attributes](docs/deviceAttributes.md)
- [Device Recipe](docs/deviceRecipe.md)
- [Device Recipes](docs/deviceRecipes.md)
- [Devices](docs/devices.md)
- [Edge Deployment](docs/edgeDeployment.md)
- [Edge Deployments](docs/edgeDeployments.md)
- [Embedded Deployment](docs/embeddedDeployment.md)
- [Embedded Deployments](docs/embeddedDeployments.md)
- [Event](docs/event.md)
- [Events](docs/events.md)
- [Experience](docs/experience.md)
- [Experience Domain](docs/experienceDomain.md)
- [Experience Domains](docs/experienceDomains.md)
- [Experience Endpoint](docs/experienceEndpoint.md)
- [Experience Endpoints](docs/experienceEndpoints.md)
- [Experience Group](docs/experienceGroup.md)
- [Experience Groups](docs/experienceGroups.md)
- [Experience Slug](docs/experienceSlug.md)
- [Experience Slugs](docs/experienceSlugs.md)
- [Experience User](docs/experienceUser.md)
- [Experience Users](docs/experienceUsers.md)
- [Experience Version](docs/experienceVersion.md)
- [Experience Versions](docs/experienceVersions.md)
- [Experience View](docs/experienceView.md)
- [Experience Views](docs/experienceViews.md)
- [File](docs/file.md)
- [Files](docs/files.md)
- [Flow](docs/flow.md)
- [Flow Version](docs/flowVersion.md)
- [Flow Versions](docs/flowVersions.md)
- [Flows](docs/flows.md)
- [Instance](docs/instance.md)
- [Instance Api Token](docs/instanceApiToken.md)
- [Instance Api Tokens](docs/instanceApiTokens.md)
- [Instance Audit Log](docs/instanceAuditLog.md)
- [Instance Audit Logs](docs/instanceAuditLogs.md)
- [Instance Custom Node](docs/instanceCustomNode.md)
- [Instance Custom Nodes](docs/instanceCustomNodes.md)
- [Instance Member](docs/instanceMember.md)
- [Instance Members](docs/instanceMembers.md)
- [Instance Notification Rule](docs/instanceNotificationRule.md)
- [Instance Notification Rules](docs/instanceNotificationRules.md)
- [Instance Org](docs/instanceOrg.md)
- [Instance Org Invite](docs/instanceOrgInvite.md)
- [Instance Org Invites](docs/instanceOrgInvites.md)
- [Instance Org Member](docs/instanceOrgMember.md)
- [Instance Org Members](docs/instanceOrgMembers.md)
- [Instance Orgs](docs/instanceOrgs.md)
- [Instance Sandbox](docs/instanceSandbox.md)
- [Instance Sandboxes](docs/instanceSandboxes.md)
- [Instances](docs/instances.md)
- [Integration](docs/integration.md)
- [Integrations](docs/integrations.md)
- [Me](docs/me.md)
- [Notebook](docs/notebook.md)
- [Notebooks](docs/notebooks.md)
- [Org](docs/org.md)
- [Org Invites](docs/orgInvites.md)
- [Orgs](docs/orgs.md)
- [Resource Job](docs/resourceJob.md)
- [Resource Jobs](docs/resourceJobs.md)
- [User Api Token](docs/userApiToken.md)
- [User Api Tokens](docs/userApiTokens.md)
- [Webhook](docs/webhook.md)
- [Webhooks](docs/webhooks.md)

<br/>

*****

Copyright (c) 2025 Losant IoT, Inc

<https://www.losant.com>
