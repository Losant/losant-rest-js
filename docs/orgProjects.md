# Org Projects
Structure API - v1.0.0

## orgProjects.get
Returns the projects owned by the organization


### Parameters
- {string} orgId - Id of the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of org projects 

### Example
```javascript
// with callbacks
client.orgProjects.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.get(params)
  .then(console.log)
  .catch(console.error);
```
## orgProjects.post
Create a new project owned by the organization


### Parameters
- {string} orgId - Id of the organization 
- {object} project - Project information (https://api.getstructure.io/#/definitions/project)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If project was successfully created 

### Example
```javascript
// with callbacks
client.orgProjects.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.post(params)
  .then(console.log)
  .catch(console.error);
```
## orgProjects.delete
Deletes a project owned by the organization


### Parameters
- {string} orgId - Id of the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If project was successfully deleted 
- 404 - Error if project was not found 

### Example
```javascript
// with callbacks
client.orgProjects.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.delete(params)
  .then(console.log)
  .catch(console.error);
```
