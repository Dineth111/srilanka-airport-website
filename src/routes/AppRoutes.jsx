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
import ShoppingDiningPage from '../pages/ShoppingDiningPage';
import ShopDineCartPage from '../pages/ShopDineCartPage';
import ShopDineCheckoutPage from '../pages/ShopDineCheckoutPage';
import ShopDineOrderSuccessPage from '../pages/ShopDineOrderSuccessPage';
import AboutPage from '../pages/AboutPage';
import FAQPage from '../pages/FAQPage';
import LostFoundPage from '../pages/LostFoundPage';
import AccessibilityPage from '../pages/AccessibilityPage';
import AirportMapPage from '../pages/AirportMapPage';
import TravelRequirementsPage from '../pages/TravelRequirementsPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsPage from '../pages/TermsPage';
import NotFoundPage from '../pages/NotFoundPage';
import NewsPage from '../pages/NewsPage';

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
          <Route path="/shop-dine" element={<ShoppingDiningPage />} />
          <Route path="/shop-dine/cart" element={<ShopDineCartPage />} />
          <Route path="/shop-dine/checkout" element={<ShopDineCheckoutPage />} />
          <Route path="/shop-dine/order-success" element={<ShopDineOrderSuccessPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/lost-found" element={<LostFoundPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
          <Route path="/airport-map" element={<AirportMapPage />} />
          <Route path="/travel-requirements" element={<TravelRequirementsPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
