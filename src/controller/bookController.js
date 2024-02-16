const Book = require('../model/books');

/**
 * @description Controller function to list all books
 * @param {*} req - The request object
 * @param {*} res - The response object
 * @returns {JSON} - Returns all the saved books in the database
 */
exports.listAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @description Controller function to find a book by ID
 * @param {*} req - The request object
 * @param {*} res - The response object
 * @returns {JSON} - Returns the book found by ID or 404 if not found
 */
exports.findBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @description Controller function to add a new book
 * @param {*} req - The request object containing book details
 * @param {*} res - The response object
 * @returns {JSON} - Returns the newly created book
 */
exports.addNewBook = async (req, res) => {
  try {
    const { booksName, isbn, rating, author, genre } = req.body;

    // Create a new book instance
    const newBook = new Book({ booksName, isbn, rating, author, genre });
    const savedBook = await newBook.save();
    res.status(201).json({ message: "Book added successfully!", savedBook: savedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @description Controller function to update an existing book
 * @param {*} req - The request object containing book ID and updated details
 * @param {*} res - The response object
 * @returns {JSON} - Returns the updated book or 404 if not found
 */
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { booksName, isbn, rating, author, genre } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { booksName, isbn, rating, author, genre },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ message: "Book updated successfully!", updatedBook: updatedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/**
 * @description Controller function to delete an existing book
 * @param {*} req - The request object containing book ID
 * @param {*} res - The response object
 * @returns {JSON} - Returns the deleted book or 404 if not found
 */
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json({ deleted: true, message: "Book deleted successfully!", deletedBook: deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
