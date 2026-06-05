# Private Files Actions

Details on the various actions that can be performed on the
Private Files resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the private files for an application

```javascript
const params = {
  applicationId: myApplicationId
};
try {
  console.log(await client.privateFiles.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Application.read, all.Organization, all.Organization.bounded, all.Organization.read, all.User, all.User.bounded, all.User.cli, all.User.read, privateFiles.*, or privateFiles.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: lastUpdated, type, name, creationDate | lastUpdated | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | myFile |
| type | string | N | Limit by the type (file or directory) of the file |  | file |
| status | string | N | Limit the result to only files of this status. Accepted values are: completed, pending |  | completed |
| directory | string | N | Get private files that are inside of this directory |  | /a/path/ |
| urlTTL | string | N | Time in seconds that the private file url will be valid for. Only applies to private files of type &#x27;file&#x27;. If 0, no url will be returned. | 900 | 900 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Files Schema](../lib/schemas/files.json) | Collection of private files |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new private file for an application

```javascript
const params = {
  applicationId: myApplicationId,
  privateFile: myPrivateFile
};
try {
  console.log(await client.privateFiles.post(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.bounded, all.Application.cli, all.Organization, all.Organization.bounded, all.User, all.User.bounded, all.User.cli, privateFiles.*, or privateFiles.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| privateFile | [File Post](../lib/schemas/filePost.json) | Y | New private file information |  | [File Post Example](_schemas.md#file-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [File Upload Post Response](../lib/schemas/fileUploadPostResponse.json) | Successfully created private file and the information needed to upload the file content |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
