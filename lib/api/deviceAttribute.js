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
   * Removes an attribute from a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, deviceAttribute.*, or deviceAttribute.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} name - Name of the attribute
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If device attribute was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device attribute was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('deviceAttribute', 'delete');

  /**
   * Retrieves information on a device attribute
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Device, all.Device.read, all.Organization, all.Organization.read, all.User, all.User.read, deviceAttribute.*, or deviceAttribute.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} name - Name of the attribute
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device attribute information (https://api.losant.com/#/definitions/deviceAttribute)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device attribute was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('deviceAttribute', 'get');

  /**
   * Updates an attribute on a device
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, deviceAttribute.*, or deviceAttribute.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceId - ID associated with the device
   *  {string} name - Name of the attribute
   *  {hash} deviceAttribute - Object containing new properties of the device attribute (https://api.losant.com/#/definitions/deviceAttributePatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated device attribute information (https://api.losant.com/#/definitions/deviceAttribute)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device attribute was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('deviceAttribute', 'patch');

  return internals;
};
