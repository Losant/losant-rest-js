# Notebook Actions

Details on the various actions that can be performed on the
Notebook resource, including the expected
parameters and the potential responses.

##### Contents

*   [Cancel Execution](#cancel-execution)
*   [Delete](#delete)
*   [Execute](#execute)
*   [Get](#get)
*   [Logs](#logs)
*   [Notebook Minute Counts](#notebook-minute-counts)
*   [Patch](#patch)
*   [Request Input Data Export](#request-input-data-export)
*   [Upload](#upload)

<br/>

## Cancel Execution

Marks a specific notebook execution for cancellation

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId,
  executionId: myExecutionId
};

// with promises
try {
  console.log(await client.notebook.cancelExecution(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, notebook.*, or notebook.execute.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
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

Deletes a notebook

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId
};

// with promises
try {
  console.log(await client.notebook.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, notebook.*, or notebook.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If notebook was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Execute

Triggers the execution of a notebook

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId,
  executionOptions: myExecutionOptions
};

// with promises
try {
  console.log(await client.notebook.execute(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, notebook.*, or notebook.execute.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| executionOptions | [Notebook Execution Options](../lib/schemas/notebookExecutionOptions.json) | Y | The options for the execution |  | [Notebook Execution Options Example](_schemas.md#notebook-execution-options-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success With Execution ID](../lib/schemas/successWithExecutionId.json) | If execution request was accepted and successfully queued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Get

Retrieves information on a notebook

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId
};

// with promises
try {
  console.log(await client.notebook.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook](../lib/schemas/notebook.json) | notebook information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Logs

Retrieves information on notebook executions

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId
};

// with promises
try {
  console.log(await client.notebook.logs(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.logs.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| limit | string | N | Max log entries to return (ordered by time descending) | 1 | 10 |
| since | string | N | Look for log entries since this time (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook Execution Logs](../lib/schemas/notebookExecutionLogs.json) | notebook execution information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Notebook Minute Counts

Returns notebook execution usage by day for the time range specified for this notebook

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId
};

// with promises
try {
  console.log(await client.notebook.notebookMinuteCounts(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.notebookMinuteCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
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
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Patch

Updates information about a notebook

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId,
  notebook: myNotebook
};

// with promises
try {
  console.log(await client.notebook.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, notebook.*, or notebook.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| notebook | [Notebook Patch](../lib/schemas/notebookPatch.json) | Y | Object containing new properties of the notebook |  | [Notebook Patch Example](_schemas.md#notebook-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook](../lib/schemas/notebook.json) | Updated notebook information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Request Input Data Export

Requests a combined zip file of the potential input data for a notebook execution

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId,
  exportOptions: myExportOptions
};

// with promises
try {
  console.log(await client.notebook.requestInputDataExport(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.requestInputDataExport.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| exportOptions | [Notebook Data Export Options](../lib/schemas/notebookDataExportOptions.json) | Y | The options for the export |  | [Notebook Data Export Options Example](_schemas.md#notebook-data-export-options-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If export request was accepted and successfully queued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |

<br/>

## Upload

Uploads the jupyter notebook file

```javascript
const params = {
  applicationId: myApplicationId,
  notebookId: myNotebookId,
  jupyterFile: myJupyterFile
};

// with promises
try {
  console.log(await client.notebook.upload(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, notebook.*, or notebook.upload.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| notebookId | string | Y | ID associated with the notebook |  | 575ed78e7ae143cd83dc4aab |
| jupyterFile | file | Y | The jupyter notebook file |  | undefined |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook](../lib/schemas/notebook.json) | Updated notebook information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notebook was not found |
