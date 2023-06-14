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
*   [Notebook Minute Counts](#notebook-minute-counts)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
*   [Refresh Token](#refresh-token)
*   [Transfer Resources](#transfer-resources)
*   [Verify Email](#verify-email)

<br/>

## Add Recent Item

Adds an item to a recent item list

```javascript
var params = {
  data: myData
};

// with callbacks
client.me.addRecentItem(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.addRecentItem(params)
  .then(console.log)
  .catch(console.error);
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
var params = {
  data: myData
};

// with callbacks
client.me.changePassword(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.changePassword(params)
  .then(console.log)
  .catch(console.error);
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
var params = {
  credentials: myCredentials
};

// with callbacks
client.me.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.delete(params)
  .then(console.log)
  .catch(console.error);
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
var params = {}; // all params are optional

// with callbacks
client.me.deviceCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.deviceCounts(params)
  .then(console.log)
  .catch(console.error);
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

Disables two factor auth for the current user

```javascript
var params = {
  data: myData
};

// with callbacks
client.me.disableTwoFactorAuth(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.disableTwoFactorAuth(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.disableTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Disable Two Factor Auth](../lib/schemas/disableTwoFactorAuth.json) | Y | Object containing two factor auth properties |  | [Disable Two Factor Auth Example](_schemas.md#disable-two-factor-auth-example) |
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
var params = {}; // all params are optional

// with callbacks
client.me.disconnectGithub(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.disconnectGithub(params)
  .then(console.log)
  .catch(console.error);
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

Enables two factor auth for the current user

```javascript
var params = {
  data: myData
};

// with callbacks
client.me.enableTwoFactorAuth(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.enableTwoFactorAuth(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, me.*, or me.enableTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Enable Two Factor Auth](../lib/schemas/enableTwoFactorAuth.json) | Y | Object containing two factor auth properties |  | [Enable Two Factor Auth Example](_schemas.md#enable-two-factor-auth-example) |
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
var params = {
  itemType: myItemType
};

// with callbacks
client.me.fetchRecentItems(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.fetchRecentItems(params)
  .then(console.log)
  .catch(console.error);
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

Returns the two factor auth key for a user

```javascript
var params = {}; // all params are optional

// with callbacks
client.me.generateTwoFactorAuth(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.generateTwoFactorAuth(params)
  .then(console.log)
  .catch(console.error);
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
| 200 | [Two Factor Auth Info](../lib/schemas/twoFactorAuthInfo.json) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Get

Retrieves information on the current user

```javascript
var params = {}; // all params are optional

// with callbacks
client.me.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.get(params)
  .then(console.log)
  .catch(console.error);
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

## Notebook Minute Counts

Returns notebook execution usage by day for the time range specified for all applications the current user owns

```javascript
var params = {}; // all params are optional

// with callbacks
client.me.notebookMinuteCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.notebookMinuteCounts(params)
  .then(console.log)
  .catch(console.error);
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
var params = {
  user: myUser
};

// with callbacks
client.me.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.patch(params)
  .then(console.log)
  .catch(console.error);
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
var params = {}; // all params are optional

// with callbacks
client.me.payloadCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.payloadCounts(params)
  .then(console.log)
  .catch(console.error);
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

## Refresh Token

Returns a new auth token based on the current auth token

```javascript
var params = {}; // all params are optional

// with callbacks
client.me.refreshToken(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.refreshToken(params)
  .then(console.log)
  .catch(console.error);
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

## Transfer Resources

Moves resources to a new owner

```javascript
var params = {
  transfer: myTransfer
};

// with callbacks
client.me.transferResources(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.transferResources(params)
  .then(console.log)
  .catch(console.error);
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
var params = {}; // all params are optional

// with callbacks
client.me.verifyEmail(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.verifyEmail(params)
  .then(console.log)
  .catch(console.error);
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
