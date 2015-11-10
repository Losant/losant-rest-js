var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};

  /**
   * Retrieves information on an project
   *
   * Parameters:
   *   {string} projectId - ID of the associated project 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Project information (https://api.getstructure.io/#/definitions/project)
   *  404 - Error if project was not found 
   */
  internals.get = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('https://api.getstructure.io/projects/{projectId}');
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
   * Updates information about a project
   *
   * Parameters:
   *   {string} projectId - ID of the associated project 
   *   {object} project - Object containing new project properties (https://api.getstructure.io/#/definitions/project)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Update project information (https://api.getstructure.io/#/definitions/project)
   *  404 - Error if project was not found 
   */
  internals.patch = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('https://api.getstructure.io/projects/{projectId}');
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
   * Deletes a project
   *
   * Parameters:
   *   {string} projectId - ID of the associated project 
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
    var tpl = uriTemplate.parse('https://api.getstructure.io/projects/{projectId}');
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
