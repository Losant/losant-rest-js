var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the dashboards owned by the current user
   *
   * Parameters:
   *  {string} sortField - undefined 
   *  {string} sortDirection - undefined 
   *  {string} page - undefined 
   *  {string} perPage - undefined 
   *  {string} filterField - undefined 
   *  {string} filter - undefined 
   *  {string} orgId - undefined 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Collection of dashboards (https://api.getstructure.io/#/definitions/dashboards)
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
    var tpl = uriTemplate.parse('/dashboards');
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
    if ('undefined' !== typeof params['orgId']) { req.params['orgId'] = params['orgId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Create a new dasboard owned by the current user
   *
   * Parameters:
   *  {object} dashboard - New dashboard information (https://api.getstructure.io/#/definitions/dashboardPost)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  201 - Successfully created dashboard (https://api.getstructure.io/#/definitions/dashboard)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.getstructure.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/dashboards');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['dashboard']) { req.data = params['dashboard']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
