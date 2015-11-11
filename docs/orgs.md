# Orgs
Structure API - v1.0.0

## orgs.get
Returns the organizations associated with the current user


### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of organizations (https://api.getstructure.io/#/definitions/orgs)

### Example
```javascript
// with callbacks
client.orgs.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgs.get(params)
  .then(console.log)
  .catch(console.error);
```
## orgs.post
Create a new organization


### Parameters
- {object} organization - New organization information (https://api.getstructure.io/#/definitions/org)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If organization was successfully created 

### Example
```javascript
// with callbacks
client.orgs.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgs.post(params)
  .then(console.log)
  .catch(console.error);
```
