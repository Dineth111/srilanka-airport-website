import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Plane, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../ui/Container';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function NavItem({ to, end, children, ...props }) {
  const location = useLocation();
  const isActive = end ? location.pathname === to : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={classNames(
        'px-4 py-2 font-semibold text-base transition-all duration-150 border-b-2',
        isActive
          ? 'border-blue-600 text-blue-700 bg-blue-50'
          : 'border-transparent text-slate-700 hover:text-blue-600 hover:border-blue-300 bg-white'
      )}
      style={{ margin: '0 0.5rem', borderRadius: '0.5rem 0.5rem 0 0' }}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const allNavItems = [
    { to: '/', label: 'Home' },
    { to: '/flights', label: 'Flights' },
    { to: '/airports', label: 'Terminals' },
    { to: '/shop-dine', label: 'Shop & Dine' },
    { to: '/services', label: 'Services' },
    { to: '/transport', label: 'Transport' },
    { to: '/parking', label: 'Parking' },
    { to: '/news', label: 'News' },
    { to: '/passenger-guide', label: 'Guide' },
    { to: '/accessibility', label: 'Accessibility' },
    { to: '/travel-requirements', label: 'Travel Requirements' },
    { to: '/airport-map', label: 'Airport Map' },
    { to: '/faq', label: 'FAQ' },
    { to: '/lost-found', label: 'Lost & Found' },
    { to: '/about', label: 'About' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
    { to: '/contact', label: 'Contact' },
  ];

  // Important nav items
  const mainNavItems = [
    { to: '/', label: 'Home' },
    { to: '/flights', label: 'Flights' },
    { to: '/airports', label: 'Terminals' },
    { to: '/shop-dine', label: 'Shop & Dine' },
    { to: '/services', label: 'Services' },
    { to: '/transport', label: 'Transport' },
    { to: '/parking', label: 'Parking' },
    { to: '/news', label: 'News' },
    { to: '/passenger-guide', label: 'Guide' },
  ];
  // Extra nav items for dropdown
  const moreNavItems = [
    { to: '/accessibility', label: 'Accessibility' },
    { to: '/travel-requirements', label: 'Travel Requirements' },
    { to: '/airport-map', label: 'Airport Map' },
    { to: '/faq', label: 'FAQ' },
    { to: '/lost-found', label: 'Lost & Found' },
    { to: '/about', label: 'About' },
    { to: '/privacy', label: 'Privacy' },
    { to: '/terms', label: 'Terms' },
    { to: '/contact', label: 'Contact' },
  ];
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {/* Top horizontal navbar */}
      <motion.header
        className={
          'fixed top-0 left-0 right-0 z-50 w-full max-w-full ' +
          'border-b border-blue-200/40 shadow-2xl backdrop-blur-xl bg-white/80'
        }
        style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
      >
        <Container>
          <div className="h-16 flex items-center justify-between gap-2">
            {/* Logo */}
            <div className="flex items-center gap-2 min-w-[180px]">
              <Link to="/" className="flex items-center gap-2 group">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 text-white flex items-center justify-center font-bold shadow-lg shadow-blue-600/30 transition-transform group-hover:scale-105">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                    <path d="M22 2L2 22M22 2L15 22M22 2L2 15" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-base font-bold text-slate-900 tracking-tight">BIA AIRPORT</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold group-hover:text-blue-600 transition-colors">Official Portal</div>
                </div>
              </Link>
            </div>

            {/* Center: Navbar items, evenly spaced */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-1 bg-transparent p-2 relative" style={{ backdropFilter: 'blur(8px)' }}>
              {mainNavItems.map((item) => (
                <NavItem key={item.to} to={item.to} style={{ minWidth: '100px', textAlign: 'center', borderRadius: '1rem', padding: '0.75rem 1.25rem' }}>{item.label}</NavItem>
              ))}
              <div className="relative">
                <button
                  type="button"
                  className="px-4 py-2 font-semibold text-base transition-all duration-150 border-b-2 border-transparent text-slate-700 hover:text-blue-600 hover:border-blue-300 bg-white rounded-xl ml-1"
                  style={{ minWidth: '100px', textAlign: 'center', borderRadius: '1rem', padding: '0.75rem 1.25rem' }}
                  onClick={() => setShowMore((v) => !v)}
                >
                  More
                </button>
                {showMore && (
                  <div className="absolute left-0 mt-2 w-48 rounded-xl bg-white/95 shadow-xl border border-slate-200 z-50">
                    <ul className="py-2">
                      {moreNavItems.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            className="block px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                            onClick={() => setShowMore(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/flights"
                className="p-2.5 rounded-xl text-slate-600 hover:bg-white hover:text-blue-600 transition-colors"
                aria-label="Flights"
                title="Flights"
              >
                <Plane className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-sm font-extrabold shadow-lg shadow-blue-600/15 hover:from-blue-700 hover:to-emerald-700 transition-colors"
              >
                Support
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-slate-800"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              type="button"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>
      </motion.header>
      {/* Spacer for content */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
