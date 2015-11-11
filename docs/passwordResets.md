# Password Resets
Structure API - v1.0.0

## passwordResets.post

Creates a new password reset

### Parameters
- {object} data - Password reset information (https://api.getstructure.io/#/definitions/passwordResetInput)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If password reset was created successfully (https://api.getstructure.io/#/definitions/success)

### Example
```javascript
// with callbacks
client.passwordResets.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.passwordResets.post(params)
  .then(console.log)
  .catch(console.error);
```
## passwordResets.finish

Completes the password reset

### Parameters
- {object} data - Password reset information (https://api.getstructure.io/#/definitions/passwordResetFinish)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If password reset was successfully finished (https://api.getstructure.io/#/definitions/success)

### Example
```javascript
// with callbacks
client.passwordResets.finish(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.passwordResets.finish(params)
  .then(console.log)
  .catch(console.error);
```
