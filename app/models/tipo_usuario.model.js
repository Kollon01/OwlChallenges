module.exports = (sequelize, Sequelize) => {
    const Tipo_Usuario = sequelize.define("TipoUsuario", {
      Nombre: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      }
    });
  
    return Tipo_Usuario;
  };