import * as bookService from '../services/bookService.js';

export const getAllBooks = async (req, res) => {
  const result = await bookService.getAllBooks(req.query);
  res.send(result);
};

export const getBookById = async (req, res) => {
  const result = await bookService.getBookById(req.params.id);
  res.send(result);
};

export const getBooksByAuthor = async (req, res) => {
  const result = await bookService.getBooksByAuthor(req.params.authorName);
  res.send(result);
};

export const createBook = async (req, res) => {
  const result = await bookService.createBook(req.body);
  res.send(result);
};

export const updateBook = async (req, res) => {
  const result = await bookService.updateBook(req.params.id, req.body);
  res.send(result);
};

export const deleteBook = async (req, res) => {
  const result = await bookService.deleteBook(req.params.id);
  res.send(result);
};