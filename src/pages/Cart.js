import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = ({ cart = [] }) => {
  const total = cart.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">
          Your cart is empty. <Link to="/products">Go shopping</Link>.
        </p>
      ) : (
        <>
          <ListGroup variant="flush">
            {cart.map((item, index) => (
              <ListGroup.Item key={index}>
                <Row>
                  <Col md={6}>{item.name}</Col>
                  <Col md={3}>Qty: {item.qty || 1}</Col>
                  <Col md={3}>KSh {item.price * (item.qty || 1)}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mt-4 text-end">
            <h4>Total: <strong>KSh {total}</strong></h4>
            <Link to="/order">
              <Button variant="success" className="mt-3">
                Proceed to Order
              </Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
