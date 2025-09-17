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
const params = {
  applicationId: myApplicationId,
  experienceDomainId: myExperienceDomainId
};
try {
  console.log(await client.experienceDomain.delete(params));
} catch (err) {
  console.error(err);
}
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
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If experience domain was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience domain was not found |

<br/>

## Get

Retrieves information on an experience domain

```javascript
const params = {
  applicationId: myApplicationId,
  experienceDomainId: myExperienceDomainId
};
try {
  console.log(await client.experienceDomain.get(params));
} catch (err) {
  console.error(err);
}
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
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Domain](../lib/schemas/experienceDomain.json) | Experience domain information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience domain was not found |

<br/>

## Patch

Updates information about an experience domain

```javascript
const params = {
  applicationId: myApplicationId,
  experienceDomainId: myExperienceDomainId,
  experienceDomain: myExperienceDomain
};
try {
  console.log(await client.experienceDomain.patch(params));
} catch (err) {
  console.error(err);
}
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
| experienceDomain | [Experience Domain Patch](../lib/schemas/experienceDomainPatch.json) | Y | Object containing new properties of the experience domain |  | [Experience Domain Patch Example](_schemas.md#experience-domain-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Domain](../lib/schemas/experienceDomain.json) | Updated experience domain information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience domain was not found |
