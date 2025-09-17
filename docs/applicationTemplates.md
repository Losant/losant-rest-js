# Application Templates Actions

Details on the various actions that can be performed on the
Application Templates resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Get Categories](#get-categories)
*   [Get Unique Keywords](#get-unique-keywords)

<br/>

## Get

Returns the application templates the current user has permission to see

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.applicationTemplates.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, applicationTemplates.*, or applicationTemplates.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name, authorName |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my * app |
| keywords | array | N | List of keywords to filter by. Matches all provided keywords. |  | [ &#x27;gps&#x27;, &#x27;aws&#x27; ] |
| categoryId | string | N | ID of a category to filter by. |  | 575ec76c7ae143cd83dc4a96 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Templates](../lib/schemas/applicationTemplates.json) | Collection of application templates |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Get Categories

Returns a category list, beginning at the specified category

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.applicationTemplates.getCategories(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, applicationTemplates.*, or applicationTemplates.getCategories.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| baseId | string | N | ID of the category to begin from |  | 575ed6e87ae143cd83dc4aa8 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Application Template Categories](../lib/schemas/applicationTemplateCategories.json) | Collection of application categories |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Get Unique Keywords

Returns an array of all unique keywords currently in use by templates

```javascript
const params = {}; // all params are optional
try {
  console.log(await client.applicationTemplates.getUniqueKeywords(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.User, all.User.read, applicationTemplates.*, or applicationTemplates.getUniqueKeywords.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Template Keywords](../lib/schemas/templateKeywords.json) | Array of all unique template keywords |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
