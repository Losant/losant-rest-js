# Solution Actions

Details on the various actions that can be performed on the
Solution resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes a solution

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId
};

// with callbacks
client.solution.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solution.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If solution was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if solution was not found |

<br/>

## Get

Retrieves information on a solution

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId
};

// with callbacks
client.solution.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solution.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Solution](_schemas.md#solution) | Solution information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if solution was not found |

<br/>

## Patch

Updates information about a solution

```javascript
var params = {
  orgId: myOrgId,
  solutionId: mySolutionId,
  solution: mySolution
};

// with callbacks
client.solution.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.solution.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| orgId | string | Y | ID associated with the organization |  | 575ed6e87ae143cd83dc4aa8 |
| solutionId | string | Y | ID associated with the solution |  | 57955788124b37010084c053 |
| solution | [Solution Patch](_schemas.md#solution-patch) | Y | Object containing new properties of the solution |  | [Solution Patch Example](_schemas.md#solution-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Webhook](_schemas.md#webhook) | Updated solution information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if solution was not found |
