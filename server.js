// Dependencies
const express = require('express');

const PORT = process.env.PORT || 8080;


const note = express();

//Accesses public file mainly for proper CSS loading
note.use(express.static(__dirname + '/public'));
note.use(express.static('./'));

note.use(express.urlencoded({ extended: true }));
note.use(express.json());

//Require the Routes.js files in order to communicate when to generate api routes and html files
require("./routes/apiRoutes")(note);
require("./routes/htmlRoutes")(note);


// Starts the server to begin listening
note.listen(PORT, function () {
    console.log(`App is listening on PORT: ${PORT}`);
});