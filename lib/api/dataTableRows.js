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
   * Delete rows from a data table
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, dataTableRows.*, or dataTableRows.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} dataTableId - ID associated with the data table
   *  {hash} query - Query to apply to filter the data table (https://api.losant.com/#/definitions/advancedQuery)
   *  {string} limit - Limit number of rows to delete from data table
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If request successfully deletes a set of Data Table rows (https://api.losant.com/#/definitions/dataTableRowsDelete)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if data table was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('dataTableRows', 'delete');

  /**
   * Request an export of the data table's data
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTableRows.*, or dataTableRows.export.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} dataTableId - ID associated with the data table
   *  {hash} exportData - Object containing export specifications (https://api.losant.com/#/definitions/dataTableRowsExport)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If request was successfully queued (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if data table was not found (https://api.losant.com/#/definitions/error)
   */
  internals.export = client.makeRequestFunction('dataTableRows', 'export');

  /**
   * Returns the rows for a data table
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, dataTableRows.*, or dataTableRows.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} dataTableId - ID associated with the data table
   *  {string} sortColumn - Column to sort the rows by
   *  {string} sortDirection - Direction to sort the rows by. Accepted values are: asc, desc
   *  {string} limit - How many rows to return
   *  {string} offset - How many rows to skip
   *  {string} includeFields - Comma-separated list of fields to include in resulting rows. When not provided, returns all fields.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of data table rows (https://api.losant.com/#/definitions/dataTableRows)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if data table was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('dataTableRows', 'get');

  /**
   * Inserts a new row(s) into a data table
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, dataTableRows.*, or dataTableRows.post.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} dataTableId - ID associated with the data table
   *  {hash} dataTableRow - The row(s) to insert (https://api.losant.com/#/definitions/dataTableRowInsert)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created data table row, or bulk insert count (https://api.losant.com/#/definitions/dataTableRowInsertResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if data table was not found (https://api.losant.com/#/definitions/error)
   */
  internals.post = client.makeRequestFunction('dataTableRows', 'post');

  /**
   * Queries for rows from a data table
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, dataTableRows.*, or dataTableRows.query.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} dataTableId - ID associated with the data table
   *  {string} sortColumn - Column to sort the rows by
   *  {string} sortDirection - Direction to sort the rows by. Accepted values are: asc, desc
   *  {string} limit - How many rows to return
   *  {string} offset - How many rows to skip
   *  {string} includeFields - Comma-separated list of fields to include in resulting rows. When not provided, returns all fields.
   *  {hash} query - Query to apply to filter the data table (https://api.losant.com/#/definitions/advancedQuery)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of data table rows (https://api.losant.com/#/definitions/dataTableRows)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if data table was not found (https://api.losant.com/#/definitions/error)
   */
  internals.query = client.makeRequestFunction('dataTableRows', 'query');

  /**
   * Delete all data in the data table
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, dataTableRows.*, or dataTableRows.truncate.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} dataTableId - ID associated with the data table
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If request successfully deleted **all** rows in the data table, this will **not** send workflow data table deletion triggers (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if data table was not found (https://api.losant.com/#/definitions/error)
   */
  internals.truncate = client.makeRequestFunction('dataTableRows', 'truncate');

  return internals;
};
