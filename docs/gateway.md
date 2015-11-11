# Gateway
Structure API - v1.0.0

## gateway.get
Retrieves information on an gateway


### Parameters
- {string} projectId - ID associated with the project 
- {string} gatewayId - ID associated with the gateway 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Gateway information (https://api.getstructure.io/#/definitions/gateway)
- 404 - Error if gateway was not found 

### Example
```javascript
// with callbacks
client.gateway.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.get(params)
  .then(console.log)
  .catch(console.error);
```
## gateway.patch
Updates information about a gateway


### Parameters
- {string} projectId - ID associated with the project 
- {string} gatewayId - ID associated with the gateway 
- {object} gateway - Object containing new properties of the gateway (https://api.getstructure.io/#/definitions/gateway)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated gateway information (https://api.getstructure.io/#/definitions/gateway)
- 404 - Error if gateway was not found 

### Example
```javascript
// with callbacks
client.gateway.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.patch(params)
  .then(console.log)
  .catch(console.error);
```
## gateway.delete
Deletes a gateway


### Parameters
- {string} projectId - ID associated with the project 
- {string} gatewayId - ID associated with the gateway 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 204 - If gateway was successfully deleted 
- 404 - Error if gateway was not found 

### Example
```javascript
// with callbacks
client.gateway.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.delete(params)
  .then(console.log)
  .catch(console.error);
```
