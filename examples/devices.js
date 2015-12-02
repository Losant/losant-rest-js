var structure = require('../lib');

// Access token retrieved using api.auth.authenticateUser or by creating an
// access token in your account
var api = structure.createClient({
  accessToken: 'abcdefghijklmnopqrstuvwxyz'
});

// using promises
api.applications.get()
  .then(function (applications) {
    return api.devices.get({ applicationId: applications.items[0].applicationId });
  })
  .then(function (devices) {
    console.trace(devices);
  })
  .catch(function (err) {
    console.log(err.stack);
  });
