import Joi from 'joi';

export const createMovieSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(60)
        .trim()
        .required(),
    releaseYear: Joi.number()
        .integer()
        .min(1888)
        .max(new Date().getFullYear())
        .required(),
    genre: Joi.string()
        .valid('Action', 'Drama', 'Scifi')
        .required()
});

export const updateMovieSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(60)
        .trim()
        .optional()
        .messages({
            'string.empty': 'Title cannot be empty',
            'string.min': 'Title must be at least 3 characters long',
            'string.max': 'Title cannot exceed 60 characters'
        }),
    releaseYear: Joi.number()
        .integer()
        .min(1888)
        .max(new Date().getFullYear())
        .optional()
        .messages({
            'number.base': 'Release year must be a number',
            'number.min': 'Release year cannot be before 1888',
            'number.max': 'Release year cannot be in the future'
        }),
    genre: Joi.string()
        .valid('Action', 'Drama', 'Scifi')
        .optional()
        .messages({
            'any.only': 'Genre must be one of: Action, Drama, Scifi'
        })
}).min(1);
