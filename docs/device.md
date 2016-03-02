# Device
Structure API

## device.get
Retrieves information on an device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
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
| 404 | [error](_schemas.md#error) | Error if device was not found |

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
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
| device | [devicePatch](_schemas.md#devicepatch) | N | Object containing new properties of the device |
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
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if device was not found |

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
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If device was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device was not found |

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
## device.getState
Retrieve the last known state(s) of the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
| limit | string | N | undefined |
| since | string | N | undefined |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [deviceStates](_schemas.md#devicestates) | Recent device states |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.getState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.getState(params)
  .then(console.log)
  .catch(console.error);
```
## device.sendState
Send the current state of the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
| deviceState | [deviceState](_schemas.md#devicestate) | N | Object containing the current state of the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If state was successfully received |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.sendState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.sendState(params)
  .then(console.log)
  .catch(console.error);
```
## device.getCommand
Retrieve the last known commands(s) sent to the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
| limit | string | N | undefined |
| since | string | N | undefined |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [deviceCommands](_schemas.md#devicecommands) | Recent device commands |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.getCommand(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.getCommand(params)
  .then(console.log)
  .catch(console.error);
```
## device.sendCommand
Send a command to a device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
| deviceCommand | [deviceCommand](_schemas.md#devicecommand) | N | Command to send to the device |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If command was successfully sent |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if device was not found |

### Example
```javascript
// with callbacks
client.device.sendCommand(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.sendCommand(params)
  .then(console.log)
  .catch(console.error);
```
## device.getLogEntries
Retrieve the recent log entries about the device



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceId | string | Y | ID associated with the device |
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
client.device.getLogEntries(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.getLogEntries(params)
  .then(console.log)
  .catch(console.error);
```
