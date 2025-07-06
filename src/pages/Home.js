import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--soft-beige)', minHeight: '100vh' }}>
      <Container className="py-5 text-center">
        <Row>
          <Col>
            <h1 className="mb-3" style={{ color: 'var(--deep-indigo)' }}>
              Welcome to Siraki Wisdom & Bookshop
            </h1>
            <p className="lead" style={{ fontSize: '1.25rem' }}>
              Where faith, language, and education come together to shape future generations.
            </p>
            <Button as={Link} to="/products" variant="warning" size="lg" className="mt-3">
              📚 Shop Now
            </Button>
          </Col>
        </Row>

        {/* Highlights Section */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h4 style={{ color: 'var(--burnt-maroon)' }}>🕊️ Faith Literature</h4>
                <p>Get hard-to-find Kikuyu Bibles, devotionals, and family-focused Christian teachings.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h4 style={{ color: 'var(--burnt-maroon)' }}>🎒 Children’s Book Corner</h4>
                <p>Inspire young minds with Sunday School books, charts, coloring books, and storytime favorites.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <h4 style={{ color: 'var(--burnt-maroon)' }}>✍️Siraki Book Store</h4>
                <p>Affordable school supplies: pens, books, files, timetables & everything for young learners.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Call to Action */}
      <div style={{ backgroundColor: 'var(--accent-light)', padding: '2rem 0' }}>
        <Container>
          <h5 style={{ color: 'var(--deep-indigo)' }}>
            Ready to grow your faith and support local language culture?
          </h5>
          <Button as={Link} to="/contact" variant="outline-dark" size="md" className="mt-2">
            Contact Us
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
