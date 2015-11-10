var structure = require('../lib');

// Access token retrieved using api.auth.authenticateUser or by creating an
// access token in your account
var api = structure.createClient({
  accessToken: 'abcdefghijklmnopqrstuvwxyz'
});

// using promises
api.projects.get()
  .then(function (projects) {
    return api.devices.get({ projectId: projects.items[0].projectId });
  })
  .then(function (devices) {
    console.trace(devices);
  })
  .catch(function (err) {
    console.log(err.stack);
  });
