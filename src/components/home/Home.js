import React from 'react';
import HeroSection from './HeroSection';
import FeaturedServices from './FeaturedServices';
import FlightStatus from './FlightStatus';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FlightStatus />
      <FeaturedServices />
    </div>
  );
};

export default Home;