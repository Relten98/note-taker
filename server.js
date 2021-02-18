// Dependencies
const express = require('express');

const PORT = process.env.PORT || 8080;

let appFunctioning = true

const note = express();

note.use(express.static(__dirname + '/public'));
note.use(express.static('./'));

note.use(express.urlencoded({ extended: true }));
note.use(express.json());

// Routes
require("./apiRoutes")(note);
require("./htmlRoutes")(note);

// The magic that stats this whole thing
note.listen(PORT, function () {
    console.log(`Woo Yeah Baby! That's What I've Been Waiting For!`);
    console.log(`Application is listening on port: ${PORT}`);
    console.log(`This app is functioning = ${appFunctioning}`);
});