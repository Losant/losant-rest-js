# Experience Endpoints Actions

Details on the various actions that can be performed on the
Experience Endpoints resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)
*   [Stats](#stats)

<br/>

## Get

Returns the experience endpoints for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.experienceEndpoints.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoints.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceEndpoints.*, or experienceEndpoints.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: order, method, route, id, creationDate, requestCount, lastUpdated | order | order |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: method, route |  | method |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*route |
| experienceGroupId | string | N | Filter endpoints to those only in the specified group |  | 575ec8687ae143cd83dc4a97 |
| requestCountDuration | string | N | If set, a count of recent requests is included on each endpoint for the duration requested (milliseconds) |  | 86400000 |
| version | string | N | Return the experience endpoints belonging to this version | develop | develop |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Endpoints](_schemas.md#experience-endpoints) | Collection of experience endpoints |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Post

Create a new experience endpoint for an application

```javascript
var params = {
  applicationId: myApplicationId,
  experienceEndpoint: myExperienceEndpoint
};

// with callbacks
client.experienceEndpoints.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoints.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceEndpoints.*, or experienceEndpoints.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceEndpoint | [Experience Endpoint Post](_schemas.md#experience-endpoint-post) | Y | New experience endpoint information |  | [Experience Endpoint Post Example](_schemas.md#experience-endpoint-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Experience Endpoint](_schemas.md#experience-endpoint) | Successfully created experience endpoint |

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
client.experienceEndpoints.stats(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceEndpoints.stats(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceEndpoints.*, or experienceEndpoints.stats.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| statGrouping | string | N | Field to group the statistics by. Accepted values are: statusCode, endpointId, version, domain | statusCode | statusCode |
| duration | string | N | Duration in milliseconds | 86400000 | 86400000 |
| end | string | N | End of time range in milliseconds since epoch | 0 | 0 |
| resolution | string | N | Resolution in milliseconds | 3600000 | 3600000 |
| versionFilter | string | N | Filters the stats to a particular experience version |  | myVersion |
| domainFilter | string | N | Filters the stats to a particular experience domain or slug |  | mycustomdomain.com |
| statusCodeFilter | string | N | Filters the stats to a particular status code |  | 200 |
| endpointIdFilter | string | N | Filters the stats to a particular endpoint |  | 575ec8687ae143cd83dc4a98 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Endpoint Stats](_schemas.md#experience-endpoint-stats) | Statistics for endpoint requests |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
