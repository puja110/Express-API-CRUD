const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Book = require('./src/model/books');
const { favBooks } = require('./src/data/favBookData');

// loading environment variables from config file
dotenv.config({ path: './config.env' });

const mongoURI = process.env.MONGODB_URL;

// creating Express application
const app = express();
app.use(express.json());

/**
 * @description function to initiate connection to MongoDB server
 */
const InitiateMongoServer = async () => {
  try {
    // connecting to MongoDB using the connection URI
    await mongoose.connect(mongoURI, {});
    console.log('Connected to DB!');

    const count = await Book.countDocuments();
    if (count === 0) {
      // Insert initial Books data
      await Book.insertMany(favBooks);
      console.log('Initial data inserted successfully');
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
