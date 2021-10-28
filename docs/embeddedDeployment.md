# Embedded Deployment Actions

Details on the various actions that can be performed on the
Embedded Deployment resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)

<br/>

## Get

Retrieves information on an embedded deployment

```javascript
var params = {
  applicationId: myApplicationId,
  embeddedDeploymentId: myEmbeddedDeploymentId
};

// with callbacks
client.embeddedDeployment.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.embeddedDeployment.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, embeddedDeployment.*, or embeddedDeployment.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| embeddedDeploymentId | string | Y | ID associated with the embedded deployment |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Embedded Deployment](../lib/schemas/embeddedDeployment.json) | Embedded deployment information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if embedded deployment was not found |
