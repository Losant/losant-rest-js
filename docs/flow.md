# Flow
Structure API - v1.0.0

## flow.get
Retrieves information on an flow


### Parameters
- {string} projectId - ID associated with the project 
- {string} flowId - ID associated with the flow 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Flow information (https://api.getstructure.io/#/definitions/flow)
- 404 - Error if flow was not found 

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
- {string} projectId - ID associated with the project 
- {string} flowId - ID associated with the flow 
- {object} flow - Object containing new properties of the flow (https://api.getstructure.io/#/definitions/flow)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated device information (https://api.getstructure.io/#/definitions/flow)
- 404 - Error if flow is not found 

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
- {string} projectId - ID associated with the project 
- {string} flowId - ID associated with the flow 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 204 - If flow was successfully deleted 
- 404 - Error if flow was not found 

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
