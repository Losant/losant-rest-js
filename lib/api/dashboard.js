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
   * Deletes a dashboard
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, dashboard.*, or dashboard.delete.
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If dashboard was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('dashboard', 'delete');

  /**
   * Retrieves information on a dashboard
   *
   * Authentication:
   * No api access token is required to call this action.
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {string} password - Password for password-protected dashboards
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Dashboard information (https://api.losant.com/#/definitions/dashboard)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('dashboard', 'get');

  /**
   * Updates information about a dashboard
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, dashboard.*, or dashboard.patch.
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {hash} dashboard - Object containing new dashboard properties (https://api.losant.com/#/definitions/dashboardPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Update dashboard information (https://api.losant.com/#/definitions/dashboard)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('dashboard', 'patch');

  /**
   * Sends a snapshot of a dashboard
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, dashboard.*, or dashboard.sendReport.
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {hash} reportConfig - Object containing report options (https://api.losant.com/#/definitions/dashboardSendReport)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If dashboard report was enqueued to be sent (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
   */
  internals.sendReport = client.makeRequestFunction('dashboard', 'sendReport');

  /**
   * Validates a context object against the dashboard's context configuration
   *
   * Authentication:
   * No api access token is required to call this action.
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {hash} ctx - The context object to validate (https://api.losant.com/#/definitions/dashboardContextInstance)
   *  {string} password - Password for password-protected dashboards
   *  {string} duration - Duration of data to fetch in milliseconds
   *  {string} resolution - Resolution in milliseconds
   *  {string} end - End timestamp of the data, in ms since epoch
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If context is valid (https://api.losant.com/#/definitions/validateContextSuccess)
   *
   * Errors:
   *  400 - Error if context is invalid (https://api.losant.com/#/definitions/validateContextError)
   *  404 - Error if dashboard or application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.validateContext = client.makeRequestFunction('dashboard', 'validateContext');

  return internals;
};
