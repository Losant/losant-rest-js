import api from 'losant-rest';

const client = api.createClient({ accessToken: 'my_token' });
try {
  const response = await client.devices.get({ applicationId: 'myAppId' });
} catch (err) {
  console.error(err);
}
/* Example result
 * {
 *   count: 1,
 *   items: [ {
 *     deviceClass: 'standalone',
 *     connectionInfo: { connected: 0, time: '2016-06-01T17:16:02.324Z' },
 *     name: 'Ruby Client Testing',
 *     creationDate: '2016-01-31T17:58:57.541Z',
 *     lastUpdated: '2016-05-31T14:47:32.288Z',
 *     id: 'myDevId',
 *     attributes: [
 *       { name: 'string', dataType: 'string' },
 *       { name: 'number', dataType: 'number' },
 *       { name: 'boolean', dataType: 'boolean' }
 *     ],
 *     description: '',
 *     _etag: '"174-u7/3je4oFyaKGePPbcHLqw"',
 *     deviceId: 'myDevId',
 *     tags: [],
 *     applicationId: 'myAppId',
 *     _type: 'device',
 *     _links: {
 *       application: { href: '/applications/myAppId' },
 *       devices: { href: '/applications/myAppId/devices' },
 *       self: { href: '/applications/myAppId/devices/myDevId' }
 *      }
 *   } ],
 *   applicationId: 'myAppId',
 *   perPage: 100,
 *   page: 0,
 *   sortField: 'name',
 *   sortDirection: 'asc',
 *   totalCount: 1,
 *   _type: 'devices',
 *   _links: {
 *     application: { href: '/applications/myAppId' },
 *     self: { href: '/applications/myAppId/devices' }
 *   }
 * }
 */
