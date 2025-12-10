// Helper functions to read and write JSON files
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory path (needed for ES6 modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File paths
const USERS_FILE = path.join(__dirname, '../data/users.json');
const BOOKS_FILE = path.join(__dirname, '../data/books.json');

// Read JSON file
export const readJSONFile = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

// Write JSON file
export const writeJSONFile = async (filePath, data) => {
  try {
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing file:', error);
    return false;
  }
};

// Export file paths
export { USERS_FILE, BOOKS_FILE };
