const express = require("express");
const app = express();
const port = process.env.port || 9000;

const mainAPI = require("./routes/api.js");

// register routes for use
app.use(mainAPI);

// listen for changes on port 9000 and send msg to console
app.listen(port, () => console.log("Running on port 9000..."));
