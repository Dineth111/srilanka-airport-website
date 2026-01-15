import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Bus, Train, MapPin, ArrowRight, Info } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { IMAGES } from '../constants/images';

const TRANSPORT_OPTIONS = [
  {
    id: 'taxi',
    title: 'Airport Taxi',
    icon: Car,
    description: 'Official airport taxi service available 24/7 at the arrival lobby. Fixed rates to major cities.',
    features: ['24/7 Availability', 'Fixed Rates', 'Air Conditioned'],
    color: 'bg-emerald-500',
    linkText: 'View Rates'
  },
  {
    id: 'bus',
    title: 'Express Bus',
    icon: Bus,
    description: 'Luxury expressway bus service connecting the airport directly to Colombo Fort main station.',
    features: ['Departures every 30m', 'Highway Route', 'Luggage Space'],
    color: 'bg-blue-500',
    linkText: 'View Schedule'
  },
  {
    id: 'train',
    title: 'Train Service',
    icon: Train,
    description: 'The nearest railway station is Katunayake South (1km away). Connections to Colombo and Negombo.',
    features: ['Economic Option', 'Scenic Route', 'Connects to North'],
    color: 'bg-indigo-500',
    linkText: 'Train Map'
  },
  {
    id: 'rent',
    title: 'Car Rental',
    icon: MapPin,
    description: 'Self-drive and chauffeur-driven car rentals available from international and local providers.',
    features: ['International License', 'Insurance Included', 'Multiple Brands'],
    color: 'bg-orange-500',
    linkText: 'Book Now'
  }
];

export default function TransportPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[45vh] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.AIRPORTS.BIA})` }}
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              CONNECTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Getting To & From BIA
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Choose from a variety of convenient transport options to reach your destination safely and comfortably.
            </p>
          </motion.div>
        </div>
      </div>

      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRANSPORT_OPTIONS.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-6 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl ${option.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform`}>
                <option.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{option.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                {option.description}
              </p>

              <div className="space-y-3 mb-8">
                {option.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600 uppercase tracking-wide">
                    <div className={`w-1.5 h-1.5 rounded-full ${option.color}`} />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                to={`/transport/book/${option.id}`}
                className="w-full py-3 rounded-xl bg-slate-50 text-slate-800 font-bold text-sm hover:bg-slate-900 hover:text-white transition-colors flex items-center justify-center gap-2 group/btn"
              >
                {option.linkText}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Travel Tip Section */}
        <div className="mt-20 bg-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Info className="w-8 h-8" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Traveler Tip</h3>
              <p className="text-emerald-800/80 leading-relaxed">
                For the safest and most reliable service, we recommend using the official airport taxi counters located within the Arrivals lobby. Avoid soliciting taxi services from unauthorized individuals outside the terminal.
              </p>
            </div>
        </div>
      </Container>
    </PageTransition>
  );
}
