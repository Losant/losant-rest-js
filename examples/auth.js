var losant = require('../lib');
var api = losant.createClient();

// using callbacks
api.auth.authenticateUser(
  { credentials: { email: 'test@example.com', password: 'qwerqwer' } },
  function (err, data) {
    if (err) { return console.log(err.stack); }
    console.trace(data);
  }
);

// using promises
api.auth
  .authenticateDevice({
    credentials: {
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
