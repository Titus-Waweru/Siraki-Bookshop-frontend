import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--soft-beige)', minHeight: '100vh' }}>
      <Container className="py-5 text-center">
        <Row>
          <Col>
            <h1 className="mb-3 fw-bold" style={{ color: 'var(--deep-indigo)', fontSize: '2.75rem' }}>
              Welcome to Siraki Wisdom & Bookshop
            </h1>
            <p className="lead mx-auto" style={{ fontSize: '1.3rem', maxWidth: '720px' }}>
              Discover a sacred space where <strong>faith meets education</strong>, and the power of <strong>language nurtures culture</strong>. We’re here to inspire every generation—young and old.
            </p>
            <Button
              as={Link}
              to="/products"
              variant="warning"
              size="lg"
              className="mt-4 px-4 py-2 fw-semibold"
            >
              📚 Browse Our Store
            </Button>
          </Col>
        </Row>

        {/* Highlights Section */}
        <Row className="mt-5">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h4 className="mb-2" style={{ color: 'var(--burnt-maroon)' }}>🕊️ Faith & Devotion</h4>
                <p className="text-muted">
                  Dive into rare Kikuyu Bibles, powerful devotionals, and heartfelt family-oriented Christian resources to enrich your spiritual journey.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h4 className="mb-2" style={{ color: 'var(--burnt-maroon)' }}>🎒 Children’s Learning Corner</h4>
                <p className="text-muted">
                  Unlock creativity and faith in young hearts with colorful Sunday School books, charts, and wholesome storybooks they'll love.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <h4 className="mb-2" style={{ color: 'var(--burnt-maroon)' }}>✍️ Siraki Supplies</h4>
                <p className="text-muted">
                  From exercise books to pens, timetables to files — we offer budget-friendly essentials for every learner’s success.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Call to Action */}
      <div style={{ backgroundColor: 'var(--accent-light)', padding: '3rem 0' }}>
        <Container className="text-center">
          <h5 className="fw-bold mb-2" style={{ color: 'var(--deep-indigo)' }}>
            Join us in preserving language, growing faith, and empowering education.
          </h5>
          <p className="text-muted mb-3">
            We’re more than a bookstore — we’re a movement rooted in wisdom, heritage, and purpose.
          </p>
          <Button
            as={Link}
            to="/contact"
            variant="outline-dark"
            size="md"
            className="px-4 fw-semibold"
          >
            ✉️ Contact Us Today
          </Button>
        </Container>
      </div>
    </div>
  );
};

export default Home;
