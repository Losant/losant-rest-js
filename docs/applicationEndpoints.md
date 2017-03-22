# Application Endpoints Actions

Details on the various actions that can be performed on the
Application Endpoints resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)
*   [Stats](#stats)

<br/>

## Get

Returns the application endpoints for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.applicationEndpoints.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationEndpoints.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationEndpoints.*, or applicationEndpoints.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: order, method, route, id, creationDate, requestCount | order | position |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: method, route |  | email |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*route |
| applicationGroupId | string | N | Filter endpoints to those only in the specified group |  | 575ec8687ae143cd83dc4a97 |
| requestCountDuration | string | N | If set, a count of recent requests is included on each endpoint for the duration requested (milliseconds) |  | 86400000 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Endpoints](_schemas.md#application-endpoints) | Collection of application endpoints |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Post

Create a new application endpoint for an application

```javascript
var params = {
  applicationId: myApplicationId,
  applicationEndpoint: myApplicationEndpoint
};

// with callbacks
client.applicationEndpoints.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationEndpoints.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationEndpoints.*, or applicationEndpoints.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationEndpoint | [Application Endpoint Post](_schemas.md#application-endpoint-post) | Y | New application endpoint information |  | [Application Endpoint Post Example](_schemas.md#application-endpoint-post-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Application Endpoint](_schemas.md#application-endpoint) | Successfully created application endpoint |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Stats

Get statistics about endpoint requests

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.applicationEndpoints.stats(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationEndpoints.stats(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationEndpoints.*, or applicationEndpoints.stats.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| statGrouping | string | N | Field to group the statistics by. Accepted values are: statusCode, endpointId | statusCode | statusCode |
| duration | string | N | Duration in milliseconds | 86400000 | 86400000 |
| resolution | string | N | Resolution in milliseconds | 3600000 | 3600000 |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Endpoint Stats](_schemas.md#application-endpoint-stats) | Statistics for endpoint requests |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
