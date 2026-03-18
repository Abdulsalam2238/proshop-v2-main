const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('ProShop Backend is running successfully 🚀');
});

// Test API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API working perfectly 🚀' });
});

// Sample products (no database needed)
const products = [
  { id: 1, name: 'Phone', price: 500 },
  { id: 2, name: 'Laptop', price: 1200 },
  { id: 3, name: 'Headphones', price: 100 }
];

// Products route
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
