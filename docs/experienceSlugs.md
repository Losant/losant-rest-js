# Experience Slugs Actions

Details on the various actions that can be performed on the
Experience Slugs resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the experience slugs for an application

```javascript
const params = {
  applicationId: myApplicationId
};

// with promises
try {
  console.log(await client.experienceSlugs.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, experienceSlugs.*, or experienceSlugs.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Slugs](../lib/schemas/experienceSlugs.json) | Collection of experience slugs |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new experience slug for an application

```javascript
const params = {
  applicationId: myApplicationId,
  experienceSlug: myExperienceSlug
};

// with promises
try {
  console.log(await client.experienceSlugs.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceSlugs.*, or experienceSlugs.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceSlug | [Experience Slug Post](../lib/schemas/experienceSlugPost.json) | Y | New experience slug information |  | [Experience Slug Post Example](_schemas.md#experience-slug-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Experience Slug](../lib/schemas/experienceSlug.json) | Successfully created experience slug |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
