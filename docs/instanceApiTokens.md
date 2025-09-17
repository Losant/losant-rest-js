# Instance Api Tokens Actions

Details on the various actions that can be performed on the
Instance Api Tokens resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the API tokens for an instance

```javascript
const params = {
  instanceId: myInstanceId
};
try {
  console.log(await client.instanceApiTokens.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceApiTokens.*, or instanceApiTokens.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, status, id, creationDate, lastUpdated, expirationDate | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name, status |  | key |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*token |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [API Token](../lib/schemas/apiToken.json) | Collection of API tokens |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Post

Create a new API token for an instance

```javascript
const params = {
  instanceId: myInstanceId,
  apiToken: myApiToken
};
try {
  console.log(await client.instanceApiTokens.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceApiTokens.*, or instanceApiTokens.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| apiToken | [API Token Post](../lib/schemas/apiTokenPost.json) | Y | API token information |  | [API Token Post Example](_schemas.md#api-token-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [API Token](../lib/schemas/apiToken.json) | The successfully created API token |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
