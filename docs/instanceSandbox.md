# Instance Sandbox Actions

Details on the various actions that can be performed on the
Instance Sandbox resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Device Counts](#device-counts)
*   [Get](#get)
*   [Notebook Minute Counts](#notebook-minute-counts)
*   [Payload Counts](#payload-counts)
*   [Payload Counts Breakdown](#payload-counts-breakdown)
*   [Undelete](#undelete)

<br/>

## Delete

Deletes a sandbox user account

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceSandbox.*, or instanceSandbox.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If a sandbox was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |

<br/>

## Device Counts

Returns device counts by day for the time range specified for all applications the sandbox user owns

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.deviceCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.deviceCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.deviceCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for device count query (ms since epoch) |  | 0 |
| end | string | N | End of range for device count query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Counts](../lib/schemas/deviceCounts.json) | Device counts by day |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |

<br/>

## Get

Returns a sandbox user

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from user summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in user summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Sandbox User](../lib/schemas/instanceSandbox.json) | A single sandbox user |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |

<br/>

## Notebook Minute Counts

Returns notebook execution usage by day for the time range specified for all applications the sandbox user owns

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.notebookMinuteCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.notebookMinuteCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.notebookMinuteCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for notebook execution query (ms since epoch) |  | 0 |
| end | string | N | End of range for notebook execution query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook Minute Counts](../lib/schemas/notebookMinuteCounts.json) | Notebook usage information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |

<br/>

## Payload Counts

Returns payload counts for the time range specified for all applications the sandbox user owns

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.payloadCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.payloadCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.payloadCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| asBytes | string | N | If the resulting stats should be returned as bytes | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Stats](../lib/schemas/payloadStats.json) | Payload counts, by type and source |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |

<br/>

## Payload Counts Breakdown

Returns payload counts per resolution in the time range specified for all applications the sandbox user owns

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.payloadCountsBreakdown(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.payloadCountsBreakdown(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.payloadCountsBreakdown.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| resolution | string | N | Resolution in milliseconds. Accepted values are: 86400000, 3600000 | 86400000 | 86400000 |
| asBytes | string | N | If the resulting stats should be returned as bytes | false | true |
| includeNonBillable | string | N | If non-billable payloads should be included in the result | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Counts Breakdown](../lib/schemas/payloadCountsBreakdown.json) | Sum of payload counts by date |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |

<br/>

## Undelete

Restores a sandbox user account

```javascript
const params = {
  instanceId: myInstanceId,
  instanceSandboxId: myInstanceSandboxId
};

// with callbacks
client.instanceSandbox.undelete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceSandbox.undelete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceSandbox.*, or instanceSandbox.undelete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instanceSandboxId | string | Y | ID associated with the sandbox user |  | 575ec8687ae143cd83dc4a97 |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from user summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in user summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Sandbox User](../lib/schemas/instanceSandbox.json) | A single restored sandbox user |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if sandbox or instance was not found |
