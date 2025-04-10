[
    {
      "_id": objectId("a757b4e87d0bed824845abfd"),
      "code": "P000",
      "firstName": "Profesor0",
      "lastName": "Apellido0",
      "identificationNumber": 700000000,
      "email": "profesor0@acme.com",
      "address": "Calle 0 #45-67",
      "identificationType": {
        "code": "CC",
        "name": "cédula"
      },
      "city": {
        "code": "COL",
        "name": "Colombia"
      }
    },
  
    {
      "_id": objectId("9d05d3fd71e3f50564f7f969"),
      "code": "000",
      "firstName": "Estudiante0",
      "lastName": "Apellido0",
      "identificationNumber": 100000000,
      "gender": "M",
      "birthDate": "2004-02-01",
      "email": "estudiante0@acme.com",
      "address": "Carrera 0 #67-89",
      "identificationType": {
        "code": "CC",
        "name": "cédula"
      },
      "city": {
        "code": "COL",
        "name": "Colombia"
      },
      "inscriptions": {
        "registerDate": "2020-01-25",
        "mod": "active",
        "rates": {
          "rate": 4.8,
          "comments": ""
        }
      }
    },
  
    {
      "_id": objectId("6c47c4ecf74ce0954b1eec0d"),
      "classroomID": objectId("06417ae9678b71efb5e0fc02"),
      "teacherID": objectId("a757b4e87d0bed824845abfd"),
      "course": {
        "code": "CUR000",
        "name": "Curso 0",
        "description": "Descripción del curso 0",
        "intensity": 21,
        "weight": 13
      },
      "startTime": "08:00",
      "endTime": "12:00",
      "mod": "active",
      "classroom": {
        "code": "A1",
        "mod": "active",
        "description": "Salón A1"
      },
      "topics": [
        {
          "code": "T0A",
          "title": "Tema A del curso 0",
          "description": "Descripción A del tema 0",
          "mod": "active"
        },
        {
          "code": "T0B",
          "title": "Tema B del curso 0",
          "description": "Descripción B del tema 0",
          "mod": "active"
        }
      ]
    }
  ]
  