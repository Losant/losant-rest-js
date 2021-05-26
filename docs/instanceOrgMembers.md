# Instance Org Members Actions

Details on the various actions that can be performed on the
Instance Org Members resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns a collection of instance organization members

```javascript
var params = {
  instanceId: myInstanceId,
  orgId: myOrgId
};

// with callbacks
client.instanceOrgMembers.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrgMembers.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceOrgMembers.*, or instanceOrgMembers.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: email, role | email | role |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: email, role |  | email |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my * instance |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Organization Members](../lib/schemas/instanceOrgMembers.json) | A collection of instance organization members |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |

<br/>

## Post

Creates a new organization member

```javascript
var params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  member: myMember
};

// with callbacks
client.instanceOrgMembers.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrgMembers.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrgMembers.*, or instanceOrgMembers.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| member | [Instance Org Member Post](../lib/schemas/instanceOrgMemberPost.json) | Y | Object containing new member info |  | [Instance Org Member Post Example](_schemas.md#instance-org-member-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Org Member](../lib/schemas/instanceOrgMember.json) | The newly created instance member |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |
