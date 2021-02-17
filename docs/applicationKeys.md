# Application Keys Actions

Details on the various actions that can be performed on the
Application Keys resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the applicationKeys for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.applicationKeys.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationKeys.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationKeys.*, or applicationKeys.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: key, status, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: key, status |  | key |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | the*key |
| query | [Advanced Application Key Query](../lib/schemas/advancedApplicationKeyQuery.json) | N | Application key filter JSON object which overrides the filterField and filter parameters. |  | [Advanced Application Key Query Example](_schemas.md#advanced-application-key-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Keys](../lib/schemas/applicationKeys.json) | Collection of applicationKeys |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new applicationKey for an application

```javascript
var params = {
  applicationId: myApplicationId,
  applicationKey: myApplicationKey
};

// with callbacks
client.applicationKeys.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationKeys.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationKeys.*, or applicationKeys.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationKey | [Application Key Post](../lib/schemas/applicationKeyPost.json) | Y | ApplicationKey information |  | [Application Key Post Example](_schemas.md#application-key-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Application Key Post Response](../lib/schemas/applicationKeyPostResponse.json) | Successfully created applicationKey |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
