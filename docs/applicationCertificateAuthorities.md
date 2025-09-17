# Application Certificate Authorities Actions

Details on the various actions that can be performed on the
Application Certificate Authorities resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the application certificate authorities for an application

```javascript
const params = {
  applicationId: myApplicationId
};

// with promises
try {
  console.log(await client.applicationCertificateAuthorities.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationCertificateAuthorities.*, or applicationCertificateAuthorities.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, status, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name, status |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | the*name |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Certificate Authorities](../lib/schemas/applicationCertificateAuthorities.json) | Collection of application certificate authorities |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new application certificate authority for an application

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateAuthority: myApplicationCertificateAuthority
};

// with promises
try {
  console.log(await client.applicationCertificateAuthorities.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationCertificateAuthorities.*, or applicationCertificateAuthorities.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateAuthority | [Application Certificate Authority Post](../lib/schemas/applicationCertificateAuthorityPost.json) | Y | Application certificate authority information |  | [Application Certificate Authority Post Example](_schemas.md#application-certificate-authority-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Application Certificate Authority](../lib/schemas/applicationCertificateAuthority.json) | Successfully created application certificate authority |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
