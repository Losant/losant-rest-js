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
   * Revokes an instance org invitation
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceOrgInvite.*, or instanceOrgInvite.delete.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} inviteId - ID associated with the organization invite
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If an invite was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if instance, organization or invite was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('instanceOrgInvite', 'delete');

  /**
   * Returns an organization invite
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.Instance.read, all.User, all.User.read, instanceOrgInvite.*, or instanceOrgInvite.get.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} inviteId - ID associated with the organization invite
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - A single organization invite (https://api.losant.com/#/definitions/orgInvite)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if instance, organization, or invite was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('instanceOrgInvite', 'get');

  /**
   * Resend an organization invite with modified role info
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Instance, all.User, instanceOrgInvite.*, or instanceOrgInvite.resendInvite.
   *
   * Parameters:
   *  {string} instanceId - ID associated with the instance
   *  {string} orgId - ID associated with the organization
   *  {string} inviteId - ID associated with the organization invite
   *  {hash} roleInfo - Object containing updated role info (https://api.losant.com/#/definitions/orgRoleInfo)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - The new org invite (https://api.losant.com/#/definitions/orgInvite)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if instance, organization, or invite was not found (https://api.losant.com/#/definitions/error)
   */
  internals.resendInvite = client.makeRequestFunction('instanceOrgInvite', 'resendInvite');

  return internals;
};
