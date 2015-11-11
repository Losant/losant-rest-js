# Projects
Structure API - v1.0.0

## projects.get
Returns the projects owned by the current user


### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of projects (https://api.getstructure.io/#/definitions/projects)

### Example
```javascript
// with callbacks
client.projects.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projects.get(params)
  .then(console.log)
  .catch(console.error);
```
## projects.post
Create a new project owned by the current user


### Parameters
- {object} project - New project information (https://api.getstructure.io/#/definitions/project)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If project was successfully created 

### Example
```javascript
// with callbacks
client.projects.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projects.post(params)
  .then(console.log)
  .catch(console.error);
```
