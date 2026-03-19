import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { logout } from './slices/authSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(${BASE_URL}/products);
        if (!response.ok) {
          throw new Error(HTTP error! status: ${response.status});
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="App">Loading products...</div>;
  }

  if (error) {
    return <div className="App" style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>ProShop Products</h1>
      <div className="products-container">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
