var axios = require('axios');

/**
 * Structure API
 * User API for accessing Structure data
 * version: 1.0.0
 */
module.exports = function (options) {
  options = options || {};
  var internals = {};

  internals.accessToken = require('./accessToken')(options);
  internals.accessTokens = require('./accessTokens')(options);
  internals.auth = require('./auth')(options);
  internals.device = require('./device')(options);
  internals.devices = require('./devices')(options);
  internals.emailVerifications = require('./emailVerifications')(options);
  internals.flow = require('./flow')(options);
  internals.flows = require('./flows')(options);
  internals.gateway = require('./gateway')(options);
  internals.gateways = require('./gateways')(options);
  internals.me = require('./me')(options);
  internals.org = require('./org')(options);
  internals.orgs = require('./orgs')(options);
  internals.orgProjects = require('./orgProjects')(options);
  internals.passwordResets = require('./passwordResets')(options);
  internals.project = require('./project')(options);
  internals.projects = require('./projects')(options);
  internals.projectKey = require('./projectKey')(options);
  internals.projectKeys = require('./projectKeys')(options);
  internals.users = require('./users')(options);

  internals.setOption = function (name, value) {
    options[name] = value;
    return internals;
  };

  axios.interceptors.response.use(
    function (response) {
      return response.data;
    },
    function (response) {
      var err;
      if (response instanceof Error) {
        err = response;
      } else {
        err = new Error(response.data.message);
        err.type = response.data.type;
        err.statusCode = response.status;
      }
      throw err;
    }
  );

  return internals;
};
