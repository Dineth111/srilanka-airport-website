import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, MapPin, Phone, Mail, Clock, Wifi, Coffee, Briefcase, ShoppingBag, DollarSign, Users, Star, ArrowRight } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Navbar from '../components/layout/Navbar';

export default function AirportDetailPage() {
  const { code } = useParams();

  const airportsData = {
    BIA: {
      name: 'Bandaranaike International Airport',
      code: 'BIA',
      location: 'Katunayake, Colombo',
      image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?q=80&w=1200',
      rating: 4.8,
      reviews: 2450,
      description: 'The primary international gateway to Sri Lanka with world-class facilities and services. Located just 35km north of Colombo, BIA handles over 9 million passengers annually.',
      coordinates: '6.9271° N, 80.7789° E',
      phone: '+94 112 252 861',
      email: 'info@airport.lk',
      operatingHours: '24/7',
      facilities: [
        { icon: Coffee, name: 'Cafes & Restaurants', count: '12+' },
        { icon: ShoppingBag, name: 'Duty Free Shops', count: '45+' },
        { icon: Wifi, name: 'Free WiFi', count: 'Available' },
        { icon: Briefcase, name: 'Business Lounge', count: '3' },
        { icon: DollarSign, name: 'Currency Exchange', count: '24/7' },
        { icon: Users, name: 'Information Desk', count: '24/7' }
      ],
      terminals: [
        { name: 'Terminal 1', gates: 24, capacity: '8M passengers/year' },
        { name: 'Terminal 2 (New)', gates: 28, capacity: '4M passengers/year' }
      ],
      airlines: ['SriLankan Airlines', 'Mihin Lanka', 'Emirates', 'Qatar Airways', 'Turkish Airlines', 'Singapore Airlines'],
      destinations: 87
    },
    HRI: {
      name: 'Mattala Rajapaksa International Airport',
      code: 'HRI',
      location: 'Hambantota, Southern Province',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200',
      rating: 4.5,
      reviews: 890,
      description: 'The second international airport serving the southern regions with modern amenities. Located 220km south of Colombo, HRI is designed to boost regional tourism and connectivity.',
      coordinates: '6.2806° N, 81.2722° E',
      phone: '+94 412 223 222',
      email: 'info@mattalaairport.lk',
      operatingHours: '24/7',
      facilities: [
        { icon: Coffee, name: 'Cafes & Restaurants', count: '8+' },
        { icon: ShoppingBag, name: 'Duty Free Shops', count: '25+' },
        { icon: Wifi, name: 'Free WiFi', count: 'Available' },
        { icon: Briefcase, name: 'Business Lounge', count: '2' },
        { icon: DollarSign, name: 'Currency Exchange', count: '24/7' },
        { icon: Users, name: 'Information Desk', count: '24/7' }
      ],
      terminals: [
        { name: 'Main Terminal', gates: 18, capacity: '3M passengers/year' }
      ],
      airlines: ['SriLankan Airlines', 'Mihin Lanka', 'Oman Air'],
      destinations: 32
    },
    RML: {
      name: 'Ratmalana International Airport',
      code: 'RML',
      location: 'Colombo, Western Province',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200',
      rating: 4.3,
      reviews: 650,
      description: 'Historic airport serving domestic and regional flights with heritage charm. Located within Colombo city limits, RML is the oldest civil airport in Sri Lanka.',
      coordinates: '6.8241° N, 79.8641° E',
      phone: '+94 112 398 508',
      email: 'info@ratmalana.lk',
      operatingHours: '06:00 - 22:00',
      facilities: [
        { icon: Coffee, name: 'Cafes', count: '4' },
        { icon: ShoppingBag, name: 'Shops', count: '10+' },
        { icon: Wifi, name: 'WiFi', count: 'Available' },
        { icon: Briefcase, name: 'Lounge', count: '1' },
        { icon: DollarSign, name: 'Currency Exchange', count: 'Business Hours' },
        { icon: Users, name: 'Information Desk', count: 'Business Hours' }
      ],
      terminals: [
        { name: 'Main Terminal', gates: 6, capacity: '1M passengers/year' }
      ],
      airlines: ['SriLankan Airlines', 'Cinnamon Air', 'Heli Tours'],
      destinations: 8
    }
  };

  const airport = airportsData[code];

  if (!airport) {
    return (
      <PageTransition>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center pt-40">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Airport Not Found</h1>
            <p className="text-slate-600 mb-8 text-lg">The airport code you're looking for doesn't exist.</p>
            <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 text-lg">
              ← Back to Home
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Back Button */}
        <div className="bg-gradient-to-b from-blue-50 to-white border-b border-slate-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 pt-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Airports
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-96 overflow-hidden">
          <motion.div
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img
              src={airport.image}
              alt={airport.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/50 to-transparent" />
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative h-full flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                  {airport.code}
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg">{airport.code}</div>
                  <div className="text-sm text-white/80">Airport Code</div>
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-black text-white mb-4">{airport.name}</h1>
              
              <div className="flex flex-wrap gap-6 text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{airport.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg">{airport.rating} ({airport.reviews} reviews)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About the Airport</h2>
            <p className="text-lg text-slate-700 leading-relaxed">{airport.description}</p>
          </motion.section>

          {/* Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="text-sm text-slate-600 font-semibold mb-2">Coordinates</div>
              <div className="text-2xl font-bold text-slate-900">{airport.coordinates}</div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="text-sm text-slate-600 font-semibold mb-2">Operating Hours</div>
              <div className="text-2xl font-bold text-slate-900">{airport.operatingHours}</div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="text-sm text-slate-600 font-semibold mb-2">Airlines</div>
              <div className="text-2xl font-bold text-emerald-600">{airport.airlines.length}+</div>
            </div>

            <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
              <div className="text-sm text-slate-600 font-semibold mb-2">Destinations</div>
              <div className="text-2xl font-bold text-blue-600">{airport.destinations}+</div>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-semibold">Phone</div>
                    <a href={`tel:${airport.phone}`} className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors">
                      {airport.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-semibold">Email</div>
                    <a href={`mailto:${airport.email}`} className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors break-all">
                      {airport.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-600 font-semibold">Hours</div>
                    <div className="text-lg font-bold text-slate-900">{airport.operatingHours}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Facilities */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Airport Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {airport.facilities.map((facility, idx) => {
                const Icon = facility.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-lg text-slate-900">{facility.name}</h3>
                    </div>
                    <div className="text-2xl font-bold text-emerald-600">{facility.count}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Terminals */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Terminals</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {airport.terminals.map((terminal, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 border-slate-200 shadow-lg"
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{terminal.name}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-slate-600 font-semibold">Gates</div>
                      <div className="text-xl font-bold text-slate-900">{terminal.gates}</div>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 font-semibold">Annual Capacity</div>
                      <div className="text-xl font-bold text-emerald-600">{terminal.capacity}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Airlines */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Operating Airlines</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {airport.airlines.map((airline, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-slate-200 shadow-lg text-center hover:shadow-xl hover:border-emerald-400 transition-all"
                >
                  <div className="font-bold text-slate-900">{airline}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* CTA Section */}
        <section className="relative py-20 bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 mt-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-8">
                Ready to Book Your Flight?
              </h2>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/flights"
                  className="group px-12 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-2xl hover:scale-105"
                >
                  <span className="flex items-center gap-3">
                    Book Now
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/"
                  className="px-12 py-5 bg-white/20 text-white rounded-2xl font-bold text-lg border-2 border-white/40 hover:bg-white/30 transition-all shadow-xl"
                >
                  Back to Home
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}