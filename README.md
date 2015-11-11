# Structure API - v1.0.0
User API for accessing Structure data

## Installation
To install the module via NPM:
```bash
$ npm install --save structure-api-js
```

## Usage
To create a new API client:
```javascript
var api = require('structure-api-js');

var client = api.createClient({
  accessToken: '...'
});
```
## API Reference
- [Access Token](docs/accessToken.md)
- [Access Tokens](docs/accessTokens.md)
- [Auth](docs/auth.md)
- [Device](docs/device.md)
- [Devices](docs/devices.md)
- [Flow](docs/flow.md)
- [Flows](docs/flows.md)
- [Gateway](docs/gateway.md)
- [Gateways](docs/gateways.md)
- [Me](docs/me.md)
- [Org](docs/org.md)
- [Orgs](docs/orgs.md)
- [Org Projects](docs/orgProjects.md)
- [Project](docs/project.md)
- [Projects](docs/projects.md)
- [Project Key](docs/projectKey.md)
- [Project Keys](docs/projectKeys.md)
- [Users](docs/users.md)
- [Webhook](docs/webhook.md)
- [Webhooks](docs/webhooks.md)
