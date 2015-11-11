# Devices
Structure API - v1.0.0

## devices.get
Returns the devices for a project


### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of devices (https://api.getstructure.io/#/definitions/devices)

### Example
```javascript
// with callbacks
client.devices.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.devices.get(params)
  .then(console.log)
  .catch(console.error);
```
## devices.post
Create a new device for a project


### Parameters
- {string} projectId - ID associated with the project 
- {object} device - New device information (https://api.getstructure.io/#/definitions/device)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If device was successfully created 

### Example
```javascript
// with callbacks
client.devices.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.devices.post(params)
  .then(console.log)
  .catch(console.error);
```
