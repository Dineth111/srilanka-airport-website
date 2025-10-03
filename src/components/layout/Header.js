import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-white font-bold text-2xl">Sri Lanka Airports</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-accent font-medium">Home</Link>
            <Link to="/flights" className="text-white hover:text-accent font-medium">Flight Info</Link>
            <Link to="/services" className="text-white hover:text-accent font-medium">Services</Link>
            <Link to="/about" className="text-white hover:text-accent font-medium">About</Link>
            <Link to="/contact" className="text-white hover:text-accent font-medium">Contact</Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-3">
            <Link to="/" className="block py-2 text-white hover:text-accent font-medium">Home</Link>
            <Link to="/flights" className="block py-2 text-white hover:text-accent font-medium">Flight Info</Link>
            <Link to="/services" className="block py-2 text-white hover:text-accent font-medium">Services</Link>
            <Link to="/about" className="block py-2 text-white hover:text-accent font-medium">About</Link>
            <Link to="/contact" className="block py-2 text-white hover:text-accent font-medium">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;