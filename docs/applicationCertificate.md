# Application Certificate Actions

Details on the various actions that can be performed on the
Application Certificate resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an application certificate

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateId: myApplicationCertificateId
};

// with callbacks
client.applicationCertificate.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationCertificate.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationCertificate.*, or applicationCertificate.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateId | string | Y | ID associated with the application certificate |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If application certificate was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application certificate was not found |

<br/>

## Get

Retrieves information on an application certificate

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateId: myApplicationCertificateId
};

// with callbacks
client.applicationCertificate.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationCertificate.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationCertificate.*, or applicationCertificate.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateId | string | Y | ID associated with the application certificate |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Certificate](../lib/schemas/applicationCertificate.json) | Application certificate information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application certificate was not found |

<br/>

## Patch

Updates information about an application certificate

```javascript
const params = {
  applicationId: myApplicationId,
  applicationCertificateId: myApplicationCertificateId,
  applicationCertificate: myApplicationCertificate
};

// with callbacks
client.applicationCertificate.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.applicationCertificate.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, applicationCertificate.*, or applicationCertificate.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| applicationCertificateId | string | Y | ID associated with the application certificate |  | 575ec76c7ae143cd83dc4a96 |
| applicationCertificate | [Application Certificate Patch](../lib/schemas/applicationCertificatePatch.json) | Y | Object containing new properties of the application certificate |  | [Application Certificate Patch Example](_schemas.md#application-certificate-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Certificate](../lib/schemas/applicationCertificate.json) | Updated application certificate information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application certificate was not found |
