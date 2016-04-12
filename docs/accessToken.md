# Access Token
Losant API

## accessToken.get
Retrieves information on an accessToken



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| accessTokenId | string | Y | ID associated with the accessToken |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [accessToken](_schemas.md#accesstoken) | Device information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if accessToken was not found |

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
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| accessTokenId | string | Y | ID associated with the accessToken |
| accessToken | [accessTokenPatch](_schemas.md#accesstokenpatch) | Y | Object containing new properties of the accessToken |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [accessToken](_schemas.md#accesstoken) | Updated accessToken information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if accessToken was not found |

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
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| accessTokenId | string | Y | ID associated with the accessToken |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If accessToken was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if accessToken was not found |

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
