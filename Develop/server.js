const express = require("express");
const apiroutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

const app = express();

]

/// Sets port to 8081
let PORT = process.env.PORT || 8081;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

/// Routes

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

/// Kicks this whole thing off, and initiates the server.
app.listen(PORT, ()=> console.log(`Listening on Port : ${PORT}`))
