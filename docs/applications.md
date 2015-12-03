# Applications
Structure API - v0.1.0

## applications.get
Returns the applications owned by the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| sort | string | N | undefined |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [applications](_schemas.md#applications) | Collection of applications |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.applications.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.applications.get(params)
  .then(console.log)
  .catch(console.error);
```
## applications.post
Create a new application owned by the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| application | [application](_schemas.md#application) | N | New application information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If application was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.applications.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.applications.post(params)
  .then(console.log)
  .catch(console.error);
```