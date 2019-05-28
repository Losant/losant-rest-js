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
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with callbacks
client.dataTableRows.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRows.delete(params)
  .then(console.log)
  .catch(console.error);
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
| query | [Data Table Query](_schemas.md#data-table-query) | N | Query to apply to filter the data table |  | [Data Table Query Example](_schemas.md#data-table-query-example) |
| limit | string | N | Limit number of rows to delete from data table | 1000 | 10 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Rows Delete](_schemas.md#data-table-rows-delete) | If request successfully deletes a set of Data Table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Export

Request an export of the data table&#x27;s data

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  exportData: myExportData
};

// with callbacks
client.dataTableRows.export(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRows.export(params)
  .then(console.log)
  .catch(console.error);
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
| exportData | [Data Table Rows Export](_schemas.md#data-table-rows-export) | Y | Object containing export specifications |  | [Data Table Rows Export Example](_schemas.md#data-table-rows-export-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If request was successfully queued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Get

Returns the rows for a data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with callbacks
client.dataTableRows.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRows.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTableRows.*, or dataTableRows.get.

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
| 200 | [Data Table Rows](_schemas.md#data-table-rows) | Collection of data table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Post

Inserts a new row(s) into a data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  dataTableRow: myDataTableRow
};

// with callbacks
client.dataTableRows.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRows.post(params)
  .then(console.log)
  .catch(console.error);
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
| dataTableRow | [Data Table Row Insert](_schemas.md#data-table-row-insert) | Y | The row(s) to insert |  | [Data Table Row Insert Example](_schemas.md#data-table-row-insert-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Data Table Row Insert Result](_schemas.md#data-table-row-insert-result) | Successfully created data table row, or bulk insert count |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Query

Queries for rows from a data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with callbacks
client.dataTableRows.query(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRows.query(params)
  .then(console.log)
  .catch(console.error);
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
| query | [Data Table Query](_schemas.md#data-table-query) | N | Query to apply to filter the data table |  | [Data Table Query Example](_schemas.md#data-table-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Rows](_schemas.md#data-table-rows) | Collection of data table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Truncate

Delete all data in the data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with callbacks
client.dataTableRows.truncate(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRows.truncate(params)
  .then(console.log)
  .catch(console.error);
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
| 200 | [Success](_schemas.md#success) | If request successfully deleted **all** rows in the data table, this will **not** send workflow data table deletion triggers |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |
