# Data Table Actions

Details on the various actions that can be performed on the
Data Table resource, including the expected
parameters and the potential responses.

##### Contents

*   [Add Column](#add-column)
*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)
*   [Remove Column](#remove-column)

<br/>

## Add Column

Adds a new column to this data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  dataTableColumn: myDataTableColumn
};

// with callbacks
client.dataTable.addColumn(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTable.addColumn(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTable.*, or dataTable.addColumn.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| dataTableColumn | [Data Table Column](_schemas.md#data-table-column) | Y | Object containing the new column properties |  | [Data Table Column Example](_schemas.md#data-table-column-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table](_schemas.md#data-table) | Updated data table information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Delete

Deletes a data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with callbacks
client.dataTable.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTable.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTable.*, or dataTable.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If data table was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Get

Retrieves information on a data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId
};

// with callbacks
client.dataTable.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTable.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTable.*, or dataTable.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table](_schemas.md#data-table) | Data table information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Patch

Updates information about a data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  dataTable: myDataTable
};

// with callbacks
client.dataTable.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTable.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTable.*, or dataTable.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| dataTable | [Data Table Patch](_schemas.md#data-table-patch) | Y | Object containing updated properties of the data table |  | [Data Table Patch Example](_schemas.md#data-table-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table](_schemas.md#data-table) | Updated data table information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |

<br/>

## Remove Column

Removes a column from this data table

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  columnName: myColumnName
};

// with callbacks
client.dataTable.removeColumn(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTable.removeColumn(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTable.*, or dataTable.removeColumn.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| columnName | string | Y | Name of the column to remove |  | myColumnName |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table](_schemas.md#data-table) | Updated data table information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table was not found |
