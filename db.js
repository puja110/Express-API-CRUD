const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Books = require('./src/model/books');
const { favBooks } = require('./src/data/favBookData');

const db = mongoose.connection;

// loading environment variables from config file
dotenv.config({ path: './config.env' });

/**
 * @description function to initiate connection to MongoDB server
 */
const InitiateMongoDBConnection = async () => {
  try {
    // connecting to MongoDB
    mongoose.set('strictQuery',false);
    const mongoURI = process.env.MONGODB_URL
    await mongoose.connect(mongoURI, {});

    db.once('open', () => console.log('DB connection successful'));

    const dataDount = await Books.countDocuments();
    if (dataDount === 0) {
      insertBooksData();
    }
  } catch (e) {
    db.on('error', (error) => console.log("Connection error", e));
    throw e;
  }
};

const insertBooksData = () => {
  Books.insertBooks(favBooks);
}

module.exports = InitiateMongoDBConnection;