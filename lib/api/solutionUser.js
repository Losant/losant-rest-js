var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Deletes a solution user
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} solutionId - ID associated with the solution
   *  {string} solutionUserId - ID associated with the solution user
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If solution user was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if solution user was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/orgs/{orgId}/solutions/{solutionId}/users/{solutionUserId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.solutionId) { pathParams.solutionId = params.solutionId; }
    if ('undefined' !== typeof params.solutionUserId) { pathParams.solutionUserId = params.solutionUserId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Retrieves information on a solution user
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} solutionId - ID associated with the solution
   *  {string} solutionUserId - ID associated with the solution user
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Solution user information (https://api.losant.com/#/definitions/solutionUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if solution user was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/orgs/{orgId}/solutions/{solutionId}/users/{solutionUserId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.solutionId) { pathParams.solutionId = params.solutionId; }
    if ('undefined' !== typeof params.solutionUserId) { pathParams.solutionUserId = params.solutionUserId; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Updates information about a solution user
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} solutionId - ID associated with the solution
   *  {string} solutionUserId - ID associated with the solution user
   *  {hash} solutionUser - Object containing new properties of the solution user (https://api.losant.com/#/definitions/solutionUserPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated solution user information (https://api.losant.com/#/definitions/solutionUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if solution user was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/orgs/{orgId}/solutions/{solutionId}/users/{solutionUserId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.solutionId) { pathParams.solutionId = params.solutionId; }
    if ('undefined' !== typeof params.solutionUserId) { pathParams.solutionUserId = params.solutionUserId; }
    if ('undefined' !== typeof params.solutionUser) { req.data = params.solutionUser; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
