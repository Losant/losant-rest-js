# Application Endpoint Actions

Details on the various actions that can be performed on the
Application Endpoint resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an application endpoint

```javascript
var params = {
  applicationId: myApplicationId,
  applicationEndpointId: myApplicationEndpointId
};

// with callbacks
client.applicationEndpoint.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationEndpoint.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationEndpoint.*, or applicationEndpoint.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationEndpointId | string | Y | ID associated with the application endpoint |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If application endpoint was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application endpoint was not found |

<br/>

## Get

Retrieves information on an application endpoint

```javascript
var params = {
  applicationId: myApplicationId,
  applicationEndpointId: myApplicationEndpointId
};

// with callbacks
client.applicationEndpoint.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationEndpoint.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationEndpoint.*, or applicationEndpoint.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationEndpointId | string | Y | ID associated with the application endpoint |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Endpoint](_schemas.md#application-endpoint) | Application endpoint information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application endpoint was not found |

<br/>

## Patch

Updates information about an application endpoint

```javascript
var params = {
  applicationId: myApplicationId,
  applicationEndpointId: myApplicationEndpointId,
  applicationEndpoint: myApplicationEndpoint
};

// with callbacks
client.applicationEndpoint.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationEndpoint.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationEndpoint.*, or applicationEndpoint.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationEndpointId | string | Y | ID associated with the application endpoint |  | 575ed78e7ae143cd83dc4aab |
| applicationEndpoint | [Application Endpoint Patch](_schemas.md#application-endpoint-patch) | Y | Object containing new properties of the application endpoint |  | [Application Endpoint Patch Example](_schemas.md#application-endpoint-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Endpoint](_schemas.md#application-endpoint) | Updated application endpoint information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application endpoint was not found |
