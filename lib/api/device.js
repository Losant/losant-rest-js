var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Retrieves information on an device
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Device information (https://api.getstructure.io/#/definitions/device)
   *
   * Errors:
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.get = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Updates information about a device
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {object} device - Object containing new properties of the device (https://api.getstructure.io/#/definitions/devicePatch)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated device information (https://api.getstructure.io/#/definitions/device)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.getstructure.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.patch = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['device']) { req.data = params['device']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Deletes a device
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If device was successfully deleted (https://api.getstructure.io/#/definitions/success)
   *
   * Errors:
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.delete = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Retrieve the last known state of the device
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Last known device state (https://api.getstructure.io/#/definitions/deviceState)
   *
   * Errors:
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.retrieveLastReportedState = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/state');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Request for the device to change to the given state
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {object} deviceState - Object containing the requested state of the device (https://api.getstructure.io/#/definitions/deviceState)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If change request was successfully sent (https://api.getstructure.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.getstructure.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.sendStateChangeRequest = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/state');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['deviceState']) { req.data = params['deviceState']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Report the current state of the device
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {object} deviceState - Object containing the current state of the device (https://api.getstructure.io/#/definitions/deviceState)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If state was successfully received (https://api.getstructure.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.getstructure.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.reportCurrentState = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/report-state');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['deviceState']) { req.data = params['deviceState']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Send a message about the device
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} deviceId - ID associated with the device 
   *  {object} message - Message to send about the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If message was successfully sent (https://api.getstructure.io/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.getstructure.io/#/definitions/error)
   *  404 - Error if device was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.sendMessage = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/devices/{deviceId}/send-message');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['message']) { req.data = params['message']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
