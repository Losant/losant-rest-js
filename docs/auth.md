# Auth Actions

Details on the various actions that can be performed on the
Auth resource, including the expected
parameters and the potential responses.

##### Contents

*   [Authenticate Device](#authenticate-device)
*   [Authenticate User](#authenticate-user)
*   [Authenticate User Github](#authenticate-user-github)
*   [Authenticate User Saml](#authenticate-user-saml)
*   [Sso Domain](#sso-domain)

<br/>

## Authenticate Device

Authenticates a device using the provided credentials.

```javascript
const params = {
  credentials: myCredentials
};

// with promises
try {
  console.log(await client.auth.authenticateDevice(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [Device Credentials](../lib/schemas/deviceCredentials.json) | Y | Device authentication credentials |  | [Device Credentials Example](_schemas.md#device-credentials-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated Device](../lib/schemas/authedDevice.json) | Successful authentication. The included api access token by default has the scope &#x27;all.Device&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 401 | [Error](../lib/schemas/error.json) | Unauthorized error if authentication fails |

<br/>

## Authenticate User

Authenticates a user using the provided credentials.

```javascript
const params = {
  credentials: myCredentials
};

// with promises
try {
  console.log(await client.auth.authenticateUser(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [User Credentials](../lib/schemas/userCredentials.json) | Y | User authentication credentials |  | [User Credentials Example](_schemas.md#user-credentials-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](../lib/schemas/authedUser.json) | Successful authentication. The included api access token has the scope &#x27;all.User&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 401 | [Error](../lib/schemas/error.json) | Unauthorized error if authentication fails |

<br/>

## Authenticate User Github

Authenticates a user via GitHub OAuth.

```javascript
const params = {
  oauth: myOauth
};

// with promises
try {
  console.log(await client.auth.authenticateUserGithub(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| oauth | [Github Login](../lib/schemas/githubLogin.json) | Y | User authentication credentials (access token) |  | [Github Login Example](_schemas.md#github-login-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](../lib/schemas/authedUser.json) | Successful authentication. The included api access token has the scope &#x27;all.User&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 401 | [Error](../lib/schemas/error.json) | Unauthorized error if authentication fails |

<br/>

## Authenticate User Saml

Authenticates a user via a SAML response.

```javascript
const params = {
  saml: mySaml
};

// with promises
try {
  console.log(await client.auth.authenticateUserSaml(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| saml | [SAML Response](../lib/schemas/samlResponse.json) | Y | Encoded SAML response from an IDP for a user. |  | [SAML Response Example](_schemas.md#saml-response-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](../lib/schemas/authedUser.json) | Successful authentication. The included api access token has the scope &#x27;all.User&#x27;. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 401 | [Error](../lib/schemas/error.json) | Unauthorized error if authentication fails |

<br/>

## Sso Domain

Checks email domain for SSO configuration.

```javascript
const params = {
  email: myEmail
};

// with promises
try {
  console.log(await client.auth.ssoDomain(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| email | string | Y | The email address associated with the user login |  | example@example.com |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [SSO Request](../lib/schemas/ssoRequest.json) | Successful finding SSO for domain. Returns SSO request URL and type. |
| 204 | undefined | No domain associated with an SSO configuration |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
