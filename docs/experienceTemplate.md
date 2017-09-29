# Experience Template Actions

Details on the various actions that can be performed on the
Experience Template resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an experience template

```javascript
var params = {
  applicationId: myApplicationId,
  experienceTemplateId: myExperienceTemplateId
};

// with callbacks
client.experienceTemplate.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceTemplate.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceTemplate.*, or experienceTemplate.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceTemplateId | string | Y | ID associated with the experience template |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If experience template was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if experience template was not found |

<br/>

## Get

Retrieves information on an experience template

```javascript
var params = {
  applicationId: myApplicationId,
  experienceTemplateId: myExperienceTemplateId
};

// with callbacks
client.experienceTemplate.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceTemplate.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceTemplate.*, or experienceTemplate.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceTemplateId | string | Y | ID associated with the experience template |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Template](_schemas.md#experience-template) | Experience template information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if experience template was not found |

<br/>

## Patch

Updates information about an experience template

```javascript
var params = {
  applicationId: myApplicationId,
  experienceTemplateId: myExperienceTemplateId,
  experienceTemplate: myExperienceTemplate
};

// with callbacks
client.experienceTemplate.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceTemplate.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceTemplate.*, or experienceTemplate.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceTemplateId | string | Y | ID associated with the experience template |  | 575ed78e7ae143cd83dc4aab |
| experienceTemplate | [Experience Template Patch](_schemas.md#experience-template-patch) | Y | Object containing new properties of the experience template |  | [Experience Template Patch Example](_schemas.md#experience-template-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Template](_schemas.md#experience-template) | Updated experience template information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if experience template was not found |
