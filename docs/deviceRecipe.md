# Device Recipe
Structure API

## deviceRecipe.get
Retrieves information on a device recipe



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceRecipeId | string | Y | ID associated with the device recipe |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [deviceRecipe](_schemas.md#devicerecipe) | Device recipe information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device recipe was not found |

### Example
```javascript
// with callbacks
client.deviceRecipe.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.deviceRecipe.get(params)
  .then(console.log)
  .catch(console.error);
```
## deviceRecipe.patch
Updates information about a device recipe



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceRecipeId | string | Y | ID associated with the device recipe |
| deviceRecipe | [deviceRecipePatch](_schemas.md#devicerecipepatch) | N | Object containing new properties of the device recipe |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [deviceRecipe](_schemas.md#devicerecipe) | Updated device recipe information |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if device recipe was not found |

### Example
```javascript
// with callbacks
client.deviceRecipe.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.deviceRecipe.patch(params)
  .then(console.log)
  .catch(console.error);
```
## deviceRecipe.delete
Deletes a device recipe



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceRecipeId | string | Y | ID associated with the device recipe |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [success](_schemas.md#success) | If device recipe was successfully deleted |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device recipe was not found |

### Example
```javascript
// with callbacks
client.deviceRecipe.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.deviceRecipe.delete(params)
  .then(console.log)
  .catch(console.error);
```
## deviceRecipe.bulkCreate
Bulk creates devices using this recipe from a CSV



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceRecipeId | string | Y | ID associated with the device recipe |
| bulkInfo | [deviceRecipeBulkCreatePost](_schemas.md#devicerecipebulkcreatepost) | N | Object containing bulk creation info |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [deviceRecipeBulkCreate](_schemas.md#devicerecipebulkcreate) | If devices were sucessfully created |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if device recipe was not found |

### Example
```javascript
// with callbacks
client.deviceRecipe.bulkCreate(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.deviceRecipe.bulkCreate(params)
  .then(console.log)
  .catch(console.error);
```
