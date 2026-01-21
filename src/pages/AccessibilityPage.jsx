import React from 'react';
import { Link } from 'react-router-dom';
import { Accessibility, ArrowRight, HeartPulse, PhoneCall, ShieldCheck, PersonStanding } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';
import { accessibilityAccordionItems } from '../data/accessibility';

export default function AccessibilityPage() {
  return (
    <PageTransition>
      <div className="relative h-[46vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE_3})` }}
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <Accessibility className="w-4 h-4" /> ACCESSIBILITY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Special Assistance & Accessibility</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Guidance for passengers who need extra support at the airport (demo content).
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Quick actions</div>
              <div className="mt-2 text-2xl font-extrabold text-slate-900">Get help quickly</div>
              <p className="mt-2 text-slate-600">
                For wheelchair assistance and escorts, it’s best to request via your airline.
              </p>

              <div className="mt-6 space-y-3">
                <Button to="/contact" className="rounded-xl w-full h-12">
                  <PhoneCall className="w-5 h-5" /> Contact Support
                </Button>
                <Button to="/passenger-guide" variant="outline" className="rounded-xl w-full h-12">
                  Passenger Guide
                </Button>
              </div>

              <div className="mt-6 text-xs text-slate-500">
                For urgent issues at the airport, ask the nearest staff member.
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[{
                icon: PersonStanding,
                title: 'Mobility assistance',
                desc: 'Wheelchairs, escorts, and priority support.',
              }, {
                icon: ShieldCheck,
                title: 'Screening support',
                desc: 'Request extra time or private screening options.',
              }, {
                icon: HeartPulse,
                title: 'Medical help',
                desc: 'First aid and emergency guidance on-site.',
              }, {
                icon: Accessibility,
                title: 'Step-free routes',
                desc: 'Accessible routes and facilities (demo).',
              }].map((c) => (
                <div key={c.title} className="bg-slate-50 rounded-3xl border border-slate-200 p-6">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-primary">
                    <c.icon className="w-6 h-6" />
                  </div>
                  <div className="mt-4 text-lg font-extrabold text-slate-900">{c.title}</div>
                  <div className="mt-1 text-slate-600 text-sm leading-relaxed">{c.desc}</div>
                </div>
              ))}
            </div>

            <div className="bg-emerald-50 rounded-3xl border border-emerald-100 p-8">
              <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Tip</div>
              <div className="mt-1 text-xl font-extrabold text-emerald-900">Request assistance early</div>
              <div className="mt-1 text-emerald-800/80">
                Airlines can prepare better when requests are made in advance.
              </div>
              <div className="mt-5">
                <Button to="/contact" className="rounded-xl h-12 px-6">
                  Ask for help <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Accordion items={accessibilityAccordionItems} />

            <div className="mt-8 bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Also useful</div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/airport-map" className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50 transition-colors">
                  <div className="font-extrabold text-slate-900">Airport Map</div>
                  <div className="text-sm text-slate-600 mt-1">Find entrances, terminals, and key areas.</div>
                </Link>
                <Link to="/lost-found" className="rounded-2xl border border-slate-200 p-5 hover:bg-slate-50 transition-colors">
                  <div className="font-extrabold text-slate-900">Lost &amp; Found</div>
                  <div className="text-sm text-slate-600 mt-1">Get steps for missing items or baggage.</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
