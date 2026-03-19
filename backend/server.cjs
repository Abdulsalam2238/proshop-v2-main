const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Import product routes (FIXED)
const productRoutes = require('./routes/productRoutes.cjs');

// Test route
app.get('/', (req, res) => {
  res.send('ProShop Backend is Running 🚀');
});

// Test API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working perfectly 🚀' });
});

// ✅ MAIN FIX: connect products API
app.use('/api/products', productRoutes);

// PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
