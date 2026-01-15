import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, ArrowRight, Search, MapPin, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { IMAGES } from '../../constants/images';
import Container from '../ui/Container';

const SLIDES = [
  {
    id: 1,
    image: IMAGES.HERO.SLIDE_1,
    title: "Welcome to Sri Lanka",
    subtitle: "Your gateway to the wonder of Asia. Experience seamless travel with our world-class hospitality.",
    link: "/flights"
  },
  {
    id: 2,
    image: IMAGES.HERO.SLIDE_2,
    title: "World Class Terminals",
    subtitle: "State-of-the-art facilities designed for your comfort, efficiency, and safety.",
    link: "/services"
  },
  {
    id: 3,
    image: IMAGES.HERO.SLIDE_3,
    title: "Eco Friendly Aviation",
    subtitle: "Commited to a sustainable future for global travel through green initiatives.",
    link: "/about"
  }
];

function FlightSearchWidget() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('arrivals');
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/flights?tab=${tab}&q=${query}`);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] shadow-2xl max-w-lg w-full relative overflow-hidden group">
       <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/0 to-transparent pointer-events-none" />
       <div className="absolute -top-16 -right-16 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
       
       <div className="relative z-10">
         <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <Plane className="w-5 h-5 text-primary-light" />
            Find Your Flight
         </h3>

         <div className="flex gap-2 mb-6 bg-white/10 p-1 rounded-2xl border border-white/10">
            <button 
              onClick={() => setTab('arrivals')}
              className={
                `flex-1 py-3 rounded-xl text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ` +
                (tab === 'arrivals'
                  ? 'bg-primary/85 text-white shadow-lg shadow-primary/20'
                  : 'text-white/75 hover:bg-white/10')
              }
            >
              Arrivals
            </button>
            <button 
              onClick={() => setTab('departures')}
              className={
                `flex-1 py-3 rounded-xl text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ` +
                (tab === 'departures'
                  ? 'bg-primary/85 text-white shadow-lg shadow-primary/20'
                  : 'text-white/75 hover:bg-white/10')
              }
            >
              Departures
            </button>
         </div>

         <form onSubmit={handleSearch} className="flex flex-col gap-4">
            <div className="relative group/input">
               <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/50 w-5 h-5 group-focus-within/input:text-white transition-colors" />
               <input 
                 type="text" 
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
                 placeholder="Flight number, city, or airline..." 
                className="w-full pl-14 pr-4 py-5 bg-slate-950/25 border border-white/10 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium backdrop-blur-sm"
               />
            </div>
            
            <button type="submit" className="w-full py-5 bg-primary hover:bg-primary-light text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group/btn">
               <span>Track Flight</span>
               <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
         </form>

         <div className="mt-6 pt-5 border-t border-white/10 flex justify-between text-xs text-white/60 font-medium">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Live Updates</span>
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> BIA International</span>
         </div>
       </div>
    </div>
  );
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (index) => {
    const next = (index + SLIDES.length) % SLIDES.length;
    setCurrent(next);
  };

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative min-h-[92vh] w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${SLIDES[current].image})` }}
          />
          {/* Enhanced Gradients for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95" />
        </motion.div>
      </AnimatePresence>

      <Container className="relative min-h-[92vh] grid lg:grid-cols-12 gap-10 items-center">
        {/* Left Content */}
        <div className="lg:col-span-7 pt-24 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white/90 text-sm font-bold uppercase tracking-widest mb-8">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Official Airport Portal</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-7 leading-[1.05] tracking-tight">
                {SLIDES[current].title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 font-light leading-relaxed max-w-xl border-l-2 border-accent/70 pl-6">
                {SLIDES[current].subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  to={SLIDES[current].link}
                  className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all flex items-center gap-2 shadow-lg hover:-translate-y-1"
                >
                  Explore More
                </Link>
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all hover:-translate-y-1"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Widget (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-5 justify-end pt-24 pb-24">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="w-full flex justify-end"
           >
             <FlightSearchWidget />
           </motion.div>
        </div>
      </Container>

      {/* Prev/Next Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <Container className="flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="pointer-events-auto h-12 w-12 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="pointer-events-auto h-12 w-12 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </Container>
      </div>

      {/* Slide Indicators - Moved to left side vertical */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-20">
         {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-1 rounded-full transition-all duration-300 ${
                index === current ? 'h-12 bg-primary' : 'h-6 bg-white/20 hover:bg-white/40'
              }`}
            />
         ))}
      </div>

      {/* Bottom Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-slate-950/75 backdrop-blur-md border-t border-white/10 py-4 overflow-hidden z-20">
         <Container className="flex items-center gap-6">
            <span className="text-xs font-bold bg-primary text-white px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg shadow-primary/20">Updates</span>
            <div className="flex-1 overflow-hidden relative h-5">
               <motion.div 
                 animate={{ x: ["100%", "-100%"] }}
                 transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                 className="absolute whitespace-nowrap text-slate-300 text-sm font-medium"
               >
                 Terminal 2 Renovation Complete • New Direct Flights to Paris Announced • Stay Safe: Follow Health Guidelines • Weather Alert: Light Rain Expected in Evening in Colombo • Passenger Pick-up Zone C is now open
               </motion.div>
            </div>
         </Container>
      </div>
    </section>
  );
}
