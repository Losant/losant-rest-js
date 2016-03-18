# Dashboard
Structure API

## dashboard.get
Retrieves information on an dashboard



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dashboardId | string | Y | ID of the associated dashboard |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [dashboard](_schemas.md#dashboard) | Dashboard information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if dashboard was not found |

### Example
```javascript
// with callbacks
client.dashboard.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.dashboard.get(params)
  .then(console.log)
  .catch(console.error);
```
## dashboard.patch
Updates information about a dashboard



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dashboardId | string | Y | ID of the associated dashboard |
| dashboard | [dashboardPatch](_schemas.md#dashboardpatch) | Y | Object containing new dashboard properties |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [dashboard](_schemas.md#dashboard) | Update dashboard information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if dashboard was not found |

### Example
```javascript
// with callbacks
client.dashboard.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.dashboard.patch(params)
  .then(console.log)
  .catch(console.error);
```
## dashboard.delete
Deletes an dashboard



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| dashboardId | string | Y | ID of the associated dashboard |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If dashboard was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if dashboard was not found |

### Example
```javascript
// with callbacks
client.dashboard.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.dashboard.delete(params)
  .then(console.log)
  .catch(console.error);
```
