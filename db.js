// importing required modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// loading environment variables from config file
dotenv.config({ path: './config.env' });

// getting MongoDB connection URI from environment variabl
const mongoURI = process.env.MONGODB_URL;

// creating Express application
const app = express();
app.use(express.json());

// function to initiate connection to MongoDB server
const InitiateMongoServer = async() => {
    try {
        // connecting to MongoDB using the connection URI
        await mongoose.connect(mongoURI, {

        });
        console.log("Connected to DB!");
    } catch(e) {
        console.log(e);
        throw e;
    }
};

// exporting the function to initiate MongoDB server connection
module.exports = InitiateMongoServer;