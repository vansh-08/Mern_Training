import express from 'express';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import movieRoutes from './routes/movieRoutes.js';

const app = express();

app.use(express.json());

app.use(express.static('public'));

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/movie', movieRoutes);

app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            success: false,
            message: err.message
        });
    }
    res.status(500).json({
        success: false,
        message: "Internal Server Error" });
});

export default app;
