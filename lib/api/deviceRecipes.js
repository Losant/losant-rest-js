var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the device recipes for an application
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} sortField - Field to sort the results by. Accepted values are: name, id, creationDate
   *  {string} sortDirection - Direction to sort the results by. Accepted values are: asc, desc
   *  {string} page - Which page of results to return
   *  {string} perPage - How many items to return per page
   *  {string} filterField - Field to filter the results by. Blank or not provided means no filtering. Accepted values are: name
   *  {string} filter - Filter to apply against the filtered field. Supports globbing. Blank or not provided means no filtering.
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Collection of device recipes (https://api.losant.com/#/definitions/deviceRecipes)
   *
   * Errors:
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/device-recipes');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.sortField) { req.params.sortField = params.sortField; }
    if ('undefined' !== typeof params.sortDirection) { req.params.sortDirection = params.sortDirection; }
    if ('undefined' !== typeof params.page) { req.params.page = params.page; }
    if ('undefined' !== typeof params.perPage) { req.params.perPage = params.perPage; }
    if ('undefined' !== typeof params.filterField) { req.params.filterField = params.filterField; }
    if ('undefined' !== typeof params.filter) { req.params.filter = params.filter; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  /**
   * Create a new device recipe for an application
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {hash} deviceRecipe - New device recipe information (https://api.losant.com/#/definitions/deviceRecipePost)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully created device recipe (https://api.losant.com/#/definitions/deviceRecipe)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if application was not found (https://api.losant.com/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/device-recipes');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params.applicationId) { pathParams.applicationId = params.applicationId; }
    if ('undefined' !== typeof params.deviceRecipe) { req.data = params.deviceRecipe; }
    if ('undefined' !== typeof params._actions) { req.params._actions = params._actions; }
    if ('undefined' !== typeof params._links) { req.params._links = params._links; }
    if ('undefined' !== typeof params._embedded) { req.params._embedded = params._embedded; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  };

  return internals;
};
