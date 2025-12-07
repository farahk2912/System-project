import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

function ExploreSection() {
  return (

    <Container className="my-5 py-5" >
      <Row className="align-items-center" >
        <Col md={5}>
          <p className="text-orange fw-bold small text-uppercase">• The Benefit</p>
          <h2 className="display-5 fw-bold mb-4">See 🎾 Your <br/> Order Come to Life.</h2>
          <div className="border-bottom py-3 d-flex justify-content-between align-items-center">
            <span className="fw-bold">⚡ Design & Order Management</span>
          </div>
          <div className="border-bottom py-3 d-flex justify-content-between align-items-center">
            <span className="text-muted">Game Jersey</span>
          </div>
          <div className="mt-5">
            <p className="fw-bold">Production</p>
            <p className="text-muted small">Real-Time Production Tracking.</p>
            <hr />
            <div className="d-flex justify-content-between">
              <span>Sport Package</span>
              <span>+</span>
            </div>
          </div>
        </Col>
        <Col md={6} className="offset-md-1">
        </Col>
      </Row>
    </Container>
  );
}

export default ExploreSection;
