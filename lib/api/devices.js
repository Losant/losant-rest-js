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

var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Gets the attribute names that match the given query. Maximum 1K returned.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.attributeNames.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} query - Device filter JSON object (https://api.losant.com/#/definitions/advancedDeviceQuery)
   *  {hash} dataType - Filter the devices by the given attribute data type or types (https://api.losant.com/#/definitions/deviceAttributeDataTypeFilter)
   *  {string} startsWith - Filter attributes down to those that have names starting with the given string. Case insensitive.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The matching attribute names (https://api.losant.com/#/definitions/attributeNamesResponse)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.attributeNames = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/attributeNames');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.query) { req.params.query = JSON.stringify(params.query); }
    if ('undefined' !== typeof params.dataType) { req.params.dataType = params.dataType; }
    if ('undefined' !== typeof params.startsWith) { req.params.startsWith = params.startsWith; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Delete devices
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, devices.*, or devices.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} options - Object containing device deletion options (https://api.losant.com/#/definitions/devicesDeleteOrRestorePost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Object indicating number of devices deleted or failed (https://api.losant.com/#/definitions/bulkDeleteResponse)
   *  202 - If a job was enqueued for the devices to be deleted (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/delete');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.options) { req.data = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Gets the device names that match the given query. Maximum 1K returned.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.deviceNames.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} query - Device filter JSON object (https://api.losant.com/#/definitions/advancedDeviceQuery)
   *  {string} startsWith - Filter devices down to those that have names starting with the given string. Case insensitive.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The matching device names (https://api.losant.com/#/definitions/deviceNamesResponse)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.deviceNames = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/deviceNames');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.query) { req.params.query = JSON.stringify(params.query); }
    if ('undefined' !== typeof params.startsWith) { req.params.startsWith = params.startsWith; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Creates an export of all device metadata
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.export.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} email - Email address to send export to. Defaults to current user's email.
   *  {string} callbackUrl - Callback URL to call with export result
   *  {hash} options - Object containing device query and optionally email or callback (https://api.losant.com/#/definitions/devicesExportPost)
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
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.export = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/export');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.email) { req.params.email = params.email; }
    if ('undefined' !== typeof params.callbackUrl) { req.params.callbackUrl = params.callbackUrl; }
    if ('undefined' !== typeof params.options) { req.data = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Returns the devices for an application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated, connectionStatus, deletedAt
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {hash} deviceClass - Filter the devices by the given device class or classes (https://api.losant.com/#/definitions/deviceClassFilter)
   *  {hash} tagFilter - Array of tag pairs to filter by (https://api.losant.com/#/definitions/deviceTagFilter)
   *  {string} excludeConnectionInfo - If set, do not return connection info
   *  {string} parentId - Filter devices as children of a given system id
   *  {hash} query - Device filter JSON object which overrides the filterField, filter, deviceClass, tagFilter, and parentId parameters. (https://api.losant.com/#/definitions/advancedDeviceQuery)
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} queryDeleted - If true, endpoint will return recently deleted devices instead
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of devices (https://api.losant.com/#/definitions/devices)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.sortField) { req.params.sortField = params.sortField; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.page) { req.params.page = params.page; }
    if ('undefined' !== typeof params.perPage) { req.params.perPage = params.perPage; }
    if ('undefined' !== typeof params.filterField) { req.params.filterField = params.filterField; }
    if ('undefined' !== typeof params.filter) { req.params.filter = params.filter; }
    if ('undefined' !== typeof params.deviceClass) { req.params.deviceClass = params.deviceClass; }
    if ('undefined' !== typeof params.tagFilter) { req.params.tagFilter = params.tagFilter; }
    if ('undefined' !== typeof params.excludeConnectionInfo) { req.params.excludeConnectionInfo = params.excludeConnectionInfo; }
    if ('undefined' !== typeof params.parentId) { req.params.parentId = params.parentId; }
    if ('undefined' !== typeof params.query) { req.params.query = JSON.stringify(params.query); }
    if ('undefined' !== typeof params.tagsAsObject) { req.params.tagsAsObject = params.tagsAsObject; }
    if ('undefined' !== typeof params.attributesAsObject) { req.params.attributesAsObject = params.attributesAsObject; }
    if ('undefined' !== typeof params.queryDeleted) { req.params.queryDeleted = params.queryDeleted; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieve the composite last complete state of the matching devices
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.getCompositeState.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} start - Start of time range to look at to build composite state
   *  {string} end - End of time range to look at to build composite state
   *  {string} attributes - Comma-separated list of attributes to include. When not provided, returns all attributes.
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated, connectionStatus
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {hash} query - Device advanced query JSON object (https://api.losant.com/#/definitions/advancedDeviceQuery)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of composite last state of the devices (https://api.losant.com/#/definitions/compositeDevicesState)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.getCompositeState = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/compositeState');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.start) { req.params.start = params.start; }
    if ('undefined' !== typeof params.end) { req.params.end = params.end; }
    if ('undefined' !== typeof params.attributes) { req.params.attributes = params.attributes; }
    if ('undefined' !== typeof params.sortField) { req.params.sortField = params.sortField; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.page) { req.params.page = params.page; }
    if ('undefined' !== typeof params.perPage) { req.params.perPage = params.perPage; }
    if ('undefined' !== typeof params.query) { req.params.query = JSON.stringify(params.query); }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Update the fields of one or more devices
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, devices.*, or devices.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} patchInfo - Object containing device query or IDs and update operations (https://api.losant.com/#/definitions/devicesPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Object including an update log link and the number of devices updated, failed, and skipped (https://api.losant.com/#/definitions/devicesUpdated)
   *  202 - Successfully queued bulk update job (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.patchInfo) { req.data = params.patchInfo; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Creates an export of payload count information for the matching devices
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.payloadCounts.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} options - Object containing export configuration (https://api.losant.com/#/definitions/devicesExportPayloadCountPost)
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
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCounts = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/payloadCounts');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.options) { req.data = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Create a new device for an application
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, devices.*, or devices.post.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} device - New device information (https://api.losant.com/#/definitions/devicePost)
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created device (https://api.losant.com/#/definitions/device)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.post = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.device) { req.data = params.device; }
    if ('undefined' !== typeof params.tagsAsObject) { req.params.tagsAsObject = params.tagsAsObject; }
    if ('undefined' !== typeof params.attributesAsObject) { req.params.attributesAsObject = params.attributesAsObject; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Removes all device data for the specified time range. Defaults to all data.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, devices.*, or devices.removeData.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} options - Object defining the device data to delete and devices to delete from (https://api.losant.com/#/definitions/devicesRemoveDataPost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  202 - If a job was enqueued for device data to be removed (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.removeData = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/removeData');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.options) { req.data = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Restore deleted devices
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, devices.*, or devices.restore.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} options - Object containing device restoration options (https://api.losant.com/#/definitions/devicesDeleteOrRestorePost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Object indicating number of devices restored or failed (https://api.losant.com/#/definitions/bulkRestoreResponse)
   *  202 - If a job was enqueued for the devices to be restored (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.restore = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/restore');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.options) { req.data = params.options; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Send a command to multiple devices
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Device, all.Organization, all.User, devices.*, or devices.sendCommand.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} multiDeviceCommand - Command to send to the device (https://api.losant.com/#/definitions/multiDeviceCommand)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If command was successfully sent (https://api.losant.com/#/definitions/success)
   *  202 - If command was queued to be sent (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.sendCommand = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/command');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.multiDeviceCommand) { req.data = params.multiDeviceCommand; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Gets the unique tag keys for devices that match the given query. Maximum 1K returned.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.tagKeys.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} query - Device filter JSON object (https://api.losant.com/#/definitions/advancedDeviceQuery)
   *  {string} startsWith - Filter keys down to those that start with the given string. Case insensitive.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The matching tag keys (https://api.losant.com/#/definitions/tagKeysResponse)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.tagKeys = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/tagKeys');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.query) { req.params.query = JSON.stringify(params.query); }
    if ('undefined' !== typeof params.startsWith) { req.params.startsWith = params.startsWith; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Gets the unique tag values for the given key for devices that match the given query. Maximum 1K returned.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, devices.*, or devices.tagValues.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} query - Device filter JSON object (https://api.losant.com/#/definitions/advancedDeviceQuery)
   *  {string} key - The tag key to get the values for
   *  {string} startsWith - Filter values down to those that start with the given string. Case insensitive.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - The matching tag values (https://api.losant.com/#/definitions/tagValuesResponse)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
   */
  internals.tagValues = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    } else if (!opts) {
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/tagValues');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (params.applicationId) { pathParams.applicationId = params.applicationId; } else { throw new Error('applicationId is required'); }
    if ('undefined' !== typeof params.query) { req.params.query = JSON.stringify(params.query); }
    if ('undefined' !== typeof params.key) { req.params.key = params.key; }
    if ('undefined' !== typeof params.startsWith) { req.params.startsWith = params.startsWith; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
