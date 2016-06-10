process.env.NODE_ENV = 'test';

require('should');
var nock = require('nock');

beforeEach(function(done) {
  nock.cleanAll();
  nock.disableNetConnect();
  done();
});
