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
*   [Payload Counts](#payload-counts)
*   [Pending Invites](#pending-invites)
*   [Remove Member](#remove-member)
*   [Revoke Invite](#revoke-invite)
*   [Transfer Resources](#transfer-resources)

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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If organization was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| summaryExclude | string | N | List of summary fields to exclude from org summary |  | payloadCount |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](_schemas.md#organization) | Organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| invite | [Organization Invitation Post](_schemas.md#organization-invitation-post) | Y | Object containing new invite info |  | [Organization Invitation Post Example](_schemas.md#organization-invitation-post-example) |

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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| member | [Organization Member Patch](_schemas.md#organization-member-patch) | Y | Object containing new member pair |  | [Organization Member Patch Example](_schemas.md#organization-member-patch-example) |

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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| organization | [Organization Patch](_schemas.md#organization-patch) | Y | Object containing new organization properties |  | [Organization Patch Example](_schemas.md#organization-patch-example) |

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

## Payload Counts

Returns payload counts for the time range specified for all applications this organization owns

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.payloadCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.payloadCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Counts](_schemas.md#payload-counts) | Payload counts, by type and source |

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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |

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

## Remove Member

Removes a member from the org

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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| userId | string | Y | Id of user to remove |  | 575ed70c7ae143cd83dc4aa9 |

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

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| inviteId | string | Y | Id of invite to revoke |  | 575ed71e7ae143cd83dc4aaa |

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

## Transfer Resources

Moves resources to a new owner

```javascript
var params = {
  orgId: myOrgId,
  transfer: myTransfer
};

// with callbacks
client.org.transferResources(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.transferResources(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| transfer | [Resource Transfer](_schemas.md#resource-transfer) | Y | Object containing properties of the transfer |  | [Resource Transfer Example](_schemas.md#resource-transfer-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If resource transfer was successful |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if organization was not found |
