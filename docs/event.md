# Event
Structure API - v0.1.0

## event.get
Retrieves information on an event



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| eventId | string | Y | ID associated with the event |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [event](_schemas.md#event) | Event information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if event was not found |

### Example
```javascript
// with callbacks
client.event.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.event.get(params)
  .then(console.log)
  .catch(console.error);
```
## event.patch
Updates information about an event



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| eventId | string | Y | ID associated with the event |
| event | [event](_schemas.md#event) | N | Object containing new properties of the event |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [event](_schemas.md#event) | Updated event information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if event is not found |

### Example
```javascript
// with callbacks
client.event.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.event.patch(params)
  .then(console.log)
  .catch(console.error);
```
## event.delete
Deletes an event



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| eventId | string | Y | ID associated with the event |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 204 | undefined | If event was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if event was not found |

### Example
```javascript
// with callbacks
client.event.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.event.delete(params)
  .then(console.log)
  .catch(console.error);
```
