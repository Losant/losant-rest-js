# Experience Views Actions

Details on the various actions that can be performed on the
Experience Views resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the experience views for an application

```javascript
const params = {
  applicationId: myApplicationId
};

// with promises
try {
  console.log(await client.experienceViews.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, experienceViews.*, or experienceViews.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: id, creationDate, name, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*view |
| viewType | string | N | Filter views to those only of the given type. Accepted values are: page, layout, component |  | page |
| version | string | N | Return the experience views belonging to this version | develop | develop |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Views](../lib/schemas/experienceViews.json) | Collection of experience views |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new experience view for an application

```javascript
const params = {
  applicationId: myApplicationId,
  experienceView: myExperienceView
};

// with promises
try {
  console.log(await client.experienceViews.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceViews.*, or experienceViews.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceView | [Experience View Post](../lib/schemas/experienceViewPost.json) | Y | New experience view information |  | [Experience View Post Example](_schemas.md#experience-view-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Experience View](../lib/schemas/experienceView.json) | Successfully created experience view |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
