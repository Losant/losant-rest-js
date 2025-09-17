# Data Table Rows Actions

Details on the various actions that can be performed on the
Data Table Rows resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Export](#export)
*   [Get](#get)
*   [Post](#post)
*   [Query](#query)
*   [Truncate](#truncate)

<br/>

## Delete

Delete rows from a data table

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with promises
try {
  console.log(await client.dataTableRows.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTableRows.*, or dataTableRows.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| query | [Advanced Query](../lib/schemas/advancedQuery.json) | N | Query to apply to filter the data table |  | [Advanced Query Example](_schemas.md#advanced-query-example) |
| limit | string | N | Limit number of rows to delete from data table | 1000 | 10 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Rows Delete](../lib/schemas/dataTableRowsDelete.json) | If request successfully deletes a set of Data Table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table was not found |

<br/>

## Export

Request an export of the data table&#x27;s data

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  exportData: myExportData
};

// with promises
try {
  console.log(await client.dataTableRows.export(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTableRows.*, or dataTableRows.export.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| exportData | [Data Table Rows Export](../lib/schemas/dataTableRowsExport.json) | Y | Object containing export specifications |  | [Data Table Rows Export Example](_schemas.md#data-table-rows-export-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If request was successfully queued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table was not found |

<br/>

## Get

Returns the rows for a data table

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with promises
try {
  console.log(await client.dataTableRows.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, dataTableRows.*, or dataTableRows.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| sortColumn | string | N | Column to sort the rows by |  | myColumnName |
| sortDirection | string | N | Direction to sort the rows by. Accepted values are: asc, desc | asc | asc |
| limit | string | N | How many rows to return | 1000 | 0 |
| offset | string | N | How many rows to skip | 0 | 0 |
| includeFields | string | N | Comma-separated list of fields to include in resulting rows. When not provided, returns all fields. |  | id,createdAt |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Rows](../lib/schemas/dataTableRows.json) | Collection of data table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table was not found |

<br/>

## Post

Inserts a new row(s) into a data table

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  dataTableRow: myDataTableRow
};

// with promises
try {
  console.log(await client.dataTableRows.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTableRows.*, or dataTableRows.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| dataTableRow | [Data Table Row Insert](../lib/schemas/dataTableRowInsert.json) | Y | The row(s) to insert |  | [Data Table Row Insert Example](_schemas.md#data-table-row-insert-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Data Table Row Insert Result](../lib/schemas/dataTableRowInsertResult.json) | Successfully created data table row, or bulk insert count |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table was not found |

<br/>

## Query

Queries for rows from a data table

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with promises
try {
  console.log(await client.dataTableRows.query(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTableRows.*, or dataTableRows.query.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| sortColumn | string | N | Column to sort the rows by |  | myColumnName |
| sortDirection | string | N | Direction to sort the rows by. Accepted values are: asc, desc | asc | asc |
| limit | string | N | How many rows to return | 1000 | 0 |
| offset | string | N | How many rows to skip | 0 | 0 |
| includeFields | string | N | Comma-separated list of fields to include in resulting rows. When not provided, returns all fields. |  | id,createdAt |
| query | [Advanced Query](../lib/schemas/advancedQuery.json) | N | Query to apply to filter the data table |  | [Advanced Query Example](_schemas.md#advanced-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Rows](../lib/schemas/dataTableRows.json) | Collection of data table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table was not found |

<br/>

## Truncate

Delete all data in the data table

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with promises
try {
  console.log(await client.dataTableRows.truncate(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTableRows.*, or dataTableRows.truncate.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If request successfully deleted **all** rows in the data table, this will **not** send workflow data table deletion triggers |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table was not found |
