# Application Template Actions

Details on the various actions that can be performed on the
Application Template resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)

<br/>

## Get

Retrieves information on an application template

```javascript
const params = {
  templateId: myTemplateId
};
try {
  console.log(await client.applicationTemplate.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, applicationTemplate.*, or applicationTemplate.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| templateId | string | Y | ID associated with the template |  | 575ed0de7ae143cd83dc4aa5 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Template](../lib/schemas/applicationTemplate.json) | Application template information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if template was not found |
