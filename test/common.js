process.env.NODE_ENV = 'test';

import 'should';
import nock from 'nock';

beforeEach(function(done) {
  nock.cleanAll();
  nock.disableNetConnect();
  done();
});
