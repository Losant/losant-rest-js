var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Retrieves information on an event
   *
   * Parameters:
   *  {string} projectId - ID associated with the project 
   *  {string} eventId - ID associated with the event 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Event information (https://api.getstructure.io/#/definitions/event)
   *
   * Errors:
   *  404 - Error if event was not found 
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
    var tpl = uriTemplate.parse('/projects/{projectId}/events/{eventId}');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['eventId']) { pathParams['eventId'] = params['eventId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Updates information about an event
   *
   * Parameters:
   *  {string} projectId - ID associated with the project 
   *  {string} eventId - ID associated with the event 
   *  {object} event - Object containing new properties of the event (https://api.getstructure.io/#/definitions/event)
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Updated event information (https://api.getstructure.io/#/definitions/event)
   *
   * Errors:
   *  404 - Error if event is not found 
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
    var tpl = uriTemplate.parse('/projects/{projectId}/events/{eventId}');
    var pathParams = {};
    var req = {
      method: 'PATCH',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['eventId']) { pathParams['eventId'] = params['eventId']; }
    if ('undefined' !== typeof params['event']) { req.data = params['event']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Deletes an event
   *
   * Parameters:
   *  {string} projectId - ID associated with the project 
   *  {string} eventId - ID associated with the event 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  204 - If event was successfully deleted 
   *
   * Errors:
   *  404 - Error if event was not found 
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
    var tpl = uriTemplate.parse('/projects/{projectId}/events/{eventId}');
    var pathParams = {};
    var req = {
      method: 'DELETE',
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['projectId']) { pathParams['projectId'] = params['projectId']; }
    if ('undefined' !== typeof params['eventId']) { pathParams['eventId'] = params['eventId']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
