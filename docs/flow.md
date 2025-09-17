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
*   [Get Storage Entries Metadata](#get-storage-entries-metadata)
*   [Patch](#patch)
*   [Press Virtual Button](#press-virtual-button)
*   [Set Storage Entry](#set-storage-entry)
*   [Stats](#stats)

<br/>

## Clear Storage Entries

Clear all storage entries

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.clearStorageEntries(params));
} catch (err) {
  console.error(err);
}
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
| 200 | [Workflow Storage Entries](../lib/schemas/flowStorageEntries.json) | The current storage entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Delete

Deletes a flow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.delete(params));
} catch (err) {
  console.error(err);
}
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
| 200 | [Success](../lib/schemas/success.json) | If flow was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Errors

Get information about errors that occurred during runs of this workflow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.errors(params));
} catch (err) {
  console.error(err);
}
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
| duration | string | N | Duration of time range in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| limit | string | N | Maximum number of errors to return | 25 | 25 |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | desc |
| flowVersion | string | N | Flow version name or ID. When not included, will be errors for all versions. Pass develop for just the develop version. |  | develop |
| deviceId | string | N | For edge or embedded workflows, the Device ID for which to return workflow errors. When not included, will be errors for all device IDs. |  | 575ed18f7ae143cd83dc4bb6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Errors](../lib/schemas/flowErrors.json) | Workflow error information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Get

Retrieves information on a flow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.get(params));
} catch (err) {
  console.error(err);
}
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
| 200 | [Workflow](../lib/schemas/flow.json) | Flow information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Get Log Entries

Retrieve the recent log entries about runs of this workflow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.getLogEntries(params));
} catch (err) {
  console.error(err);
}
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
| 200 | [Workflow Log](../lib/schemas/flowLog.json) | Recent log entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Get Storage Entries

Gets the current values in persistent storage

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.getStorageEntries(params));
} catch (err) {
  console.error(err);
}
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
| 200 | [Workflow Storage Entries](../lib/schemas/flowStorageEntries.json) | The current storage entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Get Storage Entries Metadata

Gets metadata about storage for this flow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.getStorageEntriesMetadata(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.getStorageEntriesMetadata.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Get Workflow Storage Entries Metadata](../lib/schemas/flowStorageMetadata.json) | The meta data for the current storage entries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Patch

Updates information about a flow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flow: myFlow
};
try {
  console.log(await client.flow.patch(params));
} catch (err) {
  console.error(err);
}
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
| flow | [Workflow Patch](../lib/schemas/flowPatch.json) | Y | Object containing new properties of the flow |  | [Workflow Patch Example](_schemas.md#workflow-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow](../lib/schemas/flow.json) | Updated flow information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow is not found |

<br/>

## Press Virtual Button

Presses the specified virtual button on the flow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  button: myButton
};
try {
  console.log(await client.flow.pressVirtualButton(params));
} catch (err) {
  console.error(err);
}
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
| button | [Virtual Button Press](../lib/schemas/virtualButtonPress.json) | Y | Object containing button key and payload |  | [Virtual Button Press Example](_schemas.md#virtual-button-press-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Virtual button was pressed |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Set Storage Entry

Sets a storage value

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  entry: myEntry
};
try {
  console.log(await client.flow.setStorageEntry(params));
} catch (err) {
  console.error(err);
}
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
| entry | [Workflow Storage Entry](../lib/schemas/flowStorageEntry.json) | Y | Object containing storage entry |  | [Workflow Storage Entry Example](_schemas.md#workflow-storage-entry-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Value was successfully stored |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |

<br/>

## Stats

Get statistics about workflow runs for this workflow

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId
};
try {
  console.log(await client.flow.stats(params));
} catch (err) {
  console.error(err);
}
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
| duration | string | N | Duration of time range in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| resolution | string | N | Resolution in milliseconds | 3600000 | 3600000 |
| flowVersion | string | N | Flow version name or ID. When not included, will be aggregate for all versions. Pass develop for just the develop version. |  | develop |
| deviceId | string | N | For edge or embedded workflows, the device ID to return workflow stats for. When not included, will be aggregate for all device IDs. |  | 575ed18f7ae143cd83dc4bb6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Statistics](../lib/schemas/flowStats.json) | Statistics for workflow runs |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow was not found |
