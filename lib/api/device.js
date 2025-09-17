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
   * Deletes a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, device.*, or device.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If device was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('device', 'delete');

  /**
   * Creates a device data export. Defaults to all data.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.export.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} end - End time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} email - Email address to send export to. Defaults to current user's email.
   *  {string} callbackUrl - Callback URL to call with export result
   *  {string} includeBlobData - If set will export any blob attributes in base64 form, otherwise they will be downloadable links which will expire.
   *  {hash} query - The export parameters. When provided overrides any options provided as a query param. (https://api.losant.com/#/definitions/deviceDataExport)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If generation of export was successfully started (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.export = client.makeRequestFunction('device', 'export');

  /**
   * Retrieves information on a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} excludeConnectionInfo - If set, do not return connection info
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device information (https://api.losant.com/#/definitions/device)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('device', 'get');

  /**
   * Retrieve the last known commands(s) sent to the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getCommand.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} limit - Maximum number of command entries to return
   *  {string} since - (deprecated) Look for command entries since this time (ms since epoch)
   *  {string} sortDirection - Direction to sort the command entries (by time). Accepted values are: asc, desc
   *  {string} duration - Duration of time range to query in milliseconds
   *  {string} start - Start of time range to query in milliseconds since epoch
   *  {string} end - End of time range to query in milliseconds since epoch
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent device commands (https://api.losant.com/#/definitions/deviceCommands)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getCommand = client.makeRequestFunction('device', 'getCommand');

  /**
   * Retrieve the composite last complete state of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getCompositeState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start of time range to look at to build composite state
   *  {string} end - End of time range to look at to build composite state
   *  {string} attributes - Comma-separated list of attributes to include. When not provided, returns all attributes.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Composite last state of the device (https://api.losant.com/#/definitions/compositeDeviceState)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getCompositeState = client.makeRequestFunction('device', 'getCompositeState');

  /**
   * Retrieve the recent log entries about the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getLogEntries.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} limit - Maximum number of log entries to return
   *  {string} since - (deprecated) Look for log entries since this time (ms since epoch)
   *  {string} sortDirection - Direction to sort the log entries (by time). Accepted values are: asc, desc
   *  {string} duration - Duration of time range to query in milliseconds
   *  {string} start - Start of time range to query in milliseconds since epoch
   *  {string} end - End of time range to query in milliseconds since epoch
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent log entries (https://api.losant.com/#/definitions/deviceLog)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getLogEntries = client.makeRequestFunction('device', 'getLogEntries');

  /**
   * Retrieve the last known state(s) of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.getState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} limit - Maximum number of state entries to return
   *  {string} since - (deprecated) Look for state entries since this time (ms since epoch)
   *  {string} sortDirection - Direction to sort the state entries (by time). Accepted values are: asc, desc
   *  {string} duration - Duration of time range to query in milliseconds
   *  {string} start - Start of time range to query in milliseconds since epoch
   *  {string} end - End of time range to query in milliseconds since epoch
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent device states (https://api.losant.com/#/definitions/deviceStates)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getState = client.makeRequestFunction('device', 'getState');

  /**
   * Updates information about a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, device.*, or device.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} device - Object containing new properties of the device (https://api.losant.com/#/definitions/devicePatch)
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated device information (https://api.losant.com/#/definitions/device)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('device', 'patch');

  /**
   * Returns payload counts for the time range specified for this device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.payloadCounts.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Payload counts, by type (https://api.losant.com/#/definitions/devicePayloadCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCounts = client.makeRequestFunction('device', 'payloadCounts');

  /**
   * Returns payload counts per resolution in the time range specified for this device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.payloadCountsBreakdown.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} resolution - Resolution in milliseconds. Accepted values are: 86400000, 3600000
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
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCountsBreakdown = client.makeRequestFunction('device', 'payloadCountsBreakdown');

  /**
   * Removes all device data for the specified time range. Defaults to all data.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, device.*, or device.removeData.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} start - Start time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} end - End time of export (ms since epoch - 0 means now, negative is relative to now)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If data removal was successfully started (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.removeData = client.makeRequestFunction('device', 'removeData');

  /**
   * Send a command to a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, device.*, or device.sendCommand.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} deviceCommand - Command to send to the device (https://api.losant.com/#/definitions/deviceCommand)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If command was successfully sent (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.sendCommand = client.makeRequestFunction('device', 'sendCommand');

  /**
   * Send the current state of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, device.*, or device.sendState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} deviceState - A single device state object, or an array of device state objects (https://api.losant.com/#/definitions/deviceStateOrStates)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If state was successfully received (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.sendState = client.makeRequestFunction('device', 'sendState');

  /**
   * Set the current connection status of the device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, device.*, or device.setConnectionStatus.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {hash} connectionStatus - The current connection status of the device (https://api.losant.com/#/definitions/deviceConnectionStatus)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If connection status was successfully applied (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.setConnectionStatus = client.makeRequestFunction('device', 'setConnectionStatus');

  /**
   * Attach to a real time stream of command messages to this device using Server Sent Events (SSE)
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.commandStream.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} keepAliveInterval - Number of seconds between keepalive messages
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *
   * Returns a Promise for (or calls the provided callback with)
   * an EventSource instance, which will be an
   * SSE stream of new command messages for this device
   *
   * It will have the following message event types:
   *  deviceCommand - An SSE event representing a single device command (https://api.losant.com/#/definitions/deviceCommand)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/EventSource
   * for more information about EventSource instances.
   *
   * Possible Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.commandStream = client.makeRequestFunction('device', 'commandStream');

  /**
   * Attach to a real time stream of state messages from this device using Server Sent Events (SSE)
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, device.*, or device.stateStream.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} keepAliveInterval - Number of seconds between keepalive messages
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *
   * Returns a Promise for (or calls the provided callback with)
   * an EventSource instance, which will be an
   * SSE stream of new state messages for this device
   *
   * It will have the following message event types:
   *  deviceState - An SSE event representing a single device state (https://api.losant.com/#/definitions/deviceState)
   *
   * See https://developer.mozilla.org/en-US/docs/Web/API/EventSource
   * for more information about EventSource instances.
   *
   * Possible Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device was not found (https://api.losant.com/#/definitions/error)
   */
  internals.stateStream = client.makeRequestFunction('device', 'stateStream');

  return internals;
};
