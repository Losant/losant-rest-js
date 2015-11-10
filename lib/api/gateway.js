var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  /**
   * Retrieves information on an gateway
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} gatewayId - ID associated with the gateway 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Gateway information (https://api.getstructure.io/#/definitions/gateway)
   *  404 - Error if gateway was not found 
   */
  internals.get = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/gateways/{gatewayId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '1.0.0'
      },
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (options.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + options.accessToken;
    }
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['gatewayId']) { pathParams['gatewayId'] = params['gatewayId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response.data); }
        return response.data;
      })
      .catch(function (response) {
        var err;
        if (response instanceof Error) {
          err = response;
        } else {
          err = new Error(response.data.message);
          err.type = response.data.type;
          err.statusCode = response.status;
        }
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  /**
   * Updates information about a gateway
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} gatewayId - ID associated with the gateway 
   *   {object} gateway - Object containing new properties of the gateway (https://api.getstructure.io/#/definitions/gateway)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated gateway information (https://api.getstructure.io/#/definitions/gateway)
   *  404 - Error if gateway was not found 
   */
  internals.patch = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/gateways/{gatewayId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '1.0.0'
      },
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (options.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + options.accessToken;
    }
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['gatewayId']) { pathParams['gatewayId'] = params['gatewayId']; }
    if ('undefined' !== typeof params['gateway']) { req.data = params['gateway']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response.data); }
        return response.data;
      })
      .catch(function (response) {
        var err;
        if (response instanceof Error) {
          err = response;
        } else {
          err = new Error(response.data.message);
          err.type = response.data.type;
          err.statusCode = response.status;
        }
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  /**
   * Deletes a gateway
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} gatewayId - ID associated with the gateway 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  204 - If gateway was successfully deleted 
   *  404 - Error if gateway was not found 
   */
  internals.delete = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/gateways/{gatewayId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '1.0.0'
      },
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (options.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + options.accessToken;
    }
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['gatewayId']) { pathParams['gatewayId'] = params['gatewayId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response.data); }
        return response.data;
      })
      .catch(function (response) {
        var err;
        if (response instanceof Error) {
          err = response;
        } else {
          err = new Error(response.data.message);
          err.type = response.data.type;
          err.statusCode = response.status;
        }
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  return internals;
};
