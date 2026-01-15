import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, Clock, MapPin, ArrowRight, CreditCard } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { IMAGES } from '../constants/images';

const PARKING_ZONES = [
  {
    id: 'short',
    title: 'Short Stay (Arrivals/Departures)',
    subtitle: 'Best for pickups, drop-offs, and quick terminal access.',
    priceHint: 'From LKR 300 / hour (demo)',
    perks: ['Closest to terminal', 'CCTV monitored', '24/7 security'],
    accent: 'from-sky-500 to-blue-600',
  },
  {
    id: 'long',
    title: 'Long Stay (Daily Parking)',
    subtitle: 'Ideal for trips and multi-day stays with better rates.',
    priceHint: 'From LKR 2,500 / day (demo)',
    perks: ['Shuttle to terminal', 'Covered options', 'Best value'],
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'premium',
    title: 'Premium (Covered + Priority)',
    subtitle: 'Covered parking with priority entry and premium bays.',
    priceHint: 'From LKR 5,000 / day (demo)',
    perks: ['Covered bays', 'Priority entry', 'Near terminal'],
    accent: 'from-violet-500 to-fuchsia-600',
  },
];

export default function ParkingPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <div className="relative h-[45vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.SERVICES.PARKING})` }} />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <Car className="w-4 h-4" /> PARKING
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Parking at BIA</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Choose a parking zone that fits your trip. Book a slot online (demo) and get a confirmation instantly.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/parking/book/short" className="rounded-2xl h-12 px-6 shadow-2xl">
                Book Parking
              </Button>
              <Button to="#zones" variant="outline" className="rounded-2xl h-12 px-6 bg-white/10 border-white/20 text-white hover:bg-white/15">
                View Zones
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust row */}
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900">Secure & monitored</div>
                <p className="mt-1 text-sm text-slate-600">CCTV coverage and airport security patrols.</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900">24/7 access</div>
                <p className="mt-1 text-sm text-slate-600">Park anytime — arrivals and departures supported.</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <div className="text-base font-extrabold text-slate-900">Fast checkout (demo)</div>
                <p className="mt-1 text-sm text-slate-600">Get an instant booking confirmation number.</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>

      {/* Zones */}
      <Container className="pb-20" id="zones">
        <div className="flex items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-black tracking-[0.25em] text-primary uppercase">Key Feature</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Choose your parking zone</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Select a zone and proceed to a quick booking form. (This is a demo — no real payments.)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PARKING_ZONES.map((z, index) => (
            <motion.div
              key={z.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${z.accent} text-white`}>
                <div className="text-sm font-black tracking-widest uppercase opacity-90">{z.id}</div>
                <div className="mt-1 text-2xl font-extrabold tracking-tight">{z.title}</div>
                <div className="mt-1 text-white/85 text-sm">{z.subtitle}</div>
              </div>
              <div className="p-6">
                <div className="text-sm font-bold text-slate-700">{z.priceHint}</div>
                <div className="mt-4 space-y-2">
                  {z.perks.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {p}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <Button to={`/parking/book/${z.id}`} className="rounded-2xl h-11 px-5">
                    Book Now <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Link to="/contact" className="text-sm font-bold text-slate-600 hover:text-primary inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Need help?
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-xs text-slate-500">
          Note: Pricing shown is for demo UI only.
        </div>
      </Container>
    </PageTransition>
  );
}
