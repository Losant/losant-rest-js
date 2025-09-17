# Instance Actions

Details on the various actions that can be performed on the
Instance resource, including the expected
parameters and the potential responses.

##### Contents

*   [Device Counts](#device-counts)
*   [Generate Report](#generate-report)
*   [Get](#get)
*   [Historical Summaries](#historical-summaries)
*   [Notebook Minute Counts](#notebook-minute-counts)
*   [Patch](#patch)
*   [Payload Counts](#payload-counts)
*   [Payload Counts Breakdown](#payload-counts-breakdown)

<br/>

## Device Counts

Returns device counts by day for the time range specified for this instance

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.deviceCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.deviceCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.deviceCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for device count query (ms since epoch) |  | 0 |
| end | string | N | End of range for device count query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Counts](../lib/schemas/deviceCounts.json) | Device counts by day |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |

<br/>

## Generate Report

Generates a CSV report on instance stats

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.generateReport(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.generateReport(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.generateReport.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| options | [Instance Report Options Post](../lib/schemas/instanceReportOptionsPost.json) | N | Object containing report configuration |  | [Instance Report Options Post Example](_schemas.md#instance-report-options-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If generation of report was successfully started |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Get

Returns an instance

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance](../lib/schemas/instance.json) | A single instance |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |

<br/>

## Historical Summaries

Return historical summary entries for an instance

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.historicalSummaries(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.historicalSummaries(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.historicalSummaries.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| month | string | N | Timestamp within the month to report a summary for. | now | 1609459204518 |
| sortField | string | N | Field to sort the results by. Accepted values are: resourceId, currentPeriodStart | currentPeriodStart | resourceId |
| sortDirection | string | N | Direction to sort the results in. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: resourceType, resourceId, ownerId, ownerType |  | resourceType |
| filter | string | N | Filter to apply against the filtered field. Blank or not provided means no filtering. |  | organization |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Historical Summaries](../lib/schemas/historicalSummaries.json) | Collection of historical summaries |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Notebook Minute Counts

Returns notebook execution usage by day for the time range specified for this instance

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.notebookMinuteCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.notebookMinuteCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.notebookMinuteCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for notebook execution query (ms since epoch) |  | 0 |
| end | string | N | End of range for notebook execution query (ms since epoch) |  | 1465790400000 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Notebook Minute Counts](../lib/schemas/notebookMinuteCounts.json) | Notebook usage information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |

<br/>

## Patch

Updates information about an instance

```javascript
const params = {
  instanceId: myInstanceId,
  instance: myInstance
};

// with callbacks
client.instance.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.User, instance.*, or instance.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| instance | [Instance Patch](../lib/schemas/instancePatch.json) | Y | Updated instance information |  | [Instance Patch Example](_schemas.md#instance-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Instance](../lib/schemas/instance.json) | The updated instance object |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Payload Counts

Returns payload counts for the time range specified for this instance

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.payloadCounts(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.payloadCounts(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.payloadCounts.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| asBytes | string | N | If the resulting stats should be returned as bytes | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Stats](../lib/schemas/payloadStats.json) | Payload counts, by type and source |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |

<br/>

## Payload Counts Breakdown

Returns payload counts per resolution in the time range specified for this instance

```javascript
const params = {
  instanceId: myInstanceId
};

// with callbacks
client.instance.payloadCountsBreakdown(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.instance.payloadCountsBreakdown(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Instance, all.Instance.read, all.User, all.User.read, instance.*, or instance.payloadCountsBreakdown.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| instanceId | string | Y | ID associated with the instance |  | 575ec8687ae143cd83dc4a97 |
| start | string | N | Start of range for payload count query (ms since epoch) |  | 0 |
| end | string | N | End of range for payload count query (ms since epoch) |  | 1465790400000 |
| resolution | string | N | Resolution in milliseconds. Accepted values are: 86400000, 3600000 | 86400000 | 86400000 |
| asBytes | string | N | If the resulting stats should be returned as bytes | false | true |
| includeNonBillable | string | N | If non-billable payloads should be included in the result | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Payload Counts Breakdown](../lib/schemas/payloadCountsBreakdown.json) | Sum of payload counts by date |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if instance was not found |
