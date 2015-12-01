# Device
Structure API - v1.0.0

## device.get
Retrieves information on an device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [device](_schemas.md#device) | Device information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.get(params)
  .then(console.log)
  .catch(console.error);
```
## device.patch
Updates information about a device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| device | [device](_schemas.md#device) | N | Object containing new properties of the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [device](_schemas.md#device) | Updated device information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.patch(params)
  .then(console.log)
  .catch(console.error);
```
## device.delete
Deletes a device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If device was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.delete(params)
  .then(console.log)
  .catch(console.error);
```
## device.retrieveLastReportedState
Retrieve the last known state of the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [deviceState](_schemas.md#devicestate) | Last known device state |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.retrieveLastReportedState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.retrieveLastReportedState(params)
  .then(console.log)
  .catch(console.error);
```
## device.sendStateChangeRequest
Request for the device to change to the given state



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| deviceState | [deviceState](_schemas.md#devicestate) | N | Object containing the requested state of the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If change request was successfully sent |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.sendStateChangeRequest(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.sendStateChangeRequest(params)
  .then(console.log)
  .catch(console.error);
```
## device.reportCurrentState
Report the current state of the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| deviceState | [deviceState](_schemas.md#devicestate) | N | Object containing the current state of the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If state was successfully received |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.reportCurrentState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.reportCurrentState(params)
  .then(console.log)
  .catch(console.error);
```
## device.sendMessage
Send a message about the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| deviceId | string | Y | ID associated with the device |
| message | undefined | N | Message to send about the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If message was successfully sent |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.sendMessage(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.sendMessage(params)
  .then(console.log)
  .catch(console.error);
```
