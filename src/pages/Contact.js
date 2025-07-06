import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send('service_zdjmj9a', 'template_default', form, 'uLCxWjGGODQ3HHuTc')
      .then((result) => {
        console.log('Email successfully sent!', result.text);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        alert('❌ Failed to send message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-4">📬 Get in Touch With Us</h2>
          <p className="text-center text-muted mb-4">
            Whether you have a question about a product, an order, or a partnership — we’re here to help.
            Fill out the form below and we’ll get back to you within 24 hours.
          </p>

          {submitted && (
            <Alert variant="success">
              ✅ Thank you! Your message has been received. We'll get back to you soon.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Type your message here..."
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </Form>

          <div className="mt-4 text-center text-muted" style={{ fontSize: '0.9rem' }}>
            You can also email us directly at <strong>tituswaweru631@gmail.com</strong>
            <br />
            or call us on <strong>+254 745745186</strong>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
