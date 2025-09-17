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


export default function (options, client) {
  const internals = {};

  /**
   * Deletes an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.delete.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If organization was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('org', 'delete');

  /**
   * Returns device counts by day for the time range specified for this organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.deviceCounts.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} start - Start of range for device count query (ms since epoch)
   *  {string} end - End of range for device count query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device counts by day (https://api.losant.com/#/definitions/deviceCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.deviceCounts = client.makeRequestFunction('org', 'deviceCounts');

  /**
   * Retrieves information on an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.get.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from org summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Organization information (https://api.losant.com/#/definitions/org)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('org', 'get');

  /**
   * Invites a person to an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.inviteMember.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {hash} invite - Object containing new invite info (https://api.losant.com/#/definitions/orgInvitePost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Invitation information (https://api.losant.com/#/definitions/orgInvites)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization not found (https://api.losant.com/#/definitions/error)
   */
  internals.inviteMember = client.makeRequestFunction('org', 'inviteMember');

  /**
   * Modifies a current org member's role
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.modifyMember.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {hash} member - Object containing new member pair (https://api.losant.com/#/definitions/orgMemberPatch)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from org summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated organization information (https://api.losant.com/#/definitions/org)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization not found (https://api.losant.com/#/definitions/error)
   */
  internals.modifyMember = client.makeRequestFunction('org', 'modifyMember');

  /**
   * Returns notebook execution usage by day for the time range specified for this organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.notebookMinuteCounts.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} start - Start of range for notebook execution query (ms since epoch)
   *  {string} end - End of range for notebook execution query (ms since epoch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Notebook usage information (https://api.losant.com/#/definitions/notebookMinuteCounts)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.notebookMinuteCounts = client.makeRequestFunction('org', 'notebookMinuteCounts');

  /**
   * Updates information about an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.patch.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {hash} organization - Object containing new organization properties (https://api.losant.com/#/definitions/orgPatch)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from org summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated organization information (https://api.losant.com/#/definitions/org)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('org', 'patch');

  /**
   * Returns payload counts for the time range specified for all applications this organization owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.payloadCounts.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} asBytes - If the resulting stats should be returned as bytes
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Payload counts, by type and source (https://api.losant.com/#/definitions/payloadStats)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCounts = client.makeRequestFunction('org', 'payloadCounts');

  /**
   * Returns payload counts per resolution in the time range specified for all application this organization owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.payloadCountsBreakdown.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} start - Start of range for payload count query (ms since epoch)
   *  {string} end - End of range for payload count query (ms since epoch)
   *  {string} resolution - Resolution in milliseconds. Accepted values are: 86400000, 3600000
   *  {string} asBytes - If the resulting stats should be returned as bytes
   *  {string} includeNonBillable - If non-billable payloads should be included in the result
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Sum of payload counts by date (https://api.losant.com/#/definitions/payloadCountsBreakdown)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.payloadCountsBreakdown = client.makeRequestFunction('org', 'payloadCountsBreakdown');

  /**
   * Gets the current pending invites
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.Organization.read, all.User, all.User.read, org.*, or org.pendingInvites.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Invitation information (https://api.losant.com/#/definitions/orgInvites)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization not found (https://api.losant.com/#/definitions/error)
   */
  internals.pendingInvites = client.makeRequestFunction('org', 'pendingInvites');

  /**
   * Removes a member from the org
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.removeMember.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} userId - Id of user to remove
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from org summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in org summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated organization information (https://api.losant.com/#/definitions/org)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization not found (https://api.losant.com/#/definitions/error)
   */
  internals.removeMember = client.makeRequestFunction('org', 'removeMember');

  /**
   * Revokes an existing invite
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.revokeInvite.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {string} inviteId - Id of invite to revoke
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Invitation information (https://api.losant.com/#/definitions/orgInvites)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization not found (https://api.losant.com/#/definitions/error)
   */
  internals.revokeInvite = client.makeRequestFunction('org', 'revokeInvite');

  /**
   * Moves resources to a new owner
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Organization, all.User, org.*, or org.transferResources.
   *
   * Parameters:
   *  {string} orgId - ID associated with the organization
   *  {hash} transfer - Object containing properties of the transfer (https://api.losant.com/#/definitions/resourceTransfer)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If resource transfer was successful (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if organization was not found (https://api.losant.com/#/definitions/error)
   */
  internals.transferResources = client.makeRequestFunction('org', 'transferResources');

  return internals;
};
