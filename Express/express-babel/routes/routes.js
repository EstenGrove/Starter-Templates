// import express and init a new router instance
const express = require("express");
const router = express.Router();

// example route for '/' that sends a json object back as a response
cardsRouter.get("/", (req, res) => {
  // sends json back to FE
  const users = ["John", "Sally", "Rachel", "Steven"];

  res.json(users);
});

// example route for GET request @ '/details/:id'
cardsRouter.get("/details/:id", (req, res) => {
  res.send("Hola!!");
});

// example route for updating an existing object
cardsRouter.patch("/details/:id/edit", (req, res) => {
  res.send("POST request was received");
});

// example route for deletions
router.delete("/details/:id/edit", (req, res) => {
  res.send("POST request was received");
});

// example route for creating an object
router.post("/dashboard/create", (req, res) => {
  res.send("POST request was received");
});

// export the router
module.exports = router;
