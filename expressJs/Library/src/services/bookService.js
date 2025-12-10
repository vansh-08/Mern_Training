// Book Service - Business Logic with JSON File Storage
import { readJSONFile, writeJSONFile, BOOKS_FILE } from '../utils/fileHelper.js';

export const getAllBooks = async (queryParams) => {
  const books = await readJSONFile(BOOKS_FILE);
  
  // Filter based on query params
  let filteredBooks = books;
  
  if (queryParams.category) {
    filteredBooks = filteredBooks.filter(b => b.category === queryParams.category);
  }
  
  if (queryParams.price) {
    filteredBooks = filteredBooks.filter(b => b.price <= queryParams.price);
  }
  
  return {
    count: filteredBooks.length,
    books: filteredBooks,
    filters: queryParams
  };
};

export const getBookById = async (id) => {
  const books = await readJSONFile(BOOKS_FILE);
  const book = books.find(b => b.id === id);
  
  if (!book) {
    return { error: 'Book not found' };
  }
  
  return book;
};

export const getBooksByAuthor = async (authorName) => {
  const books = await readJSONFile(BOOKS_FILE);
  const authorBooks = books.filter(b => 
    b.author.toLowerCase().includes(authorName.toLowerCase())
  );
  
  return {
    author: authorName,
    count: authorBooks.length,
    books: authorBooks
  };
};

export const createBook = async (bookData) => {
  const books = await readJSONFile(BOOKS_FILE);
  
  const newBook = {
    id: String(books.length + 1),
    ...bookData,
    createdAt: new Date()
  };
  
  books.push(newBook);
  await writeJSONFile(BOOKS_FILE, books);
  
  return newBook;
};

export const updateBook = async (id, bookData) => {
  const books = await readJSONFile(BOOKS_FILE);
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) {
    return { error: 'Book not found' };
  }
  
  books[bookIndex] = {
    ...books[bookIndex],
    ...bookData,
    updatedAt: new Date()
  };
  
  await writeJSONFile(BOOKS_FILE, books);
  
  return books[bookIndex];
};

export const deleteBook = async (id) => {
  const books = await readJSONFile(BOOKS_FILE);
  const bookIndex = books.findIndex(b => b.id === id);
  
  if (bookIndex === -1) {
    return { error: 'Book not found' };
  }
  
  const deletedBook = books[bookIndex];
  books.splice(bookIndex, 1);
  
  await writeJSONFile(BOOKS_FILE, books);
  
  return {
    message: 'Book deleted successfully',
    deletedBook: deletedBook
  };
};
