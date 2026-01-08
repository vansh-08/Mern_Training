import { createMovie, getMovies, getMovieByIdS, updateMovieS, deleteMovieS } from '../services/movieService.js';

export const uploadMovie = async (req, res) => {
    try {
        const { title, genre, releaseYear } = req.body;
        const user_id = req.user.id;
        const posterUrl = req.file
            ? `/uploads/poster/${req.file.filename}`
            : null;

        const movie = await createMovie(user_id, title, genre, releaseYear, posterUrl);

        res.status(201).json({
            message: 'Movie uploaded successfully',
            movie: { 
                id: movie._id,
                user_id: movie.user_id,
                title: movie.title,
                genre: movie.genre,
                releaseYear: movie.releaseYear, 
                posterUrl: movie.posterUrl,
                isActive: movie.isActive
            }
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllMovies = async (req, res) => {
    try {
        const page = Math.max(parseInt(req.query.page) || 1, 1);
        const limit = Math.max(parseInt(req.query.limit) || 2, 1);

        const movies = await getMovies(page, limit);
        res.status(200).json({
            success: true,
            page,
            limit,
            movies
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getMovieById = async (req, res) => {
    try {
        const movie = await getMovieByIdS(req.params.id);
        res.status(200).json({
            success: true,
            movie
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateMovie = async (req, res) => {
    try {
        const { title, genre, releaseYear } = req.body;
        
        const posterUrl = req.file 
            ? `/uploads/poster/${req.file.filename}` 
            : null;
        
        const updateData = {};
        if (title) updateData.title = title;
        if (genre) updateData.genre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
        if (releaseYear) updateData.releaseYear = releaseYear;
        
        const updatedMovie = await updateMovieS(
            req.params.id, 
            updateData, 
            posterUrl
        );
        
        res.status(200).json({
            success: true,
            message: 'Movie updated successfully',
            movie: updatedMovie
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await deleteMovieS(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Movie deleted successfully',
            movie: deletedMovie
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
