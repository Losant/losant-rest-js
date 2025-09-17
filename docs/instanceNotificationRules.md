# Instance Notification Rules Actions

Details on the various actions that can be performed on the
Instance Notification Rules resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the notification rules for an instance

```javascript
const params = {
  instanceId: myInstanceId
};
try {
  console.log(await client.instanceNotificationRules.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceNotificationRules.*, or instanceNotificationRules.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | key |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*rule |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notification Rules](../lib/schemas/notificationRules.json) | Collection of notification rules |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Post

Create a new notification rule for an instance

```javascript
const params = {
  instanceId: myInstanceId,
  notificationRule: myNotificationRule
};
try {
  console.log(await client.instanceNotificationRules.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceNotificationRules.*, or instanceNotificationRules.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| notificationRule | [Notification Rule Post](../lib/schemas/notificationRulePost.json) | Y | Notification rule information |  | [Notification Rule Post Example](_schemas.md#notification-rule-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Notification Rule](../lib/schemas/notificationRule.json) | The successfully created notification rule |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
