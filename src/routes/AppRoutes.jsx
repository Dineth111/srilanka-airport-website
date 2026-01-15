import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home'; // <-- change: use Home.jsx instead of HomePage
import FlightsPage from '../pages/FlightsPage';
import PassengerGuidePage from '../pages/PassengerGuidePage';
import AirportsPage from '../pages/AirportsPage';
import AirportDetailsPage from '../pages/AirportDetailsPage';
import ServicesPage from '../pages/ServicesPage';
import ContactPage from '../pages/ContactPage';
import AirlinesPage from '../pages/AirlinesPage';
import TransportPage from '../pages/TransportPage';
import TransportBookingPage from '../pages/TransportBookingPage';
import ParkingPage from '../pages/ParkingPage';
import ParkingBookingPage from '../pages/ParkingBookingPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} /> {/* <-- change */}
          <Route path="/flights" element={<FlightsPage />} />
          <Route path="/airlines" element={<AirlinesPage />} />
          <Route path="/passenger-guide" element={<PassengerGuidePage />} />
          <Route path="/airports" element={<AirportsPage />} />
          <Route path="/airports/:id" element={<AirportDetailsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/transport" element={<TransportPage />} />
          <Route path="/transport/book/:mode" element={<TransportBookingPage />} />
          <Route path="/parking" element={<ParkingPage />} />
          <Route path="/parking/book/:zone" element={<ParkingBookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
