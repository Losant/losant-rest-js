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
   * Deletes a private file or directory, if a directory all the contents that directory will also be removed.
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, privateFile.*, or privateFile.delete.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} privateFileId - ID associated with the private file
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - If private file was successfully deleted (https://api.losant.com/#/definitions/success)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if private file was not found (https://api.losant.com/#/definitions/error)
   */
  internals.delete = client.makeRequestFunction('privateFile', 'delete');

  /**
   * Retrieves information on a private file
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Application.read, all.Organization, all.Organization.read, all.User, all.User.cli, all.User.read, privateFile.*, or privateFile.get.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} privateFileId - ID associated with the private file
   *  {string} urlTTL - Time in seconds that the private file url will be valid for. Only applies to private files of type 'file'. If 0, no url will be returned.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Private file information (https://api.losant.com/#/definitions/file)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if private file was not found (https://api.losant.com/#/definitions/error)
   */
  internals.get = client.makeRequestFunction('privateFile', 'get');

  /**
   * Move a private file or the entire contents of a directory
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, privateFile.*, or privateFile.move.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} privateFileId - ID associated with the private file
   *  {undefined} name - The new name of the private file or directory
   *  {undefined} parentDirectory - The new parent directory for the private file or directory to move into.
   *  {string} urlTTL - Time in seconds that the private file url will be valid for. Only applies to private files of type 'file'. If 0, no url will be returned.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Returns a new private file or directory that was created by the move, if a directory a job will kick off to move all the directories children. (https://api.losant.com/#/definitions/file)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if private file was not found (https://api.losant.com/#/definitions/error)
   */
  internals.move = client.makeRequestFunction('privateFile', 'move');

  /**
   * Reupload a private file
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, privateFile.*, or privateFile.patch.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} privateFileId - ID associated with the private file
   *  {hash} updates - Updated information about the private file (https://api.losant.com/#/definitions/filePatch)
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  201 - Successfully updated private file and the information needed to upload the file content (https://api.losant.com/#/definitions/fileUploadPostResponse)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if private file was not found (https://api.losant.com/#/definitions/error)
   */
  internals.patch = client.makeRequestFunction('privateFile', 'patch');

  /**
   * Uploads the private file
   *
   * Authentication:
   * The client must be configured with a valid api
   * access token to call this action. The token
   * must include at least one of the following scopes:
   * all.Application, all.Application.cli, all.Organization, all.User, all.User.cli, privateFile.*, or privateFile.upload.
   *
   * Parameters:
   *  {string} applicationId - ID associated with the application
   *  {string} privateFileId - ID associated with the private file
   *  {file} privateFile - The content of the private file to upload
   *  {string} urlTTL - Time in seconds that the private file url will be valid for. Only applies to private files of type 'file'. If 0, no url will be returned.
   *  {string} losantdomain - Domain scope of request (rarely needed)
   *  {boolean} _actions - Return resource actions in response
   *  {boolean} _links - Return resource link in response
   *  {boolean} _embedded - Return embedded resources in response
   *
   * Responses:
   *  200 - Updated private file content (https://api.losant.com/#/definitions/file)
   *
   * Errors:
   *  400 - Error if malformed request (https://api.losant.com/#/definitions/error)
   *  404 - Error if file was not found (https://api.losant.com/#/definitions/error)
   */
  internals.upload = client.makeRequestFunction('privateFile', 'upload');

  return internals;
};
