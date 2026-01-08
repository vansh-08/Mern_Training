import express from 'express';
import { authAdmin } from '../middlewares/auth.middleware.js';
import { getAllUser, getUserById, updateAdmin, deleteAdmin } from '../controllers/adminController.js';
import { upload } from '../config/multer.config.js';
import { validate } from '../middlewares/validate.middleware.js';
import { updateAdminSchema } from '../validations/adminValidation.js';


const router = express.Router();

router.get('/profile', authAdmin, getUserById);
router.get('/list', authAdmin, getAllUser);
router.put('/update', authAdmin, upload.single('Profile'), validate(updateAdminSchema),  updateAdmin);
//soft delete
router.patch('/delete', authAdmin, deleteAdmin);

export default router;
