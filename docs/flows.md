# Flows
Structure API - v1.0.0

## flows.get
Returns the flows for a project


### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of flows (https://api.getstructure.io/#/definitions/flows)

### Example
```javascript
// with callbacks
client.flows.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flows.get(params)
  .then(console.log)
  .catch(console.error);
```
## flows.post
Create a new flow for a project


### Parameters
- {string} projectId - ID associated with the project 
- {object} flow - New flow information (https://api.getstructure.io/#/definitions/flow)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If flow was successfully created 

### Example
```javascript
// with callbacks
client.flows.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flows.post(params)
  .then(console.log)
  .catch(console.error);
```
