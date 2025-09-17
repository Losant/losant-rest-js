# Events Actions

Details on the various actions that can be performed on the
Events resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Export](#export)
*   [Get](#get)
*   [Most Recent by Severity](#most-recent-by-severity)
*   [Patch](#patch)
*   [Post](#post)

<br/>

## Delete

Delete events

```javascript
const params = {
  applicationId: myApplicationId
};

// with callbacks
client.events.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.events.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, events.*, or events.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Advanced Event Query](../lib/schemas/advancedEventQuery.json) | N | Query to apply to filter the events |  | [Advanced Event Query Example](_schemas.md#advanced-event-query-example) |
| email | string | N | Email address to send job complete notification to. Defaults to current user&#x27;s email. |  | email@example.com |
| callbackUrl | string | N | Callback URL to call with delete result |  | https://example.com/cburl |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Events Deleted](../lib/schemas/eventsDeleted.json) | If request successfully deletes a set of Events |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If a bulk delete job has been enqueued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if events were not found |

<br/>

## Export

Request an export of an application&#x27;s event data

```javascript
const params = {
  applicationId: myApplicationId
};

// with callbacks
client.events.export(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.events.export(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, events.*, or events.export.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| exportData | [Event Export Options](../lib/schemas/eventsExport.json) | N | Export options for events |  | [Event Export Options Example](_schemas.md#event-export-options-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If generation of export was successfully started |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Get

Returns the events for an application

```javascript
const params = {
  applicationId: myApplicationId
};

// with callbacks
client.events.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.events.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, events.*, or events.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: subject, id, creationDate, lastUpdated, level, state, deviceId | creationDate | subject |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: subject |  | subject |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | abnormal power to * |
| state | string | N | If provided, return events only in the given state. Accepted values are: new, acknowledged, resolved |  | new |
| query | [Advanced Event Query](../lib/schemas/advancedEventQuery.json) | N | Event filter JSON object which overrides the filterField, filter, and state parameters. |  | [Advanced Event Query Example](_schemas.md#advanced-event-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Events](../lib/schemas/events.json) | Collection of events |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Most Recent by Severity

Returns the first new event ordered by severity and then creation

```javascript
const params = {
  applicationId: myApplicationId
};

// with callbacks
client.events.mostRecentBySeverity(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.events.mostRecentBySeverity(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, events.*, or events.mostRecentBySeverity.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| filter | string | N | Filter to apply against event subjects. Supports globbing. Blank or not provided means no filtering. |  | abnormal power to * |
| query | [Advanced Event Query](../lib/schemas/advancedEventQuery.json) | N | Event filter JSON object which overrides the filter parameter. |  | [Advanced Event Query Example](_schemas.md#advanced-event-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Event Plus New Count](../lib/schemas/eventPlusNewCount.json) | The event, plus count of currently new events |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Patch

Asynchronously updates information for matching events by subject and/or current state

```javascript
const params = {
  applicationId: myApplicationId,
  updates: myUpdates
};

// with callbacks
client.events.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.events.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, events.*, or events.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| filterField | string | N | Field to filter the events to act on by. Blank or not provided means no filtering. Accepted values are: subject |  | subject |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | abnormal power to * |
| state | string | N | If provided, act on events only in the given state. Accepted values are: new, acknowledged, resolved |  | new |
| query | [Advanced Event Query](../lib/schemas/advancedEventQuery.json) | N | Event filter JSON object which overrides the filterField, filter, and state parameters. |  | [Advanced Event Query Example](_schemas.md#advanced-event-query-example) |
| updates | [Event Patch](../lib/schemas/eventPatch.json) | Y | Object containing updated information for the events |  | [Event Patch Example](_schemas.md#event-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If the bulk update has been completed |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If a bulk update job has been enqueued |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application is not found |

<br/>

## Post

Create a new event for an application

```javascript
const params = {
  applicationId: myApplicationId,
  event: myEvent
};

// with callbacks
client.events.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.events.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, events.*, or events.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| event | [Event Post](../lib/schemas/eventPost.json) | Y | New event information |  | [Event Post Example](_schemas.md#event-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Event](../lib/schemas/event.json) | Successfully created event |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
| 429 | [Error](../lib/schemas/error.json) | Error if event creation rate limit exceeded |
