import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';
import { faqAccordionItems } from '../data/helpCenter';

export default function FAQPage() {
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
              <HelpCircle className="w-4 h-4" /> HELP CENTER
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Quick answers for Wi‑Fi, baggage, security, and getting around the terminal.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Need more help?</div>
              <div className="mt-2 text-2xl font-extrabold text-slate-900">We’re here 24/7</div>
              <p className="mt-2 text-slate-600">
                If your question isn’t answered here, reach out to our support team.
              </p>

              <div className="mt-6 space-y-3">
                <Button to="/contact" className="rounded-xl w-full h-12">
                  <MessageCircle className="w-5 h-5" /> Contact Support
                </Button>
                <Button to="/lost-found" variant="outline" className="rounded-xl w-full h-12">
                  Lost & Found
                </Button>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                Demo site: contact numbers and times may be placeholders.
              </div>
            </div>

            <div className="mt-6 bg-slate-50 rounded-3xl border border-slate-200 p-6">
              <div className="text-sm font-extrabold text-slate-900">Useful links</div>
              <div className="mt-3 space-y-2 text-sm font-bold">
                <Link to="/flights" className="block text-slate-700 hover:text-primary">Flights</Link>
                <Link to="/passenger-guide" className="block text-slate-700 hover:text-primary">Passenger Guide</Link>
                <Link to="/transport" className="block text-slate-700 hover:text-primary">Transport</Link>
                <Link to="/services" className="block text-slate-700 hover:text-primary">Services</Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <Accordion items={faqAccordionItems} />
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
