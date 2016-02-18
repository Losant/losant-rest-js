# Me
Structure API - v0.1.0

## me.get
Retrieves information on the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| includeRecent | undefined | N | Should the user include recent app/dashboard info |
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
| user | [mePatch](_schemas.md#mepatch) | N | Object containing new user properties |
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
| 400 | [error](_schemas.md#error) | Error if malformed request |

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
## me.verifyEmail
Sends and email verification to the user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If email verification was successfully sent |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.me.verifyEmail(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.verifyEmail(params)
  .then(console.log)
  .catch(console.error);
```
## me.enableTwoFactorAuth
Enables two factor auth for the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| data | [enableTwoFactorAuth](_schemas.md#enabletwofactorauth) | N | Object containing two factor auth properties |
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
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.me.enableTwoFactorAuth(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.enableTwoFactorAuth(params)
  .then(console.log)
  .catch(console.error);
```
## me.disableTwoFactorAuth
Disables two factor auth for the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| data | [disableTwoFactorAuth](_schemas.md#disabletwofactorauth) | N | Object containing two factor auth properties |
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
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.me.disableTwoFactorAuth(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.disableTwoFactorAuth(params)
  .then(console.log)
  .catch(console.error);
```
## me.disconnectTwitter
Disconnects the user from twitter



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
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
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.me.disconnectTwitter(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.disconnectTwitter(params)
  .then(console.log)
  .catch(console.error);
```
## me.addRecentItem
Adds an item to a recent item list



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| data | [recentItem](_schemas.md#recentitem) | N | Object containing recent item info |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [recentItemList](_schemas.md#recentitemlist) | Updated recent item list |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.me.addRecentItem(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.addRecentItem(params)
  .then(console.log)
  .catch(console.error);
```
## me.fetchRecentItems
Gets a recent item list



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| parentId | undefined | N | undefined |
| itemType | undefined | N | undefined |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [recentItemList](_schemas.md#recentitemlist) | Recent item list |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |

### Example
```javascript
// with callbacks
client.me.fetchRecentItems(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.me.fetchRecentItems(params)
  .then(console.log)
  .catch(console.error);
```
