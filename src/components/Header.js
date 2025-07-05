import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logosi.png';

const Header = () => (
  <Navbar fixed="top" expand="lg" style={{ backgroundColor: '#6C4F3D' }}>
    <Container>
      <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-white">
        <img
          src={logo}
          alt="Siraki Bookshop Logo"
          height="40"
          className="me-2"
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Siraki Bookshop</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={navLinkStyle}>Home</Nav.Link>
          <Nav.Link as={Link} to="/products" style={navLinkStyle}>Products</Nav.Link>
          <Nav.Link as={Link} to="/about" style={navLinkStyle}>About</Nav.Link>
          <Nav.Link as={Link} to="/contact" style={navLinkStyle}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

const navLinkStyle = {
  color: '#fff',
  marginLeft: '1rem',
  fontWeight: '500',
  fontSize: '1rem',
  textDecoration: 'none',
};

export default Header;
