# Experience Actions

Details on the various actions that can be performed on the
Experience resource, including the expected
parameters and the potential responses.

##### Contents

*   [Bootstrap](#bootstrap)
*   [Delete](#delete)

<br/>

## Bootstrap

Bootstraps the experience for this application with standard endpoints and views

```javascript
var params = {
  applicationId: myApplicationId,
  options: myOptions
};

// with callbacks
client.experience.bootstrap(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experience.bootstrap(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experience.*, or experience.bootstrap.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| options | [Experience Bootstrap Options](_schemas.md#experience-bootstrap-options) | Y | Bootstrap options |  | [Experience Bootstrap Options Example](_schemas.md#experience-bootstrap-options-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Bootstrap Result](_schemas.md#experience-bootstrap-result) | If bootstrap was successful |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |

<br/>

## Delete

Deletes multiple parts of an experience including users, groups, slugs, domains, versions, endpoints, views, and workflows

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.experience.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experience.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experience.*, or experience.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| keepUsers | string | N | If this is set, Experience Users will not be removed. |  | true |
| keepGroups | string | N | If this is set, Experience Groups will not be removed. |  | true |
| keepSlugs | string | N | If this is set, Experience Slugs will not be removed. |  | true |
| keepDomains | string | N | If this is set, Experience Domains will not be removed. |  | true |
| removeVersions | string | N | If this is set, all Experience Versions and their contents will be removed (except for develop). |  | true |
| keepViews | string | N | If this is set, Experience Views (in the develop version) will not be removed. |  | true |
| keepEndpoints | string | N | If this is set, Experience Endpoints (in the develop version) will not be removed. |  | true |
| removeWorkflows | string | N | If this is set, all Experience Workflows (in the develop version) will ve removed. |  | true |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If deletion was successful |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
