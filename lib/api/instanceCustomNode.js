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
   * Deletes a Custom Node
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceCustomNode.*, or instanceCustomNode.delete.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceCustomNodeId - ID associated with the Custom Node
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If Custom Node was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if Custom Node was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('instanceCustomNode', 'delete');

  /**
   * Get information about errors that occurred during runs of this Custom Node
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceCustomNode.*, or instanceCustomNode.errors.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceCustomNodeId - ID associated with the Custom Node
   *  {string} duration - Duration of time range in milliseconds
   *  {string} end - End of time range in milliseconds since epoch
   *  {string} limit - Maximum number of errors to return
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Custom Node error information (https://api.losant.com/#/definitions/flowErrors)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if Custom Node was not found (https://api.losant.com/#/definitions/error)
   */
  internals.errors = client.makeRequestFunction('instanceCustomNode', 'errors');

  /**
   * Retrieves information on a Custom Node
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceCustomNode.*, or instanceCustomNode.get.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceCustomNodeId - ID associated with the Custom Node
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Custom Node information (https://api.losant.com/#/definitions/instanceCustomNode)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if Custom Node was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('instanceCustomNode', 'get');

  /**
   * Updates information about a Custom Node
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceCustomNode.*, or instanceCustomNode.patch.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceCustomNodeId - ID associated with the Custom Node
   *  {hash} instanceCustomNode - Object containing new properties of the Custom Node (https://api.losant.com/#/definitions/instanceCustomNodePatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated Custom Node information (https://api.losant.com/#/definitions/instanceCustomNode)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if Custom Node was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('instanceCustomNode', 'patch');

  /**
   * Get statistics about runs for this Custom Node
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceCustomNode.*, or instanceCustomNode.stats.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} instanceCustomNodeId - ID associated with the Custom Node
   *  {string} duration - Duration of time range in milliseconds
   *  {string} end - End of time range in milliseconds since epoch
   *  {string} resolution - Resolution in milliseconds
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Statistics for Custom Node runs (https://api.losant.com/#/definitions/flowStats)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if Custom Node was not found (https://api.losant.com/#/definitions/error)
   */
  internals.stats = client.makeRequestFunction('instanceCustomNode', 'stats');

  return internals;
};
