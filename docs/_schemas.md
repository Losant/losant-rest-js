# Schemas
Structure API - v1.0.0

## accessToken
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "accessTokenId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "userId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "name": {
      "type": "string"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "expirationDate": {
      "type": "string",
      "format": "date-time"
    },
    "scope": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ]
}
```
## accessTokens
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {}
          },
          "count": {
            "type": "integer"
          },
          "totalCount": {
            "type": "integer"
          },
          "limit": {
            "type": "integer"
          },
          "page": {
            "type": "integer"
          },
          "prevPage": {
            "type": "integer"
          },
          "nextPage": {
            "type": "integer"
          },
          "lastPage": {
            "type": "integer"
          }
        },
        "required": [
          "items",
          "count"
        ]
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## device
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "deviceId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "projectId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[0-9a-zA-Z]+$"
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z]+$"
          },
          "type": {
            "type": "string",
            "enum": [
              "string",
              "number"
            ]
          },
          "readable": {
            "type": "boolean"
          },
          "writable": {
            "type": "boolean"
          }
        }
      }
    }
  }
}
```
## devices
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "deviceId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "projectId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[0-9a-zA-Z]+$"
            }
          },
          "attributes": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "pattern": "^[0-9a-zA-Z]+$"
                },
                "type": {
                  "type": "string",
                  "enum": [
                    "string",
                    "number"
                  ]
                },
                "readable": {
                  "type": "boolean"
                },
                "writable": {
                  "type": "boolean"
                }
              }
            }
          }
        }
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## emailVerificationVerify
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    },
    "token": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "token"
  ]
}
```
## flow
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "flowId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "projectId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "enabled": {
      "type": "boolean"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string"
          },
          "key": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        }
      }
    },
    "payloadSchema": {
      "type": "string"
    },
    "flow": {
      "type": "string"
    }
  },
  "required": [
    "projectId",
    "name",
    "enabled",
    "flow"
  ]
}
```
## flows
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "flowId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "projectId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "enabled": {
            "type": "boolean"
          },
          "triggers": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "key": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                }
              }
            }
          },
          "payloadSchema": {
            "type": "string"
          },
          "flow": {
            "type": "string"
          }
        },
        "required": [
          "projectId",
          "name",
          "enabled",
          "flow"
        ]
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## gateway
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "gatewayId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "projectId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[0-9a-zA-Z]+$"
      }
    }
  }
}
```
## gateways
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "gatewayId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "projectId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "tags": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[0-9a-zA-Z]+$"
            }
          }
        }
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## gatewayCredentials
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "gatewayId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "key": {
      "type": "string"
    },
    "secret": {
      "type": "string"
    }
  },
  "required": [
    "gatewayId",
    "key",
    "secret"
  ]
}
```
## me
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "fullName": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": [
    "email",
    "firstName",
    "lastName"
  ]
}
```
## newUser
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "firstName": {
      "type": "string"
    },
    "lastName": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "firstName",
    "lastName",
    "password"
  ]
}
```
## org
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "orgId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ]
}
```
## orgs
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "orgId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## passwordResetInput
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": [
    "email"
  ]
}
```
## passwordResetFinish
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    },
    "email": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "token",
    "email",
    "password"
  ]
}
```
## project
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "ownerId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "ownerType": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "description": {
      "type": "string"
    }
  },
  "required": [
    "name"
  ]
}
```
## projects
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "projectId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "ownerId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "ownerType": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          }
        },
        "required": [
          "name"
        ]
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## projectKey
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "projectKeyId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "projectId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "key": {
      "type": "string"
    },
    "secret": {
      "type": "string"
    },
    "status": {
      "type": "string"
    }
  },
  "required": [
    "projectKeyId",
    "projectId",
    "key",
    "secret",
    "status"
  ]
}
```
## projectKeys
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "items": {
            "type": "array",
            "items": {}
          },
          "count": {
            "type": "integer"
          },
          "totalCount": {
            "type": "integer"
          },
          "limit": {
            "type": "integer"
          },
          "page": {
            "type": "integer"
          },
          "prevPage": {
            "type": "integer"
          },
          "nextPage": {
            "type": "integer"
          },
          "lastPage": {
            "type": "integer"
          }
        },
        "required": [
          "items",
          "count"
        ]
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
## userCredentials
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "format": "email"
    },
    "password": {
      "type": "string"
    }
  },
  "required": [
    "username",
    "password"
  ]
}
```
## webhook
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "projectId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string"
    },
    "token": {
      "type": "string"
    }
  }
}
```
## webhooks
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "projectId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string"
          },
          "token": {
            "type": "string"
          }
        }
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "limit": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "prevPage": {
      "type": "integer"
    },
    "nextPage": {
      "type": "integer"
    },
    "lastPage": {
      "type": "integer"
    }
  },
  "required": [
    "items",
    "count"
  ]
}
```
