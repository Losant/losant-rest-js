var axios = require('axios');
var uriTemplate = require('uri-template');

module.exports = function (options) {
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  /**
   * Create a new user account
   *
   * Parameters:
   *   {object} user - New user information (https://api.getstructure.io/#/definitions/newUser)
   *   {boolean} _actions - Return resource actions in response 
   *   {boolean} _links - Return resource link in response 
   *   {boolean} _embedded - Return embedded resources in response 
   *
   * Responses:
   *  201 - If the user was successfully created 
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
    opts = Object.assign({}, options, opts);
    params = params || {};
    var tpl = uriTemplate.parse(endpoint + '/users');
    var pathParams = {};
    var req = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Accept-Version': '^1.0.0'
      },
      data: {},
      params: { _actions: false, _links: true, _embedded: true }
    };
    if (opts.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + opts.accessToken;
    }
    if ('undefined' !== typeof params['user']) { req.data = params['user']; }
    if ('undefined' !== typeof params['_actions']) { req.params['_actions'] = params['_actions']; }
    if ('undefined' !== typeof params['_links']) { req.params['_links'] = params['_links']; }
    if ('undefined' !== typeof params['_embedded']) { req.params['_embedded'] = params['_embedded']; }
    req.url = tpl.expand(pathParams);
    var promise = axios(req)
      .then(function (response) {
        if (cb) { return cb(null, response); }
        return response;
      })
      .catch(function (err) {
        if (cb) { return cb(err); }
        throw err;
      });
    if (!cb) { return promise; }
  }

  return internals;
};
