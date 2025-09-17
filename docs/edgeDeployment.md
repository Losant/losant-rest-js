# Edge Deployment Actions

Details on the various actions that can be performed on the
Edge Deployment resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)

<br/>

## Get

Retrieves information on an edge deployment

```javascript
const params = {
  applicationId: myApplicationId,
  edgeDeploymentId: myEdgeDeploymentId
};
try {
  console.log(await client.edgeDeployment.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, edgeDeployment.*, or edgeDeployment.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| edgeDeploymentId | string | Y | ID associated with the edge deployment |  | 575ed78e7ae143cd83dc4aab |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Edge Deployment](../lib/schemas/edgeDeployment.json) | Edge deployment information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if edge deployment was not found |
