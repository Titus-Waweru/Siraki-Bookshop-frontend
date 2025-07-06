import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Table, Alert } from 'react-bootstrap';
import axios from 'axios';

// ✅ Dynamic base URL
const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://siraki-bookshop-backend.onrender.com';

const Order = ({ cart, removeFromCart, updateQty }) => {
  const [form, setForm] = useState({
    customer_name: '',
    phone: '',
    email: '',
    location: '',
    payment_method: 'MPESA',
    delivery_method: 'Pickup',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.price) * (item.qty || 1),
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      ...form,
      items: cart.map((item) => ({
        name: item.name,
        price: Number(item.price),
        qty: item.qty || 1,
      })),
      total_amount: totalAmount,
    };

    try {
      await axios.post(`${BASE_URL}/api/orders`, order);
      setSuccess('✅ Order placed successfully!');
      setError('');
    } catch (err) {
      console.error(err);
      setError('⚠️ Failed to place order. Try again.');
      setSuccess('');
    }
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4 text-center">🧾 Place Your Order</h2>

      {success && <Alert variant="success">{success}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {/* Form Section */}
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="customer_name"
                value={form.customer_name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email (optional)</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select
                name="payment_method"
                value={form.payment_method}
                onChange={handleChange}
              >
                <option>MPESA</option>
                <option>Cash</option>
                <option>Card</option>
              </Form.Select>
            </Form.Group>

            {/* MPESA Instructions */}
            {form.payment_method === 'MPESA' && (
              <Alert variant="info" className="mt-3">
                <strong>MPESA Payment Instructions:</strong>
                <ol className="mt-2 mb-0">
                  <li>Go to your MPESA menu.</li>
                  <li>Select <strong>Lipa na MPESA</strong>.</li>
                  <li>Choose <strong>Paybill</strong>.</li>
                  <li>Enter Business Number: <strong>522522</strong>.</li>
                  <li>Enter Account Number: <strong>1299181341</strong>.</li>
                  <li>Enter the total amount: <strong>KSh {totalAmount.toLocaleString()}</strong>.</li>
                  <li>Enter your MPESA PIN and confirm.</li>
                  <li>Submit this form after making the payment.</li>
                </ol>
              </Alert>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Delivery Method</Form.Label>
              <Form.Select
                name="delivery_method"
                value={form.delivery_method}
                onChange={handleChange}
              >
                <option>Pickup</option>
                <option>Delivery</option>
              </Form.Select>
            </Form.Group>

            <Button type="submit" variant="success" className="w-100">
              Place Order
            </Button>
          </Form>
        </Col>

        {/* Cart Summary Section */}
        <Col md={6}>
          <h5>🛒 Your Cart</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.name}</td>
                  <td>KSh {Number(item.price).toLocaleString()}</td>
                  <td>
                    <div className="d-flex align-items-center">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        disabled={item.qty <= 1}
                      >
                        −
                      </Button>
                      <span className="mx-2">{item.qty}</span>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>KSh {(Number(item.price) * item.qty).toLocaleString()}</td>
                  <td>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️
                    </Button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="3">
                  <strong>Total</strong>
                </td>
                <td colSpan="2">
                  <strong>KSh {totalAmount.toLocaleString()}</strong>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
