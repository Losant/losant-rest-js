var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  /**
   * Retrieves information on an flow
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} flowId - ID associated with the flow 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Flow information (https://api.getstructure.io/#/definitions/flow)
   *  404 - Error if flow was not found 
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
    opts = Object.assign({}, options, opts);
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/flows/{flowId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '^1.0.0'
      },
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (opts.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + opts.accessToken;
    }
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['flowId']) { pathParams['flowId'] = params['flowId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response); }
        return response;
      })
      .catch(function (err) {
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  /**
   * Updates information about a flow
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} flowId - ID associated with the flow 
   *   {object} flow - Object containing new properties of the flow (https://api.getstructure.io/#/definitions/flow)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated device information (https://api.getstructure.io/#/definitions/flow)
   *  404 - Error if flow is not found 
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
    opts = Object.assign({}, options, opts);
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/flows/{flowId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '^1.0.0'
      },
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (opts.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + opts.accessToken;
    }
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['flowId']) { pathParams['flowId'] = params['flowId']; }
    if ('undefined' !== typeof params['flow']) { req.data = params['flow']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response); }
        return response;
      })
      .catch(function (err) {
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  /**
   * Deletes a flow
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} flowId - ID associated with the flow 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  204 - If flow was successfully deleted 
   *  404 - Error if flow was not found 
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
    opts = Object.assign({}, options, opts);
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/projects/{projectId}/flows/{flowId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '^1.0.0'
      },
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (opts.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + opts.accessToken;
    }
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['flowId']) { pathParams['flowId'] = params['flowId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response); }
        return response;
      })
      .catch(function (err) {
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  return internals;
};
