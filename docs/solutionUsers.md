# Solution Users Actions

Details on the various actions that can be performed on the
Solution Users resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the users for the solution

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId
};

// with callbacks
client.solutionUsers.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solutionUsers.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, solutionUsers.*, or solutionUsers.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |
| sortField | string | N | Field to sort the results by. Accepted values are: email, firstName, lastName, id, creationDate, lastLogin, lastUpdated | email | email |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 1000 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: email, firstName, lastName |  | email |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | email*address |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Solution Users](_schemas.md#solution-users) | Collection of solution users |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |

<br/>

## Post

Create a new solution user

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId,
  solutionUser: mySolutionUser
};

// with callbacks
client.solutionUsers.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solutionUsers.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, solutionUsers.*, or solutionUsers.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |
| solutionUser | [Solution User Post](_schemas.md#solution-user-post) | Y | New solution user information |  | [Solution User Post Example](_schemas.md#solution-user-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Solution User](_schemas.md#solution-user) | Successfully created solution user |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
