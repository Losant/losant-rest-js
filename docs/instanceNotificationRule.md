# Instance Notification Rule Actions

Details on the various actions that can be performed on the
Instance Notification Rule resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Evaluate](#evaluate)
*   [Get](#get)
*   [Logs](#logs)
*   [Patch](#patch)

<br/>

## Delete

Deletes a notification rule

```javascript
const params = {
  instanceId: myInstanceId,
  notificationRuleId: myNotificationRuleId
};
try {
  console.log(await client.instanceNotificationRule.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| notificationRuleId | string | Y | ID associated with the notification rule |  | 575ec7417ae143cd83dc4a95 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If notification rule was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notification rule was not found |

<br/>

## Evaluate

Queues the evaluation of a notification rule

```javascript
const params = {
  instanceId: myInstanceId,
  notificationRuleId: myNotificationRuleId,
  evaluationOptions: myEvaluationOptions
};
try {
  console.log(await client.instanceNotificationRule.evaluate(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.evaluate.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| notificationRuleId | string | Y | ID associated with the notification rule |  | 575ec7417ae143cd83dc4a95 |
| evaluationOptions | [Notification Rule Evaluation Options](../lib/schemas/notificationRuleEvaluationOptions.json) | Y | The options for the evaluation |  | [Notification Rule Evaluation Options Example](_schemas.md#notification-rule-evaluation-options-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If the evaluation was successfully queued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notification rule was not found |

<br/>

## Get

Retrieves information on a notification rule

```javascript
const params = {
  instanceId: myInstanceId,
  notificationRuleId: myNotificationRuleId
};
try {
  console.log(await client.instanceNotificationRule.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceNotificationRule.*, or instanceNotificationRule.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| notificationRuleId | string | Y | ID associated with the notification rule |  | 575ec7417ae143cd83dc4a95 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notification Rule](../lib/schemas/notificationRule.json) | Notification rule information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notification rule was not found |

<br/>

## Logs

Retrieves information on notification rule deliveries

```javascript
const params = {
  instanceId: myInstanceId,
  notificationRuleId: myNotificationRuleId
};
try {
  console.log(await client.instanceNotificationRule.logs(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.logs.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| notificationRuleId | string | Y | ID associated with the notification rule |  | 575ec7417ae143cd83dc4a95 |
| limit | string | N | Max log entries to return (ordered by time descending) | 1 | 10 |
| since | string | N | Look for log entries since this time (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notification Rule Delivery Logs](../lib/schemas/notificationRuleDeliveryLogs.json) | Notification delivery information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notification rule was not found |

<br/>

## Patch

Updates information about a notification rule

```javascript
const params = {
  instanceId: myInstanceId,
  notificationRuleId: myNotificationRuleId,
  notificationRule: myNotificationRule
};
try {
  console.log(await client.instanceNotificationRule.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| notificationRuleId | string | Y | ID associated with the notification rule |  | 575ec7417ae143cd83dc4a95 |
| notificationRule | [Notification Rule Patch](../lib/schemas/notificationRulePatch.json) | Y | Object containing new properties of the notification rule |  | [Notification Rule Patch Example](_schemas.md#notification-rule-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notification Rule](../lib/schemas/notificationRule.json) | Updated notification rule information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if notification rule was not found |
