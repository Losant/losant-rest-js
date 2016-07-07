var axios = require('axios');
var qs    = require('qs');

/**
 * Losant API
 * User API for accessing Losant data
 * version: 1.4.0
 */
module.exports = function (options) {
  options = options || {};
  var internals = {};

  internals.accessToken = require('./accessToken')(options, internals);
  internals.accessTokens = require('./accessTokens')(options, internals);
  internals.application = require('./application')(options, internals);
  internals.applicationKey = require('./applicationKey')(options, internals);
  internals.applicationKeys = require('./applicationKeys')(options, internals);
  internals.applications = require('./applications')(options, internals);
  internals.auth = require('./auth')(options, internals);
  internals.dashboard = require('./dashboard')(options, internals);
  internals.dashboards = require('./dashboards')(options, internals);
  internals.data = require('./data')(options, internals);
  internals.device = require('./device')(options, internals);
  internals.deviceRecipe = require('./deviceRecipe')(options, internals);
  internals.deviceRecipes = require('./deviceRecipes')(options, internals);
  internals.devices = require('./devices')(options, internals);
  internals.event = require('./event')(options, internals);
  internals.events = require('./events')(options, internals);
  internals.flow = require('./flow')(options, internals);
  internals.flows = require('./flows')(options, internals);
  internals.me = require('./me')(options, internals);
  internals.org = require('./org')(options, internals);
  internals.orgs = require('./orgs')(options, internals);
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
      Accept: 'application/json',
      'Accept-Version': '^1.4.0'
    });
    if (opts.accessToken) {
      req.headers.Authorization = 'Bearer ' + opts.accessToken;
    }
    req.url = (opts.url || 'https://api.losant.com') + req.url;
    req.paramsSerializer = function(params) { return qs.stringify(params); };
    var promise = axios(req, cb)
      .then(function (response) {
        response = response.data;
        if (cb) { return setTimeout(function () { cb(null, response); }, 0); }
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
        if (cb) { return setTimeout(function () { cb(err); }, 0); }
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

  /**
   * Get a client option
   */
  internals.getOption = function (name) {
    return options[name];
  };

  return internals;
};
