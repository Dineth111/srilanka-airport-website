import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AIRPORT_DETAILS } from '../data/airportDetails';
import PageTransition from '../layouts/PageTransition';
import { ArrowLeft, Plane, MapPin, Briefcase, Coffee, Info } from 'lucide-react';

export default function AirportDetailsPage() {
  const { id } = useParams();
  const airport = AIRPORT_DETAILS[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!airport) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800">Airport Not Found</h1>
          <Link to="/" className="text-primary hover:underline mt-4 block">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${airport.image})` }}
        />
        <div className="absolute inset-0 bg-dark/60" />
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent text-primary-dark font-bold text-sm tracking-widest mb-4">
                {airport.code}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-xl max-w-4xl mx-auto">
                {airport.name}
              </h1>
              <p className="text-xl text-gray-200 flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5" /> {airport.location}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="bg-neutral-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="inline-flex items-center text-slate-500 hover:text-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">About the Airport</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {airport.description}
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-primary-dark mb-6">Facilities & Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: Briefcase, title: 'Business Center', desc: 'High-speed Wi-Fi and meeting rooms available.' },
                    { icon: Coffee, title: 'Lounges & Dining', desc: 'Premium lounges and multi-cuisine restaurants.' },
                    { icon: Info, title: 'Information Desk', desc: '24/7 assistance for all travelers.' },
                    { icon: Plane, title: 'Flight Services', desc: 'Seamless check-in and baggage handling.' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl h-fit">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Stats */}
            <div className="space-y-6">
              <div className="bg-primary-dark text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl" />
                <h3 className="text-xl font-bold mb-6 relative z-10">Key Statistics</h3>
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="text-white/60 text-sm">Annual Passengers</div>
                    <div className="text-3xl font-bold text-accent">{airport.stats.passengers}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Destinations</div>
                    <div className="text-3xl font-bold text-accent">{airport.stats.destinations}</div>
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Runway Length</div>
                    <div className="text-xl font-semibold">{airport.runways}</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-md border border-slate-100">
                <h3 className="text-xl font-bold text-primary-dark mb-4">Contact Information</h3>
                <p className="text-slate-600 mb-4">
                  Need assistance? Our team is available 24/7 to help you with your queries.
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">General Inquiry</span>
                    <span className="font-medium text-slate-900">+94 11 225 2861</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Flight Info</span>
                    <span className="font-medium text-slate-900">1919 (Hotline)</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}
