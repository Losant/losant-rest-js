var api = require('losant-api-js');
var client = api.createClient();

// using callbacks
client.auth.authenticateUser({ credentials:
  { email: 'example@losant.com', password: 'your_password' } },
  function (err, data) {
    if (err) { return console.log(err.stack); }
    console.trace(data);
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
    deviceId: '123456789123456789000000',
    key: 'abcdefghijklmnopqrstuvwxyz',
    secret: 'abcdefghijklmnopqrstuvwxyz'
  }
})
.then(function (data) {
  console.trace(data);
})
.catch(function (err) {
  console.log(err.stack);
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
