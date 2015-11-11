# Gateways
Structure API - v1.0.0

## gateways.get
Returns the gateways for a project


### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of gateways (https://api.getstructure.io/#/definitions/gateways)

### Example
```javascript
// with callbacks
client.gateways.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateways.get(params)
  .then(console.log)
  .catch(console.error);
```
## gateways.post
Create a new gateway for a project


### Parameters
- {string} projectId - ID associated with the project 
- {object} gateway - New gateway information (https://api.getstructure.io/#/definitions/gateway)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If gateway was successfully created 

### Example
```javascript
// with callbacks
client.gateways.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateways.post(params)
  .then(console.log)
  .catch(console.error);
```
