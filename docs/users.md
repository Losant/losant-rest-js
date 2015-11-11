# Users
Structure API - v1.0.0

## users.post
Create a new user account


### Parameters
- {object} user - New user information (https://api.getstructure.io/#/definitions/newUser)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If the user was successfully created 

### Example
```javascript
// with callbacks
client.users.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.users.post(params)
  .then(console.log)
  .catch(console.error);
```
