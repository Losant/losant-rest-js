# Device Recipe Actions

Details on the various actions that can be performed on the
Device Recipe resource, including the expected
parameters and the potential responses.

##### Contents

*   [Bulk Create](#bulk-create)
*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Bulk Create

Bulk creates devices using this recipe from a CSV

```javascript
var params = {
  applicationId: myApplicationId,
  deviceRecipeId: myDeviceRecipeId,
  bulkInfo: myBulkInfo
};

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, deviceRecipe.*, or deviceRecipe.bulkCreate.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceRecipeId | string | Y | ID associated with the device recipe |  | 575ecec57ae143cd83dc4a9f |
| bulkInfo | [Device Recipe Bulk Create Post](../lib/schemas/deviceRecipeBulkCreatePost.json) | Y | Object containing bulk creation info |  | [Device Recipe Bulk Create Post Example](_schemas.md#device-recipe-bulk-create-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Device Recipe Bulk Create](../lib/schemas/deviceRecipeBulkCreate.json) | If devices were successfully created |
| 202 | [Device Recipe Bulk Create Enqueue](../lib/schemas/deviceRecipeBulkCreateEnqueued.json) | If devices were enqueued to be created |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device recipe was not found |

<br/>

## Delete

Deletes a device recipe

```javascript
var params = {
  applicationId: myApplicationId,
  deviceRecipeId: myDeviceRecipeId
};

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, deviceRecipe.*, or deviceRecipe.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceRecipeId | string | Y | ID associated with the device recipe |  | 575ecec57ae143cd83dc4a9f |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If device recipe was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device recipe was not found |

<br/>

## Get

Retrieves information on a device recipe

```javascript
var params = {
  applicationId: myApplicationId,
  deviceRecipeId: myDeviceRecipeId
};

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, deviceRecipe.*, or deviceRecipe.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceRecipeId | string | Y | ID associated with the device recipe |  | 575ecec57ae143cd83dc4a9f |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Recipe](../lib/schemas/deviceRecipe.json) | Device recipe information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device recipe was not found |

<br/>

## Patch

Updates information about a device recipe

```javascript
var params = {
  applicationId: myApplicationId,
  deviceRecipeId: myDeviceRecipeId,
  deviceRecipe: myDeviceRecipe
};

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, deviceRecipe.*, or deviceRecipe.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceRecipeId | string | Y | ID associated with the device recipe |  | 575ecec57ae143cd83dc4a9f |
| deviceRecipe | [Device Recipe Patch](../lib/schemas/deviceRecipePatch.json) | Y | Object containing new properties of the device recipe |  | [Device Recipe Patch Example](_schemas.md#device-recipe-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Recipe](../lib/schemas/deviceRecipe.json) | Updated device recipe information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device recipe was not found |
