# User Oauth Clients Actions

Details on the various actions that can be performed on the
User Oauth Clients resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the private OAuth clients for a user

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.userOauthClients.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.bounded, all.User.read, only.User, only.User.bounded, only.User.read, userOauthClients.*, or userOauthClients.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| sortField | string | N | Field to sort the results by. Accepted values are: client_name, id, creationDate, lastUpdated | client_name | client_name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: client_name |  | client_name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*app |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [User OAuth Clients](../lib/schemas/userOauthClients.json) | Collection of private OAuth clients |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Post

Create a new private OAuth client for a user

```javascript
const params = {
  oauthClient: myOauthClient
};
try {
  console.log(await client.userOauthClients.post(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, only.User, userOauthClients.*, or userOauthClients.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| oauthClient | [User OAuth Client Post](../lib/schemas/userOauthClientPost.json) | Y | OAuth client information |  | [User OAuth Client Post Example](_schemas.md#user-oauth-client-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [User OAuth Client](../lib/schemas/userOauthClient.json) | The successfully created OAuth client. client_secret is only ever returned on this response. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
