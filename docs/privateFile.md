# Private File Actions

Details on the various actions that can be performed on the
Private File resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Move](#move)
*   [Patch](#patch)
*   [Upload](#upload)

<br/>

## Delete

Deletes a private file or directory, if a directory all the contents that directory will also be removed.

```javascript
const params = {
  applicationId: myApplicationId,
  privateFileId: myPrivateFileId
};
try {
  console.log(await client.privateFile.delete(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Organization, all.Organization.bounded, all.User, all.User.bounded, all.User.cli, privateFile.*, or privateFile.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| privateFileId | string | Y | ID associated with the private file |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If private file was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if private file was not found |

<br/>

## Get

Retrieves information on a private file

```javascript
const params = {
  applicationId: myApplicationId,
  privateFileId: myPrivateFileId
};
try {
  console.log(await client.privateFile.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Application.read, all.Organization, all.Organization.bounded, all.Organization.read, all.User, all.User.bounded, all.User.cli, all.User.read, privateFile.*, or privateFile.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| privateFileId | string | Y | ID associated with the private file |  | 575ec76c7ae143cd83dc4a96 |
| urlTTL | string | N | Time in seconds that the private file url will be valid for. Only applies to private files of type &#x27;file&#x27;. If 0, no url will be returned. | 900 | 900 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [File Schema](../lib/schemas/file.json) | Private file information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if private file was not found |

<br/>

## Move

Move a private file or the entire contents of a directory

```javascript
const params = {
  applicationId: myApplicationId,
  privateFileId: myPrivateFileId
};
try {
  console.log(await client.privateFile.move(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Organization, all.Organization.bounded, all.User, all.User.bounded, all.User.cli, privateFile.*, or privateFile.move.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| privateFileId | string | Y | ID associated with the private file |  | 575ec76c7ae143cd83dc4a96 |
| name | undefined | N | The new name of the private file or directory |  | fileA |
| parentDirectory | undefined | N | The new parent directory for the private file or directory to move into. |  | /new/location/here |
| urlTTL | string | N | Time in seconds that the private file url will be valid for. Only applies to private files of type &#x27;file&#x27;. If 0, no url will be returned. | 900 | 900 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [File Schema](../lib/schemas/file.json) | Returns a new private file or directory that was created by the move, if a directory a job will kick off to move all the directories children. |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if private file was not found |

<br/>

## Patch

Reupload a private file

```javascript
const params = {
  applicationId: myApplicationId,
  privateFileId: myPrivateFileId,
  updates: myUpdates
};
try {
  console.log(await client.privateFile.patch(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Organization, all.Organization.bounded, all.User, all.User.bounded, all.User.cli, privateFile.*, or privateFile.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| privateFileId | string | Y | ID associated with the private file |  | 575ec76c7ae143cd83dc4a96 |
| updates | [File Patch](../lib/schemas/filePatch.json) | Y | Updated information about the private file |  | [File Patch Example](_schemas.md#file-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [File Upload Post Response](../lib/schemas/fileUploadPostResponse.json) | Successfully updated private file and the information needed to upload the file content |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if private file was not found |

<br/>

## Upload

Uploads the private file

```javascript
const params = {
  applicationId: myApplicationId,
  privateFileId: myPrivateFileId,
  privateFile: myPrivateFile
};
try {
  console.log(await client.privateFile.upload(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Organization, all.Organization.bounded, all.User, all.User.bounded, all.User.cli, privateFile.*, or privateFile.upload.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| privateFileId | string | Y | ID associated with the private file |  | 575ec76c7ae143cd83dc4a96 |
| privateFile | file | Y | The content of the private file to upload |  | undefined |
| urlTTL | string | N | Time in seconds that the private file url will be valid for. Only applies to private files of type &#x27;file&#x27;. If 0, no url will be returned. | 900 | 900 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [File Schema](../lib/schemas/file.json) | Updated private file content |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if file was not found |
