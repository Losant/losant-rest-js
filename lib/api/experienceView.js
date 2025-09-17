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
   * Deletes an experience view
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceView.*, or experienceView.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceViewId - ID associated with the experience view
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If experience view was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if experience view was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('experienceView', 'delete');

  /**
   * Retrieves information on an experience view
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, experienceView.*, or experienceView.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceViewId - ID associated with the experience view
   *  {string} version - Version of this experience view to return
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Experience view information (https://api.losant.com/#/definitions/experienceView)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if experience view was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('experienceView', 'get');

  /**
   * Retrieves information on resources linked to an experience view
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, experienceView.*, or experienceView.linkedResources.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceViewId - ID associated with the experience view
   *  {string} version - Version of this experience view to query
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by returned workflows
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Linked resource information (https://api.losant.com/#/definitions/experienceLinkedResources)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if experience view was not found (https://api.losant.com/#/definitions/error)
   */
  internals.linkedResources = client.makeRequestFunction('experienceView', 'linkedResources');

  /**
   * Updates information about an experience view
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, experienceView.*, or experienceView.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} experienceViewId - ID associated with the experience view
   *  {hash} experienceView - Object containing new properties of the experience view (https://api.losant.com/#/definitions/experienceViewPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated experience view information (https://api.losant.com/#/definitions/experienceView)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if experience view was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('experienceView', 'patch');

  return internals;
};
