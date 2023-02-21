# Data Actions

Details on the various actions that can be performed on the
Data resource, including the expected
parameters and the potential responses.

##### Contents

*   [Export](#export)
*   [Last Value Query](#last-value-query)
*   [Time Series Query](#time-series-query)

<br/>

## Export

Creates a csv file from a query of devices and attributes over a time range.

```javascript
var params = {
  applicationId: myApplicationId,
  query: myQuery
};

// with callbacks
client.data.export(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.data.export(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, data.*, or data.export.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Data Export](../lib/schemas/dataExport.json) | Y | The query parameters |  | [Data Export Example](_schemas.md#data-export-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If command was successfully sent |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Last Value Query

Returns the last known data for the given attribute

```javascript
var params = {
  applicationId: myApplicationId,
  query: myQuery
};

// with callbacks
client.data.lastValueQuery(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.data.lastValueQuery(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, data.*, or data.lastValueQuery.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Last Value Query](../lib/schemas/lastValueQuery.json) | Y | The query parameters |  | [Last Value Query Example](_schemas.md#last-value-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Last Value Data](../lib/schemas/lastValueData.json) | Last known data for the requested attribute |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Time Series Query

Returns the data for the given query

```javascript
var params = {
  applicationId: myApplicationId,
  query: myQuery
};

// with callbacks
client.data.timeSeriesQuery(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.data.timeSeriesQuery(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, data.*, or data.timeSeriesQuery.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Time Series Query](../lib/schemas/timeSeriesQuery.json) | Y | The query parameters |  | [Time Series Query Example](_schemas.md#time-series-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Time Series Data](../lib/schemas/timeSeriesData.json) | Data for requested time range |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
