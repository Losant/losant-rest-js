# Subscription Actions

Details on the various actions that can be performed on the
Subscription resource, including the expected
parameters and the potential responses.

##### Contents

*   [Delete](#delete)
*   [Get](#get)
*   [Patch](#patch)

<br/>

## Delete

Deletes an subscription

```javascript
var params = {
  applicationId: myApplicationId,
  subscriptionId: mySubscriptionId
};

// with callbacks
client.subscription.delete(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.subscription.delete(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, subscription.*, or subscription.delete.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| subscriptionId | string | Y | ID associated with the subscription |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Success](_schemas.md#success) | If subscription was successfully deleted |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if subscription was not found |

<br/>

## Get

Retrieves information on an subscription

```javascript
var params = {
  applicationId: myApplicationId,
  subscriptionId: mySubscriptionId
};

// with callbacks
client.subscription.get(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.subscription.get(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, subscription.*, or subscription.get.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| subscriptionId | string | Y | ID associated with the subscription |  | 575ed78e7ae143cd83dc4aab |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Subscription](_schemas.md#subscription) | subscription information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if subscription was not found |

<br/>

## Patch

Updates information about an subscription

```javascript
var params = {
  applicationId: myApplicationId,
  subscriptionId: mySubscriptionId,
  subscription: mySubscription
};

// with callbacks
client.subscription.patch(params, function (err, result) {
  if (err) { return console.error(err); }
  console.log(result);
});

// with promises
client.subscription.patch(params)
  .then(console.log)
  .catch(console.error);
```

#### Authentication
The client must be configured with a valid api access token to call this
action. The token must include at least one of the following scopes:
all.Application, all.Organization, all.User, subscription.*, or subscription.patch.

#### Available Parameters

| Name | Type | Required | Description | Default | Example |
| ---- | ---- | -------- | ----------- | ------- | ------- |
| applicationId | string | Y | ID associated with the application |  | 575ec8687ae143cd83dc4a97 |
| subscriptionId | string | Y | ID associated with the subscription |  | 575ed78e7ae143cd83dc4aab |
| subscription | [Subscription Patch](_schemas.md#subscription-patch) | Y | Object containing new properties of the subscription |  | [Subscription Patch Example](_schemas.md#subscription-patch-example) |

#### Successful Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 200 | [Subscription](_schemas.md#subscription) | Updated subscription information |

#### Error Responses

| Code | Type | Description |
| ---- | ---- | ----------- |
| 400 | [Error](_schemas.md#error) | Error if malformed request |
| 404 | [Error](_schemas.md#error) | Error if subscription was not found |
