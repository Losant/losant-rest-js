# Events Actions

Details on the various actions that can be performed on the
Events resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Most Recent by Severity](#most-recent-by-severity)
*   [Patch](#patch)
*   [Post](#post)

<br/>

## Get

Returns the events for an application

```javascript
var params = {
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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| sortField | string | N | Field to sort the results by. Accepted values are: subject, id, creationDate | creationDate |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | desc |
| page | string | N | Which page of results to return | 0 |
| perPage | string | N | How many items to return per page | 1000 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: subject |  |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  |
| state | string | N | If provided, return events only in the given state. Accepted values are: new, acknowledged, resolved |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Events](_schemas.md#events) | Collection of events |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Most Recent by Severity

Returns the first new event ordered by severity and then creation

```javascript
var params = {
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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| filter | string | N | Filter to apply against event subjects. Supports globbing. Blank or not provided means no filtering. |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | undefined | The event, plus count of currently new events |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Patch

Updates information for matching events by subject and/or current state

```javascript
var params = {
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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| filterField | string | N | Field to filter the events to act on by. Blank or not provided means no filtering. Accepted values are: subject |  |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  |
| state | string | N | If provided, act on events only in the given state. Accepted values are: new, acknowledged, resolved |  |
| updates | [Event Patch](_schemas.md#event-patch) | Y | Object containing updated information for the events |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If updates were successfully applied |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application is not found |

<br/>

## Post

Create a new event for an application

```javascript
var params = {
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

#### Available Parameters

| Name | Type | Required | Description | Default |
| ---- | ---- | -------- | ----------- | ------- |
| applicationId | string | Y | ID associated with the application |  |
| event | [Event Post](_schemas.md#event-post) | Y | New event information |  |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Event](_schemas.md#event) | Successfully created event |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
| 429 | [Error](_schemas.md#error) | Error if event creation rate limit exceeded |
