import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Globe, HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';

const FAQS = [
  { q: "Where can I report lost baggage?", a: "Lost baggage can be reported at the 'Lost & Found' counter located in the Arrivals Hall near the baggage belts. You can also call +94 11 226 3010." },
  { q: "Is there free Wi-Fi at the airport?", a: "Yes, free Wi-Fi is available throughout the terminal. Select 'BIA_Free_WiFi' and follow the login prompt to get connected." },
  { q: "How early should I arrive for my flight?", a: "We recommend arriving 3 hours before international departures to ensure sufficient time for check-in, immigration, and security procedures." },
  { q: "Are there medical services available?", a: "Yes, a 24-hour medical centre is located in the transit area for emergency assistance. Dial 112 from any airport courtesy phone." },
];

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-slate-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-md">
      <button 
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left"
      >
        <span className="font-bold text-slate-800">{question}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
}

export default function ContactPage() {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.email.trim()) e.email = 'Please enter your email.';
    else if (!isEmail(values.email)) e.email = 'Please enter a valid email.';
    if (!values.message.trim()) e.message = 'Please enter your message.';
    return e;
  }, [values]);

  const [openFaq, setOpenFaq] = useState(0);

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
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length > 0) return;

    // Mock submit
    setSubmitted(true);
    setValues({ name: '', email: '', message: '' });
    setTouched({});
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <div className="relative h-[45vh] bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE_2})` }}
        />
        <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }}
            className="max-w-3xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              HERE TO HELP
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              24/7 Support Center
            </h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              We are dedicated to making your journey smooth. Reach out to our team for any assistance or inquiries.
            </p>
          </motion.div>
        </div>
      </div>

      <Container className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Main Info Card */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 h-full">
              <h2 className="text-2xl font-bold text-slate-800 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Head Office</h3>
                    <p className="text-slate-600 mt-1 leading-relaxed">
                      Airport & Aviation Services<br />
                      Bandaranaike Intl Airport,<br />
                      Katunayake, Sri Lanka.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Call Center</h3>
                    <p className="text-slate-600 mt-1">+94 11 225 2861</p>
                    <p className="text-emerald-600 text-sm font-medium mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Email Us</h3>
                    <p className="text-slate-600 mt-1">info@airport.lk</p>
                    <p className="text-slate-600">tours@airport.lk</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                   <div className="p-4 bg-blue-50 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                     <Globe className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-900 text-lg">Social Media</h3>
                     <div className="flex gap-4 mt-2">
                       {/* Mock Social Icons */}
                       <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-colors cursor-pointer flex items-center justify-center">fb</div>
                       <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-colors cursor-pointer flex items-center justify-center">in</div>
                       <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-colors cursor-pointer flex items-center justify-center">tw</div>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">We will get back to you within 24 hours.</p>

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={values.name}
                      onChange={onChange('name')}
                      onBlur={onBlur('name')}
                      error={touched.name && errors.name}
                      className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                    <Input
                      placeholder="john@example.com"
                      value={values.email}
                      onChange={onChange('email')}
                      onBlur={onBlur('email')}
                      error={touched.email && errors.email}
                      className="bg-slate-50 border-slate-200 focus:bg-white h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 ml-1">Message</label>
                  <textarea
                    rows={6}
                    className={`w-full rounded-xl bg-slate-50 border-slate-200 p-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white transition-all resize-none ${
                        touched.message && errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="How can we help you?"
                    value={values.message}
                    onChange={onChange('message')}
                    onBlur={onBlur('message')}
                  />
                   {touched.message && errors.message && (
                     <p className="text-sm text-red-500 mt-1">{errors.message}</p>
                   )}
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full md:w-auto px-8 h-14 text-lg bg-primary hover:bg-primary-dark shadow-lg shadow-primary/30"
                  >
                    Send Message <Send className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {submitted && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 text-green-700 p-4 rounded-xl border border-green-100 flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        
        </div>
        
        {/* FAQ Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
               <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-wider uppercase mb-3">
                  <HelpCircle className="w-5 h-5" /> Help Center
               </span>
               <h2 className="text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
               <p className="text-slate-500 leading-relaxed mb-6">
                 Quick answers to the most frequent inquiries from our passengers. Need more help? Start a chat or call us directly.
               </p>
               <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">Live Chat</div>
                      <div className="text-xs text-slate-500">Available 9am - 5pm</div>
                    </div>
                  </div>
                  <button className="w-full py-2.5 bg-white border border-slate-200 hover:border-primary hover:text-primary transition-colors text-slate-600 font-bold rounded-xl text-sm shadow-sm">
                    Start Chat
                  </button>
               </div>
            </div>
            
            <div className="lg:col-span-2 space-y-4">
               {FAQS.map((faq, idx) => (
                 <FAQItem 
                   key={idx} 
                   question={faq.q} 
                   answer={faq.a} 
                   isOpen={openFaq === idx}
                   onClick={() => setOpenFaq(idx === openFaq ? -1 : idx)}
                 />
               ))}
            </div>
        </div>
        
        {/* Map Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-3xl p-4 shadow-xl border border-slate-100"
        >
          <iframe
            title="Airport Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.076935967667!2d79.88292631409549!3d7.119253994858882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2ee9c6eb5f753%3A0x7d25e194eb84e56!2sBandaranaike%20International%20Airport!5e0!3m2!1sen!2slk!4v1689772421295!5m2!1sen!2slk"
            width="100%"
            height="450"
            style={{ border: 0, borderRadius: '1.5rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </Container>
    </PageTransition>
  );
}
