const mongoose = require('mongoose');
var express = require('express');
const Book = require('../model/books'); 

// controller function to get all books
exports.getAllBooks = async (req, res) => {
    try {
        // fetch all books from the database
        const books = await Book.find();
        
        // send the fetched books as JSON response
        res.json(books);
    } catch (error) {
        console.error(error);

        // send an internal server error response if an error occurs
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// controller function to delete a book by ID
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        // find and delete the book by its ID
        const deletedBook = await Book.findByIdAndDelete(id);
        res.json(deletedBook);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
  