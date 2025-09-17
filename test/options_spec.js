import './common.js';
import api from '../lib/index.js';
import nock from 'nock';

describe('Options Tests', function() {

  it('should be able to set and modify token', async function() {
    const client = api.createClient({ accessToken: 'token1' });
    client.getOption('accessToken').should.equal('token1');
    client.setOption('accessToken', 'token2');
    client.getOption('accessToken').should.equal('token2');

    nock('https://api.losant.com', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer token2'
      }
    })
    .get('/dashboards')
    .query({ _actions: false, _embedded: true, _links: true })
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    const response = await client.dashboards.get(); 
    response.should.deepEqual({
      count: 0,
      items: [],
    });
  });

  it('should be able to set and modify url', async function() {
    const client = api.createClient({ url: 'http://not.losant', accessToken: 'token1' });
    client.getOption('url').should.equal('http://not.losant');
    client.setOption('url', 'http://stillnot.losant');
    client.getOption('url').should.equal('http://stillnot.losant');

    nock('http://stillnot.losant', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer token1'
      }
    })
    .get('/orgs')
    .query({ _actions: false, _embedded: true, _links: true })
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    const response = await client.orgs.get();
    response.should.deepEqual({
      count: 0,
      items: [],
    });
  });

});
