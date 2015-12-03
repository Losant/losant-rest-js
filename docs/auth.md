# Auth
Structure API - v0.1.0

## auth.authenticateUser

Authenticates a user using the provided credentials


### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| credentials | [userCredentials](_schemas.md#usercredentials) | N | User authentication credentials |
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
## auth.authenticateDevice

Authenticates a device using the provided credentials


### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| credentials | [deviceCredentials](_schemas.md#devicecredentials) | N | Device authentication credentials |
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
client.auth.authenticateDevice(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.auth.authenticateDevice(params)
  .then(console.log)
  .catch(console.error);
```
