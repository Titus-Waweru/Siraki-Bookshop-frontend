import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={12}>
          <h2 className="text-center mb-3" style={{ fontWeight: 'bold' }}>About Siraki Wisdom & Bookshop</h2>
          <p className="text-center text-muted">
            Rooted in faith. Driven by culture. Empowering minds for generations.
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
          <h4>📖 Our Story</h4>
          <p>
            Siraki Wisdom & Bookshop was born out of a vision to preserve cultural identity, promote Christian values,
            and foster academic excellence within Kenyan communities. Our founders, inspired by Proverbs 4:7 — "Wisdom is the principal thing," established the bookshop to be more than a store — but a movement.
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
          <h4>🛍️ What We Offer</h4>
          <ul>
            <li>Authentic Kikuyu and Swahili Bibles</li>
            <li>Christian books, devotionals, and resources</li>
            <li>School supplies and revision materials</li>
            <li>Wisdom literature and inspirational reads</li>
            <li>Cultural storytelling and digital downloads</li>
          </ul>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={12}>
          <h4>🎯 Our Mission</h4>
          <p>
            To make wholesome, faith-based, and culturally relevant content accessible to every household — both in print and digitally. We believe every book has the power to shape a soul, and every Bible can change a generation.
          </p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={12}>
          <h4>💡 Why Choose Us?</h4>
          <ul>
            <li><strong>Faith-Centered:</strong> Every product is chosen with spiritual growth in mind.</li>
            <li><strong>Community-Driven:</strong> We listen, grow, and evolve with the needs of our people.</li>
            <li><strong>Affordable:</strong> We believe knowledge should never be overpriced.</li>
            <li><strong>Locally Rooted:</strong> We embrace and promote our Kikuyu heritage while being accessible nationwide.</li>
          </ul>
        </Col>
      </Row>

      <Row className="text-center">
        <Col>
          <h5 style={{ color: '#6c757d' }}>
            📍 Located in the heart of Kenya. Shipping countrywide. Changing lives daily.
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
