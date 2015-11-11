# Projects
Structure API - v1.0.0

## projects.get
Returns the projects owned by the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [projects](_schemas.md#projects) | Collection of projects |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.projects.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projects.get(params)
  .then(console.log)
  .catch(console.error);
```
## projects.post
Create a new project owned by the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| project | [project](_schemas.md#project) | N | New project information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If project was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.projects.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.projects.post(params)
  .then(console.log)
  .catch(console.error);
```
