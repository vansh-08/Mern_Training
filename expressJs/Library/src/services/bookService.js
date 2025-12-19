import { readJSONFile, writeJSONFile, BOOKS_FILE } from '../utils/fileHelper.js';

export const getAllBooks = async (queryParams) => {
  const books = await readJSONFile(BOOKS_FILE);
  return books;
};

export const getBookById = async (id) => {
  const books = await readJSONFile(BOOKS_FILE);
  const book = books.find(b => b.id === id);

  return book ?? {error: `Book with id: ${id} not found`};
};

export const getBooksByAuthor = async (authorName) => {
  const books = await readJSONFile(BOOKS_FILE);
  const authorBooks = books.filter(b => 
    b.author.toLowerCase().includes(authorName.toLowerCase())
  );
  
  return authorBooks;
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
  
  if (bookIndex < 1) {
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
  
  if (bookIndex < 1) {
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
