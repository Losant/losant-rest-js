# Experience Version Actions

Details on the various actions that can be performed on the
Experience Version resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an experience version

```javascript
var params = {
  applicationId: myApplicationId,
  experienceVersionIdOrName: myExperienceVersionIdOrName
};

// with callbacks
client.experienceVersion.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceVersion.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceVersion.*, or experienceVersion.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceVersionIdOrName | string | Y | Version ID or version name associated with the experience version |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If experience version was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience version was not found |

<br/>

## Get

Retrieves information on an experience version

```javascript
var params = {
  applicationId: myApplicationId,
  experienceVersionIdOrName: myExperienceVersionIdOrName
};

// with callbacks
client.experienceVersion.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceVersion.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, experienceVersion.*, or experienceVersion.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceVersionIdOrName | string | Y | Version ID or version name associated with the experience version |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Version](../lib/schemas/experienceVersion.json) | Experience version information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience version was not found |

<br/>

## Patch

Updates information about an experience version

```javascript
var params = {
  applicationId: myApplicationId,
  experienceVersionIdOrName: myExperienceVersionIdOrName,
  experienceVersion: myExperienceVersion
};

// with callbacks
client.experienceVersion.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceVersion.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceVersion.*, or experienceVersion.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceVersionIdOrName | string | Y | Version ID or version name associated with the experience version |  | 575ed78e7ae143cd83dc4aab |
| experienceVersion | [Experience Version Patch](../lib/schemas/experienceVersionPatch.json) | Y | Object containing new properties of the experience version |  | [Experience Version Patch Example](_schemas.md#experience-version-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Version](../lib/schemas/experienceVersion.json) | Updated experience version information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience version was not found |
