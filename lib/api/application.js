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
   * Add resources to an application via an application template
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.applyTemplate.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} options - Object containing template import options (https://api.losant.com/#/definitions/applicationApplyTemplatePatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated application information (https://api.losant.com/#/definitions/application)
   *  202 - If a job was enqueued for the resources to be imported into the application (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application is not found (https://api.losant.com/#/definitions/error)
   */
  internals.applyTemplate = client.makeRequestFunction('application', 'applyTemplate');

  /**
   * Returns success when a job has been enqueued to archive this application's device data for a given day
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.archiveData.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} date - The date to archive data (ms since epoch), it must be within the archive time range older than 31 days and newer than the organizations dataTTL
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - Enqueued a job to archive this applications device data (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.archiveData = client.makeRequestFunction('application', 'archiveData');

  /**
   * Returns success when a job has been enqueued to backfill all current data to its archive
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.backfillArchiveData.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - Enqueued a job to backfill device data to this application archive location (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.backfillArchiveData = client.makeRequestFunction('application', 'backfillArchiveData');

  /**
   * Copy an application into a new application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.clone.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} options - Object containing optional clone fields (https://api.losant.com/#/definitions/applicationClonePost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - if dryRun is set and successful, then return success (https://api.losant.com/#/definitions/applicationCloneDryRunResult)
   *  201 - If application was successfully cloned (https://api.losant.com/#/definitions/applicationCreationByTemplateResult)
   *  202 - If application was enqueued to be cloned (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application is not found (https://api.losant.com/#/definitions/error)
   *  422 - Error if too many validation errors occurred on other resources (https://api.losant.com/#/definitions/validationErrors)
   */
  internals.clone = client.makeRequestFunction('application', 'clone');

  /**
   * Deletes an application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.delete.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If application was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('application', 'delete');

  /**
   * Returns device counts by day for the time range specified for this application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.deviceCounts.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} start - Start of range for device count query (ms since epoch)
   *  {string} end - End of range for device count query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device counts by day (https://api.losant.com/#/definitions/deviceCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.deviceCounts = client.makeRequestFunction('application', 'deviceCounts');

  /**
   * Export an application and all of its resources
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.export.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} options - Object containing export application options (https://api.losant.com/#/definitions/applicationExportPost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - a url to download the zip of exported resources (https://api.losant.com/#/definitions/applicationExportResult)
   *  202 - If application was enqueued to be exported (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application is not found (https://api.losant.com/#/definitions/error)
   */
  internals.export = client.makeRequestFunction('application', 'export');

  /**
   * Returns success when a job has been enqueued to archive all selected data tables
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.fullDataTablesArchive.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - Enqueued a job to archive all selected data tables of this application archive location (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.fullDataTablesArchive = client.makeRequestFunction('application', 'fullDataTablesArchive');

  /**
   * Returns success when a job has been enqueued to archive all current events
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.fullEventsArchive.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - Enqueued a job to archive all events to this application archive location (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.fullEventsArchive = client.makeRequestFunction('application', 'fullEventsArchive');

  /**
   * Retrieves information on an application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, application.*, or application.get.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from application summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Application information (https://api.losant.com/#/definitions/application)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('application', 'get');

  /**
   * Updates an application global at the given key
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, application.*, or application.patch.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} globals - Array of objects containing new application global information (https://api.losant.com/#/definitions/applicationGlobalPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated application information (https://api.losant.com/#/definitions/application)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.globals = client.makeRequestFunction('application', 'globals');

  /**
   * Add multiple resources to an application via a zip file
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.import.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {file} importBundle - The zip file containing all of the resources to import into the application
   *  {string} email - Email address to notify the user when the job to import the application resources has completed or errored, defaults to the email address of the user making the request
   *  {hash} options - Additional import options (https://api.losant.com/#/definitions/importIntoApplicationOptions)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated application information (https://api.losant.com/#/definitions/application)
   *  202 - If a job was enqueued for the resources to be imported into the application (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application is not found (https://api.losant.com/#/definitions/error)
   */
  internals.import = client.makeRequestFunction('application', 'import');

  /**
   * Retrieves information on application import logs
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.importLogs.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} limit - Max log entries to return (ordered by time descending)
   *  {string} since - Look for log entries since this time (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Application log objects (https://api.losant.com/#/definitions/applicationImportExecutions)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.importLogs = client.makeRequestFunction('application', 'importLogs');

  /**
   * Publishes the given message to the given MQTT topic
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, application.*, or application.mqttPublishMessage.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} payload - Object containing topic and message (https://api.losant.com/#/definitions/mqttPublishBody)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Message successfully published (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.mqttPublishMessage = client.makeRequestFunction('application', 'mqttPublishMessage');

  /**
   * Returns notebook execution usage by day for the time range specified for this application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.notebookMinuteCounts.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
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
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.notebookMinuteCounts = client.makeRequestFunction('application', 'notebookMinuteCounts');

  /**
   * Updates information about an application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, application.*, or application.patch.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} application - Object containing new application properties (https://api.losant.com/#/definitions/applicationPatch)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from application summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in application summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated application information (https://api.losant.com/#/definitions/application)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('application', 'patch');

  /**
   * Returns payload counts for the time range specified for this application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.payloadCounts.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} asBytes - If the resulting stats should be returned as bytes
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Payload counts, by type and source (https://api.losant.com/#/definitions/payloadStats)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCounts = client.makeRequestFunction('application', 'payloadCounts');

  /**
   * Returns payload counts per resolution in the time range specified for this application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.payloadCountsBreakdown.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} resolution - Resolution in milliseconds. Accepted values are: 86400000, 3600000
   *  {string} asBytes - If the resulting stats should be returned as bytes
   *  {string} includeNonBillable - If non-billable payloads should be included in the result
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Sum of payload counts by date (https://api.losant.com/#/definitions/payloadCountsBreakdown)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCountsBreakdown = client.makeRequestFunction('application', 'payloadCountsBreakdown');

  /**
   * Get the current application readme information
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, application.*, or application.get.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The application readme information (https://api.losant.com/#/definitions/applicationReadme)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.readme = client.makeRequestFunction('application', 'readme');

  /**
   * Update the current application readme information
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, application.*, or application.patch.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {hash} readme - Object containing new readme information (https://api.losant.com/#/definitions/applicationReadmePatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated readme information (https://api.losant.com/#/definitions/applicationReadme)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.readmePatch = client.makeRequestFunction('application', 'readmePatch');

  /**
   * Search across an application's resources by target identifier
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.search.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} filter - The partial resource name being searched for
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - An array of resource ids, names, descriptions, and types matching the search query (https://api.losant.com/#/definitions/applicationSearchResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application is not found (https://api.losant.com/#/definitions/error)
   */
  internals.search = client.makeRequestFunction('application', 'search');

  /**
   * Attach to a real time stream of state messages for the given MQTT topic using Server Sent Events (SSE)
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, application.*, or application.mqttSubscriptionStream.
   *
   * Parameters:
   *  {string} applicationId - ID of the associated application
   *  {string} keepAliveInterval - Number of seconds between keepalive messages
   *  {string} topic - The MQTT topic to subscribe to
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *
   * Returns a Promise for (or calls the provided callback with)
   * an EventSource instance, which will be an
   * SSE stream of mqtt messages for the requested topic
   *
   * It will have the following message event types:
   *  mqttMessage - An SSE event representing a single mqtt payload (https://api.losant.com/#/definitions/mqttPublishBody)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/EventSource
   * for more information about EventSource instances.
   *
   * Possible Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.mqttSubscriptionStream = client.makeRequestFunction('application', 'mqttSubscriptionStream');

  return internals;
};
