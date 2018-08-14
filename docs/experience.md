# Experience Actions

Details on the various actions that can be performed on the
Experience resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)

<br/>

## Delete

Deletes multiple parts of an experience including users, domains, endpoints, groups, views, and workflows

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
| keepUser | string | N | Experience Users will automatically be deleted unless this is set. |  | true |
| keepDomains | string | N | Experience Domains will automatically be deleted unless this is set. |  | true |
| keepEndpoints | string | N | Experience Endpoints will automatically be deleted unless this is set. |  | true |
| keepGroups | string | N | Experience Groups will automatically be deleted unless this is set. |  | true |
| keepViews | string | N | Experience Views will automatically be deleted unless this is set. |  | true |
| removeWorkflows | string | N | If set will delete any workflows under this application with an Endpoint Trigger Node. |  | true |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If everything marked as true was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if application was not found |
