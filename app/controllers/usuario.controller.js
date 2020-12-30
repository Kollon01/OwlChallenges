const db = require("../models");
const Usuarios = db.usuarios;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {

    if (!req.body.Nombre || !req.body.Apellido ||
        !req.body.Correo || !req.body.Password ||
        !req.body.Fecha_Nacimiento || !req.body.Ranking ||
        !req.body.TipoUsuarioId) {
        res.status(400).send({
          message: "Complete all the data!"
        });
        return;
    }

  // Create a User
  const usuario = {
    Nombre: req.body.Nombre,
    Apellido: req.body.Apellido,
    Correo: req.body.Correo,
    Password: req.body.Password,
    Fecha_Nacimiento: req.body.Fecha_Nacimiento,
    Ranking: req.body.Ranking,
    TipoUsuarioId: req.body.TipoUsuarioId
  };

  // Save User in the database
  Usuarios.create(usuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });

};

// Retrieve all Types of users from the database.
exports.findAll = (req, res) => {
    /*const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;*/
  
    Usuarios.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      });
  };
  