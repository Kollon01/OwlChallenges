module.exports = app => {
    const usuario = require("../controllers/usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", usuario.create);
  
    // Retrieve all Tutorials
    router.get("/", usuario.findAll);
  
    app.use('/api/usuarios', router);
  };