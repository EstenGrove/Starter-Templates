const express = require("express");
const app = express();
const port = process.env.port || 9000;

const routes = require("./routes/routes.js");

// register routes for use
app.use(routes);

// listen for changes on port 9000 and send msg to console
app.listen(port, () => console.log("Running on port 9000..."));
