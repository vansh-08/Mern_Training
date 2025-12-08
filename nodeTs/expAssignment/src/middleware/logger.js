const morgan = require('morgan');

const logger = morgan('dev');

const requestLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Body:', req.body);
  console.log('Query:', req.query);
  next();
};

module.exports = { logger, requestLogger };
