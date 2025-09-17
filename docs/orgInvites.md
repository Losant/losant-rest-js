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
const params = {
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

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| token | string | Y | The token associated with the invite |  | aTokenString |
| email | string | Y | The email associated with the invite |  | example@example.com |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation Information](../lib/schemas/orgInviteInfo.json) | Information about invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if invite not found |
| 410 | [Error](../lib/schemas/error.json) | Error if invite has expired |

<br/>

## Post

Accepts/Rejects an invite

```javascript
const params = {
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

#### Authentication
No api access token is required to call this action.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| invite | [Organization Invitation Action](../lib/schemas/orgInviteAction.json) | Y | Invite info and acceptance |  | [Organization Invitation Action Example](_schemas.md#organization-invitation-action-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation Result](../lib/schemas/orgInviteResult.json) | Acceptance/Rejection of invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if invite not found |
| 410 | [Error](../lib/schemas/error.json) | Error if invite has expired |
