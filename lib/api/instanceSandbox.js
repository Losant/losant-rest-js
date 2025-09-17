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
   * Deletes a sandbox user account
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceSandbox.*, or instanceSandbox.delete.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If a sandbox was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('instanceSandbox', 'delete');

  /**
   * Returns device counts by day for the time range specified for all applications the sandbox user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.deviceCounts.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} start - Start of range for device count query (ms since epoch)
   *  {string} end - End of range for device count query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device counts by day (https://api.losant.com/#/definitions/deviceCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.deviceCounts = client.makeRequestFunction('instanceSandbox', 'deviceCounts');

  /**
   * Returns a sandbox user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.get.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from user summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in user summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - A single sandbox user (https://api.losant.com/#/definitions/instanceSandbox)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('instanceSandbox', 'get');

  /**
   * Returns notebook execution usage by day for the time range specified for all applications the sandbox user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.notebookMinuteCounts.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} start - Start of range for notebook execution query (ms since epoch)
   *  {string} end - End of range for notebook execution query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Notebook usage information (https://api.losant.com/#/definitions/notebookMinuteCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.notebookMinuteCounts = client.makeRequestFunction('instanceSandbox', 'notebookMinuteCounts');

  /**
   * Returns payload counts for the time range specified for all applications the sandbox user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.payloadCounts.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} asBytes - If the resulting stats should be returned as bytes
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Payload counts, by type and source (https://api.losant.com/#/definitions/payloadStats)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCounts = client.makeRequestFunction('instanceSandbox', 'payloadCounts');

  /**
   * Returns payload counts per resolution in the time range specified for all applications the sandbox user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceSandbox.*, or instanceSandbox.payloadCountsBreakdown.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} resolution - Resolution in milliseconds. Accepted values are: 86400000, 3600000
   *  {string} asBytes - If the resulting stats should be returned as bytes
   *  {string} includeNonBillable - If non-billable payloads should be included in the result
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Sum of payload counts by date (https://api.losant.com/#/definitions/payloadCountsBreakdown)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCountsBreakdown = client.makeRequestFunction('instanceSandbox', 'payloadCountsBreakdown');

  /**
   * Restores a sandbox user account
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceSandbox.*, or instanceSandbox.undelete.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceSandboxId - ID associated with the sandbox user
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from user summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in user summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - A single restored sandbox user (https://api.losant.com/#/definitions/instanceSandbox)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if sandbox or instance was not found (https://api.losant.com/#/definitions/error)
   */
  internals.undelete = client.makeRequestFunction('instanceSandbox', 'undelete');

  return internals;
};
