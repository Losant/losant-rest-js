var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  /**
   * Authenticates a user using the provided credentials
   *
   * Parameters:
   *   {object} credentials - User authentication credentials (https://api.getstructure.io/#/definitions/userCredentials)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If authentication is successful 
   *  401 - Unauthorized error if authentication fails 
   */
  internals.authenticateUser = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse(endpoint + '/auth/user');
    var pathParams = {};
    var req = {
      method: 'POST',
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
    if ('undefined' !== typeof params['credentials']) { req.data = params['credentials']; }
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
   * Authenticates a gateway using the provided credentials
   *
   * Parameters:
   *   {object} credentials - Gateway authentication credentials (https://api.getstructure.io/#/definitions/gatewayCredentials)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If authentication is successful 
   *  401 - Unauthorized error if authentication fails 
   */
  internals.authenticateGateway = function (params, opts, cb) {
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
    var tpl = uriTemplate.parse(endpoint + '/auth/gateway');
    var pathParams = {};
    var req = {
      method: 'POST',
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
    if ('undefined' !== typeof params['credentials']) { req.data = params['credentials']; }
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
