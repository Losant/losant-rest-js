# Event Actions

Details on the various actions that can be performed on the
Event resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an event

```javascript
const params = {
  applicationId: myApplicationId,
  eventId: myEventId
};

// with promises
try {
  console.log(await client.event.delete(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, event.*, or event.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| eventId | string | Y | ID associated with the event |  | 575ed0de7ae143cd83dc4aa5 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If event was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if event was not found |

<br/>

## Get

Retrieves information on an event

```javascript
const params = {
  applicationId: myApplicationId,
  eventId: myEventId
};

// with promises
try {
  console.log(await client.event.get(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, event.*, or event.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| eventId | string | Y | ID associated with the event |  | 575ed0de7ae143cd83dc4aa5 |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Event](../lib/schemas/event.json) | Event information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if event was not found |

<br/>

## Patch

Updates information about an event

```javascript
const params = {
  applicationId: myApplicationId,
  eventId: myEventId,
  event: myEvent
};

// with promises
try {
  console.log(await client.event.patch(params));
';
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, event.*, or event.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| eventId | string | Y | ID associated with the event |  | 575ed0de7ae143cd83dc4aa5 |
| event | [Event Patch](../lib/schemas/eventPatch.json) | Y | Object containing new properties of the event |  | [Event Patch Example](_schemas.md#event-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Event](../lib/schemas/event.json) | Updated event information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if event is not found |
