/**
 * Filename: app.js
 * Student Name / Student ID:
 * Puja Shrestha, 200573293
 * Suyog Shrestha, 200565523
 * Date: Feb 14th, 2024
 */

// importing dependencies
const express = require('express');
const cors = require('cors');
const bookRoutes = require('./src/routes/bookRoutes');
const initiateDBConnection = require('./db');

// creating express instance
const app = express();

initiateDBConnection();

// middlewares for enabling cors and for parsing JSON request bodies
app.use(cors({
  // origin: 'http://localhost:8081',
  origin: 'https://mdev1004-express-api.onrender.com/',
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true
}));

// middleware for parsing JSON request bodies
app.use(express.json());

/**
 * @param {*} req
 * @param {*} res
 * @description Root route setup
 */
app.get('/', (req, res) => {
  res.send('Welcome to the Assignment 2 - Express Api - CRUD operations test');
});
app.use('/books', bookRoutes);

// Start the server
const port = process.env.PORT;
app.listen(port, async() => {
  console.log(`Server is running on port ${port}`);
});
