# Device Recipes
Losant API

## deviceRecipes.get
Returns the device recipes for an application



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
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
| 200 | [deviceRecipes](_schemas.md#devicerecipes) | Collection of device recipes |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [error](_schemas.md#error) | Error if application was not found |

### Example
```javascript
// with callbacks
client.deviceRecipes.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.deviceRecipes.get(params)
  .then(console.log)
  .catch(console.error);
```
## deviceRecipes.post
Create a new device recipe for an application



### Parameters
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| applicationId | string | Y | ID associated with the application |
| deviceRecipe | [deviceRecipePost](_schemas.md#devicerecipepost) | Y | New device recipe information |
| _actions | boolean | N | Return resource actions in response |
| _links | boolean | N | Return resource link in response |
| _embedded | boolean | N | Return embedded resources in response |

### Responses
| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [deviceRecipe](_schemas.md#devicerecipe) | Successfully created device recipe |

### Errors
| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [error](_schemas.md#error) | Error if malformed request |
| 404 | [error](_schemas.md#error) | Error if application was not found |

### Example
```javascript
// with callbacks
client.deviceRecipes.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});
// with promises
client.deviceRecipes.post(params)
  .then(console.log)
  .catch(console.error);
```
