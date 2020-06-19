# Experience User Actions

Details on the various actions that can be performed on the
Experience User resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an experience user

```javascript
var params = {
  applicationId: myApplicationId,
  experienceUserId: myExperienceUserId
};

// with callbacks
client.experienceUser.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceUser.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceUser.*, or experienceUser.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceUserId | string | Y | ID associated with the experience user |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If experience user was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience user was not found |

<br/>

## Get

Retrieves information on an experience user

```javascript
var params = {
  applicationId: myApplicationId,
  experienceUserId: myExperienceUserId
};

// with callbacks
client.experienceUser.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceUser.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceUser.*, or experienceUser.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceUserId | string | Y | ID associated with the experience user |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience User](../lib/schemas/experienceUser.json) | Experience user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience user was not found |

<br/>

## Patch

Updates information about an experience user

```javascript
var params = {
  applicationId: myApplicationId,
  experienceUserId: myExperienceUserId,
  experienceUser: myExperienceUser
};

// with callbacks
client.experienceUser.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceUser.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceUser.*, or experienceUser.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceUserId | string | Y | ID associated with the experience user |  | 575ed78e7ae143cd83dc4aab |
| experienceUser | [Experience User Patch](../lib/schemas/experienceUserPatch.json) | Y | Object containing new properties of the experience user |  | [Experience User Patch Example](_schemas.md#experience-user-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience User](../lib/schemas/experienceUser.json) | Updated experience user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience user was not found |
