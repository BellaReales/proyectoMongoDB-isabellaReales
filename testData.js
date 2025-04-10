db.teachers.insertMany([
  {
  "_id": objectId("teacher000abc123abc123abc000"),
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
  "_id": objectId("teacher001abc123abc123abc001"),
  "code": "P001",
  "firstName": "Profesor1",
  "lastName": "Apellido1",
  "identificationNumber": 700000001,
  "email": "profesor1@acme.com",
  "address": "Calle 1 #45-67",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BGA",
    "name": "Bucaramanga"
  }
},
  {
  "_id": objectId("teacher002abc123abc123abc002"),
  "code": "P002",
  "firstName": "Profesor2",
  "lastName": "Apellido2",
  "identificationNumber": 700000002,
  "email": "profesor2@acme.com",
  "address": "Calle 2 #45-67",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "MED",
    "name": "Medellín"
  }
}
]);

db.students.insertMany([
  {
  "_id": objectId("student000abc123abc123abc000"),
  "code": "000",
  "firstName": "Estudiante0",
  "lastName": "Apellido0",
  "identificationNumber": 100000000,
  "gender": "F",
  "birthDate": "2003-01-03",
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
    "registerDate": "2020-01-11",
    "mod": "active",
    "rates": {
      "rate": 3.7,
      "comments": ""
    },
    "courseID": objectId("course000abc123abc123abc000"),
    "classroomID": objectId("classroom000abc123abc123abc000"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student001abc123abc123abc001"),
  "code": "001",
  "firstName": "Estudiante1",
  "lastName": "Apellido1",
  "identificationNumber": 100000001,
  "gender": "F",
  "birthDate": "2002-04-05",
  "email": "estudiante1@acme.com",
  "address": "Carrera 1 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BGA",
    "name": "Bucaramanga"
  },
  "inscriptions": {
    "registerDate": "2020-01-19",
    "mod": "active",
    "rates": {
      "rate": 3.8,
      "comments": ""
    },
    "courseID": objectId("course001abc123abc123abc001"),
    "classroomID": objectId("classroom001abc123abc123abc001"),
    "teacherID": objectId("teacher001abc123abc123abc001")
  }
},
  {
  "_id": objectId("student002abc123abc123abc002"),
  "code": "002",
  "firstName": "Estudiante2",
  "lastName": "Apellido2",
  "identificationNumber": 100000002,
  "gender": "F",
  "birthDate": "2004-05-07",
  "email": "estudiante2@acme.com",
  "address": "Carrera 2 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "MED",
    "name": "Medellín"
  },
  "inscriptions": {
    "registerDate": "2020-01-26",
    "mod": "active",
    "rates": {
      "rate": 4.8,
      "comments": ""
    },
    "courseID": objectId("course002abc123abc123abc002"),
    "classroomID": objectId("classroom002abc123abc123abc002"),
    "teacherID": objectId("teacher002abc123abc123abc002")
  }
},
  {
  "_id": objectId("student003abc123abc123abc003"),
  "code": "003",
  "firstName": "Estudiante3",
  "lastName": "Apellido3",
  "identificationNumber": 100000003,
  "gender": "M",
  "birthDate": "2000-07-02",
  "email": "estudiante3@acme.com",
  "address": "Carrera 3 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BAQ",
    "name": "Barranquilla"
  },
  "inscriptions": {
    "registerDate": "2020-01-28",
    "mod": "active",
    "rates": {
      "rate": 3.6,
      "comments": ""
    },
    "courseID": objectId("course003abc123abc123abc003"),
    "classroomID": objectId("classroom003abc123abc123abc003"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student004abc123abc123abc004"),
  "code": "004",
  "firstName": "Estudiante4",
  "lastName": "Apellido4",
  "identificationNumber": 100000004,
  "gender": "M",
  "birthDate": "2002-04-08",
  "email": "estudiante4@acme.com",
  "address": "Carrera 4 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "VDL",
    "name": "Villa de Leyva"
  },
  "inscriptions": {
    "registerDate": "2020-01-27",
    "mod": "active",
    "rates": {
      "rate": 4.9,
      "comments": ""
    },
    "courseID": objectId("course000abc123abc123abc000"),
    "classroomID": objectId("classroom000abc123abc123abc000"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student005abc123abc123abc005"),
  "code": "005",
  "firstName": "Estudiante5",
  "lastName": "Apellido5",
  "identificationNumber": 100000005,
  "gender": "F",
  "birthDate": "2001-02-08",
  "email": "estudiante5@acme.com",
  "address": "Carrera 5 #67-89",
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
      "rate": 4.5,
      "comments": ""
    },
    "courseID": objectId("course001abc123abc123abc001"),
    "classroomID": objectId("classroom001abc123abc123abc001"),
    "teacherID": objectId("teacher001abc123abc123abc001")
  }
},
  {
  "_id": objectId("student006abc123abc123abc006"),
  "code": "006",
  "firstName": "Estudiante6",
  "lastName": "Apellido6",
  "identificationNumber": 100000006,
  "gender": "M",
  "birthDate": "2002-06-02",
  "email": "estudiante6@acme.com",
  "address": "Carrera 6 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BGA",
    "name": "Bucaramanga"
  },
  "inscriptions": {
    "registerDate": "2020-01-14",
    "mod": "active",
    "rates": {
      "rate": 4.0,
      "comments": ""
    },
    "courseID": objectId("course002abc123abc123abc002"),
    "classroomID": objectId("classroom002abc123abc123abc002"),
    "teacherID": objectId("teacher002abc123abc123abc002")
  }
},
  {
  "_id": objectId("student007abc123abc123abc007"),
  "code": "007",
  "firstName": "Estudiante7",
  "lastName": "Apellido7",
  "identificationNumber": 100000007,
  "gender": "M",
  "birthDate": "2001-05-09",
  "email": "estudiante7@acme.com",
  "address": "Carrera 7 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "MED",
    "name": "Medellín"
  },
  "inscriptions": {
    "registerDate": "2020-01-11",
    "mod": "active",
    "rates": {
      "rate": 3.6,
      "comments": ""
    },
    "courseID": objectId("course003abc123abc123abc003"),
    "classroomID": objectId("classroom003abc123abc123abc003"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student008abc123abc123abc008"),
  "code": "008",
  "firstName": "Estudiante8",
  "lastName": "Apellido8",
  "identificationNumber": 100000008,
  "gender": "M",
  "birthDate": "2002-02-03",
  "email": "estudiante8@acme.com",
  "address": "Carrera 8 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BAQ",
    "name": "Barranquilla"
  },
  "inscriptions": {
    "registerDate": "2020-01-22",
    "mod": "active",
    "rates": {
      "rate": 3.9,
      "comments": ""
    },
    "courseID": objectId("course000abc123abc123abc000"),
    "classroomID": objectId("classroom000abc123abc123abc000"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student009abc123abc123abc009"),
  "code": "009",
  "firstName": "Estudiante9",
  "lastName": "Apellido9",
  "identificationNumber": 100000009,
  "gender": "M",
  "birthDate": "2005-07-09",
  "email": "estudiante9@acme.com",
  "address": "Carrera 9 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "VDL",
    "name": "Villa de Leyva"
  },
  "inscriptions": {
    "registerDate": "2020-01-14",
    "mod": "active",
    "rates": {
      "rate": 4.6,
      "comments": ""
    },
    "courseID": objectId("course001abc123abc123abc001"),
    "classroomID": objectId("classroom001abc123abc123abc001"),
    "teacherID": objectId("teacher001abc123abc123abc001")
  }
},
  {
  "_id": objectId("student010abc123abc123abc010"),
  "code": "010",
  "firstName": "Estudiante10",
  "lastName": "Apellido10",
  "identificationNumber": 100000010,
  "gender": "F",
  "birthDate": "2001-02-06",
  "email": "estudiante10@acme.com",
  "address": "Carrera 10 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "COL",
    "name": "Colombia"
  },
  "inscriptions": {
    "registerDate": "2020-01-16",
    "mod": "active",
    "rates": {
      "rate": 3.1,
      "comments": ""
    },
    "courseID": objectId("course002abc123abc123abc002"),
    "classroomID": objectId("classroom002abc123abc123abc002"),
    "teacherID": objectId("teacher002abc123abc123abc002")
  }
},
  {
  "_id": objectId("student011abc123abc123abc011"),
  "code": "011",
  "firstName": "Estudiante11",
  "lastName": "Apellido11",
  "identificationNumber": 100000011,
  "gender": "M",
  "birthDate": "2001-08-04",
  "email": "estudiante11@acme.com",
  "address": "Carrera 11 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BGA",
    "name": "Bucaramanga"
  },
  "inscriptions": {
    "registerDate": "2020-01-15",
    "mod": "active",
    "rates": {
      "rate": 4.1,
      "comments": ""
    },
    "courseID": objectId("course003abc123abc123abc003"),
    "classroomID": objectId("classroom003abc123abc123abc003"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student012abc123abc123abc012"),
  "code": "012",
  "firstName": "Estudiante12",
  "lastName": "Apellido12",
  "identificationNumber": 100000012,
  "gender": "M",
  "birthDate": "2005-04-08",
  "email": "estudiante12@acme.com",
  "address": "Carrera 12 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "MED",
    "name": "Medellín"
  },
  "inscriptions": {
    "registerDate": "2020-01-26",
    "mod": "active",
    "rates": {
      "rate": 3.8,
      "comments": ""
    },
    "courseID": objectId("course000abc123abc123abc000"),
    "classroomID": objectId("classroom000abc123abc123abc000"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student013abc123abc123abc013"),
  "code": "013",
  "firstName": "Estudiante13",
  "lastName": "Apellido13",
  "identificationNumber": 100000013,
  "gender": "M",
  "birthDate": "2005-01-09",
  "email": "estudiante13@acme.com",
  "address": "Carrera 13 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BAQ",
    "name": "Barranquilla"
  },
  "inscriptions": {
    "registerDate": "2020-01-14",
    "mod": "active",
    "rates": {
      "rate": 4.7,
      "comments": ""
    },
    "courseID": objectId("course001abc123abc123abc001"),
    "classroomID": objectId("classroom001abc123abc123abc001"),
    "teacherID": objectId("teacher001abc123abc123abc001")
  }
},
  {
  "_id": objectId("student014abc123abc123abc014"),
  "code": "014",
  "firstName": "Estudiante14",
  "lastName": "Apellido14",
  "identificationNumber": 100000014,
  "gender": "F",
  "birthDate": "2003-06-04",
  "email": "estudiante14@acme.com",
  "address": "Carrera 14 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "VDL",
    "name": "Villa de Leyva"
  },
  "inscriptions": {
    "registerDate": "2020-01-21",
    "mod": "active",
    "rates": {
      "rate": 4.6,
      "comments": ""
    },
    "courseID": objectId("course002abc123abc123abc002"),
    "classroomID": objectId("classroom002abc123abc123abc002"),
    "teacherID": objectId("teacher002abc123abc123abc002")
  }
},
  {
  "_id": objectId("student015abc123abc123abc015"),
  "code": "015",
  "firstName": "Estudiante15",
  "lastName": "Apellido15",
  "identificationNumber": 100000015,
  "gender": "M",
  "birthDate": "2001-09-02",
  "email": "estudiante15@acme.com",
  "address": "Carrera 15 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "COL",
    "name": "Colombia"
  },
  "inscriptions": {
    "registerDate": "2020-01-13",
    "mod": "active",
    "rates": {
      "rate": 4.5,
      "comments": ""
    },
    "courseID": objectId("course003abc123abc123abc003"),
    "classroomID": objectId("classroom003abc123abc123abc003"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student016abc123abc123abc016"),
  "code": "016",
  "firstName": "Estudiante16",
  "lastName": "Apellido16",
  "identificationNumber": 100000016,
  "gender": "M",
  "birthDate": "2002-04-06",
  "email": "estudiante16@acme.com",
  "address": "Carrera 16 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BGA",
    "name": "Bucaramanga"
  },
  "inscriptions": {
    "registerDate": "2020-01-16",
    "mod": "active",
    "rates": {
      "rate": 4.1,
      "comments": ""
    },
    "courseID": objectId("course000abc123abc123abc000"),
    "classroomID": objectId("classroom000abc123abc123abc000"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
},
  {
  "_id": objectId("student017abc123abc123abc017"),
  "code": "017",
  "firstName": "Estudiante17",
  "lastName": "Apellido17",
  "identificationNumber": 100000017,
  "gender": "M",
  "birthDate": "2002-01-07",
  "email": "estudiante17@acme.com",
  "address": "Carrera 17 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "MED",
    "name": "Medellín"
  },
  "inscriptions": {
    "registerDate": "2020-01-11",
    "mod": "active",
    "rates": {
      "rate": 4.2,
      "comments": ""
    },
    "courseID": objectId("course001abc123abc123abc001"),
    "classroomID": objectId("classroom001abc123abc123abc001"),
    "teacherID": objectId("teacher001abc123abc123abc001")
  }
},
  {
  "_id": objectId("student018abc123abc123abc018"),
  "code": "018",
  "firstName": "Estudiante18",
  "lastName": "Apellido18",
  "identificationNumber": 100000018,
  "gender": "F",
  "birthDate": "2003-03-06",
  "email": "estudiante18@acme.com",
  "address": "Carrera 18 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "BAQ",
    "name": "Barranquilla"
  },
  "inscriptions": {
    "registerDate": "2020-01-24",
    "mod": "active",
    "rates": {
      "rate": 4.2,
      "comments": ""
    },
    "courseID": objectId("course002abc123abc123abc002"),
    "classroomID": objectId("classroom002abc123abc123abc002"),
    "teacherID": objectId("teacher002abc123abc123abc002")
  }
},
  {
  "_id": objectId("student019abc123abc123abc019"),
  "code": "019",
  "firstName": "Estudiante19",
  "lastName": "Apellido19",
  "identificationNumber": 100000019,
  "gender": "M",
  "birthDate": "2004-05-07",
  "email": "estudiante19@acme.com",
  "address": "Carrera 19 #67-89",
  "identificationType": {
    "code": "CC",
    "name": "cédula"
  },
  "city": {
    "code": "VDL",
    "name": "Villa de Leyva"
  },
  "inscriptions": {
    "registerDate": "2020-01-24",
    "mod": "active",
    "rates": {
      "rate": 4.8,
      "comments": ""
    },
    "courseID": objectId("course003abc123abc123abc003"),
    "classroomID": objectId("classroom003abc123abc123abc003"),
    "teacherID": objectId("teacher000abc123abc123abc000")
  }
}
]);

db.courses.insertMany([
  {
  "_id": objectId("course000abc123abc123abc000"),
  "classroomID": objectId("classroom000abc123abc123abc000"),
  "teacherID": objectId("teacher000abc123abc123abc000"),
  "course": {
    "code": "CUR000",
    "name": "Curso 0",
    "description": "Descripción del curso 0",
    "intensity": 25,
    "weight": 25
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
},
  {
  "_id": objectId("course001abc123abc123abc001"),
  "classroomID": objectId("classroom001abc123abc123abc001"),
  "teacherID": objectId("teacher001abc123abc123abc001"),
  "course": {
    "code": "CUR001",
    "name": "Curso 1",
    "description": "Descripción del curso 1",
    "intensity": 20,
    "weight": 17
  },
  "startTime": "08:00",
  "endTime": "12:00",
  "mod": "active",
  "classroom": {
    "code": "A2",
    "mod": "active",
    "description": "Salón A2"
  },
  "topics": [
    {
      "code": "T1A",
      "title": "Tema A del curso 1",
      "description": "Descripción A del tema 1",
      "mod": "active"
    },
    {
      "code": "T1B",
      "title": "Tema B del curso 1",
      "description": "Descripción B del tema 1",
      "mod": "active"
    }
  ]
},
  {
  "_id": objectId("course002abc123abc123abc002"),
  "classroomID": objectId("classroom002abc123abc123abc002"),
  "teacherID": objectId("teacher002abc123abc123abc002"),
  "course": {
    "code": "CUR002",
    "name": "Curso 2",
    "description": "Descripción del curso 2",
    "intensity": 20,
    "weight": 24
  },
  "startTime": "08:00",
  "endTime": "12:00",
  "mod": "active",
  "classroom": {
    "code": "A3",
    "mod": "active",
    "description": "Salón A3"
  },
  "topics": [
    {
      "code": "T2A",
      "title": "Tema A del curso 2",
      "description": "Descripción A del tema 2",
      "mod": "active"
    },
    {
      "code": "T2B",
      "title": "Tema B del curso 2",
      "description": "Descripción B del tema 2",
      "mod": "active"
    }
  ]
},
  {
  "_id": objectId("course003abc123abc123abc003"),
  "classroomID": objectId("classroom003abc123abc123abc003"),
  "teacherID": objectId("teacher000abc123abc123abc000"),
  "course": {
    "code": "CUR003",
    "name": "Curso 3",
    "description": "Descripción del curso 3",
    "intensity": 21,
    "weight": 36
  },
  "startTime": "08:00",
  "endTime": "12:00",
  "mod": "active",
  "classroom": {
    "code": "A4",
    "mod": "active",
    "description": "Salón A4"
  },
  "topics": [
    {
      "code": "T3A",
      "title": "Tema A del curso 3",
      "description": "Descripción A del tema 3",
      "mod": "active"
    },
    {
      "code": "T3B",
      "title": "Tema B del curso 3",
      "description": "Descripción B del tema 3",
      "mod": "active"
    }
  ]
}
]);