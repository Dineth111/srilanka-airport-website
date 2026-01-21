import React from 'react';
import { Megaphone, AlertCircle, CalendarDays, Plane, Info, ArrowRight } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { IMAGES } from '../constants/images';
import { newsItems } from '../data/news';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function NewsPage() {
  return (
    <PageTransition>
      <div className="relative h-[38vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.COMMON.HEADER_BG})` }}
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm tracking-widest mb-4">
              <Megaphone className="w-4 h-4" /> NEWS & ANNOUNCEMENTS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Latest News</h1>
            <p className="text-xl text-slate-300 font-light max-w-2xl">
              Terminal updates, travel advisories, and airport announcements.
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{formatDate(item.date)}</div>
                  <div className="font-bold text-primary text-sm">{item.title}</div>
                </div>
                <div className="text-lg font-extrabold text-slate-900 mb-2">{item.summary}</div>
                <div className="text-slate-600 mb-4">{item.details}</div>
                <div className="flex gap-3 flex-wrap">
                  {item.id === 'new-terminal' && (
                    <Button to="/airports" variant="outline" className="rounded-xl h-10">
                      View Terminals <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                  {item.id === 'covid-update' && (
                    <Button to="/travel-requirements" variant="outline" className="rounded-xl h-10">
                      Health & Entry <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                  {item.id === 'parking-changes' && (
                    <Button to="/parking" variant="outline" className="rounded-xl h-10">
                      Parking Info <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                  {item.id === 'holiday-schedule' && (
                    <Button to="/flights" variant="outline" className="rounded-xl h-10">
                      Flight Status <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                  {item.id === 'lost-baggage' && (
                    <Button to="/lost-found" variant="outline" className="rounded-xl h-10">
                      Lost & Found <ArrowRight className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </PageTransition>
  );
}
