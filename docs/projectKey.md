# Project Key
Structure API - v1.0.0

## projectKey.get
Retrieves information on an projectKey


### Parameters
- {string} projectId - ID associated with the project 
- {string} projectKeyId - ID associated with the projectKey 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Device information (https://api.getstructure.io/#/definitions/projectKey)
- 404 - Error if projectKey was not found 

### Example
```javascript
// with callbacks
client.projectKey.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKey.get(params)
  .then(console.log)
  .catch(console.error);
```
## projectKey.patch
Updates information about a projectKey


### Parameters
- {string} projectId - ID associated with the project 
- {string} projectKeyId - ID associated with the projectKey 
- {object} projectKey - Object containing new properties of the projectKey (https://api.getstructure.io/#/definitions/projectKey)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated projectKey information (https://api.getstructure.io/#/definitions/projectKey)
- 404 - Error if projectKey was not found 

### Example
```javascript
// with callbacks
client.projectKey.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKey.patch(params)
  .then(console.log)
  .catch(console.error);
```
## projectKey.delete
Deletes a projectKey


### Parameters
- {string} projectId - ID associated with the project 
- {string} projectKeyId - ID associated with the projectKey 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 204 - If projectKey was successfully deleted 
- 404 - Error if projectKey was not found 

### Example
```javascript
// with callbacks
client.projectKey.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKey.delete(params)
  .then(console.log)
  .catch(console.error);
```
