# Auth
Structure API - v1.0.0

## auth.authenticateUser

Authenticates a user using the provided credentials


### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| credentials | [userCredentials](_schemas.md#/definitions/userCredentials) | N | User authentication credentials |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If authentication is successful |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 401 | undefined | Unauthorized error if authentication fails |

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
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| credentials | [gatewayCredentials](_schemas.md#/definitions/gatewayCredentials) | N | Gateway authentication credentials |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If authentication is successful |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 401 | undefined | Unauthorized error if authentication fails |

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
