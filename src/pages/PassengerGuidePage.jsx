import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, CheckCircle2 } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { passengerGuideSections } from '../data/passengerGuide';
import { IMAGES } from '../constants/images';

export default function PassengerGuidePage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-dark overflow-hidden">
        <motion.div 
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 0.7 }}
           transition={{ duration: 1 }}
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${IMAGES.COMMON.HEADER_BG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/40" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent font-bold text-sm tracking-widest mb-4 backdrop-blur-sm">
              TRAVEL EASY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Journey <br/>Starts Here.
            </h1>
            <p className="text-lg text-slate-200 leading-relaxed drop-shadow-md">
              A complete step-by-step guide to navigating the airport, from check-in to your final destination.
            </p>
          </motion.div>
        </div>
      </div>

      <Container className="py-20 relative z-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {passengerGuideSections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row gap-8 md:gap-12"
              >
                {/* Number & Icon Column */}
                <div className="flex-shrink-0 flex flex-col items-center md:pt-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg text-white mb-4 relative z-10 group">
                    <section.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                  </div>
                  {index !== passengerGuideSections.length - 1 && (
                    <div className="w-0.5 flex-grow border-l-2 border-dashed border-slate-200 hidden md:block min-h-[200px]" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-grow">
                   <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
                     <div className="flex items-start justify-between mb-6">
                       <div>
                         <span className="text-sm font-bold text-secondary uppercase tracking-wider mb-2 block">Step 0{index + 1}</span>
                         <h2 className="text-2xl font-bold text-slate-800">{section.title}</h2>
                         <p className="text-slate-500 mt-1">{section.subtitle}</p>
                       </div>
                       {isEven && <Plane className="w-24 h-24 text-slate-50 absolute right-8 top-8 opacity-50 -rotate-12 pointer-events-none" />}
                     </div>
                     
                     <div className="space-y-4">
                       {section.items.map((item, i) => (
                         <div key={i} className="flex items-start gap-3 group">
                           <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                           <p className="text-slate-600 leading-relaxed">{item}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Help CTA */}
        <div className="mt-24 bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -ml-32 -mb-32" />
           
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-3xl font-bold mb-4">Need Special Assistance?</h2>
             <p className="text-primary-100 mb-8">Our team is dedicated to making your journey accessible and comfortable. Contact us 24/7 for support.</p>
             <Link to="/contact" className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-xl hover:bg-slate-100 transition-colors shadow-lg">
               Contact Support
             </Link>
           </div>
        </div>
      </Container>
    </PageTransition>
  );
}
