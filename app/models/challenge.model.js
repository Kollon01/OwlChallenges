module.exports = (sequelize, Sequelize) => {
    const Challenge = sequelize.define("challenge", {
      ID_Retador: {
        type: Sequelize.INTEGER
      },
      Nombre_challenge: {
        type: Sequelize.STRING
      },
      Fecha_Creacion: {
        type: Sequelize.DATE 
      },
      Fecha_Inicio: {
        type: Sequelize.DATE 
      },
      Fecha_Fin: {
        type: Sequelize.DATE 
      },
      description: {
        type: Sequelize.STRING
      },
      Ranking: {
        type: Sequelize.INTEGER 
      }
    });
  
    return Challenge;
  };