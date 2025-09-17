# Dashboards Actions

Details on the various actions that can be performed on the
Dashboards resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the dashboards the current user has permission to see

```javascript
const params = {}; // all params are optional

// with promises
try {
  console.log(await client.dashboards.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.Organization.read, all.User, all.User.read, dashboards.*, or dashboards.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate, ownerId, applicationId, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my * dashboard |
| applicationId | string | N | If not provided, return all dashboards. If provided but blank, only return dashboards that are not linked to applications. If provided and an id, only return dashboards linked to the given application id. |  | 575ec8687ae143cd83dc4a97 |
| orgId | string | N | If not provided, return all dashboards. If provided but blank, only return dashboards belonging to the current user. If provided and an id, only return dashboards belonging to the given organization id. |  | 575ece7e7ae143cd83dc4a9c |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Dashboards](../lib/schemas/dashboards.json) | Collection of dashboards |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |

<br/>

## Post

Create a new dashboard

```javascript
const params = {
  dashboard: myDashboard
};

// with promises
try {
  console.log(await client.dashboards.post(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Organization, all.User, dashboards.*, or dashboards.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| dashboard | [Dashboard Post](../lib/schemas/dashboardPost.json) | Y | New dashboard information |  | [Dashboard Post Example](_schemas.md#dashboard-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Dashboard](../lib/schemas/dashboard.json) | Successfully created dashboard |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
