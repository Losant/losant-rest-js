# Data Table Row Actions

Details on the various actions that can be performed on the
Data Table Row resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes a data table row

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  rowId: myRowId
};

// with callbacks
client.dataTableRow.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRow.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTableRow.*, or dataTableRow.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| rowId | string | Y | ID associated with the data table row |  | 596f832b128eda5cfe765443 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If data table row was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table row was not found |

<br/>

## Get

Retrieves the data table row

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  rowId: myRowId
};

// with callbacks
client.dataTableRow.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRow.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTableRow.*, or dataTableRow.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| rowId | string | Y | ID associated with the data table row |  | 596f832b128eda5cfe765443 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Row](_schemas.md#data-table-row) | Data table row information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table row was not found |

<br/>

## Patch

Updates the data table row

```javascript
var params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  rowId: myRowId,
  dataTableRow: myDataTableRow
};

// with callbacks
client.dataTableRow.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.dataTableRow.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, dataTableRow.*, or dataTableRow.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| dataTableId | string | Y | ID associated with the data table |  | 575ed78e7ae143cd83dc4aab |
| rowId | string | Y | ID associated with the data table row |  | 596f832b128eda5cfe765443 |
| dataTableRow | [Data Table Row Insert/Update](_schemas.md#data-table-row-insert/update) | Y | Object containing updated properties for the data table row |  | [Data Table Row Insert/Update Example](_schemas.md#data-table-row-insert/update-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Row](_schemas.md#data-table-row) | Updated data table row information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if data table row was not found |
