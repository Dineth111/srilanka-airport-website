import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Navigation, ArrowRight, Clock, Shield, Info } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';

export default function AirportMapPage() {
  return (
    <PageTransition>
      <div className="relative h-[46vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.AIRPORTS.BIA})` }}
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <MapPin className="w-4 h-4" /> WAYFINDING
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Airport Map</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Find terminals, entrances, and key services quickly.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Quick links</div>
              <div className="mt-4 space-y-3">
                <Link to="/flights" className="block text-slate-700 hover:text-primary font-extrabold">Flights</Link>
                <Link to="/transport" className="block text-slate-700 hover:text-primary font-extrabold">Transport</Link>
                <Link to="/parking" className="block text-slate-700 hover:text-primary font-extrabold">Parking</Link>
                <Link to="/services" className="block text-slate-700 hover:text-primary font-extrabold">Services</Link>
              </div>

              <div className="mt-6">
                <Button
                  href="https://www.google.com/maps?q=Bandaranaike%20International%20Airport"
                  className="rounded-xl w-full h-12"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation className="w-5 h-5" /> Open in Google Maps
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Wayfinding tips</div>
              <div className="mt-4 space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-extrabold">Arrive early</div>
                    <div className="text-sm text-slate-600">Allow extra time for queues and security.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-extrabold">Follow signage</div>
                    <div className="text-sm text-slate-600">Terminal and gate signs guide you step-by-step.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-extrabold">Ask the Information Desk</div>
                    <div className="text-sm text-slate-600">Fastest help when you’re unsure.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between gap-3 flex-wrap">
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">Interactive map</div>
                  <div className="mt-1 text-2xl font-extrabold text-slate-900">Bandaranaike International Airport</div>
                </div>
                <Button to="/contact" variant="outline" className="rounded-xl h-11">
                  Need help?
                </Button>
              </div>

              <div className="p-4">
                <iframe
                  title="Airport Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.076935967667!2d79.88292631409549!3d7.119253994858882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6eb5f753%3A0x7d25e194eb84e56!2sBandaranaike%20International%20Airport!5e0!3m2!1sen!2slk!4v1689772421295!5m2!1sen!2slk"
                  width="100%"
                  height="520"
                  style={{ border: 0, borderRadius: '1.25rem' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                title: 'Terminal areas',
                desc: 'Arrivals, departures, transfers and counters.',
                to: '/airports',
              }, {
                title: 'Accessibility',
                desc: 'Special assistance and mobility guidance.',
                to: '/accessibility',
              }, {
                title: 'Passenger guide',
                desc: 'Check-in to boarding steps and tips.',
                to: '/passenger-guide',
              }].map((c) => (
                <Link
                  key={c.title}
                  to={c.to}
                  className="bg-slate-50 rounded-3xl border border-slate-200 p-6 hover:bg-white hover:shadow-lg transition-all"
                >
                  <div className="text-lg font-extrabold text-slate-900">{c.title}</div>
                  <div className="mt-1 text-sm text-slate-600">{c.desc}</div>
                  <div className="mt-4 text-primary font-extrabold text-sm inline-flex items-center gap-2">
                    Open <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
