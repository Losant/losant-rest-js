# Schemas
Structure API

## accessTokenPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ]
    }
  },
  "additionalProperties": false
}
```
## accessTokenPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
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
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## accessToken
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "scope": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "status": {
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ]
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "accessTokenId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "userId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "expirationDate": {
      "type": "string",
      "format": "date-time"
    },
    "scope": {
      "$ref": "#/definitions/scope"
    },
    "status": {
      "$ref": "#/definitions/status"
    },
    "token": {
      "type": "string"
    }
  }
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
        "definitions": {
          "scope": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "status": {
            "type": "string",
            "enum": [
              "active",
              "inactive"
            ]
          }
        },
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "accessTokenId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "userId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "expirationDate": {
            "type": "string",
            "format": "date-time"
          },
          "scope": {
            "$ref": "#/definitions/scope"
          },
          "status": {
            "$ref": "#/definitions/status"
          },
          "token": {
            "type": "string"
          }
        }
      }
    },
    "count": {
      "type": "integer"
    }
  }
}
```
## applicationKeyPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ]
    }
  },
  "additionalProperties": false
}
```
## applicationKeyPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "deviceIds": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[A-Fa-f\\d]{24}$"
      }
    },
    "deviceTags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      }
    }
  },
  "additionalProperties": false
}
```
## applicationKey
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "status": {
      "type": "string",
      "enum": [
        "active",
        "inactive"
      ]
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationKeyId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "key": {
      "type": "string"
    },
    "status": {
      "$ref": "#/definitions/status"
    },
    "secret": {
      "type": "string"
    },
    "deviceIds": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[A-Fa-f\\d]{24}$"
      }
    },
    "deviceTags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        }
      }
    }
  }
}
```
## applicationKeys
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
        "definitions": {
          "status": {
            "type": "string",
            "enum": [
              "active",
              "inactive"
            ]
          }
        },
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationKeyId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "key": {
            "type": "string"
          },
          "status": {
            "$ref": "#/definitions/status"
          },
          "secret": {
            "type": "string"
          },
          "deviceIds": {
            "type": "array",
            "items": {
              "type": "string",
              "pattern": "^[A-Fa-f\\d]{24}$"
            }
          },
          "deviceTags": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "value": {
                  "type": "string"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
## applicationPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    }
  },
  "additionalProperties": false
}
```
## applicationPost
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
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## application
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "ownerId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "ownerType": {
      "type": "string",
      "enum": [
        "user",
        "organization"
      ]
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "summary": {
      "type": "object",
      "properties": {
        "deviceCount": {
          "type": "number"
        },
        "flowCount": {
          "type": "number"
        },
        "webhookCount": {
          "type": "number"
        },
        "eventCount": {
          "type": "number"
        },
        "keyCount": {
          "type": "number"
        }
      }
    }
  }
}
```
## applications
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
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "ownerId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "ownerType": {
            "type": "string",
            "enum": [
              "user",
              "organization"
            ]
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "description": {
            "type": "string",
            "maxLength": 32767
          },
          "summary": {
            "type": "object",
            "properties": {
              "deviceCount": {
                "type": "number"
              },
              "flowCount": {
                "type": "number"
              },
              "webhookCount": {
                "type": "number"
              },
              "eventCount": {
                "type": "number"
              },
              "keyCount": {
                "type": "number"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  }
}
```
## authedDevice
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "deviceId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "devicecClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "token": {
      "type": "string"
    }
  },
  "required": [
    "applicationId",
    "deviceId",
    "deviceClass",
    "token"
  ]
}
```
## authedUser
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "token": {
      "type": "string"
    }
  },
  "required": [
    "userId",
    "token"
  ]
}
```
## dashboardPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "blocks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "blockType": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "maxLength": 255
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "startX": {
            "type": "integer"
          },
          "startY": {
            "type": "integer"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "config": {
            "type": "object"
          }
        },
        "required": [
          "id",
          "blockType",
          "startX",
          "startY",
          "width",
          "height"
        ]
      }
    }
  },
  "additionalProperties": false
}
```
## dashboardPost
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
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "blocks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "blockType": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "maxLength": 255
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "startX": {
            "type": "integer"
          },
          "startY": {
            "type": "integer"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "config": {
            "type": "object"
          }
        },
        "required": [
          "id",
          "blockType",
          "startX",
          "startY",
          "width",
          "height"
        ]
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## dashboard
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "ownerType": {
      "type": "string",
      "enum": [
        "user",
        "organization"
      ]
    },
    "blocks": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "blockType": {
            "type": "string"
          },
          "title": {
            "type": "string",
            "maxLength": 255
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "startX": {
            "type": "integer"
          },
          "startY": {
            "type": "integer"
          },
          "width": {
            "type": "integer"
          },
          "height": {
            "type": "integer"
          },
          "config": {
            "type": "object"
          }
        },
        "required": [
          "id",
          "blockType",
          "startX",
          "startY",
          "width",
          "height"
        ]
      }
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "dashboardId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "ownerId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "ownerType": {
      "$ref": "#/definitions/ownerType"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "blocks": {
      "$ref": "#/definitions/blocks"
    }
  }
}
```
## dashboards
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
        "definitions": {
          "ownerType": {
            "type": "string",
            "enum": [
              "user",
              "organization"
            ]
          },
          "blocks": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "blockType": {
                  "type": "string"
                },
                "title": {
                  "type": "string",
                  "maxLength": 255
                },
                "applicationId": {
                  "type": "string",
                  "pattern": "^[A-Fa-f\\d]{24}$"
                },
                "startX": {
                  "type": "integer"
                },
                "startY": {
                  "type": "integer"
                },
                "width": {
                  "type": "integer"
                },
                "height": {
                  "type": "integer"
                },
                "config": {
                  "type": "object"
                }
              },
              "required": [
                "id",
                "blockType",
                "startX",
                "startY",
                "width",
                "height"
              ]
            }
          }
        },
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "dashboardId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "ownerId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "ownerType": {
            "$ref": "#/definitions/ownerType"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "blocks": {
            "$ref": "#/definitions/blocks"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  }
}
```
## deviceCommand
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "time": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string"
    },
    "payload": {
      "type": "object"
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false
}
```
## deviceCommands
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "time": {
        "type": "string",
        "format": "date-time"
      },
      "name": {
        "type": "string"
      },
      "payload": {
        "type": "object"
      }
    },
    "required": [
      "name"
    ],
    "additionalProperties": false
  }
}
```
## deviceCredentials
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "deviceId": {
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
    "deviceId",
    "key",
    "secret"
  ],
  "additionalProperties": false
}
```
## devicePatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "dataType": {
            "type": "string",
            "enum": [
              "string",
              "number",
              "gps",
              "boolean"
            ]
          }
        },
        "required": [
          "name",
          "dataType"
        ],
        "additionalProperties": false
      }
    },
    "deviceClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "masterId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  },
  "additionalProperties": false
}
```
## devicePost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "dataType": {
            "type": "string",
            "enum": [
              "string",
              "number",
              "gps",
              "boolean"
            ]
          }
        },
        "required": [
          "name",
          "dataType"
        ],
        "additionalProperties": false
      }
    },
    "deviceClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "masterId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## deviceState
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "time": {
      "type": "string",
      "format": "date-time"
    },
    "relayId": {
      "type": "string"
    },
    "data": {
      "type": "object",
      "patternProperties": {
        "^[0-9a-zA-Z_-]{1,255}$": {
          "type": [
            "number",
            "string",
            "boolean"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "data"
  ],
  "additionalProperties": false
}
```
## deviceStates
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "time": {
        "type": "string",
        "format": "date-time"
      },
      "relayId": {
        "type": "string"
      },
      "data": {
        "type": "object",
        "patternProperties": {
          "^[0-9a-zA-Z_-]{1,255}$": {
            "type": [
              "number",
              "string",
              "boolean"
            ]
          }
        },
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  }
}
```
## device
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "dataType": {
            "type": "string",
            "enum": [
              "string",
              "number",
              "gps",
              "boolean"
            ]
          }
        },
        "required": [
          "name",
          "dataType"
        ],
        "additionalProperties": false
      }
    },
    "deviceClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "connectionInfo": {
      "type": "object",
      "properties": {
        "time": {
          "type": "string",
          "format": "date-time"
        },
        "connected": {
          "type": "number"
        }
      }
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "deviceId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "tags": {
      "$ref": "#/definitions/tags"
    },
    "attributes": {
      "$ref": "#/definitions/attributes"
    },
    "deviceClass": {
      "$ref": "#/definitions/deviceClass"
    },
    "masterId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "connectionInfo": {
      "$ref": "#/definitions/connectionInfo"
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
        "definitions": {
          "tags": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string",
                  "pattern": "^[0-9a-zA-Z_-]{1,255}$"
                },
                "value": {
                  "type": "string",
                  "minLength": 1,
                  "maxLength": 255
                }
              },
              "required": [
                "key",
                "value"
              ],
              "additionalProperties": false
            }
          },
          "attributes": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "pattern": "^[0-9a-zA-Z_-]{1,255}$"
                },
                "dataType": {
                  "type": "string",
                  "enum": [
                    "string",
                    "number",
                    "gps",
                    "boolean"
                  ]
                }
              },
              "required": [
                "name",
                "dataType"
              ],
              "additionalProperties": false
            }
          },
          "deviceClass": {
            "type": "string",
            "enum": [
              "standalone",
              "master",
              "owned",
              "floating",
              "virtual"
            ]
          },
          "connectionInfo": {
            "type": "object",
            "properties": {
              "time": {
                "type": "string",
                "format": "date-time"
              },
              "connected": {
                "type": "number"
              }
            }
          }
        },
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "deviceId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "description": {
            "type": "string",
            "maxLength": 32767
          },
          "tags": {
            "$ref": "#/definitions/tags"
          },
          "attributes": {
            "$ref": "#/definitions/attributes"
          },
          "deviceClass": {
            "$ref": "#/definitions/deviceClass"
          },
          "masterId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "connectionInfo": {
            "$ref": "#/definitions/connectionInfo"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
## deviceRecipePost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "deviceName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "deviceDescription": {
      "type": "string",
      "maxLength": 32767
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "dataType": {
            "type": "string",
            "enum": [
              "string",
              "number",
              "gps",
              "boolean"
            ]
          }
        },
        "required": [
          "name",
          "dataType"
        ],
        "additionalProperties": false
      }
    },
    "deviceClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "masterId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## deviceRecipePatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "deviceName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "deviceDescription": {
      "type": "string",
      "maxLength": 32767
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "dataType": {
            "type": "string",
            "enum": [
              "string",
              "number",
              "gps",
              "boolean"
            ]
          }
        },
        "required": [
          "name",
          "dataType"
        ],
        "additionalProperties": false
      }
    },
    "deviceClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "masterId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  },
  "additionalProperties": false
}
```
## deviceRecipe
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "deviceRecipeId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "deviceName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "deviceDescription": {
      "type": "string",
      "maxLength": 32767
    },
    "tags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        },
        "required": [
          "key",
          "value"
        ],
        "additionalProperties": false
      }
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "dataType": {
            "type": "string",
            "enum": [
              "string",
              "number",
              "gps",
              "boolean"
            ]
          }
        },
        "required": [
          "name",
          "dataType"
        ],
        "additionalProperties": false
      }
    },
    "deviceClass": {
      "type": "string",
      "enum": [
        "standalone",
        "master",
        "owned",
        "floating",
        "virtual"
      ]
    },
    "masterId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
## deviceRecipes
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "items": {
      "type": "array",
      "items": {
        "$ref": "device-recipes.json"
      }
    },
    "count": {
      "type": "integer"
    },
    "totalCount": {
      "type": "integer"
    },
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
## deviceRecipeBulkCreate
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "created": {
      "type": "number"
    },
    "failed": {
      "type": "number"
    },
    "csvResult": {
      "type": "string"
    }
  }
}
```
## deviceRecipeBulkCreatePost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "nameColumn": {
      "type": "string"
    },
    "descriptionColumn": {
      "type": "string"
    },
    "csv": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "csv"
  ]
}
```
## disableTwoFactorAuth
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "twoFactorCode": {
      "type": "string",
      "maxLength": 2048
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    }
  },
  "required": [
    "password",
    "twoFactorCode"
  ],
  "additionalProperties": false
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
      "format": "email",
      "maxLength": 1024
    },
    "token": {
      "type": "string"
    }
  },
  "required": [
    "email",
    "token"
  ],
  "additionalProperties": false
}
```
## enableTwoFactorAuth
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "twoFactorAuthKey": {
      "type": "string",
      "minLength": 52,
      "maxLength": 52
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    }
  },
  "required": [
    "password",
    "twoFactorAuthKey"
  ],
  "additionalProperties": false
}
```
## error
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "type": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  }
}
```
## eventPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "state": {
      "type": "string",
      "enum": [
        "new",
        "acknowledged",
        "resolved"
      ]
    }
  },
  "additionalProperties": false
}
```
## eventPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "level": {
      "type": "string",
      "enum": [
        "info",
        "warning",
        "error",
        "critical"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "new",
        "acknowledged",
        "resolved"
      ]
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "message": {
      "type": "string"
    }
  },
  "required": [
    "level",
    "state",
    "subject"
  ],
  "additionalProperties": false
}
```
## event
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "sourceType": {
      "type": "string",
      "enum": [
        "flow",
        "user",
        "device"
      ]
    },
    "level": {
      "type": "string",
      "enum": [
        "info",
        "warning",
        "error",
        "critical"
      ]
    },
    "state": {
      "type": "string",
      "enum": [
        "new",
        "acknowledged",
        "resolved"
      ]
    },
    "subject": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "message": {
      "type": "string"
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "eventId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "sourceType": {
      "$ref": "#/definitions/sourceType"
    },
    "sourceId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "level": {
      "$ref": "#/definitions/level"
    },
    "state": {
      "$ref": "#/definitions/state"
    },
    "subject": {
      "$ref": "#/definitions/subject"
    },
    "message": {
      "$ref": "#/definitions/message"
    }
  }
}
```
## events
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
        "definitions": {
          "sourceType": {
            "type": "string",
            "enum": [
              "flow",
              "user",
              "device"
            ]
          },
          "level": {
            "type": "string",
            "enum": [
              "info",
              "warning",
              "error",
              "critical"
            ]
          },
          "state": {
            "type": "string",
            "enum": [
              "new",
              "acknowledged",
              "resolved"
            ]
          },
          "subject": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "message": {
            "type": "string"
          }
        },
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "eventId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "sourceType": {
            "$ref": "#/definitions/sourceType"
          },
          "sourceId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "level": {
            "$ref": "#/definitions/level"
          },
          "state": {
            "$ref": "#/definitions/state"
          },
          "subject": {
            "$ref": "#/definitions/subject"
          },
          "message": {
            "$ref": "#/definitions/message"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "state": {
      "type": "string"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
## flowPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "enabled": {
      "type": "boolean"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "outputIds": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      }
    },
    "nodes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "outputIds": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "id",
          "type"
        ]
      }
    },
    "globals": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "json": {
            "type": "string",
            "minLength": 1
          }
        },
        "additionalProperties": false,
        "required": [
          "key",
          "json"
        ]
      }
    }
  },
  "additionalProperties": false
}
```
## flowPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "enabled": {
      "type": "boolean"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "outputIds": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      }
    },
    "nodes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "outputIds": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "id",
          "type"
        ]
      }
    },
    "globals": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "json": {
            "type": "string",
            "minLength": 1
          }
        },
        "additionalProperties": false,
        "required": [
          "key",
          "json"
        ]
      }
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## flow
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "enabled": {
      "type": "boolean"
    },
    "triggers": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "outputIds": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "type"
        ]
      }
    },
    "nodes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "type": {
            "type": "string"
          },
          "config": {
            "type": "object"
          },
          "meta": {
            "type": "object"
          },
          "outputIds": {
            "type": "array",
            "items": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          }
        },
        "additionalProperties": false,
        "required": [
          "id",
          "type"
        ]
      }
    },
    "globals": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "json": {
            "type": "string",
            "minLength": 1
          }
        },
        "additionalProperties": false,
        "required": [
          "key",
          "json"
        ]
      }
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "flowId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "enabled": {
      "$ref": "#/definitions/enabled"
    },
    "triggers": {
      "$ref": "#/definitions/triggers"
    },
    "nodes": {
      "$ref": "#/definitions/nodes"
    },
    "globals": {
      "$ref": "#/definitions/globals"
    }
  }
}
```
## dataAggregateState
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "resultPath": {
      "title": "Result Path",
      "description": "JSON path to store the results",
      "minLength": 1,
      "type": "string"
    },
    "deviceTags": {
      "title": "Device Tags",
      "type": "array",
      "items": {
        "title": "Device Tag Pair",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "minLength": 1
      }
    },
    "deviceIds": {
      "title": "Device IDs",
      "type": "array",
      "items": {
        "title": "Device ID",
        "type": "string",
        "minLength": 1
      }
    },
    "start": {
      "title": "Start Time",
      "description": "Milliseconds since the epoch start time",
      "type": "number"
    },
    "end": {
      "title": "End Time",
      "description": "Milliseconds since the epoch end time",
      "type": "number"
    },
    "duration": {
      "title": "Duration",
      "description": "Duration of aggregation in milliseconds",
      "type": "number"
    },
    "aggregation": {
      "title": "Aggregation",
      "description": "Valid aggregation function name",
      "type": "string",
      "minLength": 1
    },
    "attributes": {
      "title": "Attributes",
      "description": "Device IDs",
      "type": "array",
      "items": {
        "title": "Device ID",
        "type": "string",
        "minLength": 1
      }
    }
  },
  "allOf": [
    {
      "required": [
        "resultPath",
        "aggregation"
      ]
    },
    {
      "oneOf": [
        {
          "required": [
            "start",
            "end"
          ]
        },
        {
          "required": [
            "duration"
          ]
        }
      ]
    }
  ]
}
```
## dataGetValue
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "keyName": {
      "title": "Storage Key Name",
      "type": "string",
      "minLength": 1
    },
    "valuePath": {
      "title": "Value Path",
      "description": "JSON path for where to place value",
      "type": "string",
      "minLength": 1
    },
    "defaultValue": {
      "title": "Default Value",
      "description": "Value to place in 'Value Path' if key does not exist",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "keyName",
    "valuePath"
  ]
}
```
## dataHttp
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "_methodNoBody": {
      "title": "HTTP Method",
      "description": "GET, DELETE, POST, PATCH or PUT",
      "enum": [
        "GET",
        "DELETE"
      ]
    },
    "_methodWithBody": {
      "title": "HTTP Method",
      "description": "GET, DELETE, POST, PATCH or PUT",
      "enum": [
        "POST",
        "PATCH",
        "PUT"
      ]
    },
    "responsePath": {
      "title": "Response Path",
      "description": "JSON path for where to store response",
      "type": "string",
      "minLength": 1
    },
    "uriTemplate": {
      "title": "URI Template",
      "minLength": 1,
      "type": "string",
      "messages": {
        "required": "URI Template is required"
      }
    },
    "bodyTemplate": {
      "title": "Request Body",
      "type": "string"
    },
    "headerInfo": {
      "type": "array",
      "items": {
        "additionalProperties": false,
        "type": "object",
        "properties": {
          "key": {
            "title": "Name",
            "type": "string",
            "minLength": 1
          },
          "valueTemplate": {
            "title": "Value Template",
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "key",
          "valueTemplate"
        ]
      }
    }
  },
  "oneOf": [
    {
      "properties": {
        "method": {
          "$ref": "#/definitions/_methodNoBody"
        },
        "responsePath": {
          "$ref": "#/definitions/responsePath"
        },
        "uriTemplate": {
          "$ref": "#/definitions/uriTemplate"
        },
        "headerInfo": {
          "$ref": "#/definitions/headerInfo"
        }
      },
      "required": [
        "method",
        "uriTemplate"
      ],
      "additionalProperties": false
    },
    {
      "properties": {
        "method": {
          "$ref": "#/definitions/_methodWithBody"
        },
        "responsePath": {
          "$ref": "#/definitions/responsePath"
        },
        "uriTemplate": {
          "$ref": "#/definitions/uriTemplate"
        },
        "bodyTemplate": {
          "$ref": "#/definitions/bodyTemplate"
        },
        "headerInfo": {
          "$ref": "#/definitions/headerInfo"
        }
      },
      "required": [
        "method",
        "uriTemplate",
        "bodyTemplate"
      ],
      "additionalProperties": false
    }
  ]
}
```
## dataLastState
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "resultPath": {
      "type": "string",
      "title": "Result Path",
      "minLength": 1
    },
    "deviceTags": {
      "title": "Device Tags",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Device Tag Pair",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "minLength": 1
      }
    },
    "deviceIds": {
      "title": "Device IDs",
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "string",
        "title": "Device ID"
      }
    }
  },
  "allOf": [
    {
      "required": [
        "resultPath"
      ]
    },
    {
      "anyOf": [
        {
          "required": [
            "deviceTags"
          ]
        },
        {
          "required": [
            "deviceIds"
          ]
        }
      ]
    }
  ]
}
```
## dataStoreValue
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "keyName": {
      "title": "Storage Key",
      "type": "string",
      "minLength": 1
    },
    "valuePath": {
      "title": "Value",
      "description": "JSON path for getting value to store. If 'Value' is empty, the current value at the provided 'Storage Key' is deleted.",
      "type": "string"
    }
  },
  "required": [
    "keyName",
    "valuePath"
  ]
}
```
## logicConditional
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "expression": {
      "title": "Expression",
      "description": "What to evaluate; JSON paths are allowed, wrapped in {{this.is.a.path}}",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "expression"
  ]
}
```
## logicDelay
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "delay": {
      "title": "Delay (s)",
      "type": "integer",
      "minimum": 1,
      "maximum": 59
    }
  },
  "required": [
    "delay"
  ]
}
```
## logicFunction
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "script": {
      "title": "Script",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "script"
  ]
}
```
## logicGeofence
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "_gpsCheck": {
      "title": "Point A GPS Formatted String",
      "type": "string",
      "minLength": 1
    },
    "_latCheck": {
      "title": "Point A Latitude / Template",
      "type": "string",
      "minLength": 1
    },
    "_lonCheck": {
      "title": "Point A Longitude / Template",
      "type": "string",
      "minLength": 1
    },
    "_gpsCenter": {
      "title": "Point B GPS Formatted String",
      "type": "string",
      "minLength": 1
    },
    "_latCenter": {
      "title": "Point B Latitude / Template",
      "type": "string",
      "minLength": 1
    },
    "_lonCenter": {
      "title": "Point B Longitude / Template",
      "type": "string",
      "minLength": 1
    },
    "radius": {
      "title": "Radius (meters) / Template",
      "type": "string"
    },
    "resultPath": {
      "title": "Result Path",
      "description": "JSON Path for where to put the distance between the two coordinates",
      "type": "string"
    }
  },
  "anyOf": [
    {
      "properties": {
        "gpsCheck": {
          "$ref": "#/definitions/_gpsCheck"
        },
        "gpsCenter": {
          "$ref": "#/definitions/_gpsCenter"
        },
        "radius": {
          "$ref": "#/definitions/radius"
        },
        "resultPath": {
          "$ref": "#/definitions/resultPath"
        }
      },
      "additionalProperties": false,
      "required": [
        "radius",
        "gpsCheck",
        "gpsCenter"
      ]
    },
    {
      "properties": {
        "gpsCheck": {
          "$ref": "#/definitions/_gpsCheck"
        },
        "latCenter": {
          "$ref": "#/definitions/_latCenter"
        },
        "lonCenter": {
          "$ref": "#/definitions/_lonCenter"
        },
        "radius": {
          "$ref": "#/definitions/radius"
        },
        "resultPath": {
          "$ref": "#/definitions/resultPath"
        }
      },
      "additionalProperties": false,
      "required": [
        "radius",
        "gpsCheck",
        "latCenter",
        "lonCenter"
      ]
    },
    {
      "properties": {
        "latCheck": {
          "$ref": "#/definitions/_latCheck"
        },
        "lonCheck": {
          "$ref": "#/definitions/_lonCheck"
        },
        "gpsCenter": {
          "$ref": "#/definitions/_gpsCenter"
        },
        "radius": {
          "$ref": "#/definitions/radius"
        },
        "resultPath": {
          "$ref": "#/definitions/resultPath"
        }
      },
      "additionalProperties": false,
      "required": [
        "radius",
        "latCheck",
        "lonCheck",
        "gpsCenter"
      ]
    },
    {
      "properties": {
        "latCheck": {
          "$ref": "#/definitions/_latCheck"
        },
        "lonCheck": {
          "$ref": "#/definitions/_lonCheck"
        },
        "latCenter": {
          "$ref": "#/definitions/_latCenter"
        },
        "lonCenter": {
          "$ref": "#/definitions/_lonCenter"
        },
        "radius": {
          "$ref": "#/definitions/radius"
        },
        "resultPath": {
          "$ref": "#/definitions/resultPath"
        }
      },
      "additionalProperties": false,
      "required": [
        "radius",
        "latCheck",
        "lonCheck",
        "latCenter",
        "lonCenter"
      ]
    }
  ]
}
```
## logicJsonDecode
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "source": {
      "title": "Source",
      "description": "JSON path for source that contains the input",
      "type": "string",
      "minLength": 1
    },
    "destination": {
      "title": "Destination",
      "description": "JSON path for destination to place output",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "source",
    "destination"
  ]
}
```
## logicJsonEncode
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "source": {
      "title": "Source",
      "description": "JSON path for source that contains the input",
      "type": "string",
      "minLength": 1
    },
    "destination": {
      "title": "Destination",
      "description": "JSON path for destination to place output",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "source",
    "destination"
  ]
}
```
## logicMath
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "statements": {
      "title": "Statements",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Statement",
        "type": "object",
        "additionalProperties": false,
        "properties": {
          "expression": {
            "title": "Expression",
            "description": "JSON Paths are allowed, wrapped in {{this.is.a.path}}",
            "type": "string",
            "minLength": 1
          },
          "resultPath": {
            "title": "Result Path",
            "description": "JSON path to place result of evaluated expression",
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "expression",
          "resultPath"
        ]
      }
    }
  },
  "required": [
    "statements"
  ]
}
```
## logicMutate
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "definitions": {
    "_typeSet": {
      "title": "Type",
      "enum": [
        "set"
      ]
    },
    "_typeRemove": {
      "title": "Type",
      "enum": [
        "remove"
      ]
    },
    "_typeMove": {
      "title": "Type",
      "enum": [
        "move"
      ]
    },
    "_typeCopy": {
      "title": "Type",
      "enum": [
        "copy"
      ]
    },
    "destination": {
      "title": "Destination",
      "description": "JSON path to place result",
      "type": "string",
      "minLength": 1
    },
    "source": {
      "title": "Source",
      "description": "JSON path of source value",
      "type": "string",
      "minLength": 1
    },
    "valueTemplate": {
      "title": "Value Template",
      "type": "string",
      "minLength": 1
    }
  },
  "properties": {
    "rules": {
      "title": "Rules",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Rule",
        "type": "object",
        "oneOf": [
          {
            "properties": {
              "type": {
                "$ref": "#/definitions/_typeSet"
              },
              "destination": {
                "$ref": "#/definitions/destination"
              },
              "valueTemplate": {
                "$ref": "#/definitions/valueTemplate"
              }
            },
            "required": [
              "type",
              "destination",
              "valueTemplate"
            ],
            "additionalProperties": false
          },
          {
            "properties": {
              "type": {
                "$ref": "#/definitions/_typeRemove"
              },
              "source": {
                "$ref": "#/definitions/source"
              }
            },
            "required": [
              "type",
              "source"
            ],
            "additionalProperties": false
          },
          {
            "properties": {
              "type": {
                "$ref": "#/definitions/_typeMove"
              },
              "destination": {
                "$ref": "#/definitions/destination"
              },
              "source": {
                "$ref": "#/definitions/source"
              }
            },
            "required": [
              "type",
              "destination",
              "source"
            ],
            "additionalProperties": false
          },
          {
            "properties": {
              "type": {
                "$ref": "#/definitions/_typeCopy"
              },
              "destination": {
                "$ref": "#/definitions/destination"
              },
              "source": {
                "$ref": "#/definitions/source"
              }
            },
            "required": [
              "type",
              "destination",
              "source"
            ],
            "additionalProperties": false
          }
        ]
      }
    }
  },
  "required": [
    "rules"
  ]
}
```
## logicOnchange
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "valuePath": {
      "title": "Value Path",
      "description": "JSON Path of where to find value to check in payload",
      "type": "string",
      "minLength": 1
    },
    "_changeTypeOthers": {
      "title": "Change Type",
      "enum": [
        "percent",
        "percentInc",
        "percentDec",
        "value",
        "valueInc",
        "valueDec"
      ]
    },
    "_changeTypeAny": {
      "title": "Change Type",
      "enum": [
        "any"
      ]
    },
    "changeThreshold": {
      "title": "Change Threshold",
      "description": "Amount of change required",
      "type": "number"
    },
    "prevValuePath": {
      "title": "Previous Value Path",
      "description": "JSON path of where to put the previous triggering value and time",
      "type": "string",
      "minLength": 1
    }
  },
  "oneOf": [
    {
      "properties": {
        "valuePath": {
          "$ref": "#/definitions/valuePath"
        },
        "changeType": {
          "$ref": "#/definitions/_changeTypeOthers"
        },
        "changeThreshold": {
          "$ref": "#/definitions/changeThreshold"
        },
        "prevValuePath": {
          "$ref": "#/definitions/prevValuePath"
        }
      },
      "required": [
        "valuePath",
        "changeType",
        "changeThreshold"
      ],
      "additionalProperties": false
    },
    {
      "properties": {
        "valuePath": {
          "$ref": "#/definitions/valuePath"
        },
        "changeType": {
          "$ref": "#/definitions/_changeTypeAny"
        },
        "prevValuePath": {
          "$ref": "#/definitions/prevValuePath"
        }
      },
      "required": [
        "valuePath",
        "changeType"
      ],
      "additionalProperties": false
    }
  ]
}
```
## logicThrottle
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "timeSincePath": {
      "title": "Time Since Path",
      "description": "JSON path to store the time since last not throttled payload",
      "type": "string",
      "minLength": 1
    },
    "ratePerMinute": {
      "title": "Rate (per minute)",
      "description": "Number of payloads to allow per minute",
      "type": "integer",
      "minimum": 1
    }
  },
  "required": [
    "ratePerMinute"
  ]
}
```
## logicValidatePayload
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "schema": {
      "title": "Schema",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "schema"
  ]
}
```
## outputDebug
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "message": {
      "title": "message",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "message"
  ]
}
```
## outputDeviceCommand
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "nameTemplate": {
      "title": "Command Name Template",
      "type": "string",
      "minLength": 1
    },
    "payloadTemplate": {
      "title": "Command Payload Template",
      "type": "string"
    },
    "sendToDeviceTags": {
      "title": "Send to Device Tags",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Device Tag Pair",
        "type": "object",
        "properties": {
          "key": {
            "type": "string"
          },
          "value": {
            "type": "string"
          }
        },
        "minLength": 1
      }
    },
    "sendToDeviceIds": {
      "title": "Send to Device IDs",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Device ID",
        "type": "string",
        "minLength": 1
      }
    }
  },
  "allOf": [
    {
      "required": [
        "nameTemplate"
      ]
    },
    {
      "anyOf": [
        {
          "required": [
            "sendToDeviceIds"
          ]
        },
        {
          "required": [
            "sendToDeviceTags"
          ]
        }
      ]
    }
  ]
}
```
## outputEvent
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "level": {
      "title": "Level",
      "enum": [
        "info",
        "warning",
        "error",
        "critical"
      ]
    },
    "subjectTemplate": {
      "title": "Subject Template",
      "type": "string",
      "minLength": 1
    },
    "messageTemplate": {
      "title": "Message Template",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "level",
    "subjectTemplate",
    "messageTemplate"
  ]
}
```
## outputHttp
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "_methodNoBody": {
      "title": "HTTP Method",
      "description": "GET, DELETE, POST, PATCH or PUT",
      "enum": [
        "GET",
        "DELETE"
      ]
    },
    "_methodWithBody": {
      "title": "HTTP Method",
      "description": "GET, DELETE, POST, PATCH or PUT",
      "enum": [
        "POST",
        "PATCH",
        "PUT"
      ]
    },
    "responsePath": {
      "title": "Response Path",
      "description": "JSON path for where to store response",
      "type": "string",
      "minLength": 1
    },
    "uriTemplate": {
      "title": "URI Template",
      "minLength": 1,
      "type": "string",
      "messages": {
        "required": "URI Template is required"
      }
    },
    "bodyTemplate": {
      "title": "Request Body",
      "type": "string"
    },
    "headerInfo": {
      "type": "array",
      "items": {
        "additionalProperties": false,
        "type": "object",
        "properties": {
          "key": {
            "title": "Name",
            "type": "string",
            "minLength": 1
          },
          "valueTemplate": {
            "title": "Value Template",
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "key",
          "valueTemplate"
        ]
      }
    }
  },
  "oneOf": [
    {
      "properties": {
        "method": {
          "$ref": "#/definitions/_methodNoBody"
        },
        "responsePath": {
          "$ref": "#/definitions/responsePath"
        },
        "uriTemplate": {
          "$ref": "#/definitions/uriTemplate"
        },
        "headerInfo": {
          "$ref": "#/definitions/headerInfo"
        }
      },
      "required": [
        "method",
        "uriTemplate"
      ],
      "additionalProperties": false
    },
    {
      "properties": {
        "method": {
          "$ref": "#/definitions/_methodWithBody"
        },
        "responsePath": {
          "$ref": "#/definitions/responsePath"
        },
        "uriTemplate": {
          "$ref": "#/definitions/uriTemplate"
        },
        "bodyTemplate": {
          "$ref": "#/definitions/bodyTemplate"
        },
        "headerInfo": {
          "$ref": "#/definitions/headerInfo"
        }
      },
      "required": [
        "method",
        "uriTemplate",
        "bodyTemplate"
      ],
      "additionalProperties": false
    }
  ]
}
```
## outputMqtt
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "topicTemplate": {
      "title": "Topic Template",
      "type": "string",
      "minLength": 1
    },
    "messageTemplate": {
      "title": "Message Template",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "topicTemplate",
    "messageTemplate"
  ]
}
```
## outputSendgrid
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "bodyTemplate": {
      "title": "Body Template",
      "type": "string",
      "minLength": 1
    },
    "subjectTemplate": {
      "title": "Subject Template",
      "type": "string",
      "minLength": 1
    },
    "fromTemplate": {
      "title": "From Template",
      "type": "string",
      "minLength": 1
    },
    "replyToTemplate": {
      "title": "Reply-To Template",
      "type": "string",
      "minLength": 1
    },
    "sendgridApiKey": {
      "title": "SendGrid API Key",
      "type": "string",
      "minLength": 1
    },
    "resultPath": {
      "title": "Result Path",
      "description": "JSON path to store SendGrid response",
      "type": "string",
      "minLength": 1
    },
    "toAddresses": {
      "title": "To Addresses",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Email Address",
        "type": "string",
        "minLength": 1,
        "format": "email"
      }
    },
    "ccAddresses": {
      "title": "CC Addresses",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Email Address",
        "type": "string",
        "minLength": 1,
        "format": "email"
      }
    },
    "bccAddresses": {
      "title": "BCC Addresses",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Email Address",
        "type": "string",
        "minLength": 1,
        "format": "email"
      }
    }
  },
  "allOf": [
    {
      "required": [
        "bodyTemplate",
        "subjectTemplate",
        "fromTemplate",
        "sendgridApiKey"
      ]
    },
    {
      "anyOf": [
        {
          "required": [
            "toAddresses"
          ]
        },
        {
          "required": [
            "ccAddresses"
          ]
        },
        {
          "required": [
            "bccAddresses"
          ]
        }
      ]
    }
  ]
}
```
## outputSlack
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "urlPathTemplate": {
      "title": "Service Path",
      "type": "string",
      "minLength": 1
    },
    "textTemplate": {
      "title": "Message",
      "type": "string",
      "minLength": 1
    },
    "channelTemplate": {
      "title": "Channel Name",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "urlPathTemplate"
  ]
}
```
## outputTwilio
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "accountSid": {
      "title": "Account Sid",
      "type": "string",
      "minLength": 1,
      "messages": {
        "required": "Account Sid is required"
      }
    },
    "authToken": {
      "title": "Auth Token",
      "type": "string",
      "minLength": 1,
      "messages": {
        "required": "Auth Token is required"
      }
    },
    "toNumbers": {
      "title": "Send to ...",
      "type": "array",
      "items": {
        "title": "SMS Number",
        "type": "string"
      },
      "minItems": 1
    },
    "fromNumber": {
      "title": "From Number Template",
      "type": "string",
      "minLength": 1
    },
    "messagingServiceSid": {
      "title": "Messaging Service Sid Template",
      "type": "string",
      "minLength": 1
    },
    "bodyTemplate": {
      "title": "Body Template",
      "type": "string",
      "minLength": 1
    },
    "mediaUrl": {
      "title": "Media URL",
      "type": "string",
      "minLength": 1,
      "format": "uri"
    },
    "maxPrice": {
      "title": "Max. Price Template",
      "type": "string"
    }
  },
  "oneOf": [
    {
      "properties": {
        "accountSid": {
          "$ref": "#/definitions/accountSid"
        },
        "authToken": {
          "$ref": "#/definitions/authToken"
        },
        "toNumbers": {
          "$ref": "#/definitions/toNumbers"
        },
        "fromNumber": {
          "$ref": "#/definitions/fromNumber"
        },
        "bodyTemplate": {
          "$ref": "#/definitions/bodyTemplate"
        },
        "mediaUrl": {
          "$ref": "#/definitions/mediaUrl"
        },
        "maxPrice": {
          "$ref": "#/definitions/maxPrice"
        }
      },
      "allOf": [
        {
          "required": [
            "accountSid",
            "authToken",
            "toNumbers",
            "fromNumber"
          ]
        },
        {
          "anyOf": [
            {
              "required": [
                "bodyTemplate"
              ]
            },
            {
              "required": [
                "mediaUrl"
              ]
            }
          ]
        }
      ],
      "additionalProperties": false
    },
    {
      "properties": {
        "accountSid": {
          "$ref": "#/definitions/accountSid"
        },
        "authToken": {
          "$ref": "#/definitions/authToken"
        },
        "toNumbers": {
          "$ref": "#/definitions/toNumbers"
        },
        "messagingServiceSid": {
          "$ref": "#/definitions/messagingServiceSid"
        },
        "bodyTemplate": {
          "$ref": "#/definitions/bodyTemplate"
        },
        "mediaUrl": {
          "$ref": "#/definitions/mediaUrl"
        },
        "maxPrice": {
          "$ref": "#/definitions/maxPrice"
        }
      },
      "allOf": [
        {
          "required": [
            "accountSid",
            "authToken",
            "toNumbers",
            "messagingServiceSid"
          ]
        },
        {
          "anyOf": [
            {
              "required": [
                "bodyTemplate"
              ]
            },
            {
              "required": [
                "mediaUrl"
              ]
            }
          ]
        }
      ],
      "additionalProperties": false
    }
  ]
}
```
## outputVirtualDeviceState
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "type": "object",
  "properties": {
    "attrInfos": {
      "title": "Attributes",
      "type": "array",
      "minItems": 1,
      "items": {
        "title": "Attribute",
        "type": "object",
        "properties": {
          "key": {
            "title": "Key",
            "type": "string",
            "minLength": 1
          },
          "valueTemplate": {
            "title": "Value Template",
            "type": "string",
            "minLength": 1
          }
        },
        "required": [
          "key",
          "valueTemplate"
        ]
      }
    },
    "deviceId": {
      "title": "Device ID",
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "deviceId"
  ]
}
```
## triggerDeviceId
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "key": {
      "title": "Device ID",
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$",
      "messages": {
        "required": "Device ID is required",
        "pattern": "Must be a valid Device ID"
      }
    },
    "type": {
      "type": "string",
      "enum": [
        "deviceId"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "key",
    "type"
  ],
  "additionalProperties": false
}
```
## triggerDeviceTag
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "key": {
      "title": "Device Tag Pair",
      "type": "string",
      "messages": {
        "required": "Device Tag pair is required"
      }
    },
    "type": {
      "type": "string",
      "enum": [
        "deviceTag"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "key",
    "type"
  ],
  "additionalProperties": false
}
```
## triggerEvent
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "key": {
      "title": "Event Pair",
      "type": "string",
      "messages": {
        "required": "Event pair is required"
      }
    },
    "type": {
      "type": "string",
      "enum": [
        "event"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "key",
    "type"
  ],
  "additionalProperties": false
}
```
## triggerMqtt
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "key": {
      "title": "Mqtt Topic",
      "type": "string",
      "pattern": "^[0-9a-zA-Z_-]{1,230}$",
      "messages": {
        "required": "A mqtt topic is required",
        "pattern": "Must be a valid mqtt topic"
      }
    },
    "type": {
      "type": "string",
      "enum": [
        "mqttTopic"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "key",
    "type"
  ],
  "additionalProperties": false
}
```
## triggerTimer
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "timer"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "properties": {
        "cron": {
          "type": "string"
        }
      },
      "required": [
        "cron"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "type",
    "config"
  ],
  "additionalProperties": false
}
```
## triggerVirtualButton
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "type": {
      "type": "string",
      "enum": [
        "virtualButton"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "type"
  ],
  "additionalProperties": false
}
```
## triggerWebhook
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "key": {
      "title": "Webhook ID",
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$",
      "messages": {
        "required": "Webhook ID is required",
        "pattern": "Must be a valid Webhook ID"
      }
    },
    "type": {
      "type": "string",
      "enum": [
        "webhook"
      ]
    },
    "outputIds": {
      "type": "array",
      "items": {
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    },
    "meta": {
      "type": "object"
    },
    "config": {
      "type": "object",
      "additionalProperties": false
    }
  },
  "required": [
    "key",
    "type"
  ],
  "additionalProperties": false
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
        "definitions": {
          "enabled": {
            "type": "boolean"
          },
          "triggers": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                },
                "config": {
                  "type": "object"
                },
                "meta": {
                  "type": "object"
                },
                "outputIds": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "additionalProperties": false,
              "required": [
                "type"
              ]
            }
          },
          "nodes": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "type": {
                  "type": "string"
                },
                "config": {
                  "type": "object"
                },
                "meta": {
                  "type": "object"
                },
                "outputIds": {
                  "type": "array",
                  "items": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  }
                }
              },
              "additionalProperties": false,
              "required": [
                "id",
                "type"
              ]
            }
          },
          "globals": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "key": {
                  "type": "string",
                  "pattern": "^[0-9a-zA-Z_-]{1,255}$"
                },
                "json": {
                  "type": "string",
                  "minLength": 1
                }
              },
              "additionalProperties": false,
              "required": [
                "key",
                "json"
              ]
            }
          }
        },
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "flowId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "description": {
            "type": "string",
            "maxLength": 32767
          },
          "enabled": {
            "$ref": "#/definitions/enabled"
          },
          "triggers": {
            "$ref": "#/definitions/triggers"
          },
          "nodes": {
            "$ref": "#/definitions/nodes"
          },
          "globals": {
            "$ref": "#/definitions/globals"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
## lastValueData
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "patternProperties": {
    "^[A-Fa-f\\d]{24}$": {
      "type": "object",
      "properties": {
        "time": {
          "type": "string",
          "format": "date-time"
        },
        "data": {
          "type": "object",
          "patternProperties": {
            "^[0-9a-zA-Z_-]{1,255}$": {
              "type": [
                "number",
                "string",
                "boolean"
              ]
            }
          },
          "additionalProperties": false
        }
      },
      "additionalProperties": false,
      "required": [
        "data",
        "time"
      ]
    }
  },
  "additionalProperties": false
}
```
## lastValueQuery
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "attribute": {
      "type": "string",
      "pattern": "^[0-9a-zA-Z_-]{1,255}$"
    },
    "deviceTags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        }
      }
    },
    "deviceIds": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[A-Fa-f\\d]{24}$"
      }
    }
  },
  "additionalProperties": false
}
```
## mePatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "firstName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "lastName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "companyName": {
      "type": "string",
      "maxLength": 1024
    },
    "phoneNumber": {
      "type": "string",
      "maxLength": 1024
    },
    "location": {
      "type": "string",
      "maxLength": 1024
    },
    "url": {
      "type": "string",
      "maxLength": 1024
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    }
  },
  "additionalProperties": false
}
```
## me
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "definitions": {
    "emailVerified": {
      "type": "boolean"
    },
    "firstName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "lastName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "companyName": {
      "type": "string",
      "maxLength": 1024
    },
    "phoneNumber": {
      "type": "string",
      "maxLength": 1024
    },
    "location": {
      "type": "string",
      "maxLength": 1024
    },
    "url": {
      "type": "string",
      "maxLength": 1024
    },
    "twoFactorAuthEnabled": {
      "type": "boolean"
    },
    "fullName": {
      "type": "string"
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    },
    "twoFactorCode": {
      "type": "string",
      "maxLength": 2048
    }
  },
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "passwordLastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "emailVerified": {
      "$ref": "#/definitions/emailVerified"
    },
    "firstName": {
      "$ref": "#/definitions/firstName"
    },
    "lastName": {
      "$ref": "#/definitions/lastName"
    },
    "companyName": {
      "$ref": "#/definitions/companyName"
    },
    "phoneNumber": {
      "$ref": "#/definitions/phoneNumber"
    },
    "location": {
      "$ref": "#/definitions/location"
    },
    "url": {
      "$ref": "#/definitions/url"
    },
    "twoFactorAuthEnabled": {
      "$ref": "#/definitions/twoFactorAuthEnabled"
    },
    "fullName": {
      "$ref": "#/definitions/fullName"
    },
    "userId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "summary": {
      "type": "object",
      "properties": {
        "appCount": {
          "type": "number"
        },
        "dashCount": {
          "type": "number"
        },
        "orgCount": {
          "type": "number"
        }
      }
    }
  }
}
```
## orgInvites
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string",
        "pattern": "^[A-Fa-f\\d]{24}$"
      },
      "email": {
        "type": "string",
        "format": "email",
        "maxLength": 1024
      },
      "role": {
        "type": "string",
        "enum": [
          "admin",
          "edit",
          "view"
        ]
      },
      "inviteDate": {
        "type": "string",
        "format": "date-time"
      },
      "ttl": {
        "type": "number"
      },
      "hasExpired": {
        "type": "boolean"
      }
    }
  }
}
```
## orgInviteInfo
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "orgName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "role": {
      "type": "string",
      "enum": [
        "admin",
        "edit",
        "view"
      ]
    },
    "inviteDate": {
      "type": "string",
      "format": "date-time"
    },
    "ttl": {
      "type": "number"
    }
  }
}
```
## orgInviteAction
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "token": {
      "type": "string"
    },
    "accept": {
      "type": "boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "email",
    "token",
    "accept"
  ]
}
```
## orgInviteResult
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "accepted": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "orgId": {
      "type": "string"
    }
  }
}
```
## orgInvitePost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "role": {
      "type": "string",
      "enum": [
        "admin",
        "edit",
        "view"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "email",
    "role"
  ]
}
```
## orgMemberPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "role": {
      "type": "string",
      "enum": [
        "admin",
        "edit",
        "view"
      ]
    }
  },
  "additionalProperties": false,
  "required": [
    "userId",
    "role"
  ]
}
```
## orgPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    }
  },
  "additionalProperties": false
}
```
## orgPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    }
  },
  "additionalProperties": false,
  "required": [
    "name"
  ]
}
```
## org
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "orgId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    },
    "description": {
      "type": "string",
      "maxLength": 32767
    },
    "members": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "userId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "firstName": {
            "type": "string"
          },
          "lastName": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email",
            "maxLength": 1024
          },
          "role": {
            "type": "string",
            "enum": [
              "admin",
              "edit",
              "view"
            ]
          }
        }
      }
    },
    "summary": {
      "type": "object",
      "properties": {
        "appCount": {
          "type": "number"
        },
        "dashCount": {
          "type": "number"
        }
      }
    }
  }
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
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "orgId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          },
          "description": {
            "type": "string",
            "maxLength": 32767
          },
          "members": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "userId": {
                  "type": "string",
                  "pattern": "^[A-Fa-f\\d]{24}$"
                },
                "firstName": {
                  "type": "string"
                },
                "lastName": {
                  "type": "string"
                },
                "email": {
                  "type": "string",
                  "format": "email",
                  "maxLength": 1024
                },
                "role": {
                  "type": "string",
                  "enum": [
                    "admin",
                    "edit",
                    "view"
                  ]
                }
              }
            }
          },
          "summary": {
            "type": "object",
            "properties": {
              "appCount": {
                "type": "number"
              },
              "dashCount": {
                "type": "number"
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    }
  }
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
      "format": "email",
      "maxLength": 1024
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    }
  },
  "required": [
    "token",
    "email",
    "password"
  ],
  "additionalProperties": false
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
      "format": "email",
      "maxLength": 1024
    }
  },
  "required": [
    "email"
  ],
  "additionalProperties": false
}
```
## recentItem
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "itemType": {
      "type": "string",
      "enum": [
        "application",
        "device",
        "flow",
        "dashboard"
      ]
    },
    "parentId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "itemId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  },
  "required": [
    "itemType",
    "itemId"
  ]
}
```
## recentItemList
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "itemType": {
      "type": "string",
      "enum": [
        "application",
        "device",
        "flow",
        "dashboard"
      ]
    },
    "parentId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "items": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        }
      }
    }
  }
}
```
## success
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "success": {
      "type": "boolean",
      "enum": [
        true
      ]
    }
  }
}
```
## timeSeriesData
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "start": {
      "type": "string",
      "format": "date-time"
    },
    "end": {
      "type": "string",
      "format": "date-time"
    },
    "resolution": {
      "type": "number"
    },
    "aggregation": {
      "type": "string"
    },
    "devices": {
      "type": "object",
      "patternProperties": {
        "^[A-Fa-f\\d]{24}$": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "points": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "time": {
                    "type": "string",
                    "format": "date-time"
                  },
                  "data": {
                    "type": "object",
                    "patternProperties": {
                      "^[0-9a-zA-Z_-]{1,255}$": {
                        "type": [
                          "number",
                          "string",
                          "boolean"
                        ]
                      }
                    },
                    "additionalProperties": false
                  }
                },
                "additionalProperties": false,
                "required": [
                  "data",
                  "time"
                ]
              }
            }
          },
          "additionalProperties": false,
          "required": [
            "name",
            "points"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false,
  "required": [
    "start",
    "end",
    "resolution",
    "aggregation",
    "devices"
  ]
}
```
## timeSeriesQuery
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "start": {
      "type": "number"
    },
    "end": {
      "type": "number"
    },
    "duration": {
      "type": "number"
    },
    "resolution": {
      "type": "number"
    },
    "aggregation": {
      "type": "string",
      "enum": [
        "FIRST",
        "LAST",
        "COUNT",
        "MAX",
        "MIN",
        "MEDIAN",
        "MEAN",
        "SUM"
      ]
    },
    "attributes": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[0-9a-zA-Z_-]{1,255}$"
      }
    },
    "deviceTags": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "key": {
            "type": "string",
            "pattern": "^[0-9a-zA-Z_-]{1,255}$"
          },
          "value": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
          }
        }
      }
    },
    "deviceIds": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^[A-Fa-f\\d]{24}$"
      }
    }
  },
  "additionalProperties": false
}
```
## userCredentials
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    },
    "twoFactorCode": {
      "type": "string",
      "maxLength": 2048
    }
  },
  "required": [
    "email",
    "password"
  ],
  "additionalProperties": false
}
```
## userPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "format": "email",
      "maxLength": 1024
    },
    "firstName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "lastName": {
      "type": "string",
      "minLength": 1,
      "maxLength": 1024
    },
    "companyName": {
      "type": "string",
      "maxLength": 1024
    },
    "phoneNumber": {
      "type": "string",
      "maxLength": 1024
    },
    "location": {
      "type": "string",
      "maxLength": 1024
    },
    "url": {
      "type": "string",
      "maxLength": 1024
    },
    "password": {
      "type": "string",
      "minLength": 8,
      "maxLength": 2048
    },
    "acceptTerms": {
      "enum": [
        "on"
      ]
    }
  },
  "required": [
    "email",
    "firstName",
    "lastName",
    "password",
    "acceptTerms"
  ]
}
```
## virtualButtonPress
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "key": {
      "type": "string"
    },
    "payload": {}
  },
  "required": [
    "key"
  ],
  "additionalProperties": false
}
```
## webhookPatch
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    }
  },
  "additionalProperties": false
}
```
## webhookPost
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false
}
```
## webhook
```javascript
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "webhookId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    },
    "creationDate": {
      "type": "string",
      "format": "date-time"
    },
    "lastUpdated": {
      "type": "string",
      "format": "date-time"
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 255
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
          "id": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "webhookId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "applicationId": {
            "type": "string",
            "pattern": "^[A-Fa-f\\d]{24}$"
          },
          "creationDate": {
            "type": "string",
            "format": "date-time"
          },
          "lastUpdated": {
            "type": "string",
            "format": "date-time"
          },
          "name": {
            "type": "string",
            "minLength": 1,
            "maxLength": 255
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
    "perPage": {
      "type": "integer"
    },
    "page": {
      "type": "integer"
    },
    "filter": {
      "type": "string"
    },
    "filterField": {
      "type": "string"
    },
    "sortField": {
      "type": "string"
    },
    "sortDirection": {
      "type": "string",
      "enum": [
        "asc",
        "desc"
      ]
    },
    "applicationId": {
      "type": "string",
      "pattern": "^[A-Fa-f\\d]{24}$"
    }
  }
}
```
