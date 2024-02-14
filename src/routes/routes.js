// importing required modules
const express = require('express');
const router = express.Router();
const Book = require('../model/books'); 
const bookController = require('../controller/controller.js');
const middleware = require('../middleware/middleware.js');

// route to handle GET request for fetching all books
router.get('/books', middleware.logReadRequest, bookController.getAllBooks);

// route to handle DELETE request for deleting a book by ID
router.delete('/books/:id', middleware.logDeleteRequest, bookController.deleteBook);

// exporting router object to make routes available to other modules
module.exports = router;
