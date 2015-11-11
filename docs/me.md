# Me
Structure API - v1.0.0

## me.get
Retrieves information on the current user


### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Current user information (https://api.getstructure.io/#/definitions/me)

### Example
```javascript
// with callbacks
client.me.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.get(params)
  .then(console.log)
  .catch(console.error);
```
## me.patch
Updates information about the current user


### Parameters
- {object} user - Object containing new user properties (https://api.getstructure.io/#/definitions/me)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated user information (https://api.getstructure.io/#/definitions/me)

### Example
```javascript
// with callbacks
client.me.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.patch(params)
  .then(console.log)
  .catch(console.error);
```
