import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import CustomNavbar from './components/CustomNavbar';
import HeroSection from './components/HeroSection';
import ExploreSection from './components/ExploreSection';
import ElevateSection from './components/ElevateSection';
import SportsCards from './components/SportsCards';
import MotivationSection from './components/MotivationSection';
import EventsSection from './components/EventsSection';
import FooterSection from './components/FooterSection';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      <CustomNavbar scrolled={scrolled} />
      <HeroSection />
      <SportsCards />
      <ExploreSection />
      <ElevateSection />
      <MotivationSection />
      <EventsSection />

      <FooterSection />
    </div>
  );
}

export default App;
