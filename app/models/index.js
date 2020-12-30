const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.tipoUsuarios = require("./tipo_usuario.model.js")(sequelize, Sequelize);
db.usuarios = require("./usuario.model.js")(sequelize, Sequelize);
db.challenges = require("./challenge.model.js")(sequelize, Sequelize); 
db.challenge_participantes = require("./challenge_participantes.model.js")(sequelize, Sequelize); 


//Assosiations
db.tipoUsuarios.hasOne(db.usuarios);
db.usuarios.belongsTo(db.tipoUsuarios);


db.usuarios.hasOne(db.challenges);
db.challenges.belongsTo(db.usuarios);


db.usuarios.belongsToMany(db.challenges, {
    through: db.challenge_participantes,
    as: 'reto',
    foreignKey: 'ID_Participante'});

db.challenges.belongsToMany(db.usuarios, {
    through: db.challenge_participantes,
    as: 'participantes',
    foreignKey: 'ID_Challenge'});

module.exports = db;