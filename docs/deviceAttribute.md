# Device Attribute Actions

Details on the various actions that can be performed on the
Device Attribute resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Removes an attribute from a device

```javascript
const params = {
  applicationId: myApplicationId,
  deviceId: myDeviceId,
  name: myName
};
try {
  console.log(await client.deviceAttribute.delete(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, deviceAttribute.*, or deviceAttribute.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceId | string | Y | ID associated with the device |  | 575ecf887ae143cd83dc4aa2 |
| name | string | Y | Name of the attribute |  | voltage |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If device attribute was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device attribute was not found |

<br/>

## Get

Retrieves information on a device attribute

```javascript
const params = {
  applicationId: myApplicationId,
  deviceId: myDeviceId,
  name: myName
};
try {
  console.log(await client.deviceAttribute.get(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, deviceAttribute.*, or deviceAttribute.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceId | string | Y | ID associated with the device |  | 575ecf887ae143cd83dc4aa2 |
| name | string | Y | Name of the attribute |  | voltage |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Attribute](../lib/schemas/deviceAttribute.json) | Device attribute information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device attribute was not found |

<br/>

## Patch

Updates an attribute on a device

```javascript
const params = {
  applicationId: myApplicationId,
  deviceId: myDeviceId,
  name: myName,
  deviceAttribute: myDeviceAttribute
};
try {
  console.log(await client.deviceAttribute.patch(params));
} catch (err) {
  console.error(err);
}
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, deviceAttribute.*, or deviceAttribute.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceId | string | Y | ID associated with the device |  | 575ecf887ae143cd83dc4aa2 |
| name | string | Y | Name of the attribute |  | voltage |
| deviceAttribute | [Device Attribute Patch](../lib/schemas/deviceAttributePatch.json) | Y | Object containing new properties of the device attribute |  | [Device Attribute Patch Example](_schemas.md#device-attribute-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Attribute](../lib/schemas/deviceAttribute.json) | Updated device attribute information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device attribute was not found |
