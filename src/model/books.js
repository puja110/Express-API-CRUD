// importing required modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// defining the BooksSchema
const BooksSchema = new Schema({
    bookId: {type: String}, // defines the bookId field as a String type
    bookName: {type: String}, // defines the bookName field as a String type
    isbn: {type: String}, // defines the isbn field as a String type
    rating: {type: Number}, // defines the rating field as a Number type
    author: {type: String}, // defines the author field as a String type
    genre: [ // defines the genre field as an array of Strings
        {type: String}
    ],
})

// creating a Mongoose model named 'Books'
const Book = mongoose.model('Books', BooksSchema);

// exporting the Book model to be used in other files
module.exports = Book;