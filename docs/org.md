# Org
Structure API - v1.0.0

## org.get
Retrieves information on an organization


### Parameters
- {string} orgId - ID associated with the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Organization information (https://api.getstructure.io/#/definitions/org)
- 404 - Error if organization not found 

### Example
```javascript
// with callbacks
client.org.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.get(params)
  .then(console.log)
  .catch(console.error);
```
## org.patch
Updates information about an organization


### Parameters
- {string} orgId - ID associated with the organization 
- {object} organization - Object containing new organization properties (https://api.getstructure.io/#/definitions/org)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated organization information (https://api.getstructure.io/#/definitions/org)
- 404 - Error if organization was not found 

### Example
```javascript
// with callbacks
client.org.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.patch(params)
  .then(console.log)
  .catch(console.error);
```
## org.delete
Deletes an organization


### Parameters
- {string} orgId - ID associated with the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If organization was successfully deleted 
- 404 - Error if organization was not found 

### Example
```javascript
// with callbacks
client.org.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.delete(params)
  .then(console.log)
  .catch(console.error);
```
