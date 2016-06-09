# Application Key Actions

Details on the various actions that can be performed on the
Application Key resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an applicationKey

```javascript
var params = {
  applicationId: myApplicationId,
  applicationKeyId: myApplicationKeyId
};

// with callbacks
client.applicationKey.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationKey.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| applicationKeyId | string | Y | ID associated with the applicationKey |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If applicationKey was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if applicationKey was not found |

<br/>

## Get

Retrieves information on an applicationKey

```javascript
var params = {
  applicationId: myApplicationId,
  applicationKeyId: myApplicationKeyId
};

// with callbacks
client.applicationKey.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationKey.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| applicationKeyId | string | Y | ID associated with the applicationKey |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Key](_schemas.md#application-key) | applicationKey information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if applicationKey was not found |

<br/>

## Patch

Updates information about an applicationKey

```javascript
var params = {
  applicationId: myApplicationId,
  applicationKeyId: myApplicationKeyId,
  applicationKey: myApplicationKey
};

// with callbacks
client.applicationKey.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationKey.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| applicationKeyId | string | Y | ID associated with the applicationKey |  |
| applicationKey | [Application Key Patch](_schemas.md#application-key-patch) | Y | Object containing new properties of the applicationKey |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Key](_schemas.md#application-key) | Updated applicationKey information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if applicationKey was not found |
