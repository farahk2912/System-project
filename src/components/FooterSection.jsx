import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function FooterSection() {
  return (
    <footer className="footer-custom py-5 mt-5"  id="Contactus">
      <Container>
        <Row className="gy-5 ">
          <Col md={4}>
            <h2 className="footer-brand mb-4">ThreadTech<span className="text-white">.</span></h2>
            <p className="mb-4" style={{ maxWidth: '300px', lineHeight: '1.6' }}>
             For details on the system's needs, scope, and operational requirements, the primary project advocate is the Factory's management.
            </p>
            <div className="d-flex align-items-start mb-2">
              <span className="contact-icon">📍</span>
              <span>123 Anywhere St.<br/>Hanover City, ST 12345</span>
            </div>
          </Col>

          <Col md={4}>
            <h6 className="footer-heading">Call Us</h6>
            <a href="tel:+15551234567" className="footer-link">
              <span className="contact-icon">📞</span> Main Office: (555) 123-4567
            </a>
            <a href="tel:+15559876543" className="footer-link">
              <span className="contact-icon">🎾</span> Pro Shop: (555) 987-6543
            </a>
          </Col>

          <Col md={4}>
            <h6 className="footer-heading">Email Us</h6>
            <a href="mailto:info@handttennis.com" className="footer-link">
              <span className="contact-icon">✉️</span> General: info@ThreadTechTeam.com
            </a>
            <a href="mailto:coaching@handttennis.com" className="footer-link">
              <span className="contact-icon">👟</span> Store: store@ThreadTechTeam.com
            </a>
            <a href="mailto:events@handttennis.com" className="footer-link">
              <span className="contact-icon">📅</span> Events: events@ThreadTechTeam.com
            </a>
          </Col>
        </Row>

        <div className="footer-bottom text-center">
          <Row>
            <Col md={6} className="text-md-start">
              © 2025 ThreadTechTeam.
            </Col>
            <Col md={6} className="text-md-end mt-2 mt-md-0">
              <span className="mx-2">Privacy Policy</span>
              <span className="mx-2">Terms of Service</span>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}

export default FooterSection;
