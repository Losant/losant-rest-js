# Experience Domain Actions

Details on the various actions that can be performed on the
Experience Domain resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an experience domain

```javascript
var params = {
  applicationId: myApplicationId,
  experienceDomainId: myExperienceDomainId
};

// with callbacks
client.experienceDomain.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceDomain.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceDomain.*, or experienceDomain.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceDomainId | string | Y | ID associated with the experience domain |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If experience domain was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if experience domain was not found |

<br/>

## Get

Retrieves information on an experience domain

```javascript
var params = {
  applicationId: myApplicationId,
  experienceDomainId: myExperienceDomainId
};

// with callbacks
client.experienceDomain.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceDomain.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceDomain.*, or experienceDomain.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceDomainId | string | Y | ID associated with the experience domain |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Domain](_schemas.md#experience-domain) | Experience domain information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if experience domain was not found |

<br/>

## Patch

Updates information about an experience domain

```javascript
var params = {
  applicationId: myApplicationId,
  experienceDomainId: myExperienceDomainId,
  experienceDomain: myExperienceDomain
};

// with callbacks
client.experienceDomain.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceDomain.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceDomain.*, or experienceDomain.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceDomainId | string | Y | ID associated with the experience domain |  | 575ed78e7ae143cd83dc4aab |
| experienceDomain | [Experience Domain Patch](_schemas.md#experience-domain-patch) | Y | Object containing new properties of the experience domain |  | [Experience Domain Patch Example](_schemas.md#experience-domain-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Domain](_schemas.md#experience-domain) | Updated experience domain information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if experience domain was not found |
