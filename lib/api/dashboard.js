var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Deletes a dashboard
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If dashboard was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/dashboards/{dashboardId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.dashboardId) { pathParams.dashboardId = params.dashboardId; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieves information on a dashboard
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Dashboard information (https://api.losant.com/#/definitions/dashboard)
   *
   * Errors:
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/dashboards/{dashboardId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.dashboardId) { pathParams.dashboardId = params.dashboardId; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Updates information about a dashboard
   *
   * Parameters:
   *  {string} dashboardId - ID of the associated dashboard
   *  {hash} dashboard - Object containing new dashboard properties (https://api.losant.com/#/definitions/dashboardPatch)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Update dashboard information (https://api.losant.com/#/definitions/dashboard)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if dashboard was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/dashboards/{dashboardId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.dashboardId) { pathParams.dashboardId = params.dashboardId; }
    if ('undefined' !== typeof params.dashboard) { req.data = params.dashboard; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
