// importing express dependency
var express = require('express');

// creating an instance of express
var app = express();

// root route setup
app.get('/', function(req, res) {
    res.send("Welcome to the first express node js app");
});

// create one port no on which app listen
app.listen(3000, function() {
    console.log("App is listening to port no 3000");
});