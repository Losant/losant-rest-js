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
   * Deletes a credential
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, credential.*, or credential.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} credentialId - ID associated with the credential
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If credential was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if credential was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('credential', 'delete');

  /**
   * Retrieves information on a credential
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, credential.*, or credential.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} credentialId - ID associated with the credential
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - credential information (https://api.losant.com/#/definitions/credential)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if credential was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('credential', 'get');

  /**
   * Retrieves information on resources linked to a credential
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, credential.*, or credential.linkedResources.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} credentialId - ID associated with the credential
   *  {string} includeCustomNodes - If the result of the request should also include the details of any custom nodes referenced by returned workflows
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Linked resource information (https://api.losant.com/#/definitions/credentialLinkedResources)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if credential was not found (https://api.losant.com/#/definitions/error)
   */
  internals.linkedResources = client.makeRequestFunction('credential', 'linkedResources');

  /**
   * Updates information about a credential
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, credential.*, or credential.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} credentialId - ID associated with the credential
   *  {hash} credential - Object containing new properties of the credential (https://api.losant.com/#/definitions/credentialPatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated credential information (https://api.losant.com/#/definitions/credential)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if credential was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('credential', 'patch');

  return internals;
};
