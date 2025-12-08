require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const taskRoutes = require('./routes/taskRoutes');
const { logger, requestLogger } = require('./middleware/logger');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const { createTask } = require('./controllers/taskController');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(requestLogger);

// Routes
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Task Management API',
    version: '1.0.0',
    endpoints: {
      tasks: '/api/tasks',
      stats: '/api/tasks/stats/summary'
    }
  });
});

app.use('/api/tasks', taskRoutes);
app.use('/api/create', createTask);

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

module.exports = app;
