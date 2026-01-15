import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleSystem from '../components/ParticleSystem';
import GlassCard from '../components/GlassCard';
import CountUpNumber from '../components/CountUpNumber';
import { useMousePosition, useParallaxScroll } from '../hooks';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const slides = [
    {
      id: 1,
      title: 'Sri Lanka Airports Authority',
      headline: 'Gateway to Paradise',
      description: 'Experience the future of aviation with our award-winning terminals.',
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=2400&auto=format&fit=crop',
      gradient: 'from-blue-600/90 via-purple-600/80 to-emerald-600/90',
      stats: { passengers: '15M+', satisfaction: '98%', onTime: '94%' },
    },
    {
      id: 2,
      title: 'Global Connectivity Hub',
      headline: 'Connecting Continents',
      description: 'State-of-the-art infrastructure with smart terminals.',
      image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2400&auto=format&fit=crop',
      gradient: 'from-emerald-600/90 via-teal-600/80 to-blue-600/90',
      stats: { routes: '320+', airlines: '45+', countries: '65+' },
    },
    {
      id: 3,
      title: 'Innovation Excellence',
      headline: '24/7 Smart Operations',
      description: 'AI-powered operations ensure a smooth travel experience.',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=2400&auto=format&fit=crop',
      gradient: 'from-purple-600/90 via-pink-600/80 to-orange-600/90',
      stats: { security: '99.9%', efficiency: '96%', innovation: 'AI-Powered' },
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="min-h-screen bg-blue-50 overflow-hidden">
      <Navbar />
      <section className="relative h-screen overflow-hidden">
        <ParticleSystem />
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[currentSlide].id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <motion.div 
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-10"
              >
                <h1 className="text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  {slides[currentSlide].headline}
                </h1>
                <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
                  {slides[currentSlide].description}
                </p>
                <div className="flex gap-6 pt-4">
                  <Link to="/services" className="px-12 py-5 bg-white text-slate-900 rounded-2xl font-bold text-lg">
                    Explore Services
                  </Link>
                  <Link to="/flights" className="px-12 py-5 bg-white/10 text-white rounded-2xl font-bold text-lg">
                    Live Flights
                  </Link>
                </div>
              </motion.div>
              <GlassCard className="p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-white mb-2">Live Metrics</h3>
                </div>
                <div className="space-y-6">
                  {Object.entries(slides[currentSlide].stats).map(([key, value]) => (
                    <div key={key} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                      <span className="text-slate-300 font-semibold capitalize">{key}</span>
                      <span className="text-2xl font-black text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}