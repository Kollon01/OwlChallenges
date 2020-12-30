module.exports = app => {
    const tipo_usuarios = require("../controllers/tipo_usuario.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tipo_usuarios.create);
  
    // Retrieve all Tutorials
    router.get("/", tipo_usuarios.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tipo_usuarios.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tipo_usuarios.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tipo_usuarios.delete);
  
    app.use('/api/tipousuarios', router);
  };