var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the events for an application
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {string} sort - undefined 
   *  {string} state - undefined 
   *  {undefined} page - undefined 
   *  {undefined} perPage - undefined 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Collection of events (https://api.getstructure.io/#/definitions/events)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/events');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['sort']) { req.params['sort'] = params['sort']; }
    if ('undefined' !== typeof params['state']) { req.params['state'] = params['state']; }
    if ('undefined' !== typeof params['page']) { req.params['page'] = params['page']; }
    if ('undefined' !== typeof params['perPage']) { req.params['perPage'] = params['perPage']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Create a new event for an application
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {object} event - New event information (https://api.getstructure.io/#/definitions/event)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  201 - If event was successfully created 
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/events');
    var pathParams = {};
    var req = {
      method: 'POST',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['event']) { req.data = params['event']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
