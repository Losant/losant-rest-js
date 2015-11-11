# Project
Structure API - v1.0.0

## project.get
Retrieves information on an project


### Parameters
- {string} projectId - ID of the associated project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Project information (https://api.getstructure.io/#/definitions/project)
- 404 - Error if project was not found 

### Example
```javascript
// with callbacks
client.project.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.project.get(params)
  .then(console.log)
  .catch(console.error);
```
## project.patch
Updates information about a project


### Parameters
- {string} projectId - ID of the associated project 
- {object} project - Object containing new project properties (https://api.getstructure.io/#/definitions/project)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Update project information (https://api.getstructure.io/#/definitions/project)
- 404 - Error if project was not found 

### Example
```javascript
// with callbacks
client.project.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.project.patch(params)
  .then(console.log)
  .catch(console.error);
```
## project.delete
Deletes a project


### Parameters
- {string} projectId - ID of the associated project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If project was successfully deleted 
- 404 - Error if project was not found 

### Example
```javascript
// with callbacks
client.project.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.project.delete(params)
  .then(console.log)
  .catch(console.error);
```
