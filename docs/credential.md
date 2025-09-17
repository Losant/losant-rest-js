# Credential Actions

Details on the various actions that can be performed on the
Credential resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Linked Resources](#linked-resources)
*   [Patch](#patch)

<br/>

## Delete

Deletes a credential

```javascript
const params = {
  applicationId: myApplicationId,
  credentialId: myCredentialId
};

// with promises
try {
  console.log(await client.credential.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, credential.*, or credential.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| credentialId | string | Y | ID associated with the credential |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If credential was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if credential was not found |

<br/>

## Get

Retrieves information on a credential

```javascript
const params = {
  applicationId: myApplicationId,
  credentialId: myCredentialId
};

// with promises
try {
  console.log(await client.credential.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, credential.*, or credential.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| credentialId | string | Y | ID associated with the credential |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Credential](../lib/schemas/credential.json) | credential information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if credential was not found |

<br/>

## Linked Resources

Retrieves information on resources linked to a credential

```javascript
const params = {
  applicationId: myApplicationId,
  credentialId: myCredentialId
};

// with promises
try {
  console.log(await client.credential.linkedResources(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, credential.*, or credential.linkedResources.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| credentialId | string | Y | ID associated with the credential |  | 575ec76c7ae143cd83dc4a96 |
| includeCustomNodes | string | N | If the result of the request should also include the details of any custom nodes referenced by returned workflows | false | true |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Credential Linked Resources](../lib/schemas/credentialLinkedResources.json) | Linked resource information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if credential was not found |

<br/>

## Patch

Updates information about a credential

```javascript
const params = {
  applicationId: myApplicationId,
  credentialId: myCredentialId,
  credential: myCredential
};

// with promises
try {
  console.log(await client.credential.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, credential.*, or credential.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| credentialId | string | Y | ID associated with the credential |  | 575ec76c7ae143cd83dc4a96 |
| credential | [Credential Patch](../lib/schemas/credentialPatch.json) | Y | Object containing new properties of the credential |  | [Credential Patch Example](_schemas.md#credential-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Credential](../lib/schemas/credential.json) | Updated credential information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if credential was not found |
