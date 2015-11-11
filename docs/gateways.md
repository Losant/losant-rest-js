# Gateways
Structure API - v1.0.0

## gateways.get
Returns the gateways for a project



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
| 200 | [gateways](_schemas.md#gateways) | Collection of gateways |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.gateways.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateways.get(params)
  .then(console.log)
  .catch(console.error);
```
## gateways.post
Create a new gateway for a project



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| gateway | [gateway](_schemas.md#gateway) | N | New gateway information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | undefined | If gateway was successfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |

### Example
```javascript
// with callbacks
client.gateways.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateways.post(params)
  .then(console.log)
  .catch(console.error);
```
