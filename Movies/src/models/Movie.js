import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true
    },
    genre: {
        type: String,
        required: [true, 'Genre is required'],
        enum: {
            values: ['Action', 'Drama', 'Scifi'],
            message: '{VALUE} is not a supported genre'
        }
    },
    releaseYear: {
        type: Number,
        required: [true, 'Release year is required']
    },
    posterUrl: {
        type: String,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { 
    timestamps: true 
});

export const Movie = mongoose.model('Movie', movieSchema);
