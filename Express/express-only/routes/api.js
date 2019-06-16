// import express
const express = require("express");

// init a Router instance
const router = express.Router();

// define a route for a GET request
router.get("/", (req, res) => {
  res.send("Home Page bitches!!");
});

// define a 2nd route for GET requests
router.get("/api", (req, res) => {
  res.send("Hola!!");
});

// export the router
module.exports = router;
