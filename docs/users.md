# Users
Structure API - v0.1.0

## users.post
Create a new user account



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| user | [newUser](_schemas.md#newuser) | N | New user information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If the user was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
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
