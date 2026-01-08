import express from 'express';
import { authAdmin, authOwner } from '../middlewares/auth.middleware.js';
import { uploadMovie, getAllMovies, getMovieById, updateMovie, deleteMovie } from '../controllers/movieController.js';
import { upload } from '../config/multer.config.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createMovieSchema, updateMovieSchema } from '../validations/movieValidation.js';

const router = express.Router();

router.post('/upload', authAdmin, validate(createMovieSchema), upload.single('Poster'), uploadMovie);
router.get('/list', authAdmin, getAllMovies);
router.get('/:id', authAdmin, getMovieById);
router.put('/:id/update', authAdmin, authOwner, upload.single('Poster'), validate(updateMovieSchema), updateMovie);
router.patch('/:id/delete', authAdmin, authOwner, deleteMovie);

export default router;  