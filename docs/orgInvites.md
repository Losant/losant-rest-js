# Org Invites Actions

Details on the various actions that can be performed on the
Org Invites resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Gets information about an invite

```javascript
var params = {
  token: myToken,
  email: myEmail
};

// with callbacks
client.orgInvites.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.orgInvites.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| token | string | Y | The token associated with the invite |  | undefined |
| email | string | Y | The email associated with the invite |  | undefined |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation Information](_schemas.md#organization-invitation-information) | Information about invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if invite not found |
| 410 | [Error](_schemas.md#error) | Error if invite has expired |

<br/>

## Post

Accepts/Rejects an invite

```javascript
var params = {
  invite: myInvite
};

// with callbacks
client.orgInvites.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.orgInvites.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| invite | [Organization Invitation Action](_schemas.md#organization-invitation-action) | Y | Invite info and acceptance |  | [Organization Invitation Action Example](_schemas.md#organization-invitation-action-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation Result](_schemas.md#organization-invitation-result) | Acceptance/Rejection of invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if invite not found |
| 410 | [Error](_schemas.md#error) | Error if invite has expired |
