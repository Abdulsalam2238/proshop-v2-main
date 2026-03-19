import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://proshop-v2-main-1-70s0.onrender.com/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>ProShop Products</h1>

      {products.length === 0 ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div key={product._id} style={{ marginBottom: '20px' }}>
            <img src={product.image} alt={product.name} width="200" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
const response = await fetch(`${BASE_URL}/products`);
        ))
      )}
    </div>
  );
}

export default App;
