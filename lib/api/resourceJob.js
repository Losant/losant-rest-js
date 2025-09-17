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
   * Marks a specific resource job execution for cancellation
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.cancelExecution.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} resourceJobId - ID associated with the resource job
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
  internals.cancelExecution = client.makeRequestFunction('resourceJob', 'cancelExecution');

  /**
   * Deletes a resource job
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} resourceJobId - ID associated with the resource job
   *  {string} includeWorkflows - If the workflows that trigger from this resource job should also be deleted.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If resource job was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if resource job was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('resourceJob', 'delete');

  /**
   * Queues the execution of a resource job
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.execute.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} resourceJobId - ID associated with the resource job
   *  {hash} executionOptions - The options for the execution (https://api.losant.com/#/definitions/resourceJobExecutionOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If the job was successfully queued (https://api.losant.com/#/definitions/successWithExecutionId)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if resource job was not found (https://api.losant.com/#/definitions/error)
   */
  internals.execute = client.makeRequestFunction('resourceJob', 'execute');

  /**
   * Returns a resource job
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, resourceJob.*, or resourceJob.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} resourceJobId - ID associated with the resource job
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - A single resource job (https://api.losant.com/#/definitions/resourceJob)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('resourceJob', 'get');

  /**
   * Retrieves information on resource job executions
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, resourceJob.*, or resourceJob.logs.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} resourceJobId - ID associated with the resource job
   *  {string} limit - Max log entries to return (ordered by time descending)
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Resource job execution information (https://api.losant.com/#/definitions/resourceJobExecutionLogs)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if resource job was not found (https://api.losant.com/#/definitions/error)
   */
  internals.logs = client.makeRequestFunction('resourceJob', 'logs');

  /**
   * Update a resource job
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, resourceJob.*, or resourceJob.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} resourceJobId - ID associated with the resource job
   *  {hash} resourceJob - The new resource job configuration (https://api.losant.com/#/definitions/resourceJobPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully updated resource job (https://api.losant.com/#/definitions/resourceJob)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if resource job was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('resourceJob', 'patch');

  return internals;
};
