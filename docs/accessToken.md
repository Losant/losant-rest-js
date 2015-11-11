# Access Token
Structure API - v1.0.0

## accessToken.get
Retrieves information on an accessToken


### Parameters
- {string} accessTokenId - ID associated with the accessToken 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Device information (https://api.getstructure.io/#/definitions/accessToken)
- 404 - Error if accessToken was not found 

### Example
```javascript
// with callbacks
client.accessToken.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.accessToken.get(params)
  .then(console.log)
  .catch(console.error);
```
## accessToken.patch
Updates information about a accessToken


### Parameters
- {string} accessTokenId - ID associated with the accessToken 
- {object} accessToken - Object containing new properties of the accessToken (https://api.getstructure.io/#/definitions/accessToken)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Updated accessToken information (https://api.getstructure.io/#/definitions/accessToken)
- 404 - Error if accessToken was not found 

### Example
```javascript
// with callbacks
client.accessToken.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.accessToken.patch(params)
  .then(console.log)
  .catch(console.error);
```
## accessToken.delete
Deletes a accessToken


### Parameters
- {string} accessTokenId - ID associated with the accessToken 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 204 - If accessToken was successfully deleted 
- 404 - Error if accessToken was not found 

### Example
```javascript
// with callbacks
client.accessToken.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.accessToken.delete(params)
  .then(console.log)
  .catch(console.error);
```
