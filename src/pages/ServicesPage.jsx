import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { services, servicesHighlights } from '../data/services';
import { IMAGES } from '../constants/images';

// Map IDs to Images
const SERVICE_IMAGES = {
  lounges: IMAGES.SERVICES.LOUNGE,
  dutyfree: IMAGES.SERVICES.DUTY_FREE,
  parking: IMAGES.SERVICES.PARKING
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  // Filter out the highlights from the main list to avoid duplication if needed, 
  // or just show all in a list below.
  const otherServices = services.filter(s => !['lounges', 'dutyfree', 'parking'].includes(s.id));

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-dark overflow-hidden">
        <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${IMAGES.COMMON.HEADER_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-transparent" />
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-16 relative z-10 text-center md:text-left">
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Experience <br/>Exceptional Comfort</h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              From premium lounges to world-class shopping, we ensure your time at the airport is as enjoyable as your destination.
            </p>
          </motion.div>
        </div>
      </div>

      <Container className="py-16">
        
        {/* Featured Services */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesHighlights.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedService(service)}
                className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${SERVICE_IMAGES[service.id]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="bg-white/20 backdrop-blur-md w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-300 mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {service.description}
                  </p>
                  <div className="flex items-center text-accent font-bold text-sm tracking-widest uppercase">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* More Amenities Grid */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Other Amenities</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">Everything you need for a smooth layover or departure.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {otherServices.map((s, i) => (
               <motion.div 
                 key={s.id}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 transition={{ delay: i * 0.05 }}
                 className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow"
               >
                 <div className="p-3 bg-secondary/10 rounded-xl text-secondary flex-shrink-0">
                   <s.icon className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                   <p className="text-sm text-slate-500">{s.description}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>

      </Container>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden w-full max-w-2xl shadow-2xl relative z-10"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-20 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="h-64 relative">
                 <div 
                  className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: `url(${SERVICE_IMAGES[selectedService.id]})` }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                 <div className="absolute bottom-0 left-0 w-full p-8">
                    <div className="flex items-center gap-3 mb-2">
                       <span className="p-2 bg-accent/20 rounded-lg text-accent-light backdrop-blur-md">
                         <selectedService.icon className="w-6 h-6" />
                       </span>
                       <h2 className="text-3xl font-bold text-white">{selectedService.title}</h2>
                    </div>
                 </div>
              </div>
              
              <div className="p-8">
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  {selectedService.description}
                </p>
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 mb-2">Location & Hours</h3>
                  <div className="space-y-2 text-slate-500">
                    <p>• Department / Departure Level</p>
                    <p>• Open 24 Hours</p>
                    <p>• Accessible to all passengers</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
