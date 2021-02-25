# Flows Actions

Details on the various actions that can be performed on the
Flows resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Get by Version](#get-by-version)
*   [Import](#import)
*   [Post](#post)

<br/>

## Get

Returns the flows for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.flows.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flows.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flows.*, or flows.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*flow |
| flowClass | string | N | Filter the workflows by the given flow class. Accepted values are: edge, cloud, customNode, experience | cloud | cloud |
| triggerFilter | [Workflow Trigger Filter](../lib/schemas/flowTriggerFilter.json) | N | Array of triggers to filter by - always filters against default flow version. |  | [Workflow Trigger Filter Example](_schemas.md#workflow-trigger-filter-example) |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| query | [Advanced Workflow Query](../lib/schemas/advancedFlowQuery.json) | N | Workflow filter JSON object which overrides the filterField, filter, triggerFilter, and flowClass parameters. |  | [Advanced Workflow Query Example](_schemas.md#advanced-workflow-query-example) |
| allVersions | string | N | If the request should also return flows with matching versions. Only applicable for requests with an advanced query. | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflows](../lib/schemas/flows.json) | Collection of flows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Get by Version

Returns the flows by version for an application

```javascript
var params = {
  applicationId: myApplicationId,
  version: myVersion
};

// with callbacks
client.flows.getByVersion(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flows.getByVersion(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flows.*, or flows.getByVersion.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*flow |
| flowClass | string | N | Filter the workflows by the given flow class. Accepted values are: edge, cloud, customNode, experience | cloud | cloud |
| version | string | Y | Return the workflow versions for the given version. |  | myVersion |
| triggerFilter | [Workflow Trigger Filter](../lib/schemas/flowTriggerFilter.json) | N | Array of triggers to filter by - always filters against default flow version. |  | [Workflow Trigger Filter Example](_schemas.md#workflow-trigger-filter-example) |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| query | [Advanced Workflow By Version Query](../lib/schemas/advancedFlowByVersionQuery.json) | N | Workflow filter JSON object which overrides the filterField, filter, triggerFilter, and flowClass parameters. |  | [Advanced Workflow By Version Query Example](_schemas.md#advanced-workflow-by-version-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Workflow Versions](../lib/schemas/flowVersions.json) | Collection of flow versions |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Import

Import a set of flows and flow versions

```javascript
var params = {
  applicationId: myApplicationId,
  importData: myImportData
};

// with callbacks
client.flows.import(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flows.import(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flows.*, or flows.import.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| importData | [Workflows Import Post](../lib/schemas/flowsImportPost.json) | Y | New flow and flow version information |  | [Workflows Import Post Example](_schemas.md#workflows-import-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Workflow Import Result](../lib/schemas/flowsImportResult.json) | Successfully imported workflows |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new flow for an application

```javascript
var params = {
  applicationId: myApplicationId,
  flow: myFlow
};

// with callbacks
client.flows.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.flows.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, flows.*, or flows.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| flow | [Workflow Post](../lib/schemas/flowPost.json) | Y | New flow information |  | [Workflow Post Example](_schemas.md#workflow-post-example) |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by the returned workflows | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Workflow](../lib/schemas/flow.json) | Successfully created flow |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
