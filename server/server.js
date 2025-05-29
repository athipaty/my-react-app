// Importing required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

// Initialize dotenv to load environment variables
dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ Database connection error:', err));

// Basic Route to Test Server
app.get('/', (req, res) => {
    res.send('🚀 Server is running');
});

// API Routes
app.use('/api/users', userRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start the Server
app.listen(PORT,"0.0.0.0", () => {
    console.log(`🌐 Server running on http://localhost:${PORT}`);
});