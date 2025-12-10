// User Routes
import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

// GET all users (with query params)
router.get('/', userController.getAllUsers);

// GET user by ID (path param)
router.get('/:id', userController.getUserById);

// POST create new user (body)
router.post('/', userController.createUser);

// PUT update user (path param + body)
router.put('/:id', userController.updateUser);

// DELETE user (path param)
router.delete('/:id', userController.deleteUser);

export default router;
