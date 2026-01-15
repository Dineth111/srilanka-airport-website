import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, Bus, Train, KeyRound, ArrowLeft, Calendar, Clock, Users, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';

const MODES = {
  taxi: {
    title: 'Airport Taxi Booking',
    subtitle: 'Book an official airport taxi with fixed rates and 24/7 availability.',
    icon: Car,
    badge: 'OFFICIAL TAXI',
    accent: 'from-emerald-500 to-emerald-600',
  },
  bus: {
    title: 'Express Bus Booking',
    subtitle: 'Reserve your seat on the express bus to Colombo Fort (mock booking).',
    icon: Bus,
    badge: 'EXPRESS BUS',
    accent: 'from-blue-500 to-blue-600',
  },
  train: {
    title: 'Train Service Booking',
    subtitle: 'Plan your train connection from Katunayake South (mock booking).',
    icon: Train,
    badge: 'TRAIN CONNECT',
    accent: 'from-indigo-500 to-indigo-600',
  },
  rent: {
    title: 'Car Rental Booking',
    subtitle: 'Request a car rental (self-drive or chauffeur-driven) with your travel details.',
    icon: KeyRound,
    badge: 'CAR RENTAL',
    accent: 'from-orange-500 to-orange-600',
  },
};

function isPhone(value) {
  return /^\+?[0-9\s\-()]{7,}$/.test(String(value || '').trim());
}

export default function TransportBookingPage() {
  const { mode } = useParams();
  const config = MODES[mode] || MODES.taxi;

  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    pickup: 'Bandaranaike International Airport (BIA)',
    dropoff: '',
    date: '',
    time: '',
    passengers: '1',
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.fullName.trim()) e.fullName = 'Please enter your name.';
    if (!values.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!isPhone(values.phone)) e.phone = 'Please enter a valid phone number.';
    if (!values.dropoff.trim()) e.dropoff = 'Please enter your destination.';
    if (!values.date) e.date = 'Select a date.';
    if (!values.time) e.time = 'Select a time.';
    const p = Number(values.passengers);
    if (!Number.isFinite(p) || p < 1 || p > 12) e.passengers = 'Passengers must be between 1 and 12.';
    return e;
  }, [values]);

  function onChange(field) {
    return (event) => {
      setValues((v) => ({ ...v, [field]: event.target.value }));
      setSubmitted(false);
    };
  }

  function onBlur(field) {
    return () => setTouched((t) => ({ ...t, [field]: true }));
  }

  function onSubmit(event) {
    event.preventDefault();
    setTouched({ fullName: true, phone: true, dropoff: true, date: true, time: true, passengers: true });
    if (Object.keys(errors).length > 0) return;

    setSubmitted(true);
  }

  const Icon = config.icon;

  return (
    <PageTransition>
      {/* Hero */}
      <div className="relative h-[40vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.AIRPORTS.BIA})` }} />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <Icon className="w-4 h-4" /> {config.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{config.title}</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">{config.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <Container className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/transport" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Transport
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${config.accent} text-white mb-8 flex items-center gap-3`}>
                <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-widest uppercase opacity-90">Booking Request</div>
                  <div className="text-lg font-bold">Fill your details to book</div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                    <Input
                      placeholder="Your name"
                      value={values.fullName}
                      onChange={onChange('fullName')}
                      onBlur={onBlur('fullName')}
                      error={touched.fullName && errors.fullName}
                      className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Phone</label>
                    <Input
                      placeholder="+94 11 225 2861"
                      value={values.phone}
                      onChange={onChange('phone')}
                      onBlur={onBlur('phone')}
                      error={touched.phone && errors.phone}
                      className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Pickup</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      value={values.pickup}
                      onChange={onChange('pickup')}
                      onBlur={onBlur('pickup')}
                      className="w-full rounded-xl bg-slate-50 border border-slate-200 pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Destination</label>
                  <Input
                    placeholder="Colombo / Negombo / Galle"
                    value={values.dropoff}
                    onChange={onChange('dropoff')}
                    onBlur={onBlur('dropoff')}
                    error={touched.dropoff && errors.dropoff}
                    className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Date</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        value={values.date}
                        onChange={onChange('date')}
                        onBlur={onBlur('date')}
                        className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.date && errors.date ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                    {touched.date && errors.date ? <p className="text-sm text-red-500 mt-1">{errors.date}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Time</label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="time"
                        value={values.time}
                        onChange={onChange('time')}
                        onBlur={onBlur('time')}
                        className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.time && errors.time ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                    {touched.time && errors.time ? <p className="text-sm text-red-500 mt-1">{errors.time}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Passengers</label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="number"
                        min={1}
                        max={12}
                        value={values.passengers}
                        onChange={onChange('passengers')}
                        onBlur={onBlur('passengers')}
                        className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.passengers && errors.passengers ? 'border-red-500' : 'border-slate-200'}`}
                      />
                    </div>
                    {touched.passengers && errors.passengers ? <p className="text-sm text-red-500 mt-1">{errors.passengers}</p> : null}
                  </div>
                </div>

                <div className="pt-2">
                  <Button type="submit" className="w-full md:w-auto px-8 h-12 text-base bg-primary hover:bg-primary-dark shadow-lg shadow-primary/30">
                    Submit Booking
                  </Button>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-100 flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Booking request sent. Our team will contact you shortly.
                  </motion.div>
                )}
              </form>
            </div>

            {/* Side panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-7">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Support</div>
                <div className="text-lg font-bold text-slate-900 mb-2">Need help booking?</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  Call our support team for immediate assistance and guidance.
                </p>
                <div className="flex items-center gap-3 rounded-2xl bg-slate-50 border border-slate-100 p-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-800">Call Center</div>
                    <div className="text-slate-500 text-sm font-medium">+94 11 225 2861</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-7 text-white overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">Notice</div>
                  <div className="text-lg font-bold mb-2">This is a demo booking</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    This website uses mock data. Submissions do not create real bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
