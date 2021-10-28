# Embedded Deployments Actions

Details on the various actions that can be performed on the
Embedded Deployments resource, including the expected
parameters and the potential responses.

##### Contents

*   [Export](#export)
*   [Get](#get)
*   [Release](#release)
*   [Remove](#remove)
*   [Replace](#replace)

<br/>

## Export

Request an export of the compiled WASM files for a current deployment

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.embeddedDeployments.export(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.embeddedDeployments.export(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, embeddedDeployments.*, or embeddedDeployments.export.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| options | [Embedded Deployment Export](../lib/schemas/embeddedDeploymentExport.json) | N | Export options for embedded deployment |  | [Embedded Deployment Export Example](_schemas.md#embedded-deployment-export-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If generation of export was successfully started |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if deployment was not found |

<br/>

## Get

Returns the embedded deployments for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.embeddedDeployments.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.embeddedDeployments.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, embeddedDeployments.*, or embeddedDeployments.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: id, creationDate, lastUpdated | lastUpdated | creationDate |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 1000 | 10 |
| deviceId | string | N | Filter deployments to the given Device ID |  | 575ecf887ae143cd83dc4aa2 |
| version | string | N | Filter deployments to the given Workflow Version (matches against both current and desired) |  | myFlowVersion |
| flowId | string | N | Filter deployments to the given Workflow ID |  | 575ed18f7ae143cd83dc4aa6 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Embedded Deployments](../lib/schemas/embeddedDeployments.json) | Collection of embedded deployments |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application or device was not found |

<br/>

## Release

Deploy an embedded workflow version to one or more embedded devices. Version can be blank, if removal is desired.

```javascript
var params = {
  applicationId: myApplicationId,
  deployment: myDeployment
};

// with callbacks
client.embeddedDeployments.release(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.embeddedDeployments.release(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, embeddedDeployments.*, or embeddedDeployments.release.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deployment | [Embedded Deployment Release](../lib/schemas/embeddedDeploymentRelease.json) | Y | Deployment release information |  | [Embedded Deployment Release Example](_schemas.md#embedded-deployment-release-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Success](../lib/schemas/success.json) | If deployment release has been initiated successfully |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Remove

Remove all embedded deployments from a device, remove all embedded deployments of a workflow, or remove a specific workflow from a specific device

```javascript
var params = {
  applicationId: myApplicationId,
  deployment: myDeployment
};

// with callbacks
client.embeddedDeployments.remove(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.embeddedDeployments.remove(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, embeddedDeployments.*, or embeddedDeployments.remove.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deployment | [Embedded Deployment Remove](../lib/schemas/embeddedDeploymentRemove.json) | Y | Deployment removal information |  | [Embedded Deployment Remove Example](_schemas.md#embedded-deployment-remove-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Success](../lib/schemas/success.json) | If deployment removal has been initiated successfully |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Replace

Replace deployments of an embedded workflow version with a new version. New version can be blank, if removal is desired.

```javascript
var params = {
  applicationId: myApplicationId,
  deployment: myDeployment
};

// with callbacks
client.embeddedDeployments.replace(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.embeddedDeployments.replace(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, embeddedDeployments.*, or embeddedDeployments.replace.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deployment | [Embedded Deployment Replace](../lib/schemas/embeddedDeploymentReplace.json) | Y | Deployment replacement information |  | [Embedded Deployment Replace Example](_schemas.md#embedded-deployment-replace-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Success](../lib/schemas/success.json) | If deployment replacement has been initiated successfully |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
