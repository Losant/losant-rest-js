# Auth Actions

Details on the various actions that can be performed on the
Auth resource, including the expected
parameters and the potential responses.

##### Contents

*   [Authenticate Device](#authenticate-device)
*   [Authenticate Solution User](#authenticate-solution-user)
*   [Authenticate User](#authenticate-user)
*   [Authenticate User Github](#authenticate-user-github)

<br/>

## Authenticate Device

Authenticates a device using the provided credentials

```javascript
var params = {
  credentials: myCredentials
};

// with callbacks
client.auth.authenticateDevice(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateDevice(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [Device Credentials](_schemas.md#device-credentials) | Y | Device authentication credentials |  | [Device Credentials Example](_schemas.md#device-credentials-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated Device](_schemas.md#authenticated-device) | Successful authentication |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Authenticate Solution User

Authenticates a solution user using the provided credentials

```javascript
var params = {
  credentials: myCredentials
};

// with callbacks
client.auth.authenticateSolutionUser(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateSolutionUser(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [User Credentials](_schemas.md#user-credentials) | Y | Solution user authentication credentials |  | [User Credentials Example](_schemas.md#user-credentials-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated Solution User](_schemas.md#authenticated-solution-user) | Successful authentication |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Authenticate User

Authenticates a user using the provided credentials

```javascript
var params = {
  credentials: myCredentials
};

// with callbacks
client.auth.authenticateUser(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateUser(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [User Credentials](_schemas.md#user-credentials) | Y | User authentication credentials |  | [User Credentials Example](_schemas.md#user-credentials-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](_schemas.md#authenticated-user) | Successful authentication |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |

<br/>

## Authenticate User Github

Authenticates a user via GitHub OAuth

```javascript
var params = {
  oauth: myOauth
};

// with callbacks
client.auth.authenticateUserGithub(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auth.authenticateUserGithub(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| oauth | [Github Login](_schemas.md#github-login) | Y | User authentication credentials (access token) |  | [Github Login Example](_schemas.md#github-login-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](_schemas.md#authenticated-user) | Successful authentication |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 401 | [Error](_schemas.md#error) | Unauthorized error if authentication fails |
