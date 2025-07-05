// src/pages/AdminOrders.js
import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('date'); // or 'total'

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders');
        setOrders(res.data);
        setFilteredOrders(res.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch orders.');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = () => {
    const results = orders.filter((order) =>
      order.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      order.phone.includes(search)
    );
    setFilteredOrders(results);
  };

  const handleSort = () => {
    const sorted = [...filteredOrders].sort((a, b) => {
      if (sortBy === 'total') return b.total_amount - a.total_amount;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setFilteredOrders(sorted);
  };

  useEffect(() => {
    handleSort();
  }, [sortBy]);

  return (
    <Container className="py-5">
      <h3 className="mb-4 text-center">📋 Admin Orders Dashboard</h3>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Control
                placeholder="Search by name or phone"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
            <Col md={3}>
              <Button variant="primary" onClick={handleSearch}>Search</Button>
            </Col>
            <Col md={3}>
              <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="date">Sort by Date</option>
                <option value="total">Sort by Total Amount</option>
              </Form.Select>
            </Col>
          </Row>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Location</th>
                <th>Payment</th>
                <th>Total (KSh)</th>
                <th>Items</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order.customer_name}</td>
                  <td>{order.phone}</td>
                  <td>{order.location}</td>
                  <td>{order.payment_method}</td>
                  <td>KSh {Number(order.total_amount).toLocaleString()}</td>
                  <td>
                    <ul style={{ marginBottom: 0 }}>
                      {order.items.map((item, i) => (
                        <li key={i}>
                          {item.name} x{item.qty}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
};

export default AdminOrders;
