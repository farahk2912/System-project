import React from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { BsArrowRight, BsArrowUpRight } from 'react-icons/bs';

function EventsSection() {
  return (
    <div className="bg-dark-custom py-5 overflow-hidden" id="membership">
      <Container>
        <Row className="mb-5">
          <Col md={8}>
            <p className="text-white small">• Our Production Pipeline</p>
            <h2 className="text-white display-5 fw-medium">
              Timeline from Concept to Delivery 🧢 We follow a 🥬 structured, disciplined methodology to ensure your custom apparel project meets its deadlines.
            </h2>
          </Col>
        </Row>

        <Row className="position-relative">
          <Col md={7} style={{zIndex: 2}}>
            <div className="event-item text-white d-flex justify-content-between align-items-center">
              <span className="fs-5">Order & Planning</span>
              <BsArrowUpRight />
            </div>

            <div className="event-item active d-flex justify-content-between align-items-center">
              <div>
                <span className="fs-4 fw-bold">Design & Architecture</span>
                <div className="mt-2 d-flex gap-2">
                  <Badge bg="white" text="dark" pill>Construction & Launch</Badge>
                  <Badge bg="transparent" border="light" pill>Packages Delivery</Badge>
                </div>
              </div>
              <Button variant="light" className="rounded-circle btn-circle"><BsArrowRight /></Button>
            </div>
          </Col>

          <Col md={5} className="position-relative">
            <div className="position-absolute top-0 start-0 w-100 h-100 rounded-xxl overflow-hidden" 
              style={{transform: 'rotate(5deg)', border: '1px solid #333'}}>
              <img 
                src="/download (73).jpg" 
                className="w-100 h-100 object-fit-cover" alt="Legs Tennis" 
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default EventsSection;
