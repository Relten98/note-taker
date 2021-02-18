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
require("./apiRoutes")(note);
require("./htmlRoutes")(note);


// Starts the server to begin listening
note.listen(PORT, function () {
    console.log(`Woo Yeah Baby! That's What I've Been Waiting For!`);
    console.log(`Application is listening on port: ${PORT}`);
});