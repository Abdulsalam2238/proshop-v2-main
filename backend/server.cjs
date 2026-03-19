const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ROOT
app.get('/', (req, res) => {
  res.send('ProShop Backend is Running 🚀');
});

// ✅ FIXED PRODUCTS API
app.get('/api/products', (req, res) => {
  res.json([
    {
      _id: 1,
      name: 'iPhone 14',
      price: 1200,
      image: 'https://via.placeholder.com/200'
    },
    {
      _id: 2,
      name: 'Samsung Galaxy',
      price: 900,
      image: 'https://via.placeholder.com/200'
    }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
