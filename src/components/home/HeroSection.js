import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-primary">
      {/* Hero background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
          Welcome to Sri Lanka Airports
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-white text-center max-w-3xl">
          Your gateway to the pearl of the Indian Ocean. Discover world-class facilities and services.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/flights" 
            className="px-8 py-3 bg-accent text-gray-900 font-medium rounded-md shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Check Flight Status
          </Link>
          <Link 
            to="/services" 
            className="px-8 py-3 bg-white text-primary font-medium rounded-md shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;