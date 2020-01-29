/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Losant IoT, Inc.
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
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If generation of export was successfully started (https://api.losant.com/#/definitions/success)
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
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.email) { req.params.email = params.email; }
    if ('undefined' !== typeof params.callbackUrl) { req.params.callbackUrl = params.callbackUrl; }
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
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate, lastUpdated
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {hash} deviceClass - Filter the devices by the given device class or classes (https://api.losant.com/#/definitions/deviceClassFilter)
   *  {hash} tagFilter - Array of tag pairs to filter by (https://api.losant.com/#/definitions/deviceTagFilter)
   *  {string} excludeConnectionInfo - If set, do not return connection info
   *  {string} parentId - Filter devices as children of a given system id
   *  {hash} query - Device filter JSON object which overides the filterField, filter, deviceClass, tagFilter, and parentId parameters. (https://api.losant.com/#/definitions/advancedDeviceQuery)
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
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
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
   *  {hash} patchInfo - Object containing device filter fields and updated properties (https://api.losant.com/#/definitions/devicesPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully queued bulk update job (https://api.losant.com/#/definitions/success)
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
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.patchInfo) { req.data = params.patchInfo; }
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
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.device) { req.data = params.device; }
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
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.multiDeviceCommand) { req.data = params.multiDeviceCommand; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
