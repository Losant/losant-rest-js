# Application Actions

Details on the various actions that can be performed on the
Application resource, including the expected
parameters and the potential responses.

##### Contents

*   [Archive Data](#archive-data)
*   [Backfill Archive Data](#backfill-archive-data)
*   [Delete](#delete)
*   [Full Events Archive](#full-events-archive)
*   [Get](#get)
*   [Mqtt Publish Message](#mqtt-publish-message)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
*   [Search](#search)

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
| 200 | [Success](_schemas.md#success) | Enqueued a job to archive this applications device data |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Backfill Archive Data

Returns success when a job has been enqueued to backfill all current data to it&#x27;s archive

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
| 200 | [Success](_schemas.md#success) | Enqueued a job to backfill device data to this application archive location |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
| 200 | [Success](_schemas.md#success) | If application was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
| 200 | [Success](_schemas.md#success) | Enqueued a job to archive all events to this application archive location |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.get.

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
| 200 | [Application](_schemas.md#application) | Application information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
| payload | [MQTT Publish Body](_schemas.md#mqtt-publish-body) | Y | Object containing topic and message |  | [MQTT Publish Body Example](_schemas.md#mqtt-publish-body-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | Message successfully published |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
all.Application, all.Organization, all.User, application.*, or application.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID of the associated application |  | 575ec8687ae143cd83dc4a97 |
| application | [Application Patch](_schemas.md#application-patch) | Y | Object containing new application properties |  | [Application Patch Example](_schemas.md#application-patch-example) |
| summaryExclude | string | N | Comma-separated list of summary fields to exclude from application summary |  | payloadCount |
| summaryInclude | string | N | Comma-separated list of summary fields to include in application summary |  | payloadCount |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application](_schemas.md#application) | Updated application information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
| 200 | [Payload Counts](_schemas.md#payload-counts) | Payload counts, by type and source |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

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
| 200 | [Application Search Result](_schemas.md#application-search-result) | An array of resource ids, names, descriptions, and types matching the search query |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application is not found |
