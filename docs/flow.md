# Flow Actions

Details on the various actions that can be performed on the
Flow resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Get Log Entries](#get-log-entries)
*   [Get Storage Entries](#get-storage-entries)
*   [Patch](#patch)
*   [Press Virtual Button](#press-virtual-button)
*   [Set Storage Entry](#set-storage-entry)

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

Retrieve the recent log entries about the flows

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

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Storage Entries](_schemas.md#workflow-storage-entries) | The stored values |

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
| flow | [Workflow Patch](_schemas.md#workflow-patch) | Y | Object containing new properties of the flow |  | [Workflow Patch Example](_schemas.md#workflow-patch-example) |

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

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | Value was successfully stored |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if flow was not found |
