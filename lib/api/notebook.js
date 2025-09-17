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
   * Marks a specific notebook execution for cancellation
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, notebook.*, or notebook.execute.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {undefined} executionId - The ID of the execution to cancel
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If the execution was successfully marked for cancellation (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if execution was not found (https://api.losant.com/#/definitions/error)
   */
  internals.cancelExecution = client.makeRequestFunction('notebook', 'cancelExecution');

  /**
   * Deletes a notebook
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, notebook.*, or notebook.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If notebook was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('notebook', 'delete');

  /**
   * Triggers the execution of a notebook
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, notebook.*, or notebook.execute.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {hash} executionOptions - The options for the execution (https://api.losant.com/#/definitions/notebookExecutionOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If execution request was accepted and successfully queued (https://api.losant.com/#/definitions/successWithExecutionId)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.execute = client.makeRequestFunction('notebook', 'execute');

  /**
   * Retrieves information on a notebook
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - notebook information (https://api.losant.com/#/definitions/notebook)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('notebook', 'get');

  /**
   * Retrieves information on notebook executions
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.logs.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {string} limit - Max log entries to return (ordered by time descending)
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - notebook execution information (https://api.losant.com/#/definitions/notebookExecutionLogs)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.logs = client.makeRequestFunction('notebook', 'logs');

  /**
   * Returns notebook execution usage by day for the time range specified for this notebook
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.notebookMinuteCounts.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
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
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.notebookMinuteCounts = client.makeRequestFunction('notebook', 'notebookMinuteCounts');

  /**
   * Updates information about a notebook
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, notebook.*, or notebook.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {hash} notebook - Object containing new properties of the notebook (https://api.losant.com/#/definitions/notebookPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated notebook information (https://api.losant.com/#/definitions/notebook)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('notebook', 'patch');

  /**
   * Requests a combined zip file of the potential input data for a notebook execution
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, notebook.*, or notebook.requestInputDataExport.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {hash} exportOptions - The options for the export (https://api.losant.com/#/definitions/notebookDataExportOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If export request was accepted and successfully queued (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.requestInputDataExport = client.makeRequestFunction('notebook', 'requestInputDataExport');

  /**
   * Uploads the jupyter notebook file
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, notebook.*, or notebook.upload.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} notebookId - ID associated with the notebook
   *  {file} jupyterFile - The jupyter notebook file
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated notebook information (https://api.losant.com/#/definitions/notebook)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if notebook was not found (https://api.losant.com/#/definitions/error)
   */
  internals.upload = client.makeRequestFunction('notebook', 'upload');

  return internals;
};
