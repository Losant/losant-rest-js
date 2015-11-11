# Email Verifications
Structure API - v1.0.0

## emailVerifications.verify

Complete an email verification

### Parameters
- {object} data - Email verification information (https://api.getstructure.io/#/definitions/email-verification-verify)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

### Responses
- 200 - If email verification is successfull (https://api.getstructure.io/#/definitions/success)

### Example
```javascript
// with callbacks
client.emailVerifications.verify(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.emailVerifications.verify(params)
  .then(console.log)
  .catch(console.error);
```
