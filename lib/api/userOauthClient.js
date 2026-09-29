/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2026 SUSE
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
   * Deletes a private OAuth client
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, only.User, userOauthClient.*, or userOauthClient.delete.
   *
   * Parameters:
   *  {string} clientId - ID associated with the OAuth client
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If OAuth client was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if OAuth client was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('userOauthClient', 'delete');

  /**
   * Retrieves information on a private OAuth client
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, all.User.bounded, all.User.read, only.User, only.User.bounded, only.User.read, userOauthClient.*, or userOauthClient.get.
   *
   * Parameters:
   *  {string} clientId - ID associated with the OAuth client
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - OAuth client information (https://api.losant.com/#/definitions/userOauthClient)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if OAuth client was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('userOauthClient', 'get');

  /**
   * Updates information about a private OAuth client
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.User, only.User, userOauthClient.*, or userOauthClient.patch.
   *
   * Parameters:
   *  {string} clientId - ID associated with the OAuth client
   *  {hash} oauthClient - Object containing new properties of the OAuth client (https://api.losant.com/#/definitions/userOauthClientPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated OAuth client information (https://api.losant.com/#/definitions/userOauthClient)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if OAuth client was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('userOauthClient', 'patch');

  return internals;
};
