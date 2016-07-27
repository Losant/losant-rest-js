var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the users for the solution
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} solutionId - ID associated with the solution
   *  {string} sortField - Field to sort the results by. Accepted values are: email, firstName, lastName, id, creationDate, lastLogin
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: email, firstName, lastName
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of solution users (https://api.losant.com/#/definitions/solutionUsers)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/orgs/{orgId}/solutions/{solutionId}/users');
    var pathParams = {};
    var req = {
      method: 'GET',
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.solutionId) { pathParams.solutionId = params.solutionId; }
    if ('undefined' !== typeof params.sortField) { req.params.sortField = params.sortField; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.page) { req.params.page = params.page; }
    if ('undefined' !== typeof params.perPage) { req.params.perPage = params.perPage; }
    if ('undefined' !== typeof params.filterField) { req.params.filterField = params.filterField; }
    if ('undefined' !== typeof params.filter) { req.params.filter = params.filter; }
    if ('undefined' !== typeof params.losantdomain) { req.headers.losantdomain = params.losantdomain; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Create a new solution user
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} solutionId - ID associated with the solution
   *  {hash} solutionUser - New solution user information (https://api.losant.com/#/definitions/solutionUserPost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created solution user (https://api.losant.com/#/definitions/solutionUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/orgs/{orgId}/solutions/{solutionId}/users');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      headers: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.orgId) { pathParams.orgId = params.orgId; }
    if ('undefined' !== typeof params.solutionId) { pathParams.solutionId = params.solutionId; }
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
