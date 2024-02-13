// importing dependencies
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');

// creating an instance of express
var app = express();

dotenv.config({ path: './config.env' });

// root route setup
app.get('/', function(req, res) {
    res.send("Welcome to the first express node js app");
});

// create one port no on which app listen
app.listen(3000, function() {
    console.log("App is listening to port no 3000");
});