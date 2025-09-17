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
   * Adds an item to a recent item list
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.addRecentItem.
   *
   * Parameters:
   *  {hash} data - Object containing recent item info (https://api.losant.com/#/definitions/recentItem)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated recent item list (https://api.losant.com/#/definitions/recentItemList)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.addRecentItem = client.makeRequestFunction('me', 'addRecentItem');

  /**
   * Changes the current user's password and optionally logs out all other sessions
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.changePassword.
   *
   * Parameters:
   *  {hash} data - Object containing the password change info (https://api.losant.com/#/definitions/changePassword)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - A new, valid, auth token (potentially all previous tokens are now invalid) (https://api.losant.com/#/definitions/authedUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.changePassword = client.makeRequestFunction('me', 'changePassword');

  /**
   * Deletes the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.delete.
   *
   * Parameters:
   *  {hash} credentials - User authentication credentials (https://api.losant.com/#/definitions/userCredentials)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If the user was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('me', 'delete');

  /**
   * Returns device counts by day for the time range specified for all applications the current user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.deviceCounts.
   *
   * Parameters:
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
   */
  internals.deviceCounts = client.makeRequestFunction('me', 'deviceCounts');

  /**
   * Disables multi-factor authentication for the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.disableTwoFactorAuth.
   *
   * Parameters:
   *  {hash} data - Object containing multi-factor authentication properties (https://api.losant.com/#/definitions/multiFactorAuthDisable)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated user information (https://api.losant.com/#/definitions/me)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.disableTwoFactorAuth = client.makeRequestFunction('me', 'disableTwoFactorAuth');

  /**
   * Disconnects the user from Github
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.disconnectGithub.
   *
   * Parameters:
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated user information (https://api.losant.com/#/definitions/me)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.disconnectGithub = client.makeRequestFunction('me', 'disconnectGithub');

  /**
   * Enables multi-factor authentication for the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.enableTwoFactorAuth.
   *
   * Parameters:
   *  {hash} data - Object containing multi-factor authentication properties (https://api.losant.com/#/definitions/multiFactorAuthEnable)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated user information (https://api.losant.com/#/definitions/me)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.enableTwoFactorAuth = client.makeRequestFunction('me', 'enableTwoFactorAuth');

  /**
   * Gets a recent item list
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.fetchRecentItems.
   *
   * Parameters:
   *  {string} parentId - Parent id of the recent list
   *  {undefined} itemType - Item type to get the recent list of. Accepted values are: application, device, flow, dashboard, organization
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Recent item list (https://api.losant.com/#/definitions/recentItemList)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.fetchRecentItems = client.makeRequestFunction('me', 'fetchRecentItems');

  /**
   * Returns the multi-factor authentication key for the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.generateTwoFactorAuth.
   *
   * Parameters:
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Multi-factor authentication info (https://api.losant.com/#/definitions/multiFactorAuthInfo)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.generateTwoFactorAuth = client.makeRequestFunction('me', 'generateTwoFactorAuth');

  /**
   * Retrieves information on the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.get.
   *
   * Parameters:
   *  {undefined} includeRecent - Should the user include recent app/dashboard info
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from user summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in user summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Current user information (https://api.losant.com/#/definitions/me)
   *
   * Errors:
   */
  internals.get = client.makeRequestFunction('me', 'get');

  /**
   * Retrieves information for an invitation to an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.invite.
   *
   * Parameters:
   *  {string} inviteId - ID associated with the invitation
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Information about invitation (https://api.losant.com/#/definitions/orgInviteUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if invite not found (https://api.losant.com/#/definitions/error)
   */
  internals.invite = client.makeRequestFunction('me', 'invite');

  /**
   * Retrieves pending organization invitations for a user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.invites.
   *
   * Parameters:
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Information about invitations (https://api.losant.com/#/definitions/orgInvitesUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.invites = client.makeRequestFunction('me', 'invites');

  /**
   * Returns notebook execution usage by day for the time range specified for all applications the current user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.notebookMinuteCounts.
   *
   * Parameters:
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
   */
  internals.notebookMinuteCounts = client.makeRequestFunction('me', 'notebookMinuteCounts');

  /**
   * Updates information about the current user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.patch.
   *
   * Parameters:
   *  {hash} user - Object containing new user properties (https://api.losant.com/#/definitions/mePatch)
   *  {string} summaryExclude - Comma-separated list of summary fields to exclude from user summary
   *  {string} summaryInclude - Comma-separated list of summary fields to include in user summary
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated user information (https://api.losant.com/#/definitions/me)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('me', 'patch');

  /**
   * Returns payload counts for the time range specified for all applications the current user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.payloadCounts.
   *
   * Parameters:
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
   */
  internals.payloadCounts = client.makeRequestFunction('me', 'payloadCounts');

  /**
   * Returns payload counts per resolution in the time range specified for all applications the current user owns
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.read, me.*, or me.payloadCountsBreakdown.
   *
   * Parameters:
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
   */
  internals.payloadCountsBreakdown = client.makeRequestFunction('me', 'payloadCountsBreakdown');

  /**
   * Returns a new auth token based on the current auth token
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, or me.*.
   *
   * Parameters:
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Successful token regeneration (https://api.losant.com/#/definitions/authedUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  401 - Unauthorized error if authentication fails (https://api.losant.com/#/definitions/error)
   */
  internals.refreshToken = client.makeRequestFunction('me', 'refreshToken');

  /**
   * Accepts or rejects an invitation to an organization
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.respondToInvite.
   *
   * Parameters:
   *  {string} inviteId - ID associated with the invitation
   *  {hash} response - Response to invitation (https://api.losant.com/#/definitions/orgInviteActionUser)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Acceptance or rejection of invitation (https://api.losant.com/#/definitions/orgInviteResultUser)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if invitation not found (https://api.losant.com/#/definitions/error)
   *  410 - Error if invitation has expired (https://api.losant.com/#/definitions/error)
   */
  internals.respondToInvite = client.makeRequestFunction('me', 'respondToInvite');

  /**
   * Moves resources to a new owner
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.transferResources.
   *
   * Parameters:
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
   */
  internals.transferResources = client.makeRequestFunction('me', 'transferResources');

  /**
   * Sends an email verification to the user
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, me.*, or me.verifyEmail.
   *
   * Parameters:
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If email verification was successfully sent (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   */
  internals.verifyEmail = client.makeRequestFunction('me', 'verifyEmail');

  return internals;
};
