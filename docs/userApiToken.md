# User Api Token Actions

Details on the various actions that can be performed on the
User Api Token resource, including the expected
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
  apiTokenId: myApiTokenId
};

// with callbacks
client.userApiToken.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.userApiToken.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, userApiToken.*, or userApiToken.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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
  apiTokenId: myApiTokenId
};

// with callbacks
client.userApiToken.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.userApiToken.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, userApiToken.*, or userApiToken.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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
  apiTokenId: myApiTokenId,
  apiToken: myApiToken
};

// with callbacks
client.userApiToken.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.userApiToken.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, userApiToken.*, or userApiToken.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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
