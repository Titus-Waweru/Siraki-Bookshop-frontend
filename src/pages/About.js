import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5 font-manrope">
      <Row className="mb-4 text-center">
        <Col md={12}>
          <h2 className="mb-3 fw-bold" style={{ color: 'var(--deep-indigo)', fontSize: '2.25rem' }}>
            About Siraki Wisdom & Bookshop
          </h2>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>
            Rooted in <strong>faith</strong>. Guided by <strong>culture</strong>. Empowering minds across generations.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <Image
            src="https://res.cloudinary.com/denzw9jcb/image/upload/v1751698064/fvbu9asberrwlpeabhlv.jpg"
            alt="Siraki Bookshop"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <h4 className="mb-3">📖 Our Story</h4>
          <p style={{ lineHeight: '1.7' }}>
            Siraki Wisdom & Bookshop began as a vision — a dream to protect our cultural identity, nurture Christian values,
            and champion academic growth. Inspired by Proverbs 4:7 — <em>"Wisdom is the principal thing"</em> —
            our founders built not just a bookshop, but a mission-driven movement to serve hearts, homes, and classrooms.
          </p>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6} className="order-md-2">
          <Image
            src="https://res.cloudinary.com/denzw9jcb/image/upload/v1751691176/pexels-jmark-272337_ocweue.jpg"
            alt="Kikuyu Bible and Educational Materials"
            fluid
            rounded
          />
        </Col>
        <Col md={6} className="order-md-1">
          <h4 className="mb-3">🛍️ What We Offer</h4>
          <ul style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li>📖 Authentic Kikuyu and Swahili Bibles</li>
            <li>📚 Christian books, devotionals, and spiritual resources</li>
            <li>📝 School supplies, revision kits & learning tools</li>
            <li>📘 Wisdom literature and inspirational content</li>
            <li>📲 Cultural storytelling & digital downloads</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <h4 className="mb-3">🎯 Our Mission</h4>
          <p style={{ lineHeight: '1.7' }}>
            Our mission is simple yet powerful: to make <strong>faith-based</strong> and <strong>culturally rooted</strong> content
            accessible to every home. Whether in print or digital, every book we offer carries the power to shape a heart and
            transform a generation.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <h4 className="mb-3">💡 Why Choose Us?</h4>
          <ul style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
            <li><strong>🙏 Faith-Centered:</strong> We curate every product with spiritual growth at heart.</li>
            <li><strong>👨‍👩‍👧‍👦 Community-Driven:</strong> We serve based on real needs, feedback, and love.</li>
            <li><strong>💸 Affordable:</strong> Knowledge and faith should never be out of reach.</li>
            <li><strong>🌍 Locally Rooted:</strong> We celebrate Kikuyu heritage while serving all corners of Kenya.</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h5 style={{ color: '#6c757d', fontWeight: '500' }}>
            📍 Based in Kenya. Shipping countrywide. Transforming lives — one book at a time.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
