# Instance Api Token Actions

Details on the various actions that can be performed on the
Instance Api Token resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an API Token

```javascript
const params = {
  instanceId: myInstanceId,
  apiTokenId: myApiTokenId
};

// with promises
try {
  console.log(await client.instanceApiToken.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceApiToken.*, or instanceApiToken.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| apiTokenId | string | Y | ID associated with the API token |  | 575ec7417ae143cd83dc4a95 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If API token was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if API token was not found |

<br/>

## Get

Retrieves information on an API token

```javascript
const params = {
  instanceId: myInstanceId,
  apiTokenId: myApiTokenId
};

// with promises
try {
  console.log(await client.instanceApiToken.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceApiToken.*, or instanceApiToken.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| apiTokenId | string | Y | ID associated with the API token |  | 575ec7417ae143cd83dc4a95 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [API Token](../lib/schemas/apiToken.json) | API token information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if API token was not found |

<br/>

## Patch

Updates information about an API token

```javascript
const params = {
  instanceId: myInstanceId,
  apiTokenId: myApiTokenId,
  apiToken: myApiToken
};

// with promises
try {
  console.log(await client.instanceApiToken.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceApiToken.*, or instanceApiToken.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| apiTokenId | string | Y | ID associated with the API token |  | 575ec7417ae143cd83dc4a95 |
| apiToken | [API Token Patch](../lib/schemas/apiTokenPatch.json) | Y | Object containing new properties of the API token |  | [API Token Patch Example](_schemas.md#api-token-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [API Token](../lib/schemas/apiToken.json) | Updated API token information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if API token was not found |
