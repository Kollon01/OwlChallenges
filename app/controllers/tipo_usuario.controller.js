const db = require("../models");
const TipoUsuarios = db.tipoUsuarios;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  
    if (!req.body.Nombre || !req.body.Description) {
        res.status(400).send({
          message: "Complete all the data!"
        });
        return;
    }

  // Create a Type of User
  const tipoUsuario = {
    Nombre: req.body.Nombre,
    Description: req.body.Description,
  };

  // Save Tutorial in the database
  TipoUsuarios.create(tipoUsuario)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the type of user."
      });
    });

};

// Retrieve all Types of users from the database.
exports.findAll = (req, res) => {
    /*const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;*/
  
    TipoUsuarios.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Types of users."
        });
      });
  };

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    TipoUsuarios.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving types of users with id=" + id
        });
      });
  };

  // Update a Types of Users by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    TipoUsuarios.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Types of Users was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Types of Users with id=${id}. Maybe Types of Users was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Types of Users with id=" + id
        });
      });
  };

  // Delete a Types of Users with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    TipoUsuarios.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Types of Users was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Types of Users with id=${id}. Maybe Types of Users was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Types of Users with id=" + id
        });
      });
  };