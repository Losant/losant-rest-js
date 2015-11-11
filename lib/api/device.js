var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  /**
   * Retrieves information on an device
   *
   * Parameters:
   *  {string} projectId - ID associated with the project 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Device information (https://api.getstructure.io/#/definitions/device)
   *
   * Errors:
   *  404 - Error if device was not found 
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
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
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
   *  {string} projectId - ID associated with the project 
   *  {string} deviceId - ID associated with the device 
   *  {object} device - Object containing new properties of the device (https://api.getstructure.io/#/definitions/device)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated device information (https://api.getstructure.io/#/definitions/device)
   *
   * Errors:
   *  404 - Error if device was not found 
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
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
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
   *  {string} projectId - ID associated with the project 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  204 - If device was successfully deleted 
   *
   * Errors:
   *  404 - Error if device was not found 
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
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/devices/{deviceId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Retrieves the last known device state
   *
   * Parameters:
   *  {string} projectId - ID associated with the project 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Last known device state 
   *
   * Errors:
   */
  internals.retrieveState = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/devices/{deviceId}/state');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Sends the current state of the device
   *
   * Parameters:
   *  {string} projectId - ID associated with the project 
   *  {string} deviceId - ID associated with the device 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If state device was successfully sent 
   *
   * Errors:
   */
  internals.sendState = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/devices/{deviceId}/state');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['deviceId']) { pathParams['deviceId'] = params['deviceId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
