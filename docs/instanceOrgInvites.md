# Instance Org Invites Actions

Details on the various actions that can be performed on the
Instance Org Invites resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns a collection of instance organization invites

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId
};
try {
  console.log(await client.instanceOrgInvites.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceOrgInvites.*, or instanceOrgInvites.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: email, role, inviteDate | inviteDate | role |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | asc |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: email, role |  | email |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my * instance |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Organization Invitations](../lib/schemas/orgInviteCollection.json) | A collection of instance organization invitations |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance or organization was not found |

<br/>

## Post

Invites a member to an instance organization

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  invite: myInvite
};
try {
  console.log(await client.instanceOrgInvites.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrgInvites.*, or instanceOrgInvites.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| invite | [Organization Invitation Post](../lib/schemas/orgInvitePost.json) | Y | Object containing new invite info |  | [Organization Invitation Post Example](_schemas.md#organization-invitation-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Instance Organization Invitations](../lib/schemas/orgInviteCollection.json) | The new organization invite |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance or organization was not found |
