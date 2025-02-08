import express from 'express';
import connectDB from './config/db.js';

import authRouter from './routes/api/auth.js';
import usersRouter from './routes/api/users.js';
import profileRouter from './routes/api/profile.js';
import postsRouter from './routes/api/posts.js';
import cors from 'cors';

const app = express();

// Connect Database
connectDB();

app.use(cors({
    origin: 'http://localhost:3000' // Allow only localhost:3000
  }));
  
// Init Middleware
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', usersRouter);
app.use('/api/profile', profileRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
