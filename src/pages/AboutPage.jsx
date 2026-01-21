import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Shield, Users, ArrowRight, Globe2, PlaneTakeoff } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="relative h-[46vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE_2})` }}
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <PlaneTakeoff className="w-4 h-4" /> ABOUT
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">BIA Airport Portal</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              A passenger-first experience: flights, guides, services, transport and more.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Our mission</div>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900">Make airport travel simple</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                This web app brings key airport information into one place: live-style flight status, passenger
                guidance, transport options, parking, services, and a demo “Shop & Dine” marketplace.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                It’s designed as a modern UI demo for an airport portal, with clear navigation and mobile-friendly pages.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button to="/flights" className="rounded-xl h-12 px-6">
                  View Flights <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/passenger-guide" variant="outline" className="rounded-xl h-12 px-6">
                  Passenger Guide
                </Button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                icon: Users,
                title: 'Passenger-first',
                desc: 'Clear guidance and common questions answered.',
              }, {
                icon: Shield,
                title: 'Safety & clarity',
                desc: 'Security and baggage guidance (demo content).',
              }, {
                icon: Globe2,
                title: 'All-in-one portal',
                desc: 'Flights, transport, services, parking and more.',
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
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Explore</div>
              <div className="mt-3 space-y-3 text-sm font-extrabold">
                <Link to="/services" className="block text-slate-700 hover:text-primary">Services</Link>
                <Link to="/transport" className="block text-slate-700 hover:text-primary">Transport</Link>
                <Link to="/parking" className="block text-slate-700 hover:text-primary">Parking</Link>
                <Link to="/shop-dine" className="block text-slate-700 hover:text-primary">Shop & Dine</Link>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-3xl border border-emerald-100 p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-emerald-700 uppercase tracking-wider">Note</div>
                  <div className="mt-1 text-lg font-extrabold text-emerald-900">Demo application</div>
                  <div className="mt-1 text-emerald-800/80 text-sm">
                    Flight data, pricing, and contact details are sample content unless connected to live systems.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
