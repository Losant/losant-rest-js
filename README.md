# Structure API - v1.0.0
User API for accessing Structure data

## Usage
To create a new API client:
```javascript
var api = require('structure-api-js');

var client = api.createClient({
  accessToken: '...'
});
```
## API Reference


#### accessToken.get
Retrieves information on an accessToken


##### Parameters
- {string} accessTokenId - ID associated with the accessToken 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Device information (https://api.getstructure.io/#/definitions/accessToken)
- 404 - Error if accessToken was not found 

##### Example
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

#### accessToken.patch
Updates information about a accessToken


##### Parameters
- {string} accessTokenId - ID associated with the accessToken 
- {object} accessToken - Object containing new properties of the accessToken (https://api.getstructure.io/#/definitions/accessToken)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated accessToken information (https://api.getstructure.io/#/definitions/accessToken)
- 404 - Error if accessToken was not found 

##### Example
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

#### accessToken.delete
Deletes a accessToken


##### Parameters
- {string} accessTokenId - ID associated with the accessToken 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 204 - If accessToken was successfully deleted 
- 404 - Error if accessToken was not found 

##### Example
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


#### accessTokens.get
Returns the accessTokens for a user


##### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of accessTokens (https://api.getstructure.io/#/definitions/accessTokens)

##### Example
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

#### accessTokens.post
Create a new accessKey for a user


##### Parameters
- {object} accessToken - AccessToken information (https://api.getstructure.io/#/definitions/accessToken)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If accessKey was successfully created 

##### Example
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


#### auth.authenticateUser

Authenticates a user using the provided credentials

##### Parameters
- {object} credentials - User authentication credentials (https://api.getstructure.io/#/definitions/userCredentials)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If authentication is successful 
- 401 - Unauthorized error if authentication fails 

##### Example
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

#### auth.authenticateGateway

Authenticates a gateway using the provided credentials

##### Parameters
- {object} credentials - Gateway authentication credentials (https://api.getstructure.io/#/definitions/gatewayCredentials)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If authentication is successful 
- 401 - Unauthorized error if authentication fails 

##### Example
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


#### device.get
Retrieves information on an device


##### Parameters
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Device information (https://api.getstructure.io/#/definitions/device)
- 404 - Error if device was not found 

##### Example
```javascript
// with callbacks
client.device.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.get(params)
  .then(console.log)
  .catch(console.error);
```

#### device.patch
Updates information about a device


##### Parameters
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {object} device - Object containing new properties of the device (https://api.getstructure.io/#/definitions/device)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated device information (https://api.getstructure.io/#/definitions/device)
- 404 - Error if device was not found 

##### Example
```javascript
// with callbacks
client.device.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### device.delete
Deletes a device


##### Parameters
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 204 - If device was successfully deleted 
- 404 - Error if device was not found 

##### Example
```javascript
// with callbacks
client.device.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### device.retrieveState
Retrieves the last known device state


##### Parameters
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Last known device state 

##### Example
```javascript
// with callbacks
client.device.retrieveState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.retrieveState(params)
  .then(console.log)
  .catch(console.error);
```

#### device.sendState
Sends the current state of the device


##### Parameters
- {string} projectId - ID associated with the project 
- {string} deviceId - ID associated with the device 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If state device was successfully sent 

##### Example
```javascript
// with callbacks
client.device.sendState(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.device.sendState(params)
  .then(console.log)
  .catch(console.error);
```


#### devices.get
Returns the devices for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of devices (https://api.getstructure.io/#/definitions/devices)

##### Example
```javascript
// with callbacks
client.devices.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.devices.get(params)
  .then(console.log)
  .catch(console.error);
```

#### devices.post
Create a new device for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {object} device - New device information (https://api.getstructure.io/#/definitions/device)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If device was successfully created 

##### Example
```javascript
// with callbacks
client.devices.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.devices.post(params)
  .then(console.log)
  .catch(console.error);
```


#### emailVerifications.verify

Complete an email verification

##### Parameters
- {object} data - Email verification information (https://api.getstructure.io/#/definitions/email-verification-verify)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If email verification is successfull (https://api.getstructure.io/#/definitions/success)

##### Example
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


#### flow.get
Retrieves information on an flow


##### Parameters
- {string} projectId - ID associated with the project 
- {string} flowId - ID associated with the flow 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Flow information (https://api.getstructure.io/#/definitions/flow)
- 404 - Error if flow was not found 

##### Example
```javascript
// with callbacks
client.flow.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.get(params)
  .then(console.log)
  .catch(console.error);
```

#### flow.patch
Updates information about a flow


##### Parameters
- {string} projectId - ID associated with the project 
- {string} flowId - ID associated with the flow 
- {object} flow - Object containing new properties of the flow (https://api.getstructure.io/#/definitions/flow)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated device information (https://api.getstructure.io/#/definitions/flow)
- 404 - Error if flow is not found 

##### Example
```javascript
// with callbacks
client.flow.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### flow.delete
Deletes a flow


##### Parameters
- {string} projectId - ID associated with the project 
- {string} flowId - ID associated with the flow 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 204 - If flow was successfully deleted 
- 404 - Error if flow was not found 

##### Example
```javascript
// with callbacks
client.flow.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flow.delete(params)
  .then(console.log)
  .catch(console.error);
```


#### flows.get
Returns the flows for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of flows (https://api.getstructure.io/#/definitions/flows)

##### Example
```javascript
// with callbacks
client.flows.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flows.get(params)
  .then(console.log)
  .catch(console.error);
```

#### flows.post
Create a new flow for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {object} flow - New flow information (https://api.getstructure.io/#/definitions/flow)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If flow was successfully created 

##### Example
```javascript
// with callbacks
client.flows.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flows.post(params)
  .then(console.log)
  .catch(console.error);
```


#### gateway.get
Retrieves information on an gateway


##### Parameters
- {string} projectId - ID associated with the project 
- {string} gatewayId - ID associated with the gateway 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Gateway information (https://api.getstructure.io/#/definitions/gateway)
- 404 - Error if gateway was not found 

##### Example
```javascript
// with callbacks
client.gateway.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.get(params)
  .then(console.log)
  .catch(console.error);
```

#### gateway.patch
Updates information about a gateway


##### Parameters
- {string} projectId - ID associated with the project 
- {string} gatewayId - ID associated with the gateway 
- {object} gateway - Object containing new properties of the gateway (https://api.getstructure.io/#/definitions/gateway)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated gateway information (https://api.getstructure.io/#/definitions/gateway)
- 404 - Error if gateway was not found 

##### Example
```javascript
// with callbacks
client.gateway.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### gateway.delete
Deletes a gateway


##### Parameters
- {string} projectId - ID associated with the project 
- {string} gatewayId - ID associated with the gateway 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 204 - If gateway was successfully deleted 
- 404 - Error if gateway was not found 

##### Example
```javascript
// with callbacks
client.gateway.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.delete(params)
  .then(console.log)
  .catch(console.error);
```


#### gateways.get
Returns the gateways for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of gateways (https://api.getstructure.io/#/definitions/gateways)

##### Example
```javascript
// with callbacks
client.gateways.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateways.get(params)
  .then(console.log)
  .catch(console.error);
```

#### gateways.post
Create a new gateway for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {object} gateway - New gateway information (https://api.getstructure.io/#/definitions/gateway)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If gateway was successfully created 

##### Example
```javascript
// with callbacks
client.gateways.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateways.post(params)
  .then(console.log)
  .catch(console.error);
```


#### me.get
Retrieves information on the current user


##### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Current user information (https://api.getstructure.io/#/definitions/me)

##### Example
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

#### me.patch
Updates information about the current user


##### Parameters
- {object} user - Object containing new user properties (https://api.getstructure.io/#/definitions/me)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated user information (https://api.getstructure.io/#/definitions/me)

##### Example
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


#### org.get
Retrieves information on an organization


##### Parameters
- {string} orgId - ID associated with the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Organization information (https://api.getstructure.io/#/definitions/org)
- 404 - Error if organization not found 

##### Example
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

#### org.patch
Updates information about an organization


##### Parameters
- {string} orgId - ID associated with the organization 
- {object} organization - Object containing new organization properties (https://api.getstructure.io/#/definitions/org)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated organization information (https://api.getstructure.io/#/definitions/org)
- 404 - Error if organization was not found 

##### Example
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

#### org.delete
Deletes an organization


##### Parameters
- {string} orgId - ID associated with the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If organization was successfully deleted 
- 404 - Error if organization was not found 

##### Example
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


#### orgs.get
Returns the organizations associated with the current user


##### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of organizations (https://api.getstructure.io/#/definitions/orgs)

##### Example
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

#### orgs.post
Create a new organization


##### Parameters
- {object} organization - New organization information (https://api.getstructure.io/#/definitions/org)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If organization was successfully created 

##### Example
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


#### orgProjects.get
Returns the projects owned by the organization


##### Parameters
- {string} orgId - Id of the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of org projects 

##### Example
```javascript
// with callbacks
client.orgProjects.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.get(params)
  .then(console.log)
  .catch(console.error);
```

#### orgProjects.post
Create a new project owned by the organization


##### Parameters
- {string} orgId - Id of the organization 
- {object} project - Project information (https://api.getstructure.io/#/definitions/project)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If project was successfully created 

##### Example
```javascript
// with callbacks
client.orgProjects.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.post(params)
  .then(console.log)
  .catch(console.error);
```

#### orgProjects.delete
Deletes a project owned by the organization


##### Parameters
- {string} orgId - Id of the organization 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If project was successfully deleted 
- 404 - Error if project was not found 

##### Example
```javascript
// with callbacks
client.orgProjects.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.delete(params)
  .then(console.log)
  .catch(console.error);
```


#### passwordResets.post

Creates a new password reset

##### Parameters
- {object} data - Password reset information (https://api.getstructure.io/#/definitions/passwordResetInput)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If password reset was created successfully (https://api.getstructure.io/#/definitions/success)

##### Example
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

#### passwordResets.finish

Completes the password reset

##### Parameters
- {object} data - Password reset information (https://api.getstructure.io/#/definitions/passwordResetFinish)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If password reset was successfully finished (https://api.getstructure.io/#/definitions/success)

##### Example
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


#### project.get
Retrieves information on an project


##### Parameters
- {string} projectId - ID of the associated project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Project information (https://api.getstructure.io/#/definitions/project)
- 404 - Error if project was not found 

##### Example
```javascript
// with callbacks
client.project.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.project.get(params)
  .then(console.log)
  .catch(console.error);
```

#### project.patch
Updates information about a project


##### Parameters
- {string} projectId - ID of the associated project 
- {object} project - Object containing new project properties (https://api.getstructure.io/#/definitions/project)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Update project information (https://api.getstructure.io/#/definitions/project)
- 404 - Error if project was not found 

##### Example
```javascript
// with callbacks
client.project.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.project.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### project.delete
Deletes a project


##### Parameters
- {string} projectId - ID of the associated project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - If project was successfully deleted 
- 404 - Error if project was not found 

##### Example
```javascript
// with callbacks
client.project.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.project.delete(params)
  .then(console.log)
  .catch(console.error);
```


#### projects.get
Returns the projects owned by the current user


##### Parameters
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of projects (https://api.getstructure.io/#/definitions/projects)

##### Example
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

#### projects.post
Create a new project owned by the current user


##### Parameters
- {object} project - New project information (https://api.getstructure.io/#/definitions/project)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If project was successfully created 

##### Example
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


#### projectKey.get
Retrieves information on an projectKey


##### Parameters
- {string} projectId - ID associated with the project 
- {string} projectKeyId - ID associated with the projectKey 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Device information (https://api.getstructure.io/#/definitions/projectKey)
- 404 - Error if projectKey was not found 

##### Example
```javascript
// with callbacks
client.projectKey.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKey.get(params)
  .then(console.log)
  .catch(console.error);
```

#### projectKey.patch
Updates information about a projectKey


##### Parameters
- {string} projectId - ID associated with the project 
- {string} projectKeyId - ID associated with the projectKey 
- {object} projectKey - Object containing new properties of the projectKey (https://api.getstructure.io/#/definitions/projectKey)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Updated projectKey information (https://api.getstructure.io/#/definitions/projectKey)
- 404 - Error if projectKey was not found 

##### Example
```javascript
// with callbacks
client.projectKey.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKey.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### projectKey.delete
Deletes a projectKey


##### Parameters
- {string} projectId - ID associated with the project 
- {string} projectKeyId - ID associated with the projectKey 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 204 - If projectKey was successfully deleted 
- 404 - Error if projectKey was not found 

##### Example
```javascript
// with callbacks
client.projectKey.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKey.delete(params)
  .then(console.log)
  .catch(console.error);
```


#### projectKeys.get
Returns the projectKeys for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 200 - Collection of projectKeys (https://api.getstructure.io/#/definitions/projectKeys)

##### Example
```javascript
// with callbacks
client.projectKeys.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKeys.get(params)
  .then(console.log)
  .catch(console.error);
```

#### projectKeys.post
Create a new projectKey for a project


##### Parameters
- {string} projectId - ID associated with the project 
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If projectKey was successfully created 

##### Example
```javascript
// with callbacks
client.projectKeys.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projectKeys.post(params)
  .then(console.log)
  .catch(console.error);
```


#### users.post
Create a new user account


##### Parameters
- {object} user - New user information (https://api.getstructure.io/#/definitions/newUser)
- {boolean} _actions - Return resource actions in response 
- {boolean} _links - Return resource link in response 
- {boolean} _embedded - Return embedded resources in response 

##### Responses
- 201 - If the user was successfully created 

##### Example
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
