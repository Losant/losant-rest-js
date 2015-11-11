# Org Projects
Structure API - v1.0.0

## orgProjects.get
Returns the projects owned by the organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | Id of the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | Collection of org projects |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.orgProjects.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.get(params)
  .then(console.log)
  .catch(console.error);
```
## orgProjects.post
Create a new project owned by the organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | Id of the organization |
| project | [project](_schemas.md#project) | N | Project information |
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
client.orgProjects.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.post(params)
  .then(console.log)
  .catch(console.error);
```
## orgProjects.delete
Deletes a project owned by the organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | Id of the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If project was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if project was not found |

### Example
```javascript
// with callbacks
client.orgProjects.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgProjects.delete(params)
  .then(console.log)
  .catch(console.error);
```
