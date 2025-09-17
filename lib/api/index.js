/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2025 Losant IoT, Inc.
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

import axios from 'axios';
import qs from 'qs';
import { EventSource } from 'eventsource';
import FormData from 'form-data';
import { parse as uriTemplateParse } from 'uri-template';
import application from './application.js';
import applicationApiToken from './applicationApiToken.js';
import applicationApiTokens from './applicationApiTokens.js';
import applicationCertificate from './applicationCertificate.js';
import applicationCertificateAuthorities from './applicationCertificateAuthorities.js';
import applicationCertificateAuthority from './applicationCertificateAuthority.js';
import applicationCertificates from './applicationCertificates.js';
import applicationDashboard from './applicationDashboard.js';
import applicationDashboards from './applicationDashboards.js';
import applicationJobLog from './applicationJobLog.js';
import applicationJobLogs from './applicationJobLogs.js';
import applicationKey from './applicationKey.js';
import applicationKeys from './applicationKeys.js';
import applicationTemplate from './applicationTemplate.js';
import applicationTemplates from './applicationTemplates.js';
import applications from './applications.js';
import auditLog from './auditLog.js';
import auditLogs from './auditLogs.js';
import auth from './auth.js';
import credential from './credential.js';
import credentials from './credentials.js';
import dashboard from './dashboard.js';
import dashboards from './dashboards.js';
import data from './data.js';
import dataTable from './dataTable.js';
import dataTableRow from './dataTableRow.js';
import dataTableRows from './dataTableRows.js';
import dataTables from './dataTables.js';
import device from './device.js';
import deviceAttribute from './deviceAttribute.js';
import deviceAttributes from './deviceAttributes.js';
import deviceRecipe from './deviceRecipe.js';
import deviceRecipes from './deviceRecipes.js';
import devices from './devices.js';
import edgeDeployment from './edgeDeployment.js';
import edgeDeployments from './edgeDeployments.js';
import embeddedDeployment from './embeddedDeployment.js';
import embeddedDeployments from './embeddedDeployments.js';
import event from './event.js';
import events from './events.js';
import experience from './experience.js';
import experienceDomain from './experienceDomain.js';
import experienceDomains from './experienceDomains.js';
import experienceEndpoint from './experienceEndpoint.js';
import experienceEndpoints from './experienceEndpoints.js';
import experienceGroup from './experienceGroup.js';
import experienceGroups from './experienceGroups.js';
import experienceSlug from './experienceSlug.js';
import experienceSlugs from './experienceSlugs.js';
import experienceUser from './experienceUser.js';
import experienceUsers from './experienceUsers.js';
import experienceVersion from './experienceVersion.js';
import experienceVersions from './experienceVersions.js';
import experienceView from './experienceView.js';
import experienceViews from './experienceViews.js';
import file from './file.js';
import files from './files.js';
import flow from './flow.js';
import flowVersion from './flowVersion.js';
import flowVersions from './flowVersions.js';
import flows from './flows.js';
import instance from './instance.js';
import instanceApiToken from './instanceApiToken.js';
import instanceApiTokens from './instanceApiTokens.js';
import instanceAuditLog from './instanceAuditLog.js';
import instanceAuditLogs from './instanceAuditLogs.js';
import instanceCustomNode from './instanceCustomNode.js';
import instanceCustomNodes from './instanceCustomNodes.js';
import instanceMember from './instanceMember.js';
import instanceMembers from './instanceMembers.js';
import instanceNotificationRule from './instanceNotificationRule.js';
import instanceNotificationRules from './instanceNotificationRules.js';
import instanceOrg from './instanceOrg.js';
import instanceOrgInvite from './instanceOrgInvite.js';
import instanceOrgInvites from './instanceOrgInvites.js';
import instanceOrgMember from './instanceOrgMember.js';
import instanceOrgMembers from './instanceOrgMembers.js';
import instanceOrgs from './instanceOrgs.js';
import instanceSandbox from './instanceSandbox.js';
import instanceSandboxes from './instanceSandboxes.js';
import instances from './instances.js';
import integration from './integration.js';
import integrations from './integrations.js';
import me from './me.js';
import notebook from './notebook.js';
import notebooks from './notebooks.js';
import org from './org.js';
import orgInvites from './orgInvites.js';
import orgs from './orgs.js';
import resourceJob from './resourceJob.js';
import resourceJobs from './resourceJobs.js';
import userApiToken from './userApiToken.js';
import userApiTokens from './userApiTokens.js';
import webhook from './webhook.js';
import webhooks from './webhooks.js';
import REQUEST_INFO from '../schemas/apiInfo.json' with { type: 'json' };
import GLOBAL_PARAMS from './constants/globalParams.json' with { type: 'json' };

/**
 * Platform API
 * User API for accessing platform data
 * version: 1.28.3
 */
export default function(options = {}) {
  const internals = {};
  internals.makeRequestFunction = function(resourceName, actionName) {
    const { params: resourceParams, path: resourcePath } = REQUEST_INFO[resourceName];
    const { path: actionPath, params: actionParams, method, sseStream } = REQUEST_INFO[resourceName].actions[actionName];
    const uriPath = [resourcePath || '', actionPath || ''].join('');
    const allParams = [...GLOBAL_PARAMS, ...actionParams || [], ...resourceParams || []];
    const tpl = uriTemplateParse(uriPath);
    return function(params = {}, opts = {}) {
      const pathParams = {};
      const req = {
        headers: {},
        params: {}
      };
      if (!sseStream) {
        req.method = method;
        req.params = { _actions: false, _links: true, _embedded: true };
        if (method !== 'GET') {
          req.data = {};
        }
      }
      allParams.forEach(({ name, in: from, required, type }) => {
        if (from === 'path' && !params[name] && required) {
          throw new Error(`${name} is required`);
        }
        if (params[name] === undefined) {
          return;
        }
        if (from === 'path') {
          pathParams[name] = params[name];
        } else if (from === 'query') {
          req.params[name] = type === 'object'
? JSON.stringify(params[name])
: params[name];
        } else if (from === 'header') {
          req.headers[name] = params[name];
        } else if (from === 'body') {
          req.data = params[name];
        } else if (from === 'multipart') {
          if (!opts.multipartTypes) { opts.multipartTypes = {}; }
          opts.multipartTypes[name] = type;
          req.data[name] = params[name];
        }
      });
      req.url = tpl.expand(pathParams);
      return sseStream
? internals.attachEventSource(req, opts)
: internals.request(req, opts);
    };
  };
  internals.application = application(options, internals);
  internals.applicationApiToken = applicationApiToken(options, internals);
  internals.applicationApiTokens = applicationApiTokens(options, internals);
  internals.applicationCertificate = applicationCertificate(options, internals);
  internals.applicationCertificateAuthorities = applicationCertificateAuthorities(options, internals);
  internals.applicationCertificateAuthority = applicationCertificateAuthority(options, internals);
  internals.applicationCertificates = applicationCertificates(options, internals);
  internals.applicationDashboard = applicationDashboard(options, internals);
  internals.applicationDashboards = applicationDashboards(options, internals);
  internals.applicationJobLog = applicationJobLog(options, internals);
  internals.applicationJobLogs = applicationJobLogs(options, internals);
  internals.applicationKey = applicationKey(options, internals);
  internals.applicationKeys = applicationKeys(options, internals);
  internals.applicationTemplate = applicationTemplate(options, internals);
  internals.applicationTemplates = applicationTemplates(options, internals);
  internals.applications = applications(options, internals);
  internals.auditLog = auditLog(options, internals);
  internals.auditLogs = auditLogs(options, internals);
  internals.auth = auth(options, internals);
  internals.credential = credential(options, internals);
  internals.credentials = credentials(options, internals);
  internals.dashboard = dashboard(options, internals);
  internals.dashboards = dashboards(options, internals);
  internals.data = data(options, internals);
  internals.dataTable = dataTable(options, internals);
  internals.dataTableRow = dataTableRow(options, internals);
  internals.dataTableRows = dataTableRows(options, internals);
  internals.dataTables = dataTables(options, internals);
  internals.device = device(options, internals);
  internals.deviceAttribute = deviceAttribute(options, internals);
  internals.deviceAttributes = deviceAttributes(options, internals);
  internals.deviceRecipe = deviceRecipe(options, internals);
  internals.deviceRecipes = deviceRecipes(options, internals);
  internals.devices = devices(options, internals);
  internals.edgeDeployment = edgeDeployment(options, internals);
  internals.edgeDeployments = edgeDeployments(options, internals);
  internals.embeddedDeployment = embeddedDeployment(options, internals);
  internals.embeddedDeployments = embeddedDeployments(options, internals);
  internals.event = event(options, internals);
  internals.events = events(options, internals);
  internals.experience = experience(options, internals);
  internals.experienceDomain = experienceDomain(options, internals);
  internals.experienceDomains = experienceDomains(options, internals);
  internals.experienceEndpoint = experienceEndpoint(options, internals);
  internals.experienceEndpoints = experienceEndpoints(options, internals);
  internals.experienceGroup = experienceGroup(options, internals);
  internals.experienceGroups = experienceGroups(options, internals);
  internals.experienceSlug = experienceSlug(options, internals);
  internals.experienceSlugs = experienceSlugs(options, internals);
  internals.experienceUser = experienceUser(options, internals);
  internals.experienceUsers = experienceUsers(options, internals);
  internals.experienceVersion = experienceVersion(options, internals);
  internals.experienceVersions = experienceVersions(options, internals);
  internals.experienceView = experienceView(options, internals);
  internals.experienceViews = experienceViews(options, internals);
  internals.file = file(options, internals);
  internals.files = files(options, internals);
  internals.flow = flow(options, internals);
  internals.flowVersion = flowVersion(options, internals);
  internals.flowVersions = flowVersions(options, internals);
  internals.flows = flows(options, internals);
  internals.instance = instance(options, internals);
  internals.instanceApiToken = instanceApiToken(options, internals);
  internals.instanceApiTokens = instanceApiTokens(options, internals);
  internals.instanceAuditLog = instanceAuditLog(options, internals);
  internals.instanceAuditLogs = instanceAuditLogs(options, internals);
  internals.instanceCustomNode = instanceCustomNode(options, internals);
  internals.instanceCustomNodes = instanceCustomNodes(options, internals);
  internals.instanceMember = instanceMember(options, internals);
  internals.instanceMembers = instanceMembers(options, internals);
  internals.instanceNotificationRule = instanceNotificationRule(options, internals);
  internals.instanceNotificationRules = instanceNotificationRules(options, internals);
  internals.instanceOrg = instanceOrg(options, internals);
  internals.instanceOrgInvite = instanceOrgInvite(options, internals);
  internals.instanceOrgInvites = instanceOrgInvites(options, internals);
  internals.instanceOrgMember = instanceOrgMember(options, internals);
  internals.instanceOrgMembers = instanceOrgMembers(options, internals);
  internals.instanceOrgs = instanceOrgs(options, internals);
  internals.instanceSandbox = instanceSandbox(options, internals);
  internals.instanceSandboxes = instanceSandboxes(options, internals);
  internals.instances = instances(options, internals);
  internals.integration = integration(options, internals);
  internals.integrations = integrations(options, internals);
  internals.me = me(options, internals);
  internals.notebook = notebook(options, internals);
  internals.notebooks = notebooks(options, internals);
  internals.org = org(options, internals);
  internals.orgInvites = orgInvites(options, internals);
  internals.orgs = orgs(options, internals);
  internals.resourceJob = resourceJob(options, internals);
  internals.resourceJobs = resourceJobs(options, internals);
  internals.userApiToken = userApiToken(options, internals);
  internals.userApiTokens = userApiTokens(options, internals);
  internals.webhook = webhook(options, internals);
  internals.webhooks = webhooks(options, internals);

  /**
   * Make a generic request to the API
   */
  internals.request = async function(req = {}, opts = {}) {
    opts = { ...options, ...opts };
    req.headers = {
      ...req.headers,
      'Accept': 'application/json',
      'Accept-Version': '^1.28.3'
    };
    if (opts.accessToken) {
      req.headers.Authorization = `Bearer ${opts.accessToken}`;
    }
    if (opts.timeout) {
      req.timeout = opts.timeout;
    }
    if (opts.acceptVersion) {
      req.headers['Accept-Version'] = opts.acceptVersion;
    }
    if (opts.multipartTypes) {
      const multipartData = req.data || {};
      req.data = new FormData();
      Object.keys(multipartData).forEach((key) => {
        if (opts.multipartTypes[key] === 'object') {
          req.data.append(key, JSON.stringify(multipartData[key]));
        } else if (opts.multipartTypes[key] === 'file' && typeof multipartData[key] === 'string') {
          req.data.append(key, multipartData[key], { filename: key });
        } else {
          req.data.append(key, multipartData[key]);
        }
      });
      if (req.data.getHeaders) {
        req.headers = { ...req.data.getHeaders(), ...req.headers };
      }
    }
    req.url = (opts.url || 'https://api.losant.com') + req.url;
    req.paramsSerializer = (params) => qs.stringify(params);
    try {
      const response = await axios(req);
      return response.data;
    } catch (axiosError) {
      let err;
      if (axiosError.response) {
        const errorData = axiosError.response.data || {};
        err = new Error(errorData.message);
        Object.keys(errorData).forEach((key) => {
          if (key !== 'message') { err[key] = errorData[key]; }
        });
        err.statusCode = axiosError.response.status;
        if (err.statusCode === 413 && !err.message) { err.message = 'Request entity too large.'; }
      } else {
        err = axiosError;
      }
      throw err;
    }
  };

  internals.attachEventSource = (req = {}, opts = {}) => {
    opts = { ...options, ...opts };

    req.headers = {
      ...req.headers,
      'Accept': 'application/json',
      'Accept-Version': '^1.28.3'
    };
    if (opts.accessToken) {
      req.headers.Authorization = `Bearer ${opts.accessToken}`;
    }
    if (opts.acceptVersion) {
      req.headers['Accept-Version'] = opts.acceptVersion;
    }
    const fullUrl = `${opts.url || 'https://api.losant.com'}${req.url}?${qs.stringify(req.params)}`;

    const es = new EventSource(fullUrl, {
      fetch: (input, init) => fetch(input, {
          ...init,
          headers: {
            ...init.headers,
            ...req.headers
          }
        })
    });

    return new Promise((resolve, reject) => {
      es.onopen = resolve;
      es.onerror = reject;
    })
      .then(() => {
        es.onopen = null;
        es.onerror = null;
        return es;
      })
      .catch((err) => {
        try {
          es.close();
        } catch {
          // Empty
        }
        es.onopen = null;
        es.onerror = null;
        throw err;
      });
  };

  /**
   * Set a client option
   */
  internals.setOption = function(name, value) {
    options[name] = value;
    return internals;
  };

  /**
   * Get a client option
   */
  internals.getOption = function(name) {
    return options[name];
  };

  return internals;
};
