# Instance Org Invite Actions

Details on the various actions that can be performed on the
Instance Org Invite resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Resend Invite](#resend-invite)

<br/>

## Delete

Revokes an instance org invitation

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  inviteId: myInviteId
};

// with callbacks
client.instanceOrgInvite.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrgInvite.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrgInvite.*, or instanceOrgInvite.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a95 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| inviteId | string | Y | ID associated with the organization invite |  | 575ec8687ae143cd83dc4a94 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If an invite was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance, organization or invite was not found |

<br/>

## Get

Returns an organization invite

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  inviteId: myInviteId
};

// with callbacks
client.instanceOrgInvite.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrgInvite.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceOrgInvite.*, or instanceOrgInvite.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a95 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| inviteId | string | Y | ID associated with the organization invite |  | 575ec8687ae143cd83dc4a94 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation](../lib/schemas/orgInvite.json) | A single organization invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance, organization, or invite was not found |

<br/>

## Resend Invite

Resend an organization invite with modified role info

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  inviteId: myInviteId,
  roleInfo: myRoleInfo
};

// with callbacks
client.instanceOrgInvite.resendInvite(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrgInvite.resendInvite(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrgInvite.*, or instanceOrgInvite.resendInvite.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a95 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| inviteId | string | Y | ID associated with the organization invite |  | 575ec8687ae143cd83dc4a94 |
| roleInfo | [Organization Role Info](../lib/schemas/orgRoleInfo.json) | Y | Object containing updated role info |  | [Organization Role Info Example](_schemas.md#organization-role-info-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Organization Invitation](../lib/schemas/orgInvite.json) | The new org invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance, organization, or invite was not found |
