var api = require('losant-rest');
var client = api.createClient();

// using callbacks
client.auth.authenticateUser({ credentials:
  { email: 'example@losant.com', password: 'your_password' } },
  function (err, response) {
    if (err) { return console.error(err); }
    console.log(response);
  }
);
/* Example user result
 * {
 *   token: 'an auth token string',
 *   userId: 'theUserId'
 * }
 */

// using promises
client.auth.authenticateDevice({ credentials: {
    deviceId: 'myDeviceId',
    key: 'my_app_access_key',
    secret: 'my_app_access_secret'
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (err) {
  console.error(err);
});
/* Example device result
 * {
 *   applicationId: 'myAppId',
 *   token: 'an auth token string',
 *   restricted: false,
 *   deviceId: 'myDeviceId',
 *   deviceClass: 'standalone'
 * }
 */
