# Application
Structure API - v0.1.0

## application.get
Retrieves information on an application



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID of the associated application |
| embed | array | N | Embed additional resources in the request |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [application](_schemas.md#application) | Application information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if application was not found |

### Example
```javascript
// with callbacks
client.application.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.application.get(params)
  .then(console.log)
  .catch(console.error);
```
## application.patch
Updates information about an application



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID of the associated application |
| application | [application](_schemas.md#application) | N | Object containing new application properties |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [application](_schemas.md#application) | Update application information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | undefined | Error if application was not found |

### Example
```javascript
// with callbacks
client.application.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.application.patch(params)
  .then(console.log)
  .catch(console.error);
```
## application.delete
Deletes an application



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID of the associated application |
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
client.application.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.application.delete(params)
  .then(console.log)
  .catch(console.error);
```
