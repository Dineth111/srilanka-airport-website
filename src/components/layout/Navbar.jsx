import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Plane } from 'lucide-react';
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
        'text-sm font-extrabold px-4 py-2.5 rounded-xl transition-colors',
        isActive
          ? 'text-blue-600 bg-white shadow-sm'
          : 'text-slate-700 hover:text-blue-600 hover:bg-white/70'
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  return (
    <div className="relative group" ref={ref} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={classNames(
          'text-sm font-extrabold px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5',
          open
            ? 'text-blue-600 bg-white shadow-sm'
            : 'text-slate-700 hover:text-blue-600 hover:bg-white/70'
        )}
      >
        {label}
        <ChevronDown className={classNames('h-4 w-4 transition-transform duration-300', open && 'rotate-180')} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-72 rounded-2xl border border-blue-100 bg-blue-50/95 backdrop-blur-xl shadow-2xl p-2 z-50 overflow-hidden"
          >
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className="block px-4 py-3 rounded-xl hover:bg-blue-50 transition-colors group/item"
                onClick={() => setOpen(false)}
              >
                <div className="font-bold text-slate-800 group-hover/item:text-blue-600 transition-colors flex items-center justify-between">
                  {it.label}
                  <ChevronDown className="-rotate-90 w-4 h-4 opacity-0 group-hover:item:opacity-100 transition-all -translate-x-2 group-hover:item:translate-x-0 text-blue-600" />
                </div>
                {it.description ? <div className="text-xs text-slate-500 font-medium mt-1 leading-snug">{it.description}</div> : null}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

  const flightItems = useMemo(
    () => [
      { to: '/flights?tab=arrivals', label: 'Arrivals', description: 'Live flight arrival times and status' },
      { to: '/flights?tab=departures', label: 'Departures', description: 'Departure schedules and gate info' },
      { to: '/airlines', label: 'Airlines', description: 'Airlines operating at BIA' },
    ],
    []
  );

  return (
    <>
      {/* Fixed header */}
      <motion.header
        className={
          'fixed top-0 left-0 right-0 z-50 ' +
          'border-b border-blue-200/70 ' +
          (scrolled
            ? 'bg-gradient-to-b from-blue-50/95 via-white/90 to-white/85 backdrop-blur-xl shadow-xl shadow-slate-900/10'
            : 'bg-gradient-to-b from-blue-50/85 via-white/75 to-white/70 backdrop-blur-xl shadow-lg shadow-slate-900/5')
        }
      >
        <Container>
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
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

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center bg-white/60 p-1.5 rounded-2xl border border-blue-200/70 shadow-sm">
              <NavItem to="/" end>Home</NavItem>
              <div className="w-px h-4 bg-blue-200 mx-1" />
              <Dropdown label="Flights" items={flightItems} />
              <NavItem to="/passenger-guide">Guide</NavItem>
              <NavItem to="/transport">Transport</NavItem>
              <NavItem to="/parking">Parking</NavItem>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/airports">Terminals</NavItem>
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
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

      {/* Spacer */}
      <div className="h-16" aria-hidden="true" />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden fixed left-0 right-0 top-16 z-40 bg-blue-50/95 backdrop-blur-xl border-b border-blue-200 shadow-2xl overflow-hidden"
          >
            <Container className="py-5 space-y-2">
              <NavItem to="/" end>Home</NavItem>
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider mt-4">Flight Information</div>
              <Link to="/flights?tab=arrivals" className="block px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-xl">Arrivals</Link>
              <Link to="/flights?tab=departures" className="block px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-xl">Departures</Link>
              <Link to="/airlines" className="block px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-xl">Airlines</Link>
              
              <div className="h-px bg-slate-100 my-4" />
              <NavItem to="/passenger-guide">Passenger Guide</NavItem>
              <NavItem to="/transport">Transport</NavItem>
              <NavItem to="/parking">Parking</NavItem>
              <NavItem to="/services">Services</NavItem>
              <NavItem to="/airports">Terminals</NavItem>
              <NavItem to="/contact">Contact Support</NavItem>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
