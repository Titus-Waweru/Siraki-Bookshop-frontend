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

    const timestamp = new Date().toLocaleString();

    const dataToSend = {
      ...form,
      time: timestamp,
    };

    emailjs
      .send('service_zdjmj9a', 'template_cqakmvh', dataToSend, 'uLCxWjGGODQ3HHuTc')
      .then((result) => {
        console.log('✅ Email successfully sent!', result.text);
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('❌ EmailJS error:', error);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container className="py-5 font-manrope">
      <Row className="justify-content-center">
        <Col md={8}>
          <h2 className="text-center mb-3 fw-bold" style={{ color: 'var(--deep-indigo)' }}>
            📬 Let’s Talk — We're Listening
          </h2>
          <p className="text-center text-muted mb-4" style={{ fontSize: '1.05rem' }}>
            Have a question, comment, or need support? Whether you're reaching out about a product, an order,
            or simply want to connect — we’d love to hear from you. Use the form below, and we’ll reply within 24 hours.
          </p>

          {submitted && (
            <Alert variant="success">
              ✅ Thank you for reaching out! We've received your message and will get back to you shortly.
            </Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label className="fw-semibold">Full Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Jane Muthoni"
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-4">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Let us know how we can help..."
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </Form>

          <div className="mt-5 text-center text-muted" style={{ fontSize: '0.95rem' }}>
            <p className="mb-1">Prefer direct communication?</p>
            <p>
              ✉️ <strong>tituswaweru631@gmail.com</strong><br />
              📞 <strong>+254 745 745 186</strong>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
