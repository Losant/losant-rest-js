# Device Recipes Actions

Details on the various actions that can be performed on the
Device Recipes resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the device recipes for an application

```javascript
var params = {
  applicationId: myApplicationId
};

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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc |
| page | string | N | Which page of results to return | 0 |
| perPage | string | N | How many items to return per page | 1000 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Recipes](_schemas.md#device-recipes) | Collection of device recipes |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Post

Create a new device recipe for an application

```javascript
var params = {
  applicationId: myApplicationId,
  deviceRecipe: myDeviceRecipe
};

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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| deviceRecipe | [Device Recipe Post](_schemas.md#device-recipe-post) | Y | New device recipe information |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Device Recipe](_schemas.md#device-recipe) | Successfully created device recipe |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
