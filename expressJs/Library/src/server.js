// Import required packages
import express from 'express';

// Import routes
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Main routes
app.use('/user', userRoutes);
app.use('/books', bookRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Library API' });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
