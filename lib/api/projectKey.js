var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};

  /**
   * Retrieves information on an projectKey
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} projectKeyId - ID associated with the projectKey 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Device information (https://api.getstructure.io/#/definitions/projectKey)
   *  404 - Error if projectKey was not found 
   */
  internals.get = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('https://api.getstructure.io/projects/{projectId}/keys/{projectKeyId}');
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
    if ('undefined' !== typeof params['projectKeyId']) { pathParams['projectKeyId'] = params['projectKeyId']; }
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
   * Updates information about a projectKey
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} projectKeyId - ID associated with the projectKey 
   *   {object} projectKey - Object containing new properties of the projectKey (https://api.getstructure.io/#/definitions/projectKey)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated projectKey information (https://api.getstructure.io/#/definitions/projectKey)
   *  404 - Error if projectKey was not found 
   */
  internals.patch = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('https://api.getstructure.io/projects/{projectId}/keys/{projectKeyId}');
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
    if ('undefined' !== typeof params['projectKeyId']) { pathParams['projectKeyId'] = params['projectKeyId']; }
    if ('undefined' !== typeof params['projectKey']) { req.data = params['projectKey']; }
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
   * Deletes a projectKey
   *
   * Parameters:
   *   {string} projectId - ID associated with the project 
   *   {string} projectKeyId - ID associated with the projectKey 
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  204 - If projectKey was successfully deleted 
   *  404 - Error if projectKey was not found 
   */
  internals.delete = function (params, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('https://api.getstructure.io/projects/{projectId}/keys/{projectKeyId}');
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
    if ('undefined' !== typeof params['projectKeyId']) { pathParams['projectKeyId'] = params['projectKeyId']; }
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
