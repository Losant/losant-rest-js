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
   * Returns all dashboards scoped to the given application.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, applicationDashboards.*, or applicationDashboards.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of dashboards (https://api.losant.com/#/definitions/dashboards)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('applicationDashboards', 'get');

  /**
   * Create a new dashboard
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, applicationDashboards.*, or applicationDashboards.post.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} dashboard - New dashboard information (https://api.losant.com/#/definitions/applicationDashboardPost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created dashboard (https://api.losant.com/#/definitions/dashboard)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.post = client.makeRequestFunction('applicationDashboards', 'post');

  return internals;
};
