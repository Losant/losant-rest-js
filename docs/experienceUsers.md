# Experience Users Actions

Details on the various actions that can be performed on the
Experience Users resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the experience users for an application

```javascript
const params = {
  applicationId: myApplicationId
};

// with promises
try {
  console.log(await client.experienceUsers.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceUsers.*, or experienceUsers.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: firstName, lastName, email, id, creationDate, lastLogin, lastUpdated | email | email |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: firstName, lastName, email |  | email |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my*user |
| experienceGroupId | string | N | Filter users to those only in the specified group, special experienceGroupIds of &#x27;any&#x27; which will give users who are in at least one group and &#x27;none&#x27; will give you users who are not in any groups. |  | 575ec8687ae143cd83dc4a97 |
| includeAncestorGroups | string | N | If set will include members from ancestors of the specified experienceGroupId |  | true |
| query | [Advanced Experience User Query](../lib/schemas/advancedExperienceUserQuery.json) | N | Experience user filter JSON object which overrides all other filter params. |  | [Advanced Experience User Query Example](_schemas.md#advanced-experience-user-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Users](../lib/schemas/experienceUsers.json) | Collection of experience users |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new experience user for an application

```javascript
const params = {
  applicationId: myApplicationId,
  experienceUser: myExperienceUser
};

// with promises
try {
  console.log(await client.experienceUsers.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceUsers.*, or experienceUsers.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceUser | [Experience User Post](../lib/schemas/experienceUserPost.json) | Y | New experience user information |  | [Experience User Post Example](_schemas.md#experience-user-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Experience User](../lib/schemas/experienceUser.json) | Successfully created experience user |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
