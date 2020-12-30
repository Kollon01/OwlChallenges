const db = require("../models");
const Challenge_Participante = db.challenge_participantes;
const Op = db.Sequelize.Op;

// Create and Save a new Challenge_participante
exports.create = (req, res) => {

    if ( !req.body.ID_Challenge || !req.body.ID_Participante ) {
        res.status(400).send({
          message: "Complete all the data!"
        });
        return;
    }

  // Create a Challenge_Participante
  const challenge_participante = {
    ID_Challenge: req.body.ID_Challenge,
    ID_Participante: req.body.ID_Participante,
    Ranking: 0,
    Estado_Reto: false,
  };

  // Save User in the database
  Challenge_Participante.create(challenge_participante)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the participante."
      });
    });

};

// Retrieve all Types of users from the database.
exports.findAll = (req, res) => {
    /*const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;*/
  
    Challenge_Participante.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving participantes."
        });
      });
  };
  