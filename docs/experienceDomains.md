# Experience Domains Actions

Details on the various actions that can be performed on the
Experience Domains resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the experience domains for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.experienceDomains.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceDomains.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, experienceDomains.*, or experienceDomains.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Experience Domains](../lib/schemas/experienceDomains.json) | Collection of experience domains |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new experience domain for an application

```javascript
var params = {
  applicationId: myApplicationId,
  experienceDomain: myExperienceDomain
};

// with callbacks
client.experienceDomains.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.experienceDomains.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, experienceDomains.*, or experienceDomains.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| experienceDomain | [Experience Domain Post](../lib/schemas/experienceDomainPost.json) | Y | New experience domain information |  | [Experience Domain Post Example](_schemas.md#experience-domain-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Experience Domain](../lib/schemas/experienceDomain.json) | Successfully created experience domain |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
