import express from 'express';
import * as authController from '../controllers/authController.js';
import { validateUser } from '../middlewares/validate.middleware.js';
import { registerUserSchema, loginUserSchema } from '../validations/userValidation.js';

const router = express.Router();

router.post('/register', validateUser(registerUserSchema), authController.register);

router.post('/login', validateUser(loginUserSchema), authController.login);

export default router;