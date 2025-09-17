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
   * Delete flow versions
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flowVersions.*, or flowVersions.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {hash} options - Object containing flow version deletion options (https://api.losant.com/#/definitions/flowVersionsDeletePost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Object indicating number of flow versions deleted or failed (https://api.losant.com/#/definitions/bulkDeleteResponse)
   *  202 - If a job was enqueued for the flow versions to be deleted (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('flowVersions', 'delete');

  /**
   * Returns the flow versions for a flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, flowVersions.*, or flowVersions.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {string} sortField - Field to sort the results by. Accepted values are: version, id, creationDate, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: version
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by the returned workflows
   *  {hash} query - Workflow filter JSON object which overrides the filterField and filter parameters. (https://api.losant.com/#/definitions/advancedFlowVersionQuery)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of flow versions (https://api.losant.com/#/definitions/flowVersions)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('flowVersions', 'get');

  /**
   * Create or replace a flow version for a flow
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, flowVersions.*, or flowVersions.post.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} flowId - ID associated with the flow
   *  {hash} flowVersion - New flow version information (https://api.losant.com/#/definitions/flowVersionPost)
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by the returned workflows
   *  {string} allowReplacement - Allow replacement of an existing flow version with same version name
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created flow version (https://api.losant.com/#/definitions/flowVersion)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if flow was not found (https://api.losant.com/#/definitions/error)
   */
  internals.post = client.makeRequestFunction('flowVersions', 'post');

  return internals;
};
