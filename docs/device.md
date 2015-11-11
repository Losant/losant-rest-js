# Device
Structure API - v1.0.0

## device.get
Retrieves information on an device


### Parameters
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Device information (https://api.getstructure.io/#/definitions/device)
- 404 - Error if device was not found 

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
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {object} device - Object containing new properties of the device (https://api.getstructure.io/#/definitions/device)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated device information (https://api.getstructure.io/#/definitions/device)
- 404 - Error if device was not found 

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
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 204 - If device was successfully deleted 
- 404 - Error if device was not found 

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
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Last known device state 

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
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If state device was successfully sent 

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
