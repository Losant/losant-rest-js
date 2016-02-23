# Access Tokens
Structure API

## accessTokens.get
Returns the accessTokens for a user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [accessTokens](_schemas.md#accesstokens) | Collection of accessTokens |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

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
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| accessToken | [accessToken](_schemas.md#accesstoken) | N | AccessToken information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [accessToken](_schemas.md#accesstoken) | Successfully created access token |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |

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
