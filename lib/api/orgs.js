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
   * Returns the organizations associated with the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, orgs.*, or orgs.get.
   *
   * Parameters:
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from org summaries
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of organizations (https://api.losant.com/#/definitions/orgs)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('orgs', 'get');

  /**
   * Create a new organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, orgs.*, or orgs.post.
   *
   * Parameters:
   *  {hash} organization - New organization information (https://api.losant.com/#/definitions/orgPost)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from org summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created organization (https://api.losant.com/#/definitions/org)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.post = client.makeRequestFunction('orgs', 'post');

  return internals;
};
