# Webhook
Structure API - v0.1.0

## webhook.get
Retrieves information on an webhook



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| webhookId | string | Y | ID associated with the webhook |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [webhook](_schemas.md#webhook) | Webhook information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if webhook was not found |

### Example
```javascript
// with callbacks
client.webhook.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.webhook.get(params)
  .then(console.log)
  .catch(console.error);
```
## webhook.patch
Updates information about a webhook



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| webhookId | string | Y | ID associated with the webhook |
| webhook | [webhook](_schemas.md#webhook) | N | Object containing new properties of the webhook |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [webhook](_schemas.md#webhook) | Updated webhook information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if webhook was not found |

### Example
```javascript
// with callbacks
client.webhook.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.webhook.patch(params)
  .then(console.log)
  .catch(console.error);
```
## webhook.delete
Deletes a webhook



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| projectId | string | Y | ID associated with the project |
| webhookId | string | Y | ID associated with the webhook |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If webhook was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if webhook was not found |

### Example
```javascript
// with callbacks
client.webhook.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.webhook.delete(params)
  .then(console.log)
  .catch(console.error);
```
