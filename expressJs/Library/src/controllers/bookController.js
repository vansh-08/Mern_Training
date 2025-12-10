// Book Controller
import * as bookService from '../services/bookService.js';

// Get all books with query params
export const getAllBooks = async (req, res) => {
  console.log('Query Params:', req.query);
  
  const result = await bookService.getAllBooks(req.query);
  
  res.json({
    message: 'Getting all books',
    queryParams: req.query,
    data: result
  });
};

// Get book by ID (path param)
export const getBookById = async (req, res) => {
  console.log('Path Param - ID:', req.params.id);
  
  const result = await bookService.getBookById(req.params.id);
  
  res.json({
    message: 'Getting book by ID',
    pathParam: req.params.id,
    data: result
  });
};

// Get books by author (path param)
export const getBooksByAuthor = async (req, res) => {
  console.log('Path Param - Author:', req.params.authorName);
  
  const result = await bookService.getBooksByAuthor(req.params.authorName);
  
  res.json({
    message: 'Getting books by author',
    pathParam: req.params.authorName,
    data: result
  });
};

// Create new book (body)
export const createBook = async (req, res) => {
  console.log('Request Body:', req.body);
  
  const result = await bookService.createBook(req.body);
  
  res.json({
    message: 'Book created',
    body: req.body,
    data: result
  });
};

// Update book (path param + body)
export const updateBook = async (req, res) => {
  console.log('Path Param - ID:', req.params.id);
  console.log('Request Body:', req.body);
  
  const result = await bookService.updateBook(req.params.id, req.body);
  
  res.json({
    message: 'Book updated',
    pathParam: req.params.id,
    body: req.body,
    data: result
  });
};

// Delete book (path param)
export const deleteBook = async (req, res) => {
  console.log('Path Param - ID:', req.params.id);
  
  const result = await bookService.deleteBook(req.params.id);
  
  res.json({
    message: 'Book deleted',
    pathParam: req.params.id,
    data: result
  });
};
