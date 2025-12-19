import express from 'express';
import * as userController from '../controllers/userController.js';
import { authUser } from '../middlewares/auth.middleware.js';
import { validateUser } from '../middlewares/validate.middleware.js';
import { updateUserSchema } from '../validations/userValidation.js';

const router = express.Router();

router.get('/', authUser, userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', authUser, validateUser(updateUserSchema), userController.updateUser);
router.delete('/:id', authUser, userController.deleteUser);

export default router;