# Data Actions

Details on the various actions that can be performed on the
Data resource, including the expected
parameters and the potential responses.

##### Contents

*   [Last Value Query](#last-value-query)
*   [Time Series Query](#time-series-query)

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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| query | [Last Value Query](_schemas.md#last-value-query) | Y | The query parameters |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Last Value Data](_schemas.md#last-value-data) | Last known data for the requested attribute |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| query | [Time Series Query](_schemas.md#time-series-query) | Y | The query parameters |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Time Series Data](_schemas.md#time-series-data) | Data for requested time range |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
