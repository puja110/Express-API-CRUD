const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController.js');
const middleware = require('../middleware/middleware.js');

/**
 * @description Route to handle GET request for fetching all books
 */
router.get('/', middleware.logReadRequest, bookController.listAllBooks);

/**
 * @description Route to handle GET request for finding a book by ID
 * @param {string} id - The ID of the book to find
 */
router.get('/:id', middleware.logReadRequest, bookController.findBookById);

/**
 * @description Route to handle POST request for adding a new book
 * @param {object} req.body - The request body containing book details
 */
router.post('/', middleware.logCreateRequest, bookController.addNewBook);

/**
 * @description Route to handle PATCH request for updating an existing book
 * @param {string} id - The ID of the book to update
 * @param {object} req.body - The request body containing updated book details
 */
router.patch('/:id', middleware.logUpdateRequest, bookController.updateBook);

/**
 * @description Route to handle DELETE request for deleting a book by ID
 * @param {string} id - The ID of the book to delete
 */
router.delete('/:id', middleware.logDeleteRequest, bookController.deleteBook);

module.exports = router;
