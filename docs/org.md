# Org Actions

Details on the various actions that can be performed on the
Org resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Device Counts](#device-counts)
*   [Get](#get)
*   [Invite Member](#invite-member)
*   [Modify Member](#modify-member)
*   [Notebook Minute Counts](#notebook-minute-counts)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
*   [Payload Counts Breakdown](#payload-counts-breakdown)
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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If organization was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

<br/>

## Device Counts

Returns device counts by day for the time range specified for this organization

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.deviceCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.deviceCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.deviceCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| start | string | N | Start of range for device count query (ms since epoch) |  | 0 |
| end | string | N | End of range for device count query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Counts](../lib/schemas/deviceCounts.json) | Device counts by day |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from org summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in org summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](../lib/schemas/org.json) | Organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.inviteMember.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| invite | [Organization Invitation Post](../lib/schemas/orgInvitePost.json) | Y | Object containing new invite info |  | [Organization Invitation Post Example](_schemas.md#organization-invitation-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitations](../lib/schemas/orgInvites.json) | Invitation information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.modifyMember.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| member | [Organization Member Patch](../lib/schemas/orgMemberPatch.json) | Y | Object containing new member pair |  | [Organization Member Patch Example](_schemas.md#organization-member-patch-example) |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from org summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in org summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](../lib/schemas/org.json) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization not found |

<br/>

## Notebook Minute Counts

Returns notebook execution usage by day for the time range specified for this organization

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.notebookMinuteCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.notebookMinuteCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.notebookMinuteCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| start | string | N | Start of range for notebook execution query (ms since epoch) |  | 0 |
| end | string | N | End of range for notebook execution query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook Minute Counts](../lib/schemas/notebookMinuteCounts.json) | Notebook usage information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| organization | [Organization Patch](../lib/schemas/orgPatch.json) | Y | Object containing new organization properties |  | [Organization Patch Example](_schemas.md#organization-patch-example) |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from org summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in org summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](../lib/schemas/org.json) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.payloadCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Stats](../lib/schemas/payloadStats.json) | Payload counts, by type and source |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

<br/>

## Payload Counts Breakdown

Returns payload counts per resolution in the time range specified for all application this organization owns

```javascript
var params = {
  orgId: myOrgId
};

// with callbacks
client.org.payloadCountsBreakdown(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.org.payloadCountsBreakdown(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.payloadCountsBreakdown.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| resolution | string | N | Resolution in milliseconds. Accepted values are: 86400000, 3600000 | 86400000 | 86400000 |
| asBytes | string | N | If the resulting stats should be returned as bytes | false | true |
| includeNonBillable | string | N | If non-billable payloads should be included in the result | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Counts Breakdown](../lib/schemas/payloadCountsBreakdown.json) | Sum of payload counts by date |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.pendingInvites.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitations](../lib/schemas/orgInvites.json) | Invitation information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.removeMember.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| userId | string | Y | Id of user to remove |  | 575ed70c7ae143cd83dc4aa9 |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from org summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in org summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization](../lib/schemas/org.json) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.revokeInvite.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| inviteId | string | Y | Id of invite to revoke |  | 575ed71e7ae143cd83dc4aaa |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitations](../lib/schemas/orgInvites.json) | Invitation information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization not found |

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

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, org.*, or org.transferResources.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| transfer | [Resource Transfer](../lib/schemas/resourceTransfer.json) | Y | Object containing properties of the transfer |  | [Resource Transfer Example](_schemas.md#resource-transfer-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If resource transfer was successful |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |
