# Org Actions

Details on the various actions that can be performed on the
Org resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Invite Member](#invite-member)
*   [Modify Member](#modify-member)
*   [Patch](#patch)
*   [Pending Invites](#pending-invites)
*   [Remove Member](#remove-member)
*   [Revoke Invite](#revoke-invite)

<br/>

## Delete

Deletes an organization

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If organization was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if organization was not found |

<br/>

## Get

Retrieves information on an organization

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](_schemas.md#organization) | Organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if organization not found |

<br/>

## Invite Member

Invites a person to an organization

```javascript
var params = {
  orgId: myOrgId,
  invite: myInvite
};

// with callbacks
client.org.inviteMember(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.inviteMember(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |
| invite | [Organization Invitation Post](_schemas.md#organization-invitation-post) | Y | Object containing new invite info |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitations](_schemas.md#organization-invitations) | Invitation information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if organization not found |

<br/>

## Modify Member

Modifies a current org member&#x27;s role

```javascript
var params = {
  orgId: myOrgId,
  member: myMember
};

// with callbacks
client.org.modifyMember(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.modifyMember(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |
| member | [Organization Member Patch](_schemas.md#organization-member-patch) | Y | Object containing new member pair |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](_schemas.md#organization) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if organization not found |

<br/>

## Patch

Updates information about an organization

```javascript
var params = {
  orgId: myOrgId,
  organization: myOrganization
};

// with callbacks
client.org.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |
| organization | [Organization Patch](_schemas.md#organization-patch) | Y | Object containing new organization properties |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](_schemas.md#organization) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if organization was not found |

<br/>

## Pending Invites

Gets the current pending invites

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.pendingInvites(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.pendingInvites(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitations](_schemas.md#organization-invitations) | Invitation information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if organization not found |

<br/>

## Remove Member

Modifies a current org member&#x27;s role

```javascript
var params = {
  orgId: myOrgId,
  userId: myUserId
};

// with callbacks
client.org.removeMember(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.removeMember(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |
| userId | string | Y | Id of user to remove |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](_schemas.md#organization) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if organization not found |

<br/>

## Revoke Invite

Revokes an existing invite

```javascript
var params = {
  orgId: myOrgId,
  inviteId: myInviteId
};

// with callbacks
client.org.revokeInvite(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.revokeInvite(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| orgId | string | Y | ID associated with the organization |  |
| inviteId | string | Y | Id of invite to revoke |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitations](_schemas.md#organization-invitations) | Invitation information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if organization not found |
