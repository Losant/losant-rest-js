# Audit Logs Actions

Details on the various actions that can be performed on the
Audit Logs resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)

<br/>

## Get

Returns the audit logs for the organization

```javascript
const params = {
  orgId: myOrgId
};
try {
  console.log(await client.auditLogs.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, auditLogs.*, or auditLogs.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| sortField | string | N | Field to sort the results by. Accepted values are: creationDate, responseStatus, actorName | creationDate | creationDate |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| start | string | N | Start of time range for audit log query |  | 1465790400000 |
| end | string | N | End of time range for audit log query |  | 1465790400000 |
| auditLogFilter | [Audit Log Filter](../lib/schemas/auditLogFilter.json) | N | Filters for the audit log query |  | [Audit Log Filter Example](_schemas.md#audit-log-filter-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Audit Logs](../lib/schemas/auditLogs.json) | Collection of audit logs |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |
