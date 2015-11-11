# Project Keys
Structure API - v1.0.0

## projectKeys.get
Returns the projectKeys for a project


### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of projectKeys (https://api.getstructure.io/#/definitions/projectKeys)

### Example
```javascript
// with callbacks
client.projectKeys.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKeys.get(params)
  .then(console.log)
  .catch(console.error);
```
## projectKeys.post
Create a new projectKey for a project


### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If projectKey was successfully created 

### Example
```javascript
// with callbacks
client.projectKeys.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKeys.post(params)
  .then(console.log)
  .catch(console.error);
```
