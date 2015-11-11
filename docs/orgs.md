# Orgs
Structure API - v1.0.0

## orgs.get
Returns the organizations associated with the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [orgs](_schemas.md#orgs) | Collection of organizations |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.orgs.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgs.get(params)
  .then(console.log)
  .catch(console.error);
```
## orgs.post
Create a new organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| organization | [org](_schemas.md#org) | N | New organization information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If organization was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.orgs.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.orgs.post(params)
  .then(console.log)
  .catch(console.error);
```
