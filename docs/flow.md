# Flow
Structure API - v1.0.0

## flow.get
Retrieves information on an flow



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| flowId | string | Y | ID associated with the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [flow](_schemas.md#/definitions/flow) | Flow information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if flow was not found |

### Example
```javascript
// with callbacks
client.flow.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.get(params)
  .then(console.log)
  .catch(console.error);
```
## flow.patch
Updates information about a flow



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| flowId | string | Y | ID associated with the flow |
| flow | [flow](_schemas.md#/definitions/flow) | N | Object containing new properties of the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [flow](_schemas.md#/definitions/flow) | Updated device information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if flow is not found |

### Example
```javascript
// with callbacks
client.flow.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.patch(params)
  .then(console.log)
  .catch(console.error);
```
## flow.delete
Deletes a flow



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| flowId | string | Y | ID associated with the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If flow was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if flow was not found |

### Example
```javascript
// with callbacks
client.flow.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.delete(params)
  .then(console.log)
  .catch(console.error);
```
