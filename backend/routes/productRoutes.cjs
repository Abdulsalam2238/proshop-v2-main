const express = require('express');
const router = express.Router();

// TEMP SIMPLE DATA (so it works instantly)
router.get('/', (req, res) => {
  res.json([
    {
      _id: 1,
      name: "iPhone 14",
      price: 1200,
      image: "https://via.placeholder.com/200"
    },
    {
      _id: 2,
      name: "Samsung Galaxy",
      price: 900,
      image: "https://via.placeholder.com/200"
    }
  ]);
});

module.exports = router;
