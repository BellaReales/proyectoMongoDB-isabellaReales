db.createCollection("estudiantes", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "identificationNumber", "email", "identificationType", "city"],
      properties: {
        firstName: { bsonType: "string" },
        lastName: { bsonType: "string" },
        identificationNumber: { bsonType: "string" },
        email: {
          bsonType: "string",
          pattern: ""
        },
        identificationType: {
          bsonType: "object",
          required: ["code", "name"],
          properties: {
            code: { bsonType: "string" },
            name: { bsonType: "string" }
          }
        },
        city: {
          bsonType: "object",
          required: ["code", "name"],
          properties: {
            code: { bsonType: "string" },
            name: { bsonType: "string" }
          }
        }
      }
    }
  }
});

db.createCollection("profesores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["firstName", "lastName", "identificationNumber", "email", "identificationType", "city"],
      properties: {
        firstName: { bsonType: "string" },
        lastName: { bsonType: "string" },
        identificationNumber: { bsonType: "string" },
        email: {
          bsonType: "string",
          pattern: ""
        },
        identificationType: {
          bsonType: "object",
          required: ["code", "name"],
          properties: {
            code: { bsonType: "string" },
            name: { bsonType: "string" }
          }
        },
        city: {
          bsonType: "object",
          required: ["code", "name"],
          properties: {
            code: { bsonType: "string" },
            name: { bsonType: "string" }
          }
        }
      }
    }
  }
});

db.createCollection("courses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["course", "startTime", "endTime", "mod", "classroom"],
      properties: {
        course: {
          bsonType: "object",
          required: ["code", "name"],
          properties: {
            code: { bsonType: "string" },
            name: { bsonType: "string" }
          }
        },
        startTime: { bsonType: "string" },
        endTime: { bsonType: "string" },
        mod: { bsonType: "string" },
        classroom: {
          bsonType: "object",
          required: ["code", "name", "intensity", "weight", "mod"],
          properties: {
            code: { bsonType: "string" },
            name: { bsonType: "string" },
            intensity: { bsonType: "int" },
            weight: { bsonType: "int" },
            mod: { bsonType: "string" }
          }
        }
      }
    }
  }
});

// ( 1 ) Listar courses programados entre dos fechas :
db.courses.aggregate([
  {
    $match: {
      startTime: { $gte: "08:00" },
      endTime: { $lte: "20:00" }
    }
  },
  {
    $lookup: {
      from: "teachers",
      localField: "teacherID",
      foreignField: "_id",
      as: "profesor"
    }
  },
  {
    $lookup: {
      from: "students",
      let: { courseId: "$courseID" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$inscriptions.courseID", "$$courseId"] }
          }
        }
      ],
      as: "inscritos"
    }
  },
  {
    $project: {
      course: 1,
      profesor: { $arrayElemAt: ["$profesor", 0] },
      classroom: 1,
      totalInscritos: { $size: "$inscritos" }
    }
  }
]);

// ( 2 ) Mostrar los datos de un curso y su contenido temÃ¡tico :
db.courses.aggregate([
  {
    $match: { "course.code": "MAT101" }
  },
  {
    $project: {
      _id: 0,
      codigo: "$course.code",
      nombre: "$course.name",
      descripcion: "$course.description"
    }
  }
]);

// ( 3 ) Estudiantes agrupados por ciudad :
db.estudiantes.aggregate([
  {
    $group: {
      _id: "$city.name",
      estudiantes: {
        $push: {
          codigo: "$code",
          nombre: "$firstName",
          apellido: "$lastName",
          sexo: "$gender",
          edad: {
            $subtract: [
              { $year: new Date() },
              { $year: { $toDate: "$birthDate" } }
            ]
          },
          correo: "$email"
        }
      }
    }
  }
]);

// ( 4 ) Cursos vistos y calificaciÃ³n ponderada :
db.estudiantes.aggregate([
  {
    $match: { identificationNumber: "123456789" }
  },
  {
    $project: {
      code: 1,
      nombre: "$firstName",
      apellido: "$lastName",
      courses: "$inscriptions",
      notaPonderada: "$inscriptions.rates.rate"
    }
  }
]);

// ( 5 ) Estudiantes inscritos a un curso :
db.estudiantes.aggregate([
  {
    $match: { "inscriptions.course.code": "MAT101" }
  },
  {
    $project: {
      code: 1,
      firstName: 1,
      lastName: 1,
      rate: "$inscriptions.rates.rate"
    }
  }
]);

// ( 6 ) Top 5 mejores estudiantes por curso : 
db.courses.aggregate([
  {
    $lookup: {
      from: "students",
      let: { cursoID: "$courseID" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$inscriptions.courseID", "$$cursoID"] }
          }
        },
        {
          $project: {
            code: 1,
            firstName: 1,
            lastName: 1,
            rate: "$inscriptions.rates.rate"
          }
        },
        { $sort: { rate: -1 } },
        { $limit: 5 }
      ],
      as: "mejoresEstudiantes"
    }
  },
  {
    $project: {
      course: 1,
      mejoresEstudiantes: 1
    }
  }
]);

// ( 7 ) Lista de estudiantes por curso, profesor y fecha : 
db.courses.aggregate([
  {
    $match: {
      "teacherID": ObjectId("41c8949aa55b8cb5dbec662f"),
      "courseID": ObjectId("fa78e31a75652a2784ea151f"),
      startTime: "08:00"
    }
  },
  {
    $lookup: {
      from: "students",
      let: { cursoId: "$courseID" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$inscriptions.courseID", "$$cursoId"] }
          }
        },
        {
          $project: {
            code: 1,
            nombre: "$firstName",
            apellido: "$lastName",
            genero: "$gender",
            edad: {
              $subtract: [
                { $year: new Date() },
                { $year: { $toDate: "$birthDate" } }
              ]
            },
            email: 1
          }
        }
      ],
      as: "estudiantesInscritos"
    }
  },
  {
    $project: {
      course: 1,
      classroom: 1,
      estudiantesInscritos: 1
    }
  }
]);

// ( 8 ) Programaciones que exceden la capacidad del aula :
db.courses.aggregate([
  {
    $lookup: {
      from: "students",
      let: { cursoId: "$courseID" },
      pipeline: [
        {
          $match: {
            $expr: { $eq: ["$inscriptions.courseID", "$$cursoId"] }
          }
        }
      ],
      as: "inscritos"
    }
  },
  {
    $project: {
      course: 1,
      classroom: 1,
      inscritos: 1,
      excedeCapacidad: {
        $gt: [{ $size: "$inscritos" }, "$classroom.intensity"]
      }
    }
  },
  { $match: { excedeCapacidad: true } }
]);

// roles !!

// Administrador :
db.createRole({
  role: "admin_acme",
  privileges: [
    { resource: { db: "acme_school", collection: "" }, actions: ["find", "insert", "update", "remove", "createCollection", "createIndex", "dropCollection", "collMod"] }
  ],
  roles: []
});

// Profesor :
db.createRole({
  role: "profesor_acme",
  privileges: [
    { resource: { db: "acme_school", collection: "estudiantes" }, actions: ["find", "update"] },
    { resource: { db: "acme_school", collection: "courses" }, actions: ["find"] },
    { resource: { db: "acme_school", collection: "profesores" }, actions: ["find"] }
  ],
  roles: []
});

// Estudiante :
db.createRole({
  role: "estudiante_acme",
  privileges: [
    { resource: { db: "acme_school", collection: "courses" }, actions: ["find"] },
    { resource: { db: "acme_school", collection: "estudiantes" }, actions: ["find"] }
  ],
  roles: []
});

// Ã­ndices !!

db.estudiantes.createIndex({ identificationNumber: 1 }, { unique: true });
db.estudiantes.createIndex({ email: 1 }, { unique: true });
db.estudiantes.createIndex({ "city.name": 1 });
db.estudiantes.createIndex({ "inscriptions.rates.rate": 1 });

db.profesores.createIndex({ identificationNumber: 1 }, { unique: true });
db.profesores.createIndex({ email: 1 }, { unique: true });
db.profesores.createIndex({ "city.name": 1 });

db.courses.createIndex({ "classroom.name": 1 });
db.courses.createIndex({ "course.code": 1 });
db.courses.createIndex({ mod: 1 });
db.courses.createIndex({ startTime: 1 });
db.courses.createIndex({ endTime: 1 });