# Project Keys
Structure API - v1.0.0

## projectKeys.get
Returns the projectKeys for a project



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [projectKeys](_schemas.md#projectkeys) | Collection of projectKeys |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
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
## projectKeys.post
Create a new projectKey for a project



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If projectKey was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
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
