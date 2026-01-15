import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Car, ArrowLeft, Calendar, Clock, Hash, Phone, CheckCircle2 } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';

const ZONES = {
  short: {
    title: 'Short Stay Parking',
    subtitle: 'Quick access for pickups, drop-offs, and short terminal visits (demo booking).',
    badge: 'SHORT STAY',
    ratePerHour: 300,
    accent: 'from-sky-500 to-blue-600',
  },
  long: {
    title: 'Long Stay Parking',
    subtitle: 'Best for multi-day travel with better daily rates (demo booking).',
    badge: 'LONG STAY',
    ratePerHour: 150,
    accent: 'from-emerald-500 to-teal-600',
  },
  premium: {
    title: 'Premium Covered Parking',
    subtitle: 'Covered bays and priority entry (demo booking).',
    badge: 'PREMIUM',
    ratePerHour: 450,
    accent: 'from-violet-500 to-fuchsia-600',
  },
};

function isPhone(value) {
  return /^\+?[0-9\s\-()]{7,}$/.test(String(value || '').trim());
}

function hoursBetween(startDate, startTime, endDate, endTime) {
  if (!startDate || !startTime || !endDate || !endTime) return 0;
  const start = new Date(`${startDate}T${startTime}`);
  const end = new Date(`${endDate}T${endTime}`);
  const ms = end - start;
  if (!Number.isFinite(ms) || ms <= 0) return 0;
  return Math.ceil(ms / (1000 * 60 * 60));
}

function formatLkr(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 'LKR 0';
  return `LKR ${n.toLocaleString('en-US')}`;
}

export default function ParkingBookingPage() {
  const { zone } = useParams();
  const config = ZONES[zone] || ZONES.short;

  const [values, setValues] = useState({
    fullName: '',
    phone: '',
    vehicleNo: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
  });

  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const durationHours = useMemo(() => {
    return hoursBetween(values.startDate, values.startTime, values.endDate, values.endTime);
  }, [values.startDate, values.startTime, values.endDate, values.endTime]);

  const estimate = useMemo(() => {
    const hours = durationHours;
    const base = hours * config.ratePerHour;
    const serviceFee = hours > 0 ? 250 : 0;
    return {
      hours,
      base,
      serviceFee,
      total: base + serviceFee,
    };
  }, [durationHours, config.ratePerHour]);

  const errors = useMemo(() => {
    const e = {};
    if (!values.fullName.trim()) e.fullName = 'Please enter your name.';
    if (!values.phone.trim()) e.phone = 'Please enter your phone number.';
    else if (!isPhone(values.phone)) e.phone = 'Please enter a valid phone number.';
    if (!values.vehicleNo.trim()) e.vehicleNo = 'Please enter vehicle number.';
    if (!values.startDate) e.startDate = 'Select start date.';
    if (!values.startTime) e.startTime = 'Select start time.';
    if (!values.endDate) e.endDate = 'Select end date.';
    if (!values.endTime) e.endTime = 'Select end time.';

    const hours = hoursBetween(values.startDate, values.startTime, values.endDate, values.endTime);
    if (values.startDate && values.startTime && values.endDate && values.endTime && hours <= 0) {
      e.endTime = 'End time must be after start time.';
    }

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
    setTouched({
      fullName: true,
      phone: true,
      vehicleNo: true,
      startDate: true,
      startTime: true,
      endDate: true,
      endTime: true,
    });

    if (Object.keys(errors).length > 0) return;

    const id = `PK-${Math.random().toString(36).slice(2, 8).toUpperCase()}-${Date.now().toString().slice(-4)}`;
    setBookingId(id);
    setSubmitted(true);
  }

  return (
    <PageTransition>
      {/* Hero */}
      <div className="relative h-[40vh] bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.SERVICES.PARKING})` }} />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />

        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <Car className="w-4 h-4" /> {config.badge}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">{config.title}</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">{config.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <Container className="py-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-6">
            <Link to="/parking" className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Parking
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-100 shadow-xl p-8">
              <div className={`p-4 rounded-2xl bg-gradient-to-r ${config.accent} text-white mb-8 flex items-center gap-3`}>
                <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-widest uppercase opacity-90">Booking Request</div>
                  <div className="text-lg font-bold">Reserve your slot</div>
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
                  <label className="text-sm font-semibold text-slate-700 ml-1">Vehicle Number</label>
                  <div className="relative">
                    <Hash className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      value={values.vehicleNo}
                      onChange={onChange('vehicleNo')}
                      onBlur={onBlur('vehicleNo')}
                      placeholder="WP-ABC-1234"
                      className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.vehicleNo && errors.vehicleNo ? 'border-red-500' : 'border-slate-200'}`}
                    />
                  </div>
                  {touched.vehicleNo && errors.vehicleNo ? <p className="text-sm text-red-500 mt-1">{errors.vehicleNo}</p> : null}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-700">Start</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider">Date</label>
                        <div className="relative mt-2">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            value={values.startDate}
                            onChange={onChange('startDate')}
                            onBlur={onBlur('startDate')}
                            className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.startDate && errors.startDate ? 'border-red-500' : 'border-slate-200'}`}
                          />
                        </div>
                        {touched.startDate && errors.startDate ? <p className="text-sm text-red-500 mt-1">{errors.startDate}</p> : null}
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider">Time</label>
                        <div className="relative mt-2">
                          <Clock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input
                            type="time"
                            value={values.startTime}
                            onChange={onChange('startTime')}
                            onBlur={onBlur('startTime')}
                            className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.startTime && errors.startTime ? 'border-red-500' : 'border-slate-200'}`}
                          />
                        </div>
                        {touched.startTime && errors.startTime ? <p className="text-sm text-red-500 mt-1">{errors.startTime}</p> : null}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-bold text-slate-700">End</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider">Date</label>
                        <div className="relative mt-2">
                          <Calendar className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input
                            type="date"
                            value={values.endDate}
                            onChange={onChange('endDate')}
                            onBlur={onBlur('endDate')}
                            className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.endDate && errors.endDate ? 'border-red-500' : 'border-slate-200'}`}
                          />
                        </div>
                        {touched.endDate && errors.endDate ? <p className="text-sm text-red-500 mt-1">{errors.endDate}</p> : null}
                      </div>
                      <div>
                        <label className="text-xs font-bold text-slate-500 ml-1 uppercase tracking-wider">Time</label>
                        <div className="relative mt-2">
                          <Clock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                          <input
                            type="time"
                            value={values.endTime}
                            onChange={onChange('endTime')}
                            onBlur={onBlur('endTime')}
                            className={`w-full rounded-xl bg-slate-50 border pl-11 pr-4 h-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all ${touched.endTime && errors.endTime ? 'border-red-500' : 'border-slate-200'}`}
                          />
                        </div>
                        {touched.endTime && errors.endTime ? <p className="text-sm text-red-500 mt-1">{errors.endTime}</p> : null}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button type="submit" className="px-8 h-12 text-base bg-primary hover:bg-primary-dark shadow-lg shadow-primary/30">
                    Confirm Booking
                  </Button>
                  <div className="text-sm text-slate-500">Estimated: <span className="font-extrabold text-slate-900">{formatLkr(estimate.total)}</span></div>
                </div>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-100 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5" />
                    <div>
                      <div className="font-bold">Booking confirmed (demo)</div>
                      <div className="text-sm">Your booking ID: <span className="font-extrabold">{bookingId}</span></div>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>

            {/* Side panel */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-7">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Estimate</div>
                <div className="text-lg font-extrabold text-slate-900 mb-1">Cost summary (demo)</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Calculated from your time range. Final pricing may vary in real operations.
                </p>

                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-semibold">Duration</span>
                    <span className="text-slate-900 font-extrabold">{estimate.hours > 0 ? `${estimate.hours}h` : '—'}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-semibold">Rate</span>
                    <span className="text-slate-900 font-extrabold">{formatLkr(config.ratePerHour)}/hour</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-semibold">Parking</span>
                    <span className="text-slate-900 font-extrabold">{formatLkr(estimate.base)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600 font-semibold">Service fee</span>
                    <span className="text-slate-900 font-extrabold">{formatLkr(estimate.serviceFee)}</span>
                  </div>
                  <div className="h-px bg-slate-100 my-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-slate-900 font-extrabold">Total</span>
                    <span className="text-slate-900 font-extrabold">{formatLkr(estimate.total)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-7 text-white overflow-hidden relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="relative z-10">
                  <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">Notice</div>
                  <div className="text-lg font-extrabold mb-2">This is a demo booking</div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    This website uses mock data. Submissions do not create real parking reservations.
                  </p>
                  <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 p-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Support</div>
                      <div className="text-sm text-white/75 font-semibold">+94 11 225 2861</div>
                    </div>
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
