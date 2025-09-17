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
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  rowId: myRowId
};
try {
  console.log(await client.dataTableRow.delete(params));
';
} catch (err) {
  console.error(err);
}
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
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If data table row was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table row was not found |

<br/>

## Get

Retrieves the data table row

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  rowId: myRowId
};
try {
  console.log(await client.dataTableRow.get(params));
';
} catch (err) {
  console.error(err);
}
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
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Row](../lib/schemas/dataTableRow.json) | Data table row information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table row was not found |

<br/>

## Patch

Updates the data table row

```javascript
const params = {
  applicationId: myApplicationId,
  dataTableId: myDataTableId,
  rowId: myRowId,
  dataTableRow: myDataTableRow
};
try {
  console.log(await client.dataTableRow.patch(params));
';
} catch (err) {
  console.error(err);
}
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
| dataTableRow | [Data Table Row Insert Update](../lib/schemas/dataTableRowInsertUpdate.json) | Y | Object containing updated properties for the data table row |  | [Data Table Row Insert Update Example](_schemas.md#data-table-row-insert-update-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Data Table Row](../lib/schemas/dataTableRow.json) | Updated data table row information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if data table row was not found |
