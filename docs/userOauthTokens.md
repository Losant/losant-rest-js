# User Oauth Tokens Actions

Details on the various actions that can be performed on the
User Oauth Tokens resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the OAuth tokens for a user

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.userOauthTokens.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.bounded, all.User.read, only.User, only.User.bounded, only.User.read, userOauthTokens.*, or userOauthTokens.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| sortField | string | N | Field to sort the results by. Accepted values are: name, status, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*app |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [User OAuth Tokens](../lib/schemas/userOauthTokens.json) | Collection of OAuth tokens |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Post

Create a new OAuth token for a user

```javascript
const params = {
  oauthToken: myOauthToken
};
try {
  console.log(await client.userOauthTokens.post(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, only.User, userOauthTokens.*, or userOauthTokens.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| oauthToken | [User OAuth Token Post](../lib/schemas/userOauthTokenPost.json) | Y | OAuth token information |  | [User OAuth Token Post Example](_schemas.md#user-oauth-token-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [User OAuth Token](../lib/schemas/userOauthToken.json) | The successfully created OAuth token |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
