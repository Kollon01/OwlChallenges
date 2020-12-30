module.exports = (sequelize, Sequelize) => {
    const Challenge_Participante = sequelize.define("challenge_participante", {
      ID_Challenge: {
        type: Sequelize.INTEGER
      },
      ID_Participante: {
        type: Sequelize.INTEGER,
      },
      Ranking: {
        type: Sequelize.INTEGER 
      },
      Estado_Reto: {
        type: Sequelize.BOOLEAN 
      }
    });
  
    return Challenge_Participante;
  };