const express = require("express");
const apiroutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

const app = express();

/// Sets port to 8080
const port = 8080;

app.use