import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { airports } from '../data/airports';
import { IMAGES } from '../constants/images';

export default function AirportsPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-dark overflow-hidden">
        <div 
           className="absolute inset-0 bg-cover bg-center opacity-60"
           style={{ backgroundImage: `url(${IMAGES.AIRPORTS.BIA})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 pt-16 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Airports</h1>
            <p className="text-slate-200 text-lg max-w-2xl mx-auto">
              Connecting Sri Lanka to the world through a network of modern aviation hubs.
            </p>
          </motion.div>
        </div>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {airports.map((airport, index) => (
            <motion.div
              key={airport.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/airports/${airport.id}`} className="block group h-full">
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  {/* Image Area */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={airport.image}
                      alt={airport.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-white">
                      <div>
                        <div className="flex items-center gap-1.5 mb-1 text-slate-200 text-sm">
                           <MapPin className="w-3.5 h-3.5" />
                           {airport.location}
                        </div>
                        <h2 className="text-2xl font-bold leading-tight shadow-sm">{airport.shortName}</h2>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 rounded-lg text-sm font-mono font-bold">
                        {airport.iata}
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                       <p className="text-slate-600 leading-relaxed mb-6">
                         {airport.description}
                       </p>
                    </div>
                    
                    <div className="flex items-center text-primary font-semibold group-hover:text-secondary transition-colors">
                      Explore Airport Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
