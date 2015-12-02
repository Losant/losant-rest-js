# Application Key
Structure API - v0.1.0

## applicationKey.get
Retrieves information on an applicationKey



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| applicationKeyId | string | Y | ID associated with the applicationKey |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [applicationKey](_schemas.md#applicationkey) | Device information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if applicationKey was not found |

### Example
```javascript
// with callbacks
client.applicationKey.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.applicationKey.get(params)
  .then(console.log)
  .catch(console.error);
```
## applicationKey.patch
Updates information about an applicationKey



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| applicationKeyId | string | Y | ID associated with the applicationKey |
| applicationKey | [applicationKey](_schemas.md#applicationkey) | N | Object containing new properties of the applicationKey |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [applicationKey](_schemas.md#applicationkey) | Updated applicationKey information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if applicationKey was not found |

### Example
```javascript
// with callbacks
client.applicationKey.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.applicationKey.patch(params)
  .then(console.log)
  .catch(console.error);
```
## applicationKey.delete
Deletes an applicationKey



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| applicationKeyId | string | Y | ID associated with the applicationKey |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If applicationKey was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if applicationKey was not found |

### Example
```javascript
// with callbacks
client.applicationKey.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.applicationKey.delete(params)
  .then(console.log)
  .catch(console.error);
```
