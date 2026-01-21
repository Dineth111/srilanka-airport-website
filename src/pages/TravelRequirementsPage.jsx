import React from 'react';
import { Link } from 'react-router-dom';
import { FileUser, Shield, FileText, AlertTriangle, Plane, Ban, ArrowRight } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';
import { travelRequirementsAccordionItems } from '../data/travelRequirements';

export default function TravelRequirementsPage() {
  return (
    <PageTransition>
      <div className="relative h-[46vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE_1})` }}
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <FileUser className="w-4 h-4" /> TRAVEL REQUIREMENTS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Travel Requirements</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Passport, visa, security, and health guidance for your journey.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Quick links</div>
              <div className="mt-4 space-y-3">
                <Link to="/faq" className="block text-slate-700 hover:text-primary font-extrabold">FAQ</Link>
                <Link to="/passenger-guide" className="block text-slate-700 hover:text-primary font-extrabold">Passenger Guide</Link>
                <Link to="/accessibility" className="block text-slate-700 hover:text-primary font-extrabold">Accessibility</Link>
                <Link to="/lost-found" className="block text-slate-700 hover:text-primary font-extrabold">Lost &amp; Found</Link>
              </div>

              <div className="mt-6">
                <Button to="/contact" className="rounded-xl w-full h-12">
                  Need help? <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-3xl border border-emerald-100 p-8">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Tip</div>
              <div className="mt-1 text-xl font-extrabold text-emerald-900">Check requirements early</div>
              <div className="mt-1 text-emerald-800/80">
                Entry and transit rules can change. Always check official sources before travel.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion items={travelRequirementsAccordionItems} />
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
