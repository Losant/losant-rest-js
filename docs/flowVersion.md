# Flow Version Actions

Details on the various actions that can be performed on the
Flow Version resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Errors](#errors)
*   [Get](#get)
*   [Get Log Entries](#get-log-entries)
*   [Patch](#patch)
*   [Stats](#stats)

<br/>

## Delete

Deletes a flow version

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flowVersionId: myFlowVersionId
};
try {
  console.log(await client.flowVersion.delete(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flowVersion.*, or flowVersion.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| flowVersionId | string | Y | Version ID or version name associated with the flow version |  | 675ed18f7ae143cd83dc4bb7 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If flow version was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow version was not found |

<br/>

## Errors

Get information about errors that occurred during runs of this workflow version

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flowVersionId: myFlowVersionId
};
try {
  console.log(await client.flowVersion.errors(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.errors.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| flowVersionId | string | Y | Version ID or version name associated with the flow version |  | 675ed18f7ae143cd83dc4bb7 |
| duration | string | N | Duration of time range in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| limit | string | N | Maximum number of errors to return | 25 | 25 |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | desc |
| deviceId | string | N | For edge workflows, the Device ID to return workflow errors for. When not included, will be errors for all device IDs. |  | 575ed18f7ae143cd83dc4bb6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Errors](../lib/schemas/flowErrors.json) | Workflow error information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow version was not found |

<br/>

## Get

Retrieves information on a flow version

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flowVersionId: myFlowVersionId
};
try {
  console.log(await client.flowVersion.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| flowVersionId | string | Y | Version ID or version name associated with the flow version |  | 675ed18f7ae143cd83dc4bb7 |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Version](../lib/schemas/flowVersion.json) | Flow version information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow version was not found |

<br/>

## Get Log Entries

Retrieve the recent log entries about runs of this workflow version

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flowVersionId: myFlowVersionId
};
try {
  console.log(await client.flowVersion.getLogEntries(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.log.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| flowVersionId | string | Y | Version ID or version name associated with the flow version |  | 675ed18f7ae143cd83dc4bb7 |
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
| 404 | [Error](../lib/schemas/error.json) | Error if flow version was not found |

<br/>

## Patch

Updates information about a flow version

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flowVersionId: myFlowVersionId,
  flowVersion: myFlowVersion
};
try {
  console.log(await client.flowVersion.patch(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flowVersion.*, or flowVersion.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| flowVersionId | string | Y | Version ID or version name associated with the flow version |  | 675ed18f7ae143cd83dc4bb7 |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| flowVersion | [Workflow Version Patch](../lib/schemas/flowVersionPatch.json) | Y | Object containing new properties of the flow version |  | [Workflow Version Patch Example](_schemas.md#workflow-version-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Version](../lib/schemas/flowVersion.json) | Updated flow version information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow version was not found |

<br/>

## Stats

Get statistics about workflow runs for this workflow version

```javascript
const params = {
  applicationId: myApplicationId,
  flowId: myFlowId,
  flowVersionId: myFlowVersionId
};
try {
  console.log(await client.flowVersion.stats(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersion.*, or flowVersion.stats.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flowId | string | Y | ID associated with the flow |  | 575ed18f7ae143cd83dc4aa6 |
| flowVersionId | string | Y | Version ID or version name associated with the flow version |  | 675ed18f7ae143cd83dc4bb7 |
| duration | string | N | Duration of time range in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| resolution | string | N | Resolution in milliseconds | 3600000 | 3600000 |
| deviceId | string | N | For edge workflows, the device ID to return workflow stats for. When not included, will be aggregate for all device IDs. |  | 575ed18f7ae143cd83dc4bb6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Statistics](../lib/schemas/flowStats.json) | Statistics for workflow runs |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if flow version was not found |
