# Flows
Structure API - v1.0.0

## flows.get
Returns the flows for a project



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
| 200 | [flows](_schemas.md#flows) | Collection of flows |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.flows.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flows.get(params)
  .then(console.log)
  .catch(console.error);
```
## flows.post
Create a new flow for a project



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| flow | [flow](_schemas.md#flow) | N | New flow information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If flow was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.flows.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.flows.post(params)
  .then(console.log)
  .catch(console.error);
```
