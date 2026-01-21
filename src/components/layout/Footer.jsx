import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Shield, PlaneTakeoff } from 'lucide-react';
import Container from '../ui/Container';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="border-t border-white/10">
        <Container className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                  <PlaneTakeoff className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-extrabold tracking-tight">BIA Airport</div>
                  <div className="text-slate-400 text-sm">Bandaranaike International Airport</div>
                </div>
              </div>

              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                Your gateway to Sri Lanka — flight info, passenger guides, transport booking, and airport services in one place.
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm">
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-slate-400" /> 24/7 Operations
                </span>
                <span className="inline-flex items-center gap-2 text-slate-300">
                  <Shield className="w-4 h-4 text-slate-400" /> Passenger-first support
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-8">
              <div>
                <div className="text-white font-semibold">Explore</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
                  <li><Link to="/about" className="text-slate-300 hover:text-white">About</Link></li>
                  <li><Link to="/airlines" className="text-slate-300 hover:text-white">Airlines</Link></li>
                  <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
                  <li><Link to="/shop-dine" className="text-slate-300 hover:text-white">Shop &amp; Dine</Link></li>
                  <li><Link to="/airport-map" className="text-slate-300 hover:text-white">Airport Map</Link></li>
                  <li><Link to="/travel-requirements" className="text-slate-300 hover:text-white">Travel Requirements</Link></li>
                   <li><Link to="/news" className="text-slate-300 hover:text-white">News</Link></li>
                </ul>
              </div>
              <div>
                <div className="text-white font-semibold">Passenger</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link to="/flights" className="text-slate-300 hover:text-white">Flights</Link></li>
                  <li><Link to="/passenger-guide" className="text-slate-300 hover:text-white">Passenger Guide</Link></li>
                  <li><Link to="/faq" className="text-slate-300 hover:text-white">FAQ</Link></li>
                  <li><Link to="/lost-found" className="text-slate-300 hover:text-white">Lost &amp; Found</Link></li>
                  <li><Link to="/accessibility" className="text-slate-300 hover:text-white">Accessibility</Link></li>
                  <li><Link to="/transport" className="text-slate-300 hover:text-white">Transport</Link></li>
                  <li><Link to="/parking" className="text-slate-300 hover:text-white">Parking</Link></li>
                  <li><Link to="/airports" className="text-slate-300 hover:text-white">Terminals</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact + CTA */}
            <div className="lg:col-span-3">
              <div className="text-white font-semibold">Support</div>

              <div className="mt-4 space-y-3 text-sm">
                <p className="text-slate-300 inline-flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-slate-500" />
                  Katunayake, Sri Lanka
                </p>
                <p className="text-slate-300 inline-flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-500" /> +94 11 225 2861
                </p>
                <p className="text-slate-300 inline-flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-500" /> info@airport.lk
                </p>
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-colors"
                >
                  Get Help <ArrowUpRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-slate-500 mt-3">
                  Lost & found, accessibility, and urgent assistance.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} BIA Airport. All rights reserved.</div>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/privacy" className="text-slate-500 hover:text-white">Privacy</Link>
              <Link to="/terms" className="text-slate-500 hover:text-white">Terms</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
