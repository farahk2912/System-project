import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsApple, BsArrowUpRight } from 'react-icons/bs';

function MotivationSection() {
  return (
    <Container className="my-5 py-5">
      <Row className="align-items-center">
        <Col md={6} className="position-relative">
          <div className="rounded-xxl overflow-hidden">
            <img 
              src="/public/Kara Rosenlund - Weekend in Pictures – qualia.jpg" 
              className="w-100" alt="Basketball Hoop" 
            />
          </div>
          <div className="stat-card shadow">
            <div className="d-flex justify-content-between mb-3">
              <small className="fw-bold">● Activity</small>
              <span className="badge bg-danger">-12%</span>
            </div>
            <h2>2.780 <span className="fs-6 text-muted">Cal</span></h2>
            <div style={{height: '30px', background: 'url()'}}></div>
            <div className="d-flex justify-content-between mt-2 small text-muted">
              <span>127</span><span>386</span><span>249</span>
            </div>
          </div>
        </Col>
        <Col md={5} className="offset-md-1">
          <p className="text-uppercase small fw-bold text-muted">• Featured Features</p>
          <h2 className="display-5 fw-bold mb-4">Stay motivated with 🏀 Us.</h2>
          <div className="d-flex gap-3 mb-5">
            <Button variant="light" className="rounded-circle p-3"><BsApple /></Button>
            <Button variant="light" className="rounded-circle p-3"><BsArrowUpRight /></Button>
          </div>
          <p className="text-muted mb-4">Why Trust Your Team's Gear to Our Factory?<br/>We've invested in digital transformation to provide you with unparalleled reliability and value .</p>
          <p className="fw-bold">Guaranteed Quality</p>
          <Row className="align-items-center mt-5">
            <Col xs="auto">
              <Button variant="danger" className="bg-orange border-0 btn-circle p-4 rounded-circle">
                <BsArrowUpRight size={24} />
              </Button>
            </Col>
            <Col>
              <small className="fw-bold">EXPLORE MORE</small>
            </Col>
            <Col xs="auto">
              <div className="bg-light p-2 rounded-xl d-flex align-items-center gap-2">
                <img 
                  src="/public/download (73).jpg" 
                  className="rounded-circle" width="40" height="40" alt="user" 
                />
                <div>
                  <small className="d-block fw-bold">Coming Soon</small>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MotivationSection;
