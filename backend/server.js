const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend working perfectly 🚀' });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

// PORT (important for Railway)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
