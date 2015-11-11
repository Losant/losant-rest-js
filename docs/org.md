# Org
Structure API - v1.0.0

## org.get
Retrieves information on an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [org](_schemas.md#/definitions/org) | Organization information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if organization not found |

### Example
```javascript
// with callbacks
client.org.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.get(params)
  .then(console.log)
  .catch(console.error);
```
## org.patch
Updates information about an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| organization | [org](_schemas.md#/definitions/org) | N | Object containing new organization properties |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [org](_schemas.md#/definitions/org) | Updated organization information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if organization was not found |

### Example
```javascript
// with callbacks
client.org.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.patch(params)
  .then(console.log)
  .catch(console.error);
```
## org.delete
Deletes an organization



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| orgId | string | Y | ID associated with the organization |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | If organization was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if organization was not found |

### Example
```javascript
// with callbacks
client.org.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.org.delete(params)
  .then(console.log)
  .catch(console.error);
```
