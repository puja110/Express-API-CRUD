const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Books schema
const BooksSchema = new mongoose.Schema({
  booksName: { type: String, required: true },
  isbn: { type: String, required: true },
  rating: { type: Number, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
});

// creating a Mongoose model named 'Books'
const Book = mongoose.model('Books', BooksSchema);

module.exports = Book;
