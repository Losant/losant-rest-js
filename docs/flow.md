# Flow
Structure API

## flow.get
Retrieves information on an flow



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| flowId | string | Y | ID associated with the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [flow](_schemas.md#flow) | Flow information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if flow was not found |

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
| applicationId | string | Y | ID associated with the application |
| flowId | string | Y | ID associated with the flow |
| flow | [flowPatch](_schemas.md#flowpatch) | Y | Object containing new properties of the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [flow](_schemas.md#flow) | Updated flow information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if flow is not found |

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
| applicationId | string | Y | ID associated with the application |
| flowId | string | Y | ID associated with the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If flow was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if flow was not found |

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
## flow.debug
Streams real time flow debug events using SSE



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| flowId | string | Y | ID associated with the flow |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | Stream of flow debug events |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if flow was not found |

### Example
```javascript
// with callbacks
client.flow.debug(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.debug(params)
  .then(console.log)
  .catch(console.error);
```
## flow.getLogEntries
Retrieve the recent log entries about the flows



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| flowId | string | Y | ID associated with the flow |
| limit | string | N | undefined |
| since | string | N | undefined |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | Recent log entries |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device was not found |

### Example
```javascript
// with callbacks
client.flow.getLogEntries(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.getLogEntries(params)
  .then(console.log)
  .catch(console.error);
```
## flow.pressVirtualButton
Presses the specified virtual button on the flow



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| flowId | string | Y | ID associated with the flow |
| button | [virtualButtonPress](_schemas.md#virtualbuttonpress) | Y | Object containing button key and payload |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | Virtual button was pressed |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if flow was not found |

### Example
```javascript
// with callbacks
client.flow.pressVirtualButton(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.pressVirtualButton(params)
  .then(console.log)
  .catch(console.error);
```
