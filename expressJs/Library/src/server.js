import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/books', bookRoutes);

app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.send("Home");
// });

const PORT = process.env.PORT;
app.listen(PORT, () => {  
  console.log(`Server is running on http://localhost:${PORT}`);
});