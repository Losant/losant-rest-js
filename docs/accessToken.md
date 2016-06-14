# Access Token Actions

Details on the various actions that can be performed on the
Access Token resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an accessToken

```javascript
var params = {
  accessTokenId: myAccessTokenId
};

// with callbacks
client.accessToken.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.accessToken.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| accessTokenId | string | Y | ID associated with the accessToken |  | 575ec7417ae143cd83dc4a95 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If accessToken was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if accessToken was not found |

<br/>

## Get

Retrieves information on an accessToken

```javascript
var params = {
  accessTokenId: myAccessTokenId
};

// with callbacks
client.accessToken.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.accessToken.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| accessTokenId | string | Y | ID associated with the accessToken |  | 575ec7417ae143cd83dc4a95 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Access Token](_schemas.md#access-token) | Access token information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if accessToken was not found |

<br/>

## Patch

Updates information about an accessToken

```javascript
var params = {
  accessTokenId: myAccessTokenId,
  accessToken: myAccessToken
};

// with callbacks
client.accessToken.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.accessToken.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| accessTokenId | string | Y | ID associated with the accessToken |  | 575ec7417ae143cd83dc4a95 |
| accessToken | [Access Token Patch](_schemas.md#access-token-patch) | Y | Object containing new properties of the accessToken |  | [Access Token Patch Example](_schemas.md#access-token-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Access Token](_schemas.md#access-token) | Updated accessToken information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if accessToken was not found |
