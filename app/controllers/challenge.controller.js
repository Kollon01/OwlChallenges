const db = require("../models");
const Challenge = db.challenges;
const Challenge_Participante = db.challenge_participantes;
const Op = db.Sequelize.Op;

// Create and Save a new Challenge
exports.create = async (req, res) => {
  var idChallenge; 
    // Validate request
  if (
    !req.body.ID_Retador || !req.body.Fecha_Creacion ||
    !req.body.Fecha_Inicio || !req.body.Fecha_Fin ||
    !req.body.description || !req.body.Ranking || 
    !req.body.Nombre_challenge) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Challenge
  const challenge = {
    ID_Retador: req.body.ID_Retador,
    Nombre_challenge: req.body.Nombre_challenge,
    Fecha_Creacion: req.body.Fecha_Creacion,
    Fecha_Inicio: req.body.Fecha_Inicio,
    Fecha_Fin: req.body.Fecha_Fin,
    description: req.body.description,
    Ranking: req.body.Ranking,
  };
  
  return db.sequelize.transaction(function (t) {

    // chain all your queries here. make sure you return them.
    return Challenge.create(challenge, 
      {transaction: t}).then(function (challenge) {
        
        idChallenge = challenge.dataValues.id;
        var Participantes = [];
        req.body.Participantes.forEach((item, index) => {
          Participantes.push({
                "ID_Challenge": idChallenge,
                "ID_Participante": req.body.Participantes[index],
                "Ranking": 0,
                "Estado_Reto": false,
          })
          
        });
        console.log(Participantes, "Arreglo aramado!!");
        return Challenge_Participante.bulkCreate(Participantes, {transaction: t}).catch(function (err) {
          // Transaction has been rolled back
          // err is whatever rejected the promise chain returned to the transaction callback
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating a challenge."
          });
        });
    });
  
  }).then(function (result) {
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
    res.send(result);
  }).catch(function (err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating a challenge."
    });
  });
};

// Retrieve all Challenges from the database.
exports.findAll = (req, res) => {
  /*const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
*/
  Challenge.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving challenges."
      });
    });
};
// Find a single Challenge with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Challenge.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Challenge with id=" + id
      });
    });
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Challenge.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Challenge was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Challenge with id=${id}. Maybe Challenge was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};
// Delete a Challenge with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Challenge.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Challenge was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Challenge with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Challenge with id=" + id
      });
    });
};