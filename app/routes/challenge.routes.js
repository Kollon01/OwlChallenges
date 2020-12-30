module.exports = app => {
    const challenges = require("../controllers/challenge.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Challenge
    router.post("/", challenges.create);

    // Retrieve all Challenges
    router.get("/", challenges.findAll);

    // Retrieve a single Challenge with id
    router.get("/:id", challenges.findOne);

    // Update a Challenge with id
    router.put("/:id", challenges.update);

    // Delete a Challenge with id
    router.delete("/:id", challenges.delete);

    app.use('/api/challenges', router);
  };