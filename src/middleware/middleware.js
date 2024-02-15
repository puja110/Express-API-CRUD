/**
 * @description Middleware to log create requests
 * @param {*} req - The request object of Book schema
 * @param {*} next - The next middleware function to create book with all the information provided in the request body
 */
const logCreateRequest = (req, res, next) => {
  console.log(
    `Creating a new book with title: ${req.body.name}, ISBN: ${req.body.isbn}, rating: ${req.body.rating}, author: ${req.body.author}, genre: ${req.body.genre}`
  );
  next();
};

/**
 * @description Middleware to log read requests
 * @param {*} req - The request object
 * @param {*} next - The next middleware function to fetch all the books from the database
 */
const logReadRequest = (req, res, next) => {
  console.log('Fetching all books');
  next();
};

/**
 * @description Middleware to log update requests
 * @param {*} req - The request object
 * @param {*} next - The next middleware function to update the specified book by id
 */
const logUpdateRequest = (req, res, next) => {
  console.log(
    `Updating book with ID: ${req.params.id}, new details: name: ${req.body.name}, ISBN: ${req.body.isbn}, rating: ${req.body.rating}, author: ${req.body.author}, genre: ${req.body.genre}`
  );
  next();
};

/**
 * @description Middleware to log delete requests
 * @param {*} req - The request object with book detail
 * @param {*} next - The next middleware function to delete the specified book
 */
const logDeleteRequest = (req, res, next) => {
  console.log(`Deleting book with ID: ${req.params.id}`);
  next();
};

module.exports = {
  logCreateRequest,
  logReadRequest,
  logUpdateRequest,
  logDeleteRequest,
};
