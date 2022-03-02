# Instance Custom Node Actions

Details on the various actions that can be performed on the
Instance Custom Node resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Errors](#errors)
*   [Get](#get)
*   [Patch](#patch)
*   [Stats](#stats)

<br/>

## Delete

Deletes a Custom Node

```javascript
var params = {
  instanceId: myInstanceId,
  instanceCustomNodeId: myInstanceCustomNodeId
};

// with callbacks
client.instanceCustomNode.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceCustomNode.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceCustomNode.*, or instanceCustomNode.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| instanceCustomNodeId | string | Y | ID associated with the Custom Node |  | 575ec7417ae143cd83dc4a95 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If Custom Node was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if Custom Node was not found |

<br/>

## Errors

Get information about errors that occurred during runs of this Custom Node

```javascript
var params = {
  instanceId: myInstanceId,
  instanceCustomNodeId: myInstanceCustomNodeId
};

// with callbacks
client.instanceCustomNode.errors(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceCustomNode.errors(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceCustomNode.*, or instanceCustomNode.errors.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| instanceCustomNodeId | string | Y | ID associated with the Custom Node |  | 575ec7417ae143cd83dc4a95 |
| duration | string | N | Duration of time range in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| limit | string | N | Maximum number of errors to return | 25 | 25 |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | desc |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Errors](../lib/schemas/flowErrors.json) | Custom Node error information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if Custom Node was not found |

<br/>

## Get

Retrieves information on a Custom Node

```javascript
var params = {
  instanceId: myInstanceId,
  instanceCustomNodeId: myInstanceCustomNodeId
};

// with callbacks
client.instanceCustomNode.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceCustomNode.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceCustomNode.*, or instanceCustomNode.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| instanceCustomNodeId | string | Y | ID associated with the Custom Node |  | 575ec7417ae143cd83dc4a95 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Custom Node](../lib/schemas/instanceCustomNode.json) | Custom Node information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if Custom Node was not found |

<br/>

## Patch

Updates information about a Custom Node

```javascript
var params = {
  instanceId: myInstanceId,
  instanceCustomNodeId: myInstanceCustomNodeId,
  instanceCustomNode: myInstanceCustomNode
};

// with callbacks
client.instanceCustomNode.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceCustomNode.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instanceCustomNode.*, or instanceCustomNode.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| instanceCustomNodeId | string | Y | ID associated with the Custom Node |  | 575ec7417ae143cd83dc4a95 |
| instanceCustomNode | [Instance Custom Node Patch](../lib/schemas/instanceCustomNodePatch.json) | Y | Object containing new properties of the Custom Node |  | [Instance Custom Node Patch Example](_schemas.md#instance-custom-node-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance Custom Node](../lib/schemas/instanceCustomNode.json) | Updated Custom Node information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if Custom Node was not found |

<br/>

## Stats

Get statistics about runs for this Custom Node

```javascript
var params = {
  instanceId: myInstanceId,
  instanceCustomNodeId: myInstanceCustomNodeId
};

// with callbacks
client.instanceCustomNode.stats(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instanceCustomNode.stats(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instanceCustomNode.*, or instanceCustomNode.stats.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec7417ae143cd83dc4a96 |
| instanceCustomNodeId | string | Y | ID associated with the Custom Node |  | 575ec7417ae143cd83dc4a95 |
| duration | string | N | Duration of time range in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| resolution | string | N | Resolution in milliseconds | 3600000 | 3600000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Statistics](../lib/schemas/flowStats.json) | Statistics for Custom Node runs |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if Custom Node was not found |
