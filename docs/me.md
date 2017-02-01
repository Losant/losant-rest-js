# Me Actions

Details on the various actions that can be performed on the
Me resource, including the expected
parameters and the potential responses.

##### Contents

*   [Add Recent Item](#add-recent-item)
*   [Delete](#delete)
*   [Disable Two Factor Auth](#disable-two-factor-auth)
*   [Disconnect Github](#disconnect-github)
*   [Disconnect Twitter](#disconnect-twitter)
*   [Enable Two Factor Auth](#enable-two-factor-auth)
*   [Fetch Recent Items](#fetch-recent-items)
*   [Get](#get)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
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
all.SolutionUser, all.User, me.*, or me.addRecentItem.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Recent Item](_schemas.md#recent-item) | Y | Object containing recent item info |  | [Recent Item Example](_schemas.md#recent-item-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Recent Item List](_schemas.md#recent-item-list) | Updated recent item list |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.User, me.*, or me.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| credentials | [User Credentials](_schemas.md#user-credentials) | Y | User authentication credentials |  | [User Credentials Example](_schemas.md#user-credentials-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If the user was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.User, me.*, or me.disableTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Disable Two Factor Auth](_schemas.md#disable-two-factor-auth) | Y | Object containing two factor auth properties |  | [Disable Two Factor Auth Example](_schemas.md#disable-two-factor-auth-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](_schemas.md#me) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.User, me.*, or me.disconnectGithub.

#### Available Parameters

No parameters needed for this call.

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](_schemas.md#me) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

<br/>

## Disconnect Twitter

Disconnects the user from Twitter

```javascript
var params = {}; // all params are optional

// with callbacks
client.me.disconnectTwitter(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.me.disconnectTwitter(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.SolutionUser, all.User, me.*, or me.disconnectTwitter.

#### Available Parameters

No parameters needed for this call.

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](_schemas.md#me) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.User, me.*, or me.enableTwoFactorAuth.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| data | [Enable Two Factor Auth](_schemas.md#enable-two-factor-auth) | Y | Object containing two factor auth properties |  | [Enable Two Factor Auth Example](_schemas.md#enable-two-factor-auth-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](_schemas.md#me) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.SolutionUser.read, all.User, all.User.read, me.*, or me.fetchRecentItems.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| parentId | string | N | Parent id of the recent list |  | 575ec8687ae143cd83dc4a97 |
| itemType | undefined | Y | Item type to get the recent list of. Accepted values are: application, device, flow, dashboard, organization |  | application |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Recent Item List](_schemas.md#recent-item-list) | Recent item list |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.SolutionUser.read, all.User, all.User.read, me.*, or me.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| includeRecent | undefined | N | Should the user include recent app/dashboard info |  | true |
| summaryExclude | string | N | List of summary fields to exclude from user summary |  | payloadCount |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](_schemas.md#me) | Current user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |

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
all.SolutionUser, all.User, me.*, or me.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| user | [Me Patch](_schemas.md#me-patch) | Y | Object containing new user properties |  | [Me Patch Example](_schemas.md#me-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Me](_schemas.md#me) | Updated user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.User, all.User.read, me.*, or me.payloadCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
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
all.SolutionUser, all.User, me.*, or me.transferResources.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| transfer | [Resource Transfer](_schemas.md#resource-transfer) | Y | Object containing properties of the transfer |  | [Resource Transfer Example](_schemas.md#resource-transfer-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If resource transfer was successful |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

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
all.SolutionUser, all.User, me.*, or me.verifyEmail.

#### Available Parameters

No parameters needed for this call.

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If email verification was successfully sent |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
