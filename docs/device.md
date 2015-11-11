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
## device.retrieveState
Retrieves the last known device state



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
| 200 | undefined | Last known device state |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.device.retrieveState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.retrieveState(params)
  .then(console.log)
  .catch(console.error);
```
## device.sendState
Sends the current state of the device



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
| 200 | undefined | If state device was successfully sent |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

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
