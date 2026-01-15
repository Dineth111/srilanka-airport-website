import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AirportDetailPage from './pages/AirportDetailPage';
import FlightsPage from './pages/FlightsPage';
import TransportPage from './pages/TransportPage';
import ServicesPage from './pages/ServicesPage';
import AirportsPage from './pages/AirportsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FlightStatusPreview from '../components/home/FlightStatusPreview';
import QuickLinks from '../components/home/QuickLinks';
import Services from '../components/home/Services';
import '../styles/home.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/airports/:code" element={<AirportDetailPage />} />
        <Route path="/flights" element={<FlightsPage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/airports" element={<AirportsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;