require('./common');
var api  = require('../lib');
var nock = require('nock');

describe('promise tests', function() {

  it('should be able to set and modify token', function(done) {
    var client = api.createClient({ accessToken: 'token1' });
    client.getOption('accessToken').should.equal('token1');
    client.setOption('accessToken', 'token2');
    client.getOption('accessToken').should.equal('token2');

    nock('https://api.losant.com', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer token2'
      }
    }).get('/dashboards')
    .query({ _actions: false, _embedded: true, _links: true })
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    client.dashboards.get().then(function(response) {
      response.should.deepEqual({
        count: 0,
        items: [],
      });
      nock.isDone().should.be.true();
      done();
    }).catch(function(err) {
      done(err);
    });
  });

  it('should be able to set and modify url', function(done) {
    var client = api.createClient({ url: 'http://not.losant', accessToken: 'token1' });
    client.getOption('url').should.equal('http://not.losant');
    client.setOption('url', 'http://stillnot.losant');
    client.getOption('url').should.equal('http://stillnot.losant');

    nock('http://stillnot.losant', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer token1'
      }
    }).get('/orgs')
    .query({ _actions: false, _embedded: true, _links: true })
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    client.orgs.get().then(function(response) {
      response.should.deepEqual({
        count: 0,
        items: [],
      });
      nock.isDone().should.be.true();
      done();
    }).catch(function(err) {
      done(err);
    });
  });

});
