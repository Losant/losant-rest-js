/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2025 Losant IoT, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */


export default function (options, client) {
  const internals = {};

  /**
   * Deletes a notification rule
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.delete.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} notificationRuleId - ID associated with the notification rule
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If notification rule was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notification rule was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('instanceNotificationRule', 'delete');

  /**
   * Queues the evaluation of a notification rule
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.evaluate.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} notificationRuleId - ID associated with the notification rule
   *  {hash} evaluationOptions - The options for the evaluation (https://api.losant.com/#/definitions/notificationRuleEvaluationOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If the evaluation was successfully queued (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notification rule was not found (https://api.losant.com/#/definitions/error)
   */
  internals.evaluate = client.makeRequestFunction('instanceNotificationRule', 'evaluate');

  /**
   * Retrieves information on a notification rule
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceNotificationRule.*, or instanceNotificationRule.get.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} notificationRuleId - ID associated with the notification rule
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Notification rule information (https://api.losant.com/#/definitions/notificationRule)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notification rule was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('instanceNotificationRule', 'get');

  /**
   * Retrieves information on notification rule deliveries
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.logs.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} notificationRuleId - ID associated with the notification rule
   *  {string} limit - Max log entries to return (ordered by time descending)
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Notification delivery information (https://api.losant.com/#/definitions/notificationRuleDeliveryLogs)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notification rule was not found (https://api.losant.com/#/definitions/error)
   */
  internals.logs = client.makeRequestFunction('instanceNotificationRule', 'logs');

  /**
   * Updates information about a notification rule
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceNotificationRule.*, or instanceNotificationRule.patch.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} notificationRuleId - ID associated with the notification rule
   *  {hash} notificationRule - Object containing new properties of the notification rule (https://api.losant.com/#/definitions/notificationRulePatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated notification rule information (https://api.losant.com/#/definitions/notificationRule)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notification rule was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('instanceNotificationRule', 'patch');

  return internals;
};
