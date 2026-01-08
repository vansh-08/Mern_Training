import { Movie } from "../models/Movie.js";
import fs from 'fs';
import path from 'path';

export const createMovie = async (user_id, title, genre, releaseYear, posterUrl = null) => {
    const formattedGenre = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
    
    const movie = await Movie.create({
        user_id,
        title,
        genre: formattedGenre,
        releaseYear,
        posterUrl
    });

    return movie;
}

export const getMovies = async (page, limit) => {
    const skip = (page - 1) * limit;
    
    const movies = await Movie.find({ isActive: true })
    .sort({updatedAt: -1})
    .skip(skip)
    .limit(limit)
    .populate("user_id", "name email");

    return movies;
}

export const getMovieByIdS = async (id) => {
    const movie = await Movie.findOne({ _id: id, isActive: true });
    
    if (!movie) {
        throw new Error('Movie not found or has been deleted');
    }
    
    return movie;
}

export const updateMovieS = async (id, updateData, posterUrl = null) => {
    const movie = await Movie.findById(id);
    
    if (!movie) {
        throw new Error('Movie not found');
    }

    const updates = { ...updateData };

    if (posterUrl) {
        if (movie.posterUrl) {
            const oldFilePath = path.join('./public', movie.posterUrl);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }
        }
        updates.posterUrl = posterUrl;
    }

    return await Movie.findByIdAndUpdate(
        id,
        { $set: updates },
        { new: true, runValidators: true }
    );
}

export const deleteMovieS = async (id) => {
    const movie = await Movie.findById(id);
    
    if (!movie) {
        throw new Error('Movie not found');
    }

    return await Movie.findByIdAndUpdate(
        id,
        { $set: { isActive: false } },
        { new: true, runValidators: true }
    );
}
