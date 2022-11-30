# Resource Job Actions

Details on the various actions that can be performed on the
Resource Job resource, including the expected
parameters and the potential responses.

##### Contents

*   [Cancel Execution](#cancel-execution)
*   [Delete](#delete)
*   [Execute](#execute)
*   [Get](#get)
*   [Logs](#logs)
*   [Patch](#patch)

<br/>

## Cancel Execution

Marks a specific resource job execution for cancellation

```javascript
var params = {
  applicationId: myApplicationId,
  resourceJobId: myResourceJobId,
  executionId: myExecutionId
};

// with callbacks
client.resourceJob.cancelExecution(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.resourceJob.cancelExecution(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.cancelExecution.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| resourceJobId | string | Y | ID associated with the resource job |  | 575ec8687ae143cd83dc4a97 |
| executionId | undefined | Y | The ID of the execution to cancel |  | 632e18632f59592e773a4153 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If the execution was successfully marked for cancellation |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if execution was not found |

<br/>

## Delete

Deletes a resource job

```javascript
var params = {
  applicationId: myApplicationId,
  resourceJobId: myResourceJobId
};

// with callbacks
client.resourceJob.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.resourceJob.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| resourceJobId | string | Y | ID associated with the resource job |  | 575ec8687ae143cd83dc4a97 |
| includeWorkflows | string | N | If the workflows that trigger from this resource job should also be deleted. |  | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If resource job was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if resource job was not found |

<br/>

## Execute

Queues the execution of a resource job

```javascript
var params = {
  applicationId: myApplicationId,
  resourceJobId: myResourceJobId,
  executionOptions: myExecutionOptions
};

// with callbacks
client.resourceJob.execute(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.resourceJob.execute(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.execute.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| resourceJobId | string | Y | ID associated with the resource job |  | 575ec8687ae143cd83dc4a97 |
| executionOptions | [Resource Job Execution Options](../lib/schemas/resourceJobExecutionOptions.json) | Y | The options for the execution |  | [Resource Job Execution Options Example](_schemas.md#resource-job-execution-options-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success With Execution ID](../lib/schemas/successWithExecutionId.json) | If the job was successfully queued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if resource job was not found |

<br/>

## Get

Returns a resource job

```javascript
var params = {
  applicationId: myApplicationId,
  resourceJobId: myResourceJobId
};

// with callbacks
client.resourceJob.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.resourceJob.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, resourceJob.*, or resourceJob.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| resourceJobId | string | Y | ID associated with the resource job |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Resource Job](../lib/schemas/resourceJob.json) | A single resource job |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Logs

Retrieves information on resource job executions

```javascript
var params = {
  applicationId: myApplicationId,
  resourceJobId: myResourceJobId
};

// with callbacks
client.resourceJob.logs(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.resourceJob.logs(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, resourceJob.*, or resourceJob.logs.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| resourceJobId | string | Y | ID associated with the resource job |  | 575ec8687ae143cd83dc4a97 |
| limit | string | N | Max log entries to return (ordered by time descending) | 1 | 10 |
| since | string | N | Look for log entries since this time (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Resource Job Execution Logs](../lib/schemas/resourceJobExecutionLogs.json) | Resource job execution information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if resource job was not found |

<br/>

## Patch

Update a resource job

```javascript
var params = {
  applicationId: myApplicationId,
  resourceJobId: myResourceJobId,
  resourceJob: myResourceJob
};

// with callbacks
client.resourceJob.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.resourceJob.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| resourceJobId | string | Y | ID associated with the resource job |  | 575ec8687ae143cd83dc4a97 |
| resourceJob | [Resource Job Patch](../lib/schemas/resourceJobPatch.json) | Y | The new resource job configuration |  | [Resource Job Patch Example](_schemas.md#resource-job-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Resource Job](../lib/schemas/resourceJob.json) | Successfully updated resource job |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if resource job was not found |
