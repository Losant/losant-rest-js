# Experience Group Actions

Details on the various actions that can be performed on the
Experience Group resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an experience group

```javascript
const params = {
  applicationId: myApplicationId,
  experienceGroupId: myExperienceGroupId
};
try {
  console.log(await client.experienceGroup.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceGroup.*, or experienceGroup.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceGroupId | string | Y | ID associated with the experience group |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If experience group was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience group was not found |

<br/>

## Get

Retrieves information on an experience group

```javascript
const params = {
  applicationId: myApplicationId,
  experienceGroupId: myExperienceGroupId
};
try {
  console.log(await client.experienceGroup.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceGroup.*, or experienceGroup.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceGroupId | string | Y | ID associated with the experience group |  | 575ed78e7ae143cd83dc4aab |
| includeDirectDeviceCount | string | N | Whether or not to return count of devices associated directly with this group | false | true |
| includeTotalDeviceCount | string | N | Whether or not to return count of devices associated with this group or any of its descendants | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Group](../lib/schemas/experienceGroup.json) | Experience group information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience group was not found |

<br/>

## Patch

Updates information about an experience group

```javascript
const params = {
  applicationId: myApplicationId,
  experienceGroupId: myExperienceGroupId,
  experienceGroup: myExperienceGroup
};
try {
  console.log(await client.experienceGroup.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceGroup.*, or experienceGroup.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceGroupId | string | Y | ID associated with the experience group |  | 575ed78e7ae143cd83dc4aab |
| experienceGroup | [Experience Group Patch](../lib/schemas/experienceGroupPatch.json) | Y | Object containing new properties of the experience group |  | [Experience Group Patch Example](_schemas.md#experience-group-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Group](../lib/schemas/experienceGroup.json) | Updated experience group information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience group was not found |
