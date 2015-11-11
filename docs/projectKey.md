# Project Key
Structure API - v1.0.0

## projectKey.get
Retrieves information on an projectKey



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| projectKeyId | string | Y | ID associated with the projectKey |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [projectKey](_schemas.md#projectkey) | Device information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if projectKey was not found |

### Example
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
## projectKey.patch
Updates information about a projectKey



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| projectKeyId | string | Y | ID associated with the projectKey |
| projectKey | [projectKey](_schemas.md#projectkey) | N | Object containing new properties of the projectKey |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [projectKey](_schemas.md#projectkey) | Updated projectKey information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if projectKey was not found |

### Example
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
## projectKey.delete
Deletes a projectKey



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| projectKeyId | string | Y | ID associated with the projectKey |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If projectKey was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if projectKey was not found |

### Example
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
