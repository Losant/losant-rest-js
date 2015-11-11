var axios = require('axios');

/**
 * Structure API
 * User API for accessing Structure data
 * version: 1.0.0
 */
module.exports = function (options) {
  options = options || {};
  var internals = {};
  var endpoint = options.url || 'https://api.getstructure.io';

  internals.accessToken = require('./accessToken')(options, internals);
  internals.accessTokens = require('./accessTokens')(options, internals);
  internals.auth = require('./auth')(options, internals);
  internals.device = require('./device')(options, internals);
  internals.devices = require('./devices')(options, internals);
  internals.flow = require('./flow')(options, internals);
  internals.flows = require('./flows')(options, internals);
  internals.gateway = require('./gateway')(options, internals);
  internals.gateways = require('./gateways')(options, internals);
  internals.me = require('./me')(options, internals);
  internals.org = require('./org')(options, internals);
  internals.orgs = require('./orgs')(options, internals);
  internals.orgProjects = require('./orgProjects')(options, internals);
  internals.project = require('./project')(options, internals);
  internals.projects = require('./projects')(options, internals);
  internals.projectKey = require('./projectKey')(options, internals);
  internals.projectKeys = require('./projectKeys')(options, internals);
  internals.users = require('./users')(options, internals);
  internals.webhook = require('./webhook')(options, internals);
  internals.webhooks = require('./webhooks')(options, internals);

  /**
   * Make a generic request to the API
   */
  internals.request = function (req, opts, cb) {
    req = req || {};
    if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    opts = Object.assign({}, options, opts);
    req.headers = Object.assign({}, req.headers, {
      'Accept': 'application/json',
      'Accept-Version': '^1.0.0'
    });
    if (opts.accessToken) {
      req.headers['Authorization'] = 'Bearer ' + opts.accessToken;
    }
    req.url = endpoint + req.url;
    var promise = axios(req, cb)
      .then(function (response) {
        response = response.data;
        if (cb) { return setTimeout(function () { cb(null, response); }, 0) }
        return response;
      })
      .catch(function (response) {
        var err;
        if (response instanceof Error) {
          err = response;
        } else {
          err = new Error(response.data.message);
          err.type = response.data.type;
          err.statusCode = response.status;
        }
        if (cb) { return setTimeout(function () { cb(err); }, 0) }
        throw err;
      });
    if (!cb) { return promise; }
  };

  /**
   * Set a client option
   */
  internals.setOption = function (name, value) {
    options[name] = value;
    return internals;
  };

  return internals;
};
