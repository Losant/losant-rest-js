var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options, client) {
  var internals = {};

  /**
   * Returns the data for the given query
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {undefined} start - undefined 
   *  {undefined} end - undefined 
   *  {undefined} duration - undefined 
   *  {undefined} resolution - undefined 
   *  {undefined} aggregation - undefined 
   *  {array} attributes - undefined 
   *  {array} deviceTags - undefined 
   *  {array} deviceIds - undefined 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Data for requested time range (https://api.getstructure.io/#/definitions/timeSeriesData)
   *
   * Errors:
   *  404 - Error if application was not found (https://api.getstructure.io/#/definitions/error)
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
    var tpl = uriTemplate.parse('/applications/{applicationId}/data');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['start']) { req.params['start'] = params['start']; }
    if ('undefined' !== typeof params['end']) { req.params['end'] = params['end']; }
    if ('undefined' !== typeof params['duration']) { req.params['duration'] = params['duration']; }
    if ('undefined' !== typeof params['resolution']) { req.params['resolution'] = params['resolution']; }
    if ('undefined' !== typeof params['aggregation']) { req.params['aggregation'] = params['aggregation']; }
    if ('undefined' !== typeof params['attributes']) { req.params['attributes'] = params['attributes']; }
    if ('undefined' !== typeof params['deviceTags']) { req.params['deviceTags'] = params['deviceTags']; }
    if ('undefined' !== typeof params['deviceIds']) { req.params['deviceIds'] = params['deviceIds']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  /**
   * Returns the last known data for the given attribute
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application 
   *  {undefined} attribute - undefined 
   *  {array} deviceTags - undefined 
   *  {array} deviceIds - undefined 
   *  {boolean} _actions - Return resource actions in response 
   *  {boolean} _links - Return resource link in response 
   *  {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  200 - Last know data for the requested attribute (https://api.getstructure.io/#/definitions/lastValueData)
   *
   * Errors:
   *  404 - Error if application was not found (https://api.getstructure.io/#/definitions/error)
   */
  internals.lastValue = function (params, opts, cb) {
    if ('function' === typeof params) {
      cb = params;
      params = {};
      opts = {};
    } else if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    params = params || {};
    var tpl = uriTemplate.parse('/applications/{applicationId}/data/last-value');
    var pathParams = {};
    var req = {
      method: 'GET',
      params: { _actions: false, _links: true, _embedded: true }
    };
    if ('undefined' !== typeof params['applicationId']) { pathParams['applicationId'] = params['applicationId']; }
    if ('undefined' !== typeof params['attribute']) { req.params['attribute'] = params['attribute']; }
    if ('undefined' !== typeof params['deviceTags']) { req.params['deviceTags'] = params['deviceTags']; }
    if ('undefined' !== typeof params['deviceIds']) { req.params['deviceIds'] = params['deviceIds']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    return client.request(req, opts, cb);
  }

  return internals;
};
