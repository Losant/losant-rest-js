# Audit Log Actions

Details on the various actions that can be performed on the
Audit Log resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)

<br/>

## Get

Retrieves information on an audit log

```javascript
var params = {
  orgId: myOrgId,
  auditLogId: myAuditLogId
};

// with callbacks
client.auditLog.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.auditLog.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, auditLog.*, or auditLog.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| auditLogId | string | Y | ID associated with the audit log |  | 57955788124b37010084c053 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Audit Log](../lib/schemas/auditLog.json) | Audit log information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if audit log was not found |
