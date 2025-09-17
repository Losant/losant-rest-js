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
   * Bulk creates devices using this recipe from a CSV
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, deviceRecipe.*, or deviceRecipe.bulkCreate.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceRecipeId - ID associated with the device recipe
   *  {hash} bulkInfo - Object containing bulk creation info (https://api.losant.com/#/definitions/deviceRecipeBulkCreatePost)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - If devices were successfully created (https://api.losant.com/#/definitions/deviceRecipeBulkCreate)
   *  202 - If devices were enqueued to be created (https://api.losant.com/#/definitions/jobEnqueuedResult)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device recipe was not found (https://api.losant.com/#/definitions/error)
   */
  internals.bulkCreate = client.makeRequestFunction('deviceRecipe', 'bulkCreate');

  /**
   * Deletes a device recipe
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, deviceRecipe.*, or deviceRecipe.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceRecipeId - ID associated with the device recipe
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If device recipe was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device recipe was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('deviceRecipe', 'delete');

  /**
   * Retrieves information on a device recipe
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.read, deviceRecipe.*, or deviceRecipe.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceRecipeId - ID associated with the device recipe
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Device recipe information (https://api.losant.com/#/definitions/deviceRecipe)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device recipe was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('deviceRecipe', 'get');

  /**
   * Updates information about a device recipe
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Organization, all.User, deviceRecipe.*, or deviceRecipe.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} deviceRecipeId - ID associated with the device recipe
   *  {hash} deviceRecipe - Object containing new properties of the device recipe (https://api.losant.com/#/definitions/deviceRecipePatch)
   *  {string} tagsAsObject - Return tags as an object map instead of an array
   *  {string} attributesAsObject - Return attributes as an object map instead of an array
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated device recipe information (https://api.losant.com/#/definitions/deviceRecipe)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if device recipe was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('deviceRecipe', 'patch');

  return internals;
};
