# Me Actions

Details on the various actions that can be performed on the
Me resource, including the expected
parameters and the potential responses.

##### Contents

*   [Add Recent Item](#add-recent-item)
*   [Change Password](#change-password)
*   [Delete](#delete)
*   [Device Counts](#device-counts)
*   [Disable Two Factor Auth](#disable-two-factor-auth)
*   [Disconnect Github](#disconnect-github)
*   [Enable Two Factor Auth](#enable-two-factor-auth)
*   [Fetch Recent Items](#fetch-recent-items)
*   [Generate Two Factor Auth](#generate-two-factor-auth)
*   [Get](#get)
*   [Invite](#invite)
*   [Invites](#invites)
*   [Notebook Minute Counts](#notebook-minute-counts)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
*   [Payload Counts Breakdown](#payload-counts-breakdown)
*   [Refresh Token](#refresh-token)
*   [Respond to Invite](#respond-to-invite)
*   [Transfer Resources](#transfer-resources)
*   [Verify Email](#verify-email)

<br/>

## Add Recent Item

Adds an item to a recent item list

```javascript
const params = {
  data: myData
};
try {
  console.log(await client.me.addRecentItem(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.addRecentItem.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Recent Item](../lib/schemas/recentItem.json) | Y | Object containing recent item info |  | [Recent Item Example](_schemas.md#recent-item-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Recent Item List](../lib/schemas/recentItemList.json) | Updated recent item list |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Change Password

Changes the current user&#x27;s password and optionally logs out all other sessions

```javascript
const params = {
  data: myData
};
try {
  console.log(await client.me.changePassword(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.changePassword.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Change Password](../lib/schemas/changePassword.json) | Y | Object containing the password change info |  | [Change Password Example](_schemas.md#change-password-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](../lib/schemas/authedUser.json) | A new, valid, auth token (potentially all previous tokens are now invalid) |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Delete

Deletes the current user

```javascript
const params = {
  credentials: myCredentials
};
try {
  console.log(await client.me.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [User Credentials](../lib/schemas/userCredentials.json) | Y | User authentication credentials |  | [User Credentials Example](_schemas.md#user-credentials-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If the user was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Device Counts

Returns device counts by day for the time range specified for all applications the current user owns

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.deviceCounts(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.deviceCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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

<br/>

## Disable Two Factor Auth

Disables multi-factor authentication for the current user

```javascript
const params = {
  data: myData
};
try {
  console.log(await client.me.disableTwoFactorAuth(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.disableTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Disable Multi-Factor Authentication](../lib/schemas/multiFactorAuthDisable.json) | Y | Object containing multi-factor authentication properties |  | [Disable Multi-Factor Authentication Example](_schemas.md#disable-multi-factor-authentication-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](../lib/schemas/me.json) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Disconnect Github

Disconnects the user from Github

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.disconnectGithub(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.disconnectGithub.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](../lib/schemas/me.json) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Enable Two Factor Auth

Enables multi-factor authentication for the current user

```javascript
const params = {
  data: myData
};
try {
  console.log(await client.me.enableTwoFactorAuth(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.enableTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Enable Multi-Factor Authentication](../lib/schemas/multiFactorAuthEnable.json) | Y | Object containing multi-factor authentication properties |  | [Enable Multi-Factor Authentication Example](_schemas.md#enable-multi-factor-authentication-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](../lib/schemas/me.json) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Fetch Recent Items

Gets a recent item list

```javascript
const params = {
  itemType: myItemType
};
try {
  console.log(await client.me.fetchRecentItems(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.fetchRecentItems.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| parentId | string | N | Parent id of the recent list |  | 575ec8687ae143cd83dc4a97 |
| itemType | undefined | Y | Item type to get the recent list of. Accepted values are: application, device, flow, dashboard, organization |  | application |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Recent Item List](../lib/schemas/recentItemList.json) | Recent item list |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Generate Two Factor Auth

Returns the multi-factor authentication key for the current user

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.generateTwoFactorAuth(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.generateTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Multi-Factor Authentication Info](../lib/schemas/multiFactorAuthInfo.json) | Multi-factor authentication info |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Get

Retrieves information on the current user

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| includeRecent | undefined | N | Should the user include recent app/dashboard info |  | true |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from user summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in user summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](../lib/schemas/me.json) | Current user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |

<br/>

## Invite

Retrieves information for an invitation to an organization

```javascript
const params = {
  inviteId: myInviteId
};
try {
  console.log(await client.me.invite(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.invite.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| inviteId | string | Y | ID associated with the invitation |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation Information For User](../lib/schemas/orgInviteUser.json) | Information about invitation |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if invite not found |

<br/>

## Invites

Retrieves pending organization invitations for a user

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.invites(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.invites.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [User Organization Invitations](../lib/schemas/orgInvitesUser.json) | Information about invitations |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Notebook Minute Counts

Returns notebook execution usage by day for the time range specified for all applications the current user owns

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.notebookMinuteCounts(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.notebookMinuteCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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

<br/>

## Patch

Updates information about the current user

```javascript
const params = {
  user: myUser
};
try {
  console.log(await client.me.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| user | [Me Patch](../lib/schemas/mePatch.json) | Y | Object containing new user properties |  | [Me Patch Example](_schemas.md#me-patch-example) |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from user summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in user summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](../lib/schemas/me.json) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Payload Counts

Returns payload counts for the time range specified for all applications the current user owns

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.payloadCounts(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.payloadCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| asBytes | string | N | If the resulting stats should be returned as bytes | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Stats](../lib/schemas/payloadStats.json) | Payload counts, by type and source |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Payload Counts Breakdown

Returns payload counts per resolution in the time range specified for all applications the current user owns

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.payloadCountsBreakdown(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, me.*, or me.payloadCountsBreakdown.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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

<br/>

## Refresh Token

Returns a new auth token based on the current auth token

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.refreshToken(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, or me.*.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Authenticated User](../lib/schemas/authedUser.json) | Successful token regeneration |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 401 | [Error](../lib/schemas/error.json) | Unauthorized error if authentication fails |

<br/>

## Respond to Invite

Accepts or rejects an invitation to an organization

```javascript
const params = {
  inviteId: myInviteId,
  response: myResponse
};
try {
  console.log(await client.me.respondToInvite(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.respondToInvite.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| inviteId | string | Y | ID associated with the invitation |  | 575ec8687ae143cd83dc4a97 |
| response | [Organization Invitation Action For User](../lib/schemas/orgInviteActionUser.json) | Y | Response to invitation |  | [Organization Invitation Action For User Example](_schemas.md#organization-invitation-action-for-user-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Organization Invitation Result For User](../lib/schemas/orgInviteResultUser.json) | Acceptance or rejection of invitation |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if invitation not found |
| 410 | [Error](../lib/schemas/error.json) | Error if invitation has expired |

<br/>

## Transfer Resources

Moves resources to a new owner

```javascript
const params = {
  transfer: myTransfer
};
try {
  console.log(await client.me.transferResources(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.transferResources.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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

<br/>

## Verify Email

Sends an email verification to the user

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.me.verifyEmail(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.verifyEmail.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If email verification was successfully sent |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
