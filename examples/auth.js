import api from 'losant-rest';
const client = api.createClient();

// using promises
try {
  const response = await client.auth.authenticateDevice({ credentials: {
      deviceId: 'myDeviceId',
      key: 'my_app_access_key',
      secret: 'my_app_access_secret'
    }
  });
  console.log(response);
} catch (err) {
  console.error(err);
}
/* Example device result
 * {
 *   applicationId: 'myAppId',
 *   token: 'an auth token string',
 *   restricted: false,
 *   deviceId: 'myDeviceId',
 *   deviceClass: 'standalone'
 * }
 */
