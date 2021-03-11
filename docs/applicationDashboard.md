# Application Dashboard Actions

Details on the various actions that can be performed on the
Application Dashboard resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes a dashboard

```javascript
var params = {
  dashboardId: myDashboardId,
  applicationId: myApplicationId
};

// with callbacks
client.applicationDashboard.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationDashboard.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationDashboard.*, or applicationDashboard.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If dashboard was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if dashboard was not found |

<br/>

## Get

Retrieves information on a dashboard

```javascript
var params = {
  dashboardId: myDashboardId,
  applicationId: myApplicationId
};

// with callbacks
client.applicationDashboard.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationDashboard.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationDashboard.*, or applicationDashboard.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Dashboard](../lib/schemas/dashboard.json) | Dashboard information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if dashboard was not found |

<br/>

## Patch

Updates information about a dashboard

```javascript
var params = {
  dashboardId: myDashboardId,
  applicationId: myApplicationId,
  dashboard: myDashboard
};

// with callbacks
client.applicationDashboard.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationDashboard.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationDashboard.*, or applicationDashboard.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| dashboard | [Dashboard Patch](../lib/schemas/dashboardPatch.json) | Y | Object containing new dashboard properties |  | [Dashboard Patch Example](_schemas.md#dashboard-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Dashboard](../lib/schemas/dashboard.json) | Update dashboard information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if dashboard was not found |
