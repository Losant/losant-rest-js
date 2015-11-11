# Auth
Structure API - v1.0.0

## auth.authenticateUser

Authenticates a user using the provided credentials

### Parameters
- {object} credentials - User authentication credentials (https://api.getstructure.io/#/definitions/userCredentials)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If authentication is successful 
- 401 - Unauthorized error if authentication fails 

### Example
```javascript
// with callbacks
client.auth.authenticateUser(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.auth.authenticateUser(params)
  .then(console.log)
  .catch(console.error);
```
## auth.authenticateGateway

Authenticates a gateway using the provided credentials

### Parameters
- {object} credentials - Gateway authentication credentials (https://api.getstructure.io/#/definitions/gatewayCredentials)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If authentication is successful 
- 401 - Unauthorized error if authentication fails 

### Example
```javascript
// with callbacks
client.auth.authenticateGateway(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.auth.authenticateGateway(params)
  .then(console.log)
  .catch(console.error);
```
