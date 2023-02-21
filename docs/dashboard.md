# Dashboard Actions

Details on the various actions that can be performed on the
Dashboard resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)
*   [Send Report](#send-report)
*   [Validate Context](#validate-context)

<br/>

## Delete

Deletes a dashboard

```javascript
var params = {
  dashboardId: myDashboardId
};

// with callbacks
client.dashboard.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dashboard.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, dashboard.*, or dashboard.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
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
  dashboardId: myDashboardId
};

// with callbacks
client.dashboard.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dashboard.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
| password | string | N | Password for password-protected dashboards |  | myPassword |
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
  dashboard: myDashboard
};

// with callbacks
client.dashboard.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dashboard.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, dashboard.*, or dashboard.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
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

<br/>

## Send Report

Sends a snapshot of a dashboard

```javascript
var params = {
  dashboardId: myDashboardId,
  reportConfig: myReportConfig
};

// with callbacks
client.dashboard.sendReport(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dashboard.sendReport(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, dashboard.*, or dashboard.sendReport.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
| reportConfig | [Dashboard Send Report](../lib/schemas/dashboardSendReport.json) | Y | Object containing report options |  | [Dashboard Send Report Example](_schemas.md#dashboard-send-report-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If dashboard report was enqueued to be sent |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if dashboard was not found |

<br/>

## Validate Context

Validates a context object against the dashboard&#x27;s context configuration

```javascript
var params = {
  dashboardId: myDashboardId,
  ctx: myCtx
};

// with callbacks
client.dashboard.validateContext(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dashboard.validateContext(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboardId | string | Y | ID of the associated dashboard |  | 575ece2b7ae143cd83dc4a9b |
| ctx | [Dashboard Context Instance](../lib/schemas/dashboardContextInstance.json) | Y | The context object to validate |  | [Dashboard Context Instance Example](_schemas.md#dashboard-context-instance-example) |
| password | string | N | Password for password-protected dashboards |  | myPassword |
| duration | string | N | Duration of data to fetch in milliseconds |  | 3600000 |
| resolution | string | N | Resolution in milliseconds |  | 60000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Validate Context Success](../lib/schemas/validateContextSuccess.json) | If context is valid |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Validate Context Error](../lib/schemas/validateContextError.json) | Error if context is invalid |
| 404 | [Error](../lib/schemas/error.json) | Error if dashboard or application was not found |
