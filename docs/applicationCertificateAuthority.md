# Application Certificate Authority Actions

Details on the various actions that can be performed on the
Application Certificate Authority resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an application certificate authority

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateAuthorityId: myApplicationCertificateAuthorityId
};

// with callbacks
client.applicationCertificateAuthority.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationCertificateAuthority.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationCertificateAuthority.*, or applicationCertificateAuthority.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateAuthorityId | string | Y | ID associated with the application certificate authority |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If application certificate authority was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application certificate authority was not found |

<br/>

## Get

Retrieves information on an application certificate authority

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateAuthorityId: myApplicationCertificateAuthorityId
};

// with callbacks
client.applicationCertificateAuthority.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationCertificateAuthority.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationCertificateAuthority.*, or applicationCertificateAuthority.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateAuthorityId | string | Y | ID associated with the application certificate authority |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Certificate Authority](../lib/schemas/applicationCertificateAuthority.json) | Application certificate authority information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application certificate authority was not found |

<br/>

## Patch

Updates information about an application certificate authority

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateAuthorityId: myApplicationCertificateAuthorityId,
  applicationCertificateAuthority: myApplicationCertificateAuthority
};

// with callbacks
client.applicationCertificateAuthority.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationCertificateAuthority.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationCertificateAuthority.*, or applicationCertificateAuthority.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateAuthorityId | string | Y | ID associated with the application certificate authority |  | 575ec76c7ae143cd83dc4a96 |
| applicationCertificateAuthority | [Application Certificate Authority Patch](../lib/schemas/applicationCertificateAuthorityPatch.json) | Y | Object containing new properties of the application certificate authority |  | [Application Certificate Authority Patch Example](_schemas.md#application-certificate-authority-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Certificate Authority](../lib/schemas/applicationCertificateAuthority.json) | Updated application certificate authority information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application certificate authority was not found |
