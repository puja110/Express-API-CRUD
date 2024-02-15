const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defining the BooksSchema
const BooksSchema = new Schema({
  id: { type: String },
  bookName: { type: String },
  isbn: { type: String },
  rating: { type: Number },
  author: { type: String },
  genre: [{ type: String }],
});

// creating a Mongoose model named 'Books'
const Book = mongoose.model('Books', BooksSchema);

module.exports = Book;
