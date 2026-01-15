import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Globe, Plane } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { AIRLINE_ASSETS, DEFAULT_AIRCRAFT } from '../constants/airlineAssets';

// Helper to generate some metadata since we don't have it in the assets file
const getAirlineMeta = (name) => {
  const meta = {
    'SriLankan Airlines': { code: 'UL', contact: '+94 11 777 1979', website: 'srilankan.com', hub: 'Colombo (CMB)' },
    'Emirates': { code: 'EK', contact: '+94 11 470 4070', website: 'emirates.com', hub: 'Dubai (DXB)' },
    'Qatar Airways': { code: 'QR', contact: '+94 11 555 5555', website: 'qatarairways.com', hub: 'Doha (DOH)' },
    'Turkish Airlines': { code: 'TK', contact: '+94 11 590 0500', website: 'turkishairlines.com', hub: 'Istanbul (IST)' },
    'Singapore Airlines': { code: 'SQ', contact: '+94 11 249 9999', website: 'singaporeair.com', hub: 'Singapore (SIN)' },
    'British Airways': { code: 'BA', contact: '+44 20 794 0000', website: 'britishairways.com', hub: 'London (LHR)' },
  };
  return meta[name] || { code: '--', contact: 'Contact Agent', website: 'google.com', hub: 'International' };
};

export default function AirlinesPage() {
  return (
    <PageTransition>
      <Container className="py-16">
        {/* Simple Header (no highlight hero) */}
        <div className="mb-10">
          <div className="text-xs font-black tracking-[0.25em] text-primary uppercase">Connectivity</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Partner Airlines</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Airlines operating at BIA with quick contact and website links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(AIRLINE_ASSETS).map(([name, asset], index) => {
            const meta = getAirlineMeta(name);
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col"
              >
                {/* Visual Top (keep image, remove solid white logo rectangle) */}
                <div className="h-48 relative overflow-hidden bg-slate-100">
                  <img
                    src={asset.aircraft || DEFAULT_AIRCRAFT}
                    alt={`${name} aircraft`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = DEFAULT_AIRCRAFT;
                    }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl p-2 shadow-lg flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/25">
                      <img src={asset.logo} alt={name} className="w-full h-full object-contain" />
                    </div>
                    <div className="text-white">
                      <div className="text-sm font-bold opacity-80 uppercase tracking-widest">{meta.code}</div>
                      <div className="text-lg font-bold leading-none">{name}</div>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-slate-500 text-sm mb-3">
                      <Plane className="w-4 h-4" />
                      <span className="font-medium">Hub: <span className="text-slate-800 font-bold">{meta.hub}</span></span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Operating regular scheduled flights to and from Sri Lanka, connecting passengers to our extensive global network.
                    </p>
                  </div>

                  <div className="mt-auto grid grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <a 
                      href={`https://${meta.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors group/link"
                    >
                      <Globe className="w-3 h-3 group-hover/link:text-primary transition-colors" />
                      Visit Website
                    </a>
                    <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-50 text-slate-700 font-bold text-xs">
                      <Phone className="w-3 h-3" />
                      {meta.contact}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA / Support Section */}
        <div id="support" className="mt-20 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl transform -translate-x-32 translate-y-32" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Need Airline Support?</h3>
            <p className="text-white/80 mb-8 font-light">
              Can't find the information you're looking for? Our support team allows you to connect with airline representatives and airport services directly.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 transition-colors"
            >
              Contact Support Team
            </Link>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
