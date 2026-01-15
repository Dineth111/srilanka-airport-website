import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { IMAGES } from '../../constants/images';

const AIRPORTS_DATA = [
  {
    id: 'bia',
    name: 'Bandaranaike Intl Airport',
    code: 'BIA',
    location: 'Katunayake',
    image: IMAGES.AIRPORTS.BIA,
    desc: 'The main international gateway to Sri Lanka.',
    link: '/airports/bia'
  },
  {
    id: 'mria',
    name: 'Mattala Rajapaksa Intl',
    code: 'HRI',
    location: 'Hambantota',
    image: IMAGES.AIRPORTS.MATTALA,
    desc: 'The second international airport serving the south.',
    link: '/airports/mria'
  },
  {
    id: 'ratmalana',
    name: 'Ratmalana Intl Airport',
    code: 'RML',
    location: 'Colombo',
    image: IMAGES.AIRPORTS.RATMALANA,
    desc: 'Colombo’s city airport for regional flights.',
    link: '/airports/ratmalana'
  },
  {
    id: 'jaffna',
    name: 'Jaffna Intl Airport',
    code: 'JAF',
    location: 'Palaly',
    image: IMAGES.AIRPORTS.JAFFNA,
    desc: 'Connecting the northern peninsula to the world.',
    link: '/airports/jaffna'
  }
];

export default function AirportsSection() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 opacity-50" />
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-primary-dark mb-4">Our Airports</h2>
            <p className="text-xl text-slate-600 max-w-2xl font-light">
              World-class aviation hubs connecting Sri Lanka to the globe.
            </p>
          </div>
          <Link 
            to="/airports" 
            className="group flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors"
          >
            View All Airports
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AIRPORTS_DATA.map((airport, index) => (
            <Link to={airport.link} key={airport.id} className="block group">
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative h-[400px] rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${airport.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-accent/90 text-primary-dark text-xs font-bold px-2 py-1 rounded">
                      {airport.code}
                    </span>
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 leading-tight">{airport.name}</h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                      {airport.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
