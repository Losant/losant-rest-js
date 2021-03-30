# Instance Org Actions

Details on the various actions that can be performed on the
Instance Org resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an organization

```javascript
var params = {
  instanceId: myInstanceId,
  orgId: myOrgId
};

// with callbacks
client.instanceOrg.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrg.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrg.*, or instanceOrg.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If organization was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

<br/>

## Get

Retrieves information on an organization

```javascript
var params = {
  instanceId: myInstanceId,
  orgId: myOrgId
};

// with callbacks
client.instanceOrg.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrg.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceOrg.*, or instanceOrg.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Organization](../lib/schemas/instanceOrg.json) | A single organization |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |

<br/>

## Patch

Updates information about an organization

```javascript
var params = {
  instanceId: myInstanceId,
  orgId: myOrgId,
  organization: myOrganization
};

// with callbacks
client.instanceOrg.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceOrg.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceOrg.*, or instanceOrg.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| organization | [Instance Owned Organization Patch](../lib/schemas/instanceOrgPatch.json) | Y | Object containing new organization properties |  | [Instance Owned Organization Patch Example](_schemas.md#instance-owned-organization-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Organization](../lib/schemas/instanceOrg.json) | Updated organization information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if organization was not found |
