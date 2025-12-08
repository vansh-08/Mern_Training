const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  patchTask,
  deleteTask,
  getTaskStats
} = require('../controllers/taskController');
const {
  validateTask,
  validateTaskUpdate,
  validateId
} = require('../middleware/validator');

// Stats route (must be before /:id route)
router.get('/stats/summary', getTaskStats);

// Main CRUD routes
router.route('/')
  .get(getTasks)
  .post(validateTask, createTask);


router.route('/create')  
router.route('/:id')
  .get(validateId, getTaskById)
  .put(validateId, validateTask, updateTask)
  .patch(validateId, validateTaskUpdate, patchTask)
  .delete(validateId, deleteTask);

module.exports = router;
