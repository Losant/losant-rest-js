# Orgs
Structure API

## orgs.get
Returns the organizations associated with the current user



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| sortField | string | N | undefined |
| sortDirection | string | N | undefined |
| page | string | N | undefined |
| perPage | string | N | undefined |
| filterField | string | N | undefined |
| filter | string | N | undefined |
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
| organization | [orgPost](_schemas.md#orgpost) | Y | New organization information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [org](_schemas.md#org) | Successfully created organization |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |

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
