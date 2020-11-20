# Devices Actions

Details on the various actions that can be performed on the
Devices resource, including the expected
parameters and the potential responses.

##### Contents

*   [Attribute Names](#attribute-names)
*   [Delete](#delete)
*   [Export](#export)
*   [Get](#get)
*   [Patch](#patch)
*   [Post](#post)
*   [Remove Data](#remove-data)
*   [Send Command](#send-command)
*   [Tag Keys](#tag-keys)
*   [Tag Values](#tag-values)

<br/>

## Attribute Names

Gets the attribute names that match the given query. Maximum 1K returned.

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.devices.attributeNames(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.attributeNames(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.attributeNames.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Advanced Device Query](../lib/schemas/advancedDeviceQuery.json) | N | Device filter JSON object |  | [Advanced Device Query Example](_schemas.md#advanced-device-query-example) |
| dataType | [Device Attribute Data Type Filter](../lib/schemas/deviceAttributeDataTypeFilter.json) | N | Filter the devices by the given attribute data type or types |  | [Device Attribute Data Type Filter Example](_schemas.md#device-attribute-data-type-filter-example) |
| startsWith | string | N | Filter attributes down to those that have names starting with the given string. Case insensitive. |  | temper |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Attribute Names Response](../lib/schemas/attributeNamesResponse.json) | The matching attribute names |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Delete

Delete devices

```javascript
var params = {
  applicationId: myApplicationId,
  options: myOptions
};

// with callbacks
client.devices.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, devices.*, or devices.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| options | [Devices Delete Post](../lib/schemas/devicesDeletePost.json) | Y | Object containing device query and email |  | [Devices Delete Post Example](_schemas.md#devices-delete-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Devices Deleted](../lib/schemas/devicesDeleted.json) | Object indicating number of devices deleted or failed |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If a job was enqueued for the devices to be deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Export

Creates an export of all device metadata

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.devices.export(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.export(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.export.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| email | string | N | Email address to send export to. Defaults to current user&#x27;s email. |  | email@example.com |
| callbackUrl | string | N | Callback URL to call with export result |  | https://example.com/cburl |
| options | [Devices Metadata Export Post](../lib/schemas/devicesExportPost.json) | N | Object containing device query and optionally email or callback |  | [Devices Metadata Export Post Example](_schemas.md#devices-metadata-export-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If generation of export was successfully started |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Get

Returns the devices for an application

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.devices.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| sortField | string | N | Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated | name | name |
| sortDirection | string | N | Direction to sort the results by. Accepted values are: asc, desc | asc | asc |
| page | string | N | Which page of results to return | 0 | 0 |
| perPage | string | N | How many items to return per page | 100 | 10 |
| filterField | string | N | Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name |  | name |
| filter | string | N | Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering. |  | my * device |
| deviceClass | [Device Class Filter](../lib/schemas/deviceClassFilter.json) | N | Filter the devices by the given device class or classes |  | [Device Class Filter Example](_schemas.md#device-class-filter-example) |
| tagFilter | [Device Tag Filter](../lib/schemas/deviceTagFilter.json) | N | Array of tag pairs to filter by |  | [Device Tag Filter Example](_schemas.md#device-tag-filter-example) |
| excludeConnectionInfo | string | N | If set, do not return connection info |  | true |
| parentId | string | N | Filter devices as children of a given system id |  | 575ecf887ae143cd83dc4aa2 |
| query | [Advanced Device Query](../lib/schemas/advancedDeviceQuery.json) | N | Device filter JSON object which overrides the filterField, filter, deviceClass, tagFilter, and parentId parameters. |  | [Advanced Device Query Example](_schemas.md#advanced-device-query-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Devices](../lib/schemas/devices.json) | Collection of devices |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Patch

Update the fields of one or more devices

```javascript
var params = {
  applicationId: myApplicationId,
  patchInfo: myPatchInfo
};

// with callbacks
client.devices.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, devices.*, or devices.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| patchInfo | [Devices Patch](../lib/schemas/devicesPatch.json) | Y | Object containing device query or IDs and update operations |  | [Devices Patch Example](_schemas.md#devices-patch-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Devices Updated](../lib/schemas/devicesUpdated.json) | Object including an update log link and the number of devices updated, failed, and skipped |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | Successfully queued bulk update job |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Post

Create a new device for an application

```javascript
var params = {
  applicationId: myApplicationId,
  device: myDevice
};

// with callbacks
client.devices.post(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.post(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, devices.*, or devices.post.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| device | [Device Post](../lib/schemas/devicePost.json) | Y | New device information |  | [Device Post Example](_schemas.md#device-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 201 | [Device](../lib/schemas/device.json) | Successfully created device |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Remove Data

Removes all device data for the specified time range. Defaults to all data.

```javascript
var params = {
  applicationId: myApplicationId,
  options: myOptions
};

// with callbacks
client.devices.removeData(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.removeData(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, devices.*, or devices.removeData.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| options | [Devices Remove Data Post](../lib/schemas/devicesRemoveDataPost.json) | Y | Object defining the device data to delete and devices to delete from |  | [Devices Remove Data Post Example](_schemas.md#devices-remove-data-post-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Devices Data Removed](../lib/schemas/devicesDataRemoved.json) | Object indicating number of devices completed or skipped |
| 202 | [Job Enqueued API Result](../lib/schemas/jobEnqueuedResult.json) | If a job was enqueued for device data to be removed |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Send Command

Send a command to multiple devices

```javascript
var params = {
  applicationId: myApplicationId,
  multiDeviceCommand: myMultiDeviceCommand
};

// with callbacks
client.devices.sendCommand(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.sendCommand(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Device, all.Organization, all.User, devices.*, or devices.sendCommand.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| multiDeviceCommand | [Multi Device Command](../lib/schemas/multiDeviceCommand.json) | Y | Command to send to the device |  | [Multi Device Command Example](_schemas.md#multi-device-command-example) |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](../lib/schemas/success.json) | If command was successfully sent |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Tag Keys

Gets the unique tag keys for devices that match the given query. Maximum 1K returned.

```javascript
var params = {
  applicationId: myApplicationId
};

// with callbacks
client.devices.tagKeys(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.tagKeys(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.tagKeys.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Advanced Device Query](../lib/schemas/advancedDeviceQuery.json) | N | Device filter JSON object |  | [Advanced Device Query Example](_schemas.md#advanced-device-query-example) |
| startsWith | string | N | Filter keys down to those that start with the given string. Case insensitive. |  | temper |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Tag Keys Response](../lib/schemas/tagKeysResponse.json) | The matching tag keys |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |

<br/>

## Tag Values

Gets the unique tag values for the given key for devices that match the given query. Maximum 1K returned.

```javascript
var params = {
  applicationId: myApplicationId,
  key: myKey
};

// with callbacks
client.devices.tagValues(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.devices.tagValues(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.tagValues.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| query | [Advanced Device Query](../lib/schemas/advancedDeviceQuery.json) | N | Device filter JSON object |  | [Advanced Device Query Example](_schemas.md#advanced-device-query-example) |
| key | string | Y | The tag key to get the values for |  | myKey |
| startsWith | string | N | Filter values down to those that start with the given string. Case insensitive. |  | temper |
| losantdomain | string | N | Domain scope of request (rarely needed) |  | example.com |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Tag Values Response](../lib/schemas/tagValuesResponse.json) | The matching tag values |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](../lib/schemas/error.json) | Error if malformed request |
| 404 | [Error](../lib/schemas/error.json) | Error if application was not found |
