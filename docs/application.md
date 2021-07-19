# Application Actions

Details on the various actions that can be performed on the
Application resource, including the expected
parameters and the potential responses.

##### Contents

*   [Apply Template](#apply-template)
*   [Archive Data](#archive-data)
*   [Backfill Archive Data](#backfill-archive-data)
*   [Clone](#clone)
*   [Delete](#delete)
*   [Export](#export)
*   [Full Data Tables Archive](#full-data-tables-archive)
*   [Full Events Archive](#full-events-archive)
*   [Get](#get)
*   [Globals](#globals)
*   [Import](#import)
*   [Mqtt Publish Message](#mqtt-publish-message)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
*   [Readme](#readme)
*   [Readme Patch](#readme-patch)
*   [Search](#search)

<br/>

## Apply Template

Add resources to an application via an application template

```javascript
var params = {
  applicationId: myApplicationId,
  options: myOptions
};

// with callbacks
client.application.applyTemplate(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.applyTemplate(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.applyTemplate.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| options | [Application Apply Template Patch Schema](../lib/schemas/applicationApplyTemplatePatch.json) | Y | Object containing template import options |  | [Application Apply Template Patch Schema Example](_schemas.md#application-apply-template-patch-schema-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application](../lib/schemas/application.json) | Updated application information |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If a job was enqueued for the resources to be imported into the application |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application is not found |

<br/>

## Archive Data

Returns success when a job has been enqueued to archive this application&#x27;s device data for a given day

```javascript
var params = {
  applicationId: myApplicationId,
  date: myDate
};

// with callbacks
client.application.archiveData(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.archiveData(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.archiveData.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| date | string | Y | The date to archive data (ms since epoch), it must be within the archive time range older than 31 days and newer than the organizations dataTTL |  | 1518556791829 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Enqueued a job to archive this applications device data |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Backfill Archive Data

Returns success when a job has been enqueued to backfill all current data to its archive

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.backfillArchiveData(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.backfillArchiveData(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.backfillArchiveData.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Enqueued a job to backfill device data to this application archive location |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Clone

Copy an application into a new application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.clone(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.clone(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.clone.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| options | [Application Clone Post Schema](../lib/schemas/applicationClonePost.json) | N | Object containing optional clone fields |  | [Application Clone Post Schema Example](_schemas.md#application-clone-post-schema-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success Dry Run](../lib/schemas/applicationCloneDryRunResult.json) | if dryRun is set and successful, then return success |
| 201 | [Application Creation By Template Result](../lib/schemas/applicationCreationByTemplateResult.json) | If application was successfully cloned |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If application was enqueued to be cloned |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application is not found |
| 422 | [Validation Error](../lib/schemas/validationErrors.json) | Error if too many validation errors occurred on other resources |

<br/>

## Delete

Deletes an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If application was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Export

Export an application and all of its resources

```javascript
var params = {
  applicationId: myApplicationId,
  options: myOptions
};

// with callbacks
client.application.export(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.export(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.export.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| options | [Application Export Post Schema](../lib/schemas/applicationExportPost.json) | Y | Object containing export application options |  | [Application Export Post Schema Example](_schemas.md#application-export-post-schema-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Export Result](../lib/schemas/applicationExportResult.json) | a url to download the zip of exported resources |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If application was enqueued to be exported |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application is not found |

<br/>

## Full Data Tables Archive

Returns success when a job has been enqueued to archive all selected data tables

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.fullDataTablesArchive(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.fullDataTablesArchive(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.fullDataTablesArchive.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Enqueued a job to archive all selected data tables of this application archive location |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Full Events Archive

Returns success when a job has been enqueued to archive all current events

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.fullEventsArchive(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.fullEventsArchive(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.fullEventsArchive.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Enqueued a job to archive all events to this application archive location |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Get

Retrieves information on an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, application.*, or application.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from application summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in application summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application](../lib/schemas/application.json) | Application information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Globals

Updates an application global at the given key

```javascript
var params = {
  applicationId: myApplicationId,
  globals: myGlobals
};

// with callbacks
client.application.globals(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.globals(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, application.*, or application.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| globals | [Application Global Patch](../lib/schemas/applicationGlobalPatch.json) | Y | Array of objects containing new application global information |  | [Application Global Patch Example](_schemas.md#application-global-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application](../lib/schemas/application.json) | Updated application information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Import

Add multiple resources to an application via a zip file

```javascript
var params = {
  applicationId: myApplicationId,
  importBundle: myImportBundle
};

// with callbacks
client.application.import(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.import(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.import.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| importBundle | file | Y | The zip file containing all of the resources to import into the application |  | undefined |
| email | string | N | Email address to notify the user when the job to import the application resources has completed or errored, defaults to the email address of the user making the request |  | email@example.com |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application](../lib/schemas/application.json) | Updated application information |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If a job was enqueued for the resources to be imported into the application |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application is not found |

<br/>

## Mqtt Publish Message

Publishes the given message to the given MQTT topic

```javascript
var params = {
  applicationId: myApplicationId,
  payload: myPayload
};

// with callbacks
client.application.mqttPublishMessage(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.mqttPublishMessage(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, application.*, or application.mqttPublishMessage.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| payload | [MQTT Publish Body](../lib/schemas/mqttPublishBody.json) | Y | Object containing topic and message |  | [MQTT Publish Body Example](_schemas.md#mqtt-publish-body-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | Message successfully published |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Patch

Updates information about an application

```javascript
var params = {
  applicationId: myApplicationId,
  application: myApplication
};

// with callbacks
client.application.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, application.*, or application.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| application | [Application Patch](../lib/schemas/applicationPatch.json) | Y | Object containing new application properties |  | [Application Patch Example](_schemas.md#application-patch-example) |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from application summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in application summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application](../lib/schemas/application.json) | Updated application information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Payload Counts

Returns payload counts for the time range specified for this application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.payloadCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.payloadCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.payloadCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for payload count query (ms since epoch) | -2592000000 | 0 |
| end | string | N | End of range for payload count query (ms since epoch) | 0 | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Stats](../lib/schemas/payloadStats.json) | Payload counts, by type and source |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Readme

Get the current application readme information

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.application.readme(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.readme(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, application.*, or application.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Readme](../lib/schemas/applicationReadme.json) | The application readme information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Readme Patch

Update the current application readme information

```javascript
var params = {
  applicationId: myApplicationId,
  readme: myReadme
};

// with callbacks
client.application.readmePatch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.readmePatch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, application.*, or application.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| readme | [Application Readme Patch](../lib/schemas/applicationReadmePatch.json) | Y | Object containing new readme information |  | [Application Readme Patch Example](_schemas.md#application-readme-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Readme](../lib/schemas/applicationReadme.json) | Updated readme information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Search

Search across an application&#x27;s resources by target identifier

```javascript
var params = {
  applicationId: myApplicationId,
  filter: myFilter
};

// with callbacks
client.application.search(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.application.search(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.search.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| filter | string | Y | The partial resource name being searched for |  | my dev |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Search Result](../lib/schemas/applicationSearchResult.json) | An array of resource ids, names, descriptions, and types matching the search query |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application is not found |
