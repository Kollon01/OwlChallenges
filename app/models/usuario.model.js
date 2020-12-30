module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      Nombre: {
        type: Sequelize.STRING
      },
      Apellido: {
        type: Sequelize.STRING
      },
      Correo: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Fecha_Nacimiento: {
        type: Sequelize.DATE 
      },
      Ranking: {
        type: Sequelize.INTEGER
      },
    });
  
    return Usuario;
  };