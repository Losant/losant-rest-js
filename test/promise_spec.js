import './common.js';
import api from '../lib/index.js';
import nock from 'nock';

describe('promise tests', function() {

  it('should correctly make an auth call', async function() {
    const client = api.createClient();

    nock('https://api.losant.com', {
      reqheaders: {
        Accept: 'application/json',
      }
    })
    .post('/auth/user', {
      email: 'myemail@myemail.com',
      password: 'mypassword'
    })
    .query({ _actions: false, _embedded: true, _links: true})
    .reply(200, '{"userId":"theUserId","token":"an auth token string"}',
      { 'Content-Type': 'application/json' });

    const response = await client.auth.authenticateUser({
      credentials: {
        email: 'myemail@myemail.com',
        password: 'mypassword'
      }
    });
    response.should.deepEqual({
      userId: 'theUserId',
      token: 'an auth token string',
    });
  });

  it('should correctly make a call with a token', async function() {
    const client = api.createClient({ accessToken: 'my token' });

    nock('https://api.losant.com', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer my token'
      }
    })
    .get('/applications')
    .query({ _actions: false, _embedded: true, _links: true})
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    const response = await client.applications.get();
    response.should.deepEqual({
      count: 0,
      items: [],
    });
  });

  it('should correctly make calls with nested query params', async function() {
    const client = api.createClient({ accessToken: 'my token' });

    nock('https://api.losant.com', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer my token'
      }
    })
    .get('/applications/appId/devices')
    .query({ _actions: false, _embedded: true, _links: true, tagFilter: [
      { key: 'key2' },
      { key: 'key1', value: 'value1' },
      { value: 'value2' },
    ]})
    .reply(200, '{"count":0,"items":[]}', { 'Content-Type': 'application/json' });

    const response = await client.devices.get({
      applicationId: 'appId',
      tagFilter: [
        { key: 'key2' },
        { key: 'key1', value: 'value1' },
        { value: 'value2' },
      ]
    });
    response.should.deepEqual({
      count: 0,
      items: [],
    });
  });

  it('should correctly make a call with an error', async function() {
    const client = api.createClient({ accessToken: 'my token' });

    nock('https://api.losant.com', {
      reqheaders: {
        Accept: 'application/json',
        Authorization: 'Bearer my token'
      }
    })
    .get('/applications/badId')
    .query({ _actions: false, _embedded: true, _links: true })
    .reply(404, '{"type":"NotFound","message":"Application was not found"}',
      { 'Content-Type': 'application/json' });

    const response = await client.application.get({ applicationId: 'badId' }).should.be.rejectedWith({
      message: 'Application was not found',
      type: 'NotFound',
      statusCode: 404
    });
  });

});
