# Data
Structure API - v0.1.0

## data.timeSeriesQuery
Returns the data for the given query



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| query | [timeSeriesQuery](_schemas.md#timeseriesquery) | N | The query parameters |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [timeSeriesData](_schemas.md#timeseriesdata) | Data for requested time range |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if application was not found |

### Example
```javascript
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
## data.lastValueQuery
Returns the last known data for the given attribute



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| query | [lastValueQuery](_schemas.md#lastvaluequery) | N | The query parameters |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [lastValueData](_schemas.md#lastvaluedata) | Last known data for the requested attribute |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if application was not found |

### Example
```javascript
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
