# Flow Actions

Details on the various actions that can be performed on the
Flow resource, including the expected
parameters and the potential responses.

##### Contents

*   [Clear Storage Entries](#clear-storage-entries)
*   [Delete](#delete)
*   [Errors](#errors)
*   [Get](#get)
*   [Get Log Entries](#get-log-entries)
*   [Get Storage Entries](#get-storage-entries)
*   [Patch](#patch)
*   [Press Virtual Button](#press-virtual-button)
*   [Set Storage Entry](#set-storage-entry)
*   [Stats](#stats)

<br/>

## Clear Storage Entries

Clear all storage entries

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.clearStorageEntries(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.clearStorageEntries(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flow.*, or flow.clearStorageEntries.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Storage Entries](_schemas.md#workflow-storage-entries) | The current storage entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |

<br/>

## Delete

Deletes a flow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flow.*, or flow.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If flow was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |

<br/>

## Errors

Get information about errors that occurred during runs of this workflow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.errors(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.errors(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.errors.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| start | string | N | Start of time range in milliseconds since epoch | -86400000 | 0 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| limit | string | N | Maximum number of errors to return | 25 | 25 |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | undefined |
| flowVersion | string | N | Flow version name or ID. When not included, will be errors for all versions. Pass develop for just the develop version. |  | develop |
| deviceId | string | N | For edge workflows, the Device ID to return workflow errors for. When not included, will be errors for all device IDs. |  | 575ed18f7ae143cd83dc4bb6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Errors](_schemas.md#workflow-errors) | Workflow error information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if device was not found |

<br/>

## Get

Retrieves information on a flow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow](_schemas.md#workflow) | Flow information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |

<br/>

## Get Log Entries

Retrieve the recent log entries about runs of this workflow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.getLogEntries(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.getLogEntries(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.log.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| limit | string | N | Max log entries to return (ordered by time descending) | 1 | 10 |
| since | string | N | Look for log entries since this time (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Log](_schemas.md#workflow-log) | Recent log entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if device was not found |

<br/>

## Get Storage Entries

Gets the current values in persistent storage

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.getStorageEntries(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.getStorageEntries(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.getStorageEntries.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Storage Entries](_schemas.md#workflow-storage-entries) | The current storage entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |

<br/>

## Patch

Updates information about a flow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flow: myFlow
};

// with callbacks
client.flow.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flow.*, or flow.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| flow | [Workflow Patch](_schemas.md#workflow-patch) | Y | Object containing new properties of the flow |  | [Workflow Patch Example](_schemas.md#workflow-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow](_schemas.md#workflow) | Updated flow information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow is not found |

<br/>

## Press Virtual Button

Presses the specified virtual button on the flow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  button: myButton
};

// with callbacks
client.flow.pressVirtualButton(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.pressVirtualButton(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flow.*, or flow.pressVirtualButton.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| button | [Virtual Button Press](_schemas.md#virtual-button-press) | Y | Object containing button key and payload |  | [Virtual Button Press Example](_schemas.md#virtual-button-press-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | Virtual button was pressed |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |

<br/>

## Set Storage Entry

Sets a storage value

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  entry: myEntry
};

// with callbacks
client.flow.setStorageEntry(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.setStorageEntry(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flow.*, or flow.setStorageEntry.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| entry | [Workflow Storage Entry](_schemas.md#workflow-storage-entry) | Y | Object containing storage entry |  | [Workflow Storage Entry Example](_schemas.md#workflow-storage-entry-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | Value was successfully stored |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |

<br/>

## Stats

Get statistics about workflow runs for this workflow

```javascript
var params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};

// with callbacks
client.flow.stats(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flow.stats(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.stats.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| start | string | N | Start of time range in milliseconds since epoch | -86400000 | 0 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| resolution | string | N | Resolution in milliseconds | 3600000 | 3600000 |
| flowVersion | string | N | Flow version name or ID. When not included, will be aggregate for all versions. Pass develop for just the develop version. |  | develop |
| deviceId | string | N | For edge workflows, the device ID to return workflow stats for. When not included, will be aggregate for all device IDs. |  | 575ed18f7ae143cd83dc4bb6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Statistics](_schemas.md#workflow-statistics) | Statistics for workflow runs |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if device was not found |
