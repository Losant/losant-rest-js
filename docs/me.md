# Me
Structure API - v0.1.0

## me.get
Retrieves information on the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [me](_schemas.md#me) | Current user information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
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
## me.patch
Updates information about the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| user | [me](_schemas.md#me) | N | Object containing new user properties |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [me](_schemas.md#me) | Updated user information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
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
