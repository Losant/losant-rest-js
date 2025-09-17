# Experience Endpoint Actions

Details on the various actions that can be performed on the
Experience Endpoint resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Linked Resources](#linked-resources)
*   [Patch](#patch)

<br/>

## Delete

Deletes an experience endpoint

```javascript
const params = {
  applicationId: myApplicationId,
  experienceEndpointId: myExperienceEndpointId
};

// with callbacks
client.experienceEndpoint.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoint.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceEndpoint.*, or experienceEndpoint.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceEndpointId | string | Y | ID associated with the experience endpoint |  | 575ed78e7ae143cd83dc4aab |
| includeWorkflows | string | N | If the workflows that utilize this experience endpoint should also be deleted. |  | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If experience endpoint was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience endpoint was not found |

<br/>

## Get

Retrieves information on an experience endpoint

```javascript
const params = {
  applicationId: myApplicationId,
  experienceEndpointId: myExperienceEndpointId
};

// with callbacks
client.experienceEndpoint.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoint.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceEndpoint.*, or experienceEndpoint.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceEndpointId | string | Y | ID associated with the experience endpoint |  | 575ed78e7ae143cd83dc4aab |
| version | string | N | Version of this experience endpoint to return | develop | develop |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Endpoint](../lib/schemas/experienceEndpoint.json) | Experience endpoint information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience endpoint was not found |

<br/>

## Linked Resources

Retrieves information on resources linked to an experience endpoint

```javascript
const params = {
  applicationId: myApplicationId,
  experienceEndpointId: myExperienceEndpointId
};

// with callbacks
client.experienceEndpoint.linkedResources(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoint.linkedResources(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceEndpoint.*, or experienceEndpoint.linkedResources.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceEndpointId | string | Y | ID associated with the experience endpoint |  | 575ed78e7ae143cd83dc4aab |
| version | string | N | Version of this experience endpoint to query | develop | develop |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by returned workflows | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Linked Resources](../lib/schemas/experienceLinkedResources.json) | Linked resource information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience endpoint was not found |

<br/>

## Patch

Updates information about an experience endpoint

```javascript
const params = {
  applicationId: myApplicationId,
  experienceEndpointId: myExperienceEndpointId,
  experienceEndpoint: myExperienceEndpoint
};

// with callbacks
client.experienceEndpoint.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoint.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceEndpoint.*, or experienceEndpoint.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceEndpointId | string | Y | ID associated with the experience endpoint |  | 575ed78e7ae143cd83dc4aab |
| experienceEndpoint | [Experience Endpoint Patch](../lib/schemas/experienceEndpointPatch.json) | Y | Object containing new properties of the experience endpoint |  | [Experience Endpoint Patch Example](_schemas.md#experience-endpoint-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Endpoint](../lib/schemas/experienceEndpoint.json) | Updated experience endpoint information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if experience endpoint was not found |
