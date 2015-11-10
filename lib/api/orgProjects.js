var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  /**
   * Returns the projects owned by the organization
   *
   * Parameters:
   *   {string} orgId - Id of the organization 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Collection of org projects 
   */
  internals.get = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/orgs/{orgId}/projects');
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
    if ('undefined' !== typeof params['orgId']) { pathParams['orgId'] = params['orgId']; }
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
   * Create a new project owned by the organization
   *
   * Parameters:
   *   {string} orgId - Id of the organization 
   *   {object} project - Project information (https://api.getstructure.io/#/definitions/project)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  201 - If project was successfully created 
   */
  internals.post = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/orgs/{orgId}/projects');
    var pathParams = {};
    var req = {
      method: 'POST',
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
    if ('undefined' !== typeof params['orgId']) { pathParams['orgId'] = params['orgId']; }
    if ('undefined' !== typeof params['project']) { req.data = params['project']; }
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
   * Deletes a project owned by the organization
   *
   * Parameters:
   *   {string} orgId - Id of the organization 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - If project was successfully deleted 
   *  404 - Error if project was not found 
   */
  internals.delete = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/orgs/{orgId}/projects');
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
    if ('undefined' !== typeof params['orgId']) { pathParams['orgId'] = params['orgId']; }
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
