# Data
Structure API - v0.1.0

## data.get
Returns the data for the given query



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| start | undefined | N | undefined |
| end | undefined | N | undefined |
| duration | undefined | N | undefined |
| resolution | undefined | N | undefined |
| aggregation | undefined | N | undefined |
| attributes | array | N | undefined |
| deviceTags | array | N | undefined |
| deviceIds | array | N | undefined |
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

### Example
```javascript
// with callbacks
client.data.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.data.get(params)
  .then(console.log)
  .catch(console.error);
```
