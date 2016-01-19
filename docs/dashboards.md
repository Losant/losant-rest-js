# Dashboards
Structure API - v0.1.0

## dashboards.get
Returns the dashboards owned by the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| sortField | string | N | undefined |
| sortDirection | string | N | undefined |
| page | string | N | undefined |
| perPage | string | N | undefined |
| filterField | string | N | undefined |
| filter | string | N | undefined |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [dashboards](_schemas.md#dashboards) | Collection of dashboards |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.dashboards.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.dashboards.get(params)
  .then(console.log)
  .catch(console.error);
```
## dashboards.post
Create a new dasboard owned by the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dashboard | [dashboardPost](_schemas.md#dashboardpost) | N | New dashboard information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [dashboard](_schemas.md#dashboard) | Successfully created dashboard |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.dashboards.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.dashboards.post(params)
  .then(console.log)
  .catch(console.error);
```
