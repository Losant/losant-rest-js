# Instance Org Member Actions

Details on the various actions that can be performed on the
Instance Org Member resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an organization member

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  userId: myUserId
};
try {
  console.log(await client.instanceOrgMember.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrgMember.*, or instanceOrgMember.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a95 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| userId | string | Y | ID associated with the organization member |  | 575ec8687ae143cd83dc4a94 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If member was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization or member was not found |

<br/>

## Get

Returns an organization member

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  userId: myUserId
};
try {
  console.log(await client.instanceOrgMember.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceOrgMember.*, or instanceOrgMember.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a95 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| userId | string | Y | ID associated with the organization member |  | 575ec8687ae143cd83dc4a94 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Org Member](../lib/schemas/instanceOrgMember.json) | A single organization member |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance, organization, or member was not found |

<br/>

## Patch

Modifies the role of an organization member

```javascript
const params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  userId: myUserId,
  member: myMember
};
try {
  console.log(await client.instanceOrgMember.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrgMember.*, or instanceOrgMember.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a95 |
| orgId | string | Y | ID associated with the organization |  | 575ec8687ae143cd83dc4a97 |
| userId | string | Y | ID associated with the organization member |  | 575ec8687ae143cd83dc4a94 |
| member | [Instance Org Member Patch](../lib/schemas/instanceOrgMemberPatch.json) | Y | Object containing new member info |  | [Instance Org Member Patch Example](_schemas.md#instance-org-member-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Org Member](../lib/schemas/instanceOrgMember.json) | The modified organization member |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization or member was not found |
