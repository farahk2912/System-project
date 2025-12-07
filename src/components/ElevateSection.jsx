import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { BsPlayFill } from 'react-icons/bs';

function ElevateSection() {
  return (
    <Container className="my-5" id="coaching">
      <div className="d-flex justify-content-between align-items-end mb-5" >
        <div>
          <Badge bg="light" text="dark" className="mb-2">Sport Challenges</Badge>
          <h2 className="display-5 fw-bold">Elevate your 🏓 experience <br/> with handpicked featured Items.</h2>
          <h1 className="display-1 fw-light mt-3">01<span className="fs-4 text-muted">/3</span></h1>
        </div>
        <div className="text-end">
          <p className="text-muted">Your sports journey starts <br/> right here with us and the crew.</p>
        </div>
      </div>
      <Row>
        <Col md={5}>
          <div className="bg-dark text-white p-5 rounded-xxl h-100 d-flex flex-column justify-content-between">
            <h4>The coach experts 👥 and simple software ⚙️ for better sportainment and Gear.</h4>
            <div className="d-flex justify-content-between align-items-center mt-5">
              <div className="d-flex align-items-center gap-2">
                <BsPlayFill className="fs-3" /> Live
              </div>
              <span className="border rounded-pill px-3 py-1 small">ThreadTech.com</span>
            </div>
          </div>
        </Col>
        <Col md={7}>
          <div className="position-relative rounded-xxl overflow-hidden h-100">
            <img src="/pickleball mornings.jpg" 
              className="w-100 h-100 object-fit-cover" alt="Tennis Court" />
            <div className="position-absolute bottom-0 start-0 p-4 text-black">
              <h3>We will become your <br/> Sports Partner</h3>
            </div>
            <div className="position-absolute top-0 end-0 p-3">
              <div className="glass-card p-3 rounded-xl text-center">
                <div className="bg-success rounded-circle p-2 mx-auto mb-2" style={{width: 40, height: 40}}></div>
                <small className="d-block fw-bold">Active</small>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ElevateSection;
