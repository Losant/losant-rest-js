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
   * Returns the applications the current user has permission to see
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, applications.*, or applications.get.
   *
   * Parameters:
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, ownerId, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} orgId - If not provided, return all applications. If provided but blank, only return applications belonging to the current user. If provided and an id, only return applications belonging to the given organization id.
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from application summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of applications (https://api.losant.com/#/definitions/applications)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('applications', 'get');

  /**
   * Create a new application from an import bundle
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, applications.*, or applications.import.
   *
   * Parameters:
   *  {file} importBundle - The zip file containing the application to import and all of its resources
   *  {string} ownerId - The owner id of the new application, defaults to the id of the user making the request
   *  {string} ownerType - The type of the owner id. Accepted values are: user, organization
   *  {string} includeDevices - If set, import devices from the import bundle
   *  {string} includeDataTableRows - If set, import data table rows from import bundle
   *  {string} includeFiles - If set, import files from import bundle
   *  {string} email - Email address to notify the user when the job to import the application has completed or errored, defaults to the email address of the user making the request
   *  {hash} options - Additional import options (https://api.losant.com/#/definitions/importNewApplicationOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created application (https://api.losant.com/#/definitions/applicationCreationByTemplateResult)
   *  202 - If application was enqueued to be imported (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application is not found (https://api.losant.com/#/definitions/error)
   *  422 - Error if too many validation errors occurred on other resources (https://api.losant.com/#/definitions/validationErrors)
   */
  internals.import = client.makeRequestFunction('applications', 'import');

  /**
   * Returns application usage summaries over a selected date range
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, applications.*, or applications.periodSummaries.
   *
   * Parameters:
   *  {string} start - Start of range for resource count queries (ms since epoch)
   *  {string} end - End of range for resource count queries (ms since epoch)
   *  {string} asBytes - If the resulting payload counts should be returned as bytes
   *  {string} includeNonBillable - If non-billable payloads should be included in the result
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, ownerId, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} orgId - If not provided, return all applications. If provided but blank, only return applications belonging to the current user. If provided and an id, only return applications belonging to the given organization id.
   *  {string} exclude - Comma-separated list of resources to exclude from summary
   *  {string} include - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of application period summaries (https://api.losant.com/#/definitions/periodSummaries)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.periodSummaries = client.makeRequestFunction('applications', 'periodSummaries');

  /**
   * Create a new application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, applications.*, or applications.post.
   *
   * Parameters:
   *  {hash} application - New application information (https://api.losant.com/#/definitions/applicationPost)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from application summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created application (https://api.losant.com/#/definitions/application)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.post = client.makeRequestFunction('applications', 'post');

  return internals;
};
