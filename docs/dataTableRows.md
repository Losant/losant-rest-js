# Data Table Rows Actions

Details on the various actions that can be performed on the
Data Table Rows resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)
*   [Query](#query)

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

Inserts a new row into a data table

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
| dataTableRow | [Data Table Row Insert/Update](_schemas.md#data-table-row-insert/update) | Y | The row to insert |  | [Data Table Row Insert/Update Example](_schemas.md#data-table-row-insert/update-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Data Table Row](_schemas.md#data-table-row) | Successfully created data table row |

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
| query | [Data Table Query](_schemas.md#data-table-query) | N | Query to apply to filter the data table |  | [Data Table Query Example](_schemas.md#data-table-query-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Rows](_schemas.md#data-table-rows) | Collection of data table rows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |