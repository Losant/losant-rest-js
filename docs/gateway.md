# Gateway
Structure API - v0.1.0

## gateway.get
Retrieves information on an gateway



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| gatewayId | string | Y | ID associated with the gateway |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [gateway](_schemas.md#gateway) | Gateway information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if gateway was not found |

### Example
```javascript
// with callbacks
client.gateway.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.get(params)
  .then(console.log)
  .catch(console.error);
```
## gateway.patch
Updates information about a gateway



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| gatewayId | string | Y | ID associated with the gateway |
| gateway | [gateway](_schemas.md#gateway) | N | Object containing new properties of the gateway |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [gateway](_schemas.md#gateway) | Updated gateway information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if gateway was not found |

### Example
```javascript
// with callbacks
client.gateway.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.patch(params)
  .then(console.log)
  .catch(console.error);
```
## gateway.delete
Deletes a gateway



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| gatewayId | string | Y | ID associated with the gateway |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If gateway was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if gateway was not found |

### Example
```javascript
// with callbacks
client.gateway.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.gateway.delete(params)
  .then(console.log)
  .catch(console.error);
```
