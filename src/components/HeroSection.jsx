import React from 'react';
import { Container } from 'react-bootstrap';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-overlay"></div>
      <div className="vertical-text vertical-left">
        123 Anywhere St., Any City, ST 12345
      </div>
      <div className="vertical-text vertical-right">
        Est. 2025
      </div>
      <Container>
        <div className="hero-content">
          <h6 className="top-small-text">ThreadTech Club</h6>
          <h1 className="main-headline">
            Eat,<br />
            <span className="highlight-container">Sleep</span>,<br />
            sports<br />
            Repeat.
          </h1>
          <p className="description-text">
           DESIGN. PRODUCE. DELIVER. Your Team's Gear, Optimized for Performance.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
