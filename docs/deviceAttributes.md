# Device Attributes Actions

Details on the various actions that can be performed on the
Device Attributes resource, including the expected
parameters and the potential responses.

##### Contents

*   [Get](#get)
*   [Post](#post)

<br/>

## Get

Returns the attributes for a device

```javascript
const params = {
  applicationId: myApplicationId,
  deviceId: myDeviceId
};

// with callbacks
client.deviceAttributes.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.deviceAttributes.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, deviceAttributes.*, or deviceAttributes.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceId | string | Y | ID associated with the device |  | 575ecf887ae143cd83dc4aa2 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, dataType | name | status |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name, dataType |  | status |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | number |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Device Attributes](../lib/schemas/deviceAttributes.json) | Collection of device attributes |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device was not found |

<br/>

## Post

Adds a new attribute to a device

```javascript
const params = {
  applicationId: myApplicationId,
  deviceId: myDeviceId,
  deviceAttribute: myDeviceAttribute
};

// with callbacks
client.deviceAttributes.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.deviceAttributes.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, deviceAttributes.*, or deviceAttributes.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| deviceId | string | Y | ID associated with the device |  | 575ecf887ae143cd83dc4aa2 |
| deviceAttribute | [Device Attribute Post](../lib/schemas/deviceAttributePost.json) | Y | Device attribute information |  | [Device Attribute Post Example](_schemas.md#device-attribute-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Device Attribute](../lib/schemas/deviceAttribute.json) | Successfully created device attribute |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if device was not found |
