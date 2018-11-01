# Solution User Actions

Details on the various actions that can be performed on the
Solution User resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes a solution user

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId,
  solutionUserId: mySolutionUserId
};

// with callbacks
client.solutionUser.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solutionUser.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, solutionUser.*, or solutionUser.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |
| solutionUserId | string | Y | ID associated with the solution user |  | 566116085df4b701000258e3 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If solution user was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if solution user was not found |

<br/>

## Get

Retrieves information on a solution user

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId,
  solutionUserId: mySolutionUserId
};

// with callbacks
client.solutionUser.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solutionUser.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, solutionUser.*, or solutionUser.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |
| solutionUserId | string | Y | ID associated with the solution user |  | 566116085df4b701000258e3 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Solution User](_schemas.md#solution-user) | Solution user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if solution user was not found |

<br/>

## Patch

Updates information about a solution user

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId,
  solutionUserId: mySolutionUserId,
  solutionUser: mySolutionUser
};

// with callbacks
client.solutionUser.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solutionUser.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, solutionUser.*, or solutionUser.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |
| solutionUserId | string | Y | ID associated with the solution user |  | 566116085df4b701000258e3 |
| solutionUser | [Solution User Patch](_schemas.md#solution-user-patch) | Y | Object containing new properties of the solution user |  | [Solution User Patch Example](_schemas.md#solution-user-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Solution User](_schemas.md#solution-user) | Updated solution user information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if solution user was not found |
