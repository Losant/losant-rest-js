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
   * Clear all storage entries
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flow.*, or flow.clearStorageEntries.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The current storage entries (https://api.losant.com/#/definitions/flowStorageEntries)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.clearStorageEntries = client.makeRequestFunction('flow', 'clearStorageEntries');

  /**
   * Deletes a flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flow.*, or flow.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If flow was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('flow', 'delete');

  /**
   * Get information about errors that occurred during runs of this workflow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.errors.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} duration - Duration of time range in milliseconds
   *  {string} end - End of time range in milliseconds since epoch
   *  {string} limit - Maximum number of errors to return
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} flowVersion - Flow version name or ID. When not included, will be errors for all versions. Pass develop for just the develop version.
   *  {string} deviceId - For edge or embedded workflows, the Device ID for which to return workflow errors. When not included, will be errors for all device IDs.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Workflow error information (https://api.losant.com/#/definitions/flowErrors)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.errors = client.makeRequestFunction('flow', 'errors');

  /**
   * Retrieves information on a flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by the returned workflows
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Flow information (https://api.losant.com/#/definitions/flow)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('flow', 'get');

  /**
   * Retrieve the recent log entries about runs of this workflow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.log.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} limit - Max log entries to return (ordered by time descending)
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent log entries (https://api.losant.com/#/definitions/flowLog)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getLogEntries = client.makeRequestFunction('flow', 'getLogEntries');

  /**
   * Gets the current values in persistent storage
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.getStorageEntries.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The current storage entries (https://api.losant.com/#/definitions/flowStorageEntries)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getStorageEntries = client.makeRequestFunction('flow', 'getStorageEntries');

  /**
   * Gets metadata about storage for this flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.getStorageEntriesMetadata.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The meta data for the current storage entries (https://api.losant.com/#/definitions/flowStorageMetadata)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getStorageEntriesMetadata = client.makeRequestFunction('flow', 'getStorageEntriesMetadata');

  /**
   * Updates information about a flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flow.*, or flow.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by the returned workflows
   *  {hash} flow - Object containing new properties of the flow (https://api.losant.com/#/definitions/flowPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated flow information (https://api.losant.com/#/definitions/flow)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow is not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('flow', 'patch');

  /**
   * Presses the specified virtual button on the flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flow.*, or flow.pressVirtualButton.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {hash} button - Object containing button key and payload (https://api.losant.com/#/definitions/virtualButtonPress)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Virtual button was pressed (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.pressVirtualButton = client.makeRequestFunction('flow', 'pressVirtualButton');

  /**
   * Sets a storage value
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flow.*, or flow.setStorageEntry.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {hash} entry - Object containing storage entry (https://api.losant.com/#/definitions/flowStorageEntry)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Value was successfully stored (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.setStorageEntry = client.makeRequestFunction('flow', 'setStorageEntry');

  /**
   * Get statistics about workflow runs for this workflow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flow.*, or flow.stats.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} duration - Duration of time range in milliseconds
   *  {string} end - End of time range in milliseconds since epoch
   *  {string} resolution - Resolution in milliseconds
   *  {string} flowVersion - Flow version name or ID. When not included, will be aggregate for all versions. Pass develop for just the develop version.
   *  {string} deviceId - For edge or embedded workflows, the device ID to return workflow stats for. When not included, will be aggregate for all device IDs.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Statistics for workflow runs (https://api.losant.com/#/definitions/flowStats)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.stats = client.makeRequestFunction('flow', 'stats');

  return internals;
};
