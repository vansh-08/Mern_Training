import express from 'express';
import { register, login } from "../controllers/authController.js";
import { validate } from '../middlewares/validate.middleware.js';
import { registerSchema, loginSchema } from '../validations/authValidation.js';
import { upload } from '../config/multer.config.js';

const router = express.Router();

// Register with optional profile picture upload
router.post('/register', upload.single('Profile'), validate(registerSchema), register);

router.post('/login', validate(loginSchema), login);

export default router;
