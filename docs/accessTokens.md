# Access Tokens
Structure API - v1.0.0

## accessTokens.get
Returns the accessTokens for a user


### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - Collection of accessTokens (https://api.getstructure.io/#/definitions/accessTokens)

### Example
```javascript
// with callbacks
client.accessTokens.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.accessTokens.get(params)
  .then(console.log)
  .catch(console.error);
```
## accessTokens.post
Create a new accessKey for a user


### Parameters
- {object} accessToken - AccessToken information (https://api.getstructure.io/#/definitions/accessToken)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 201 - If accessKey was successfully created 

### Example
```javascript
// with callbacks
client.accessTokens.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.accessTokens.post(params)
  .then(console.log)
  .catch(console.error);
```
