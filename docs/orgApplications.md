# Org Applications
Structure API - v0.1.0

## orgApplications.get
Returns the applications owned by the organization



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
| 200 | undefined | Collection of org applications |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.orgApplications.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgApplications.get(params)
  .then(console.log)
  .catch(console.error);
```
## orgApplications.post
Create a new application owned by the organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | Id of the organization |
| application | [application](_schemas.md#application) | N | Application information |
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
client.orgApplications.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgApplications.post(params)
  .then(console.log)
  .catch(console.error);
```
## orgApplications.delete
Deletes an application owned by the organization



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
| 200 | undefined | If application was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if application was not found |

### Example
```javascript
// with callbacks
client.orgApplications.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgApplications.delete(params)
  .then(console.log)
  .catch(console.error);
```
