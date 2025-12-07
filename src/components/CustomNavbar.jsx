import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar({ scrolled }) {
  return (
    <Navbar expand="lg" fixed="top" className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="#home" className="nav-brand-text">
         ThreadTech<span className="brand-dot">.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ filter: 'invert(1)' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
           <Nav.Link href="#courts" className="nav-link-custom">Store</Nav.Link>
            <Nav.Link href="#coaching" className="nav-link-custom">About</Nav.Link>
            <Nav.Link href="#events" className="nav-link-custom">Why us</Nav.Link>
            <Nav.Link href="#membership" className="nav-link-custom">Production</Nav.Link>
     <Nav.Link href="#Contactus" className="nav-link-custom">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
