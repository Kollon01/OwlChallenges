module.exports = app => {
    const Challenge_Participantes = require("../controllers/Challenge_Participantes.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", Challenge_Participantes.create);
  
    // Retrieve all Tutorials
    router.get("/", Challenge_Participantes.findAll);
  
    app.use('/api/Challenge_Participantes', router);
  };