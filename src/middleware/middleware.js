// middleware to log create requests
const logCreateRequest = (req, res, next) => {
    console.log(`Creatingb a new book with title: ${req.body.bookName}, author: ${req.body.author}`);
    next(); // move to the next middleware in the chain
};

// middleware to log read requests
const logReadRequest =  (req, res, next) => {
    console.log("Fetching all books");
    next();
};

// middleware to log update requests
const logUpdateRequest =  (req, res, next) => {
    console.log(`Updating book with ID: ${req.params.bookId}, new book name: ${req.body.bookName}, new author: ${req.body.bookName}`);
    next();
};

// middleware to log read requests
const logDeleteRequest =  (req, res, next) => {
    console.log(`Deleting book with ID: ${req.params.bookId}`);
    next();
};

// exporting the middleware functions to make them available 
// for use in other parts of the application
module.exports = {
    logCreateRequest,
    logReadRequest,
    logUpdateRequest,
    logDeleteRequest
}

