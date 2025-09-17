# Application Certificates Actions

Details on the various actions that can be performed on the
Application Certificates resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the application certificates for an application

```javascript
const params = {
  applicationId: myApplicationId
};

// with promises
try {
  console.log(await client.applicationCertificates.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationCertificates.*, or applicationCertificates.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: certificateInfo.commonName, status, id, creationDate, lastUpdated | certificateInfo.commonName | status |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: certificateInfo.commonName, status |  | status |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | the*status |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Certificates](../lib/schemas/applicationCertificates.json) | Collection of application certificates |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new application certificate for an application

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificate: myApplicationCertificate
};

// with promises
try {
  console.log(await client.applicationCertificates.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationCertificates.*, or applicationCertificates.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificate | [Application Certificate Post](../lib/schemas/applicationCertificatePost.json) | Y | Application certificate information |  | [Application Certificate Post Example](_schemas.md#application-certificate-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Application Certificate](../lib/schemas/applicationCertificate.json) | Successfully created application certificate |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
