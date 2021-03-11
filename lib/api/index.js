/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2020 Losant IoT, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

var axios = require('axios');
var qs = require('qs');
var EventSource = require('eventsource');
var EsPromise = require('es6-promise');
var FormData = require('form-data');

/**
 * Losant API
 * User API for accessing Losant data
 * version: 1.19.0
 */
module.exports = function (options) {
  options = options || {};
  var internals = {};

  internals.application = require('./application')(options, internals);
  internals.applicationApiToken = require('./applicationApiToken')(options, internals);
  internals.applicationApiTokens = require('./applicationApiTokens')(options, internals);
  internals.applicationCertificate = require('./applicationCertificate')(options, internals);
  internals.applicationCertificateAuthorities = require('./applicationCertificateAuthorities')(options, internals);
  internals.applicationCertificateAuthority = require('./applicationCertificateAuthority')(options, internals);
  internals.applicationCertificates = require('./applicationCertificates')(options, internals);
  internals.applicationDashboard = require('./applicationDashboard')(options, internals);
  internals.applicationDashboards = require('./applicationDashboards')(options, internals);
  internals.applicationKey = require('./applicationKey')(options, internals);
  internals.applicationKeys = require('./applicationKeys')(options, internals);
  internals.applicationTemplate = require('./applicationTemplate')(options, internals);
  internals.applicationTemplates = require('./applicationTemplates')(options, internals);
  internals.applications = require('./applications')(options, internals);
  internals.auditLog = require('./auditLog')(options, internals);
  internals.auditLogs = require('./auditLogs')(options, internals);
  internals.auth = require('./auth')(options, internals);
  internals.dashboard = require('./dashboard')(options, internals);
  internals.dashboards = require('./dashboards')(options, internals);
  internals.data = require('./data')(options, internals);
  internals.dataTable = require('./dataTable')(options, internals);
  internals.dataTableRow = require('./dataTableRow')(options, internals);
  internals.dataTableRows = require('./dataTableRows')(options, internals);
  internals.dataTables = require('./dataTables')(options, internals);
  internals.device = require('./device')(options, internals);
  internals.deviceRecipe = require('./deviceRecipe')(options, internals);
  internals.deviceRecipes = require('./deviceRecipes')(options, internals);
  internals.devices = require('./devices')(options, internals);
  internals.edgeDeployments = require('./edgeDeployments')(options, internals);
  internals.embeddedDeployments = require('./embeddedDeployments')(options, internals);
  internals.event = require('./event')(options, internals);
  internals.events = require('./events')(options, internals);
  internals.experience = require('./experience')(options, internals);
  internals.experienceDomain = require('./experienceDomain')(options, internals);
  internals.experienceDomains = require('./experienceDomains')(options, internals);
  internals.experienceEndpoint = require('./experienceEndpoint')(options, internals);
  internals.experienceEndpoints = require('./experienceEndpoints')(options, internals);
  internals.experienceGroup = require('./experienceGroup')(options, internals);
  internals.experienceGroups = require('./experienceGroups')(options, internals);
  internals.experienceSlug = require('./experienceSlug')(options, internals);
  internals.experienceSlugs = require('./experienceSlugs')(options, internals);
  internals.experienceUser = require('./experienceUser')(options, internals);
  internals.experienceUsers = require('./experienceUsers')(options, internals);
  internals.experienceVersion = require('./experienceVersion')(options, internals);
  internals.experienceVersions = require('./experienceVersions')(options, internals);
  internals.experienceView = require('./experienceView')(options, internals);
  internals.experienceViews = require('./experienceViews')(options, internals);
  internals.file = require('./file')(options, internals);
  internals.files = require('./files')(options, internals);
  internals.flow = require('./flow')(options, internals);
  internals.flowVersion = require('./flowVersion')(options, internals);
  internals.flowVersions = require('./flowVersions')(options, internals);
  internals.flows = require('./flows')(options, internals);
  internals.integration = require('./integration')(options, internals);
  internals.integrations = require('./integrations')(options, internals);
  internals.me = require('./me')(options, internals);
  internals.notebook = require('./notebook')(options, internals);
  internals.notebooks = require('./notebooks')(options, internals);
  internals.org = require('./org')(options, internals);
  internals.orgInvites = require('./orgInvites')(options, internals);
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
      'Accept-Version': '^1.19.0'
    });
    if (opts.accessToken) {
      req.headers.Authorization = 'Bearer ' + opts.accessToken;
    }
    if (opts.timeout) {
      req.timeout = opts.timeout;
    }
    if (opts.acceptVersion) {
      req.headers['Accept-Version'] = opts.acceptVersion;
    }
    if (opts.multipart) {
      var data = req.data || {};
      req.data = new FormData();
      Object.keys(data).forEach(function(key) {
        req.data.append(key, data[key]);
      });
      if (req.data.getHeaders) {
        req.headers = Object.assign(req.data.getHeaders(), req.headers);
      }
    }
    req.url = (opts.url || 'https://api.losant.com') + req.url;
    req.paramsSerializer = function(params) { return qs.stringify(params); };
    var promise = axios(req, cb)
      .then(function (response) {
        response = response.data;
        if (cb) { return setTimeout(function () { cb(null, response); }, 0); }
        return response;
      })
      .catch(function (axiosError) {
        var err;
        if (axiosError.response) {
          err = new Error(axiosError.response.data.message);
          Object.keys(axiosError.response.data).forEach(function(key) {
            if (key !== 'message') { err[key] = axiosError.response.data[key]; }
          });
          err.statusCode = axiosError.response.status;
        } else {
          err = axiosError;
        }
        if (cb) { return setTimeout(function () { cb(err); }, 0); }
        throw err;
      });
    if (!cb) { return promise; }
  };

  internals.attachEventSource = function (req, opts, cb) {
    req = req || {};
    if ('function' === typeof opts) {
      cb = opts;
      opts = {};
    }
    opts = Object.assign({}, options, opts);

    req.headers = Object.assign({}, req.headers, {
      Accept: 'application/json',
      'Accept-Version': '^1.19.0'
    });
    if (opts.accessToken) {
      req.headers.Authorization = 'Bearer ' + opts.accessToken;
    }
    if (opts.acceptVersion) {
      req.headers['Accept-Version'] = opts.acceptVersion;
    }
    var fullUrl = (opts.url || 'https://api.losant.com') + req.url + '?' + qs.stringify(req.params);

    var es = new EventSource(fullUrl, { headers: req.headers });

    var promise = new EsPromise.Promise(function(resolve, reject) {
      es.onopen = function(){ resolve(); };
      es.onerror = function(err){ reject(err); };
    })
      .then(function(){
        es.onopen = null;
        es.onerror = null;
        if (cb) { return setTimeout(function () { cb(null, es); }, 0); }
        return es;
      })
      .catch(function (err) {
        try {
          es.close();
        } catch (e) {
          // Empty
        }
        es.onopen = null;
        es.onerror = null;
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
