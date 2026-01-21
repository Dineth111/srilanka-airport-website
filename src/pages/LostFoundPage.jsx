import React from 'react';
import { Link } from 'react-router-dom';
import { BaggageClaim, PhoneCall, ArrowRight } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';
import { lostFoundAccordionItems } from '../data/helpCenter';

export default function LostFoundPage() {

  return (
    <PageTransition>
      <div className="relative h-[42vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.COMMON.HEADER_BG})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <BaggageClaim className="w-4 h-4" /> ASSISTANCE
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Lost & Found</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Steps to recover lost items and report missing baggage.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Quick action</div>
              <div className="mt-2 text-2xl font-extrabold text-slate-900">Contact Support</div>
              <p className="mt-2 text-slate-600">
                If you’re still at the airport, visit the nearest Information Desk.
              </p>

              <div className="mt-6 space-y-3">
                <Button to="/contact" className="rounded-xl w-full h-12">
                  <PhoneCall className="w-5 h-5" /> Contact Page
                </Button>
                <Button to="/faq" variant="outline" className="rounded-xl w-full h-12">
                  View FAQs
                </Button>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                For checked baggage: always contact your airline’s baggage desk first.
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
              <div className="text-sm font-extrabold text-slate-900">Also helpful</div>
              <div className="mt-3 space-y-2 text-sm font-bold">
                <Link to="/flights" className="block text-slate-700 hover:text-primary">Find your flight number</Link>
                <Link to="/passenger-guide" className="block text-slate-700 hover:text-primary">Passenger Guide</Link>
                <Link to="/services" className="block text-slate-700 hover:text-primary">Airport Services</Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Accordion items={lostFoundAccordionItems} />

            <div className="mt-8 bg-emerald-50 rounded-3xl border border-emerald-100 p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Tip</div>
                <div className="mt-1 text-xl font-extrabold text-emerald-900">Keep your baggage tag</div>
                <div className="mt-1 text-emerald-800/80">
                  The tag number speeds up tracing and recovery.
                </div>
              </div>
              <Button to="/contact" className="rounded-xl h-12 px-6">
                Get Help <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
