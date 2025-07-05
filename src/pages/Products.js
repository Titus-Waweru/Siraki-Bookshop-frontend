import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Spinner,
  Alert,
  Toast,
  Form,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products');
        setProducts(res.data);
        setDisplayedProducts(res.data);
        const uniqueCategories = ['All', ...new Set(res.data.map(p => p.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      } catch (err) {
        setError('⚠️ Failed to fetch products. Please try again.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Search & filter logic
  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedProducts(filtered);
  }, [searchTerm, selectedCategory, products]);

  const handleAddToCart = (product) => {
    addToCart({ ...product, qty: 1 });
    setShowToast(true);
    setTimeout(() => navigate('/cart'), 800);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4" style={{ color: 'var(--deep-indigo)' }}>
        🛍️ Explore Our Product Categories
      </h2>

      {/* Search & Filter Row */}
      <Row className="mb-4">
        <Col md={6} sm={12}>
          <Form.Control
            type="text"
            placeholder="🔍 Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={6} sm={12}>
          <Form.Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Loading & Error */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* Product List */}
      <Row>
        {displayedProducts.length === 0 ? (
          <Col className="text-center py-4">
            <p>No products found.</p>
          </Col>
        ) : (
          displayedProducts.map((product) => (
            <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.imageurl || 'https://via.placeholder.com/300x200'}
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: 'bold' }}>{product.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {product.category}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: '0.95rem' }}>
                    {product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <span style={{ fontWeight: 'bold', color: 'var(--burnt-maroon)' }}>
                      KSh {product.price}
                    </span>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Toast Notification */}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={1500}
          autohide
          bg="success"
        >
          <Toast.Header>
            <strong className="me-auto">🛒 Cart Updated</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            Product added to cart successfully.
          </Toast.Body>
        </Toast>
      </div>
    </Container>
  );
};

export default Products;
