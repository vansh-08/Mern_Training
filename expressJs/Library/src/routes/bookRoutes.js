// Book Routes
import express from 'express';
import * as bookController from '../controllers/bookController.js';

const router = express.Router();

// GET all books (with query params for filtering)
router.get('/', bookController.getAllBooks);

// GET book by ID (path param)
router.get('/:id', bookController.getBookById);

// GET books by author (path param)
router.get('/author/:authorName', bookController.getBooksByAuthor);

// POST create new book (body)
router.post('/', bookController.createBook);

// PUT update book (path param + body)
router.put('/:id', bookController.updateBook);

// DELETE book (path param)
router.delete('/:id', bookController.deleteBook);

export default router;
