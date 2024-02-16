/**
 * Filename: app.js
 * Student Name / Student ID:
 * Puja Shrestha, 200573293
 * Suyog Shrestha, 200565523
 * Date: Feb 14th, 2024
 */

// importing dependencies
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');

// creating an instance of express
var app = express();

dotenv.config({ path: './config.env' });

const InitiateMongoServer = require('./db');

// initialize Mongodb connection
InitiateMongoServer();

app.use(cors());
app.use(express.json());

/**
 * @param {*} req
 * @param {*} res
 * @description Root route setup
 */
app.get('/', function (req, res) {
  res.send('Welcome to the Assignment 2 - Express Api - CRUD operations');
});

app.use('/books', bookRoutes);

const port = process.env.PORT || 4000;
app.listen(port, function () {
  console.log('App is listening to port no 4000');
});
