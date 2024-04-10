# Instance Audit Log Actions

Details on the various actions that can be performed on the
Instance Audit Log resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)

<br/>

## Get

Retrieves information on an instance audit log

```javascript
var params = {
  instanceId: myInstanceId,
  instanceAuditLogId: myInstanceAuditLogId
};

// with callbacks
client.instanceAuditLog.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceAuditLog.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceAuditLog.*, or instanceAuditLog.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| instanceAuditLogId | string | Y | ID associated with the instance audit log |  | 57955788124b37010084c053 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Audit Log](../lib/schemas/instanceAuditLog.json) | Instance audit log information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance audit log was not found |
