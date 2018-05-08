# Integration Actions

Details on the various actions that can be performed on the
Integration resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an integration

```javascript
var params = {
  applicationId: myApplicationId,
  integrationId: myIntegrationId
};

// with callbacks
client.integration.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.integration.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, integration.*, or integration.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| integrationId | string | Y | ID associated with the integration |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If integration was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if integration was not found |

<br/>

## Get

Retrieves information on an integration

```javascript
var params = {
  applicationId: myApplicationId,
  integrationId: myIntegrationId
};

// with callbacks
client.integration.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.integration.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, integration.*, or integration.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| integrationId | string | Y | ID associated with the integration |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Integration](_schemas.md#integration) | integration information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if integration was not found |

<br/>

## Patch

Updates information about an integration

```javascript
var params = {
  applicationId: myApplicationId,
  integrationId: myIntegrationId,
  integration: myIntegration
};

// with callbacks
client.integration.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.integration.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, integration.*, or integration.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| integrationId | string | Y | ID associated with the integration |  | 575ed78e7ae143cd83dc4aab |
| integration | [Integration Patch](_schemas.md#integration-patch) | Y | Object containing new properties of the integration |  | [Integration Patch Example](_schemas.md#integration-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Integration](_schemas.md#integration) | Updated integration information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if integration was not found |
