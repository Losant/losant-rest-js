var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the applications owned by the current user
   *
   * Parameters:
   *  {string} sortField - undefined 
   *  {string} sortDirection - undefined 
   *  {string} page - undefined 
   *  {string} perPage - undefined 
   *  {string} filterField - undefined 
   *  {string} filter - undefined 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Collection of applications (https://api.getstructure.io/#/definitions/applications)
   *
   * Errors:
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
    var tpl = uriTemplate.parse('/applications');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['sortField']) { req.params['sortField'] = params['sortField']; }
    if ('undefined' !== typeof params['sortDirection']) { req.params['sortDirection'] = params['sortDirection']; }
    if ('undefined' !== typeof params['page']) { req.params['page'] = params['page']; }
    if ('undefined' !== typeof params['perPage']) { req.params['perPage'] = params['perPage']; }
    if ('undefined' !== typeof params['filterField']) { req.params['filterField'] = params['filterField']; }
    if ('undefined' !== typeof params['filter']) { req.params['filter'] = params['filter']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Create a new application owned by the current user
   *
   * Parameters:
   *  {object} application - New application information (https://api.getstructure.io/#/definitions/application)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  201 - If application was successfully created 
   *
   * Errors:
   */
  internals.post = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['application']) { req.data = params['application']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
