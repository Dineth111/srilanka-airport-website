import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Plane, Clock, MapPin, Grid, List as ListIcon, AlertCircle } from 'lucide-react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import Tabs from '../components/ui/Tabs';
import { flightsArrivals, flightsDepartures } from '../data/flights';
import { AIRLINE_ASSETS, DEFAULT_AIRCRAFT } from '../constants/airlineAssets';

const tabs = [
  { id: 'arrivals', label: 'Arrivals' },
  { id: 'departures', label: 'Departures' },
];

// Helper to get airline color
const getAirlineColor = (airline) => {
  if (airline.includes('SriLankan')) return 'bg-[#005eb8]'; // SriLankan Blue
  if (airline.includes('Emirates')) return 'bg-[#d71921]'; // Emirates Red
  if (airline.includes('Qatar')) return 'bg-[#5c0632]'; // Qatar Burgundy
  if (airline.includes('Singapore')) return 'bg-[#f5aa1c]'; // Singapore Gold
  return 'bg-slate-800';
};

function FlightCard({ flight, type }) {
  const assets = AIRLINE_ASSETS[flight.airline] || { logo: null, aircraft: DEFAULT_AIRCRAFT };
  const accentColor = getAirlineColor(flight.airline);
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-[24px] shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-slate-100 relative flex flex-col h-full"
    >
      {/* Image Header with transparent/glass logo badge */}
      <div className="h-48 relative overflow-hidden bg-slate-200">
        <img
          src={assets.aircraft || DEFAULT_AIRCRAFT}
          alt={`${flight.airline} Aircraft`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = DEFAULT_AIRCRAFT;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge Over Image */}
        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/20 ${
              flight.status.toLowerCase().includes('on time')
                ? 'bg-emerald-500/90 text-white'
                : flight.status.toLowerCase().includes('delayed')
                ? 'bg-amber-500/90 text-white'
                : 'bg-slate-900/90 text-white'
            }`}
          >
            {flight.status}
          </span>
        </div>

        {/* Airline Brand Overlay (no solid white rectangle) */}
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl p-1.5 shadow-lg flex items-center justify-center bg-white/15 backdrop-blur-md border border-white/25">
            {assets.logo ? (
              <img src={assets.logo} alt={flight.airline} className="w-full h-full object-contain" />
            ) : (
              <Plane className="w-5 h-5 text-white/80" />
            )}
          </div>
          <div className="text-white drop-shadow-md">
            <div className="text-[10px] font-bold uppercase tracking-wider opacity-90">{flight.airline}</div>
            <div className="text-xl font-mono font-bold leading-none">{flight.flightNo}</div>
          </div>
        </div>
      </div>

      {/* Flight Info Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        {/* Route Visual */}
        <div className="flex items-center justify-between mb-6">
           <div>
              <div className="text-2xl font-bold text-slate-800">{type === 'arrivals' ? flight.city.substring(0,3).toUpperCase() : 'CMB'}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate max-w-[80px]">{type === 'arrivals' ? flight.city : 'Colombo'}</div>
           </div>
           
           <div className="flex-1 px-4 text-center">
              <div className="flex items-center gap-2 text-slate-300 mb-1">
                 <div className="h-[2px] w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${accentColor || 'bg-slate-400'} w-1/2 animate-[shimmer_2s_infinite] opacity-30`} />
                 </div>
                 <Plane className={`w-4 h-4 text-slate-300 ${type === 'arrivals' ? 'rotate-90' : '-rotate-90'}`} />
                 <div className="h-[2px] w-full bg-slate-100 rounded-full" />
              </div>
              <span className="text-[10px] font-mono text-slate-400 font-bold">{flight.duration}</span>
           </div>

           <div className="text-right">
              <div className="text-2xl font-bold text-slate-800">{type === 'arrivals' ? 'CMB' : flight.city.substring(0,3).toUpperCase()}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider truncate max-w-[80px]">{type === 'arrivals' ? 'Colombo' : flight.city}</div>
           </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
           <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
             <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center gap-1">
                <Clock className="w-3 h-3" /> Time
             </div>
             <div className="text-lg font-mono font-bold text-slate-700">{flight.time}</div>
           </div>
           <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-right">
             <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1 flex items-center justify-end gap-1">
                <MapPin className="w-3 h-3" /> Gate
             </div>
             <div className="text-lg font-mono font-bold text-slate-700">{flight.gate || 'TBA'}</div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function FlightsPage() {
  const [activeTab, setActiveTab] = useState('arrivals');
  const [query, setQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [activeTab]);

  const rows = useMemo(() => {
    const base = activeTab === 'arrivals' ? flightsArrivals : flightsDepartures;
    const q = query.trim().toLowerCase();
    if (!q) return base;
    return base.filter((f) => [f.flightNo, f.airline, f.city].some(val => val?.toLowerCase().includes(q)));
  }, [activeTab, query]);

  const stats = useMemo(() => {
     const base = activeTab === 'arrivals' ? flightsArrivals : flightsDepartures;
     return {
       total: base.length,
       onTime: base.filter(f => f.status.toLowerCase().includes('on time')).length,
       delayed: base.filter(f => f.status.toLowerCase().includes('delayed')).length
     };
  }, [activeTab]);

  return (
    <PageTransition>
      <Container className="py-12">
        {/* Simple Header (no highlight hero) */}
        <div className="mb-10">
          <div className="text-xs font-black tracking-[0.25em] text-primary uppercase">Live Updates</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Flight Status</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Arrivals and departures with real-time style updates (demo data).
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-white/70 border border-slate-200 text-xs font-bold text-slate-700">Total: {stats.total}</span>
            <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">On time: {stats.onTime}</span>
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700">Delayed: {stats.delayed}</span>
          </div>
        </div>

        {/* Controls Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 mb-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <Tabs 
              tabs={tabs} 
              activeId={activeTab} 
              onChange={(id) => { setLoading(true); setActiveTab(id); }} 
              className="w-full lg:w-auto min-w-[300px]"
            />
            
            <div className="flex gap-4 w-full flex-1 justify-end">
              <div className="relative flex-1 max-w-md group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-primary transition-colors" />
                <input 
                  type="text"
                  placeholder={`Search ${activeTab} by flight, airline, or city...`}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-700"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <div className="flex bg-slate-50 rounded-2xl p-2 gap-2">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-xl transition-all ${viewMode === 'grid' ? 'bg-white shadow-md text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button 
                   onClick={() => setViewMode('list')}
                   className={`p-3 rounded-xl transition-all ${viewMode === 'list' ? 'bg-white shadow-md text-primary' : 'text-slate-400 hover:text-slate-600'}`}
                >
                  <ListIcon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-64 bg-slate-100 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : rows.length === 0 ? (
          <div className="text-center py-32 bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
            <div className="bg-white p-4 rounded-full inline-block shadow-sm mb-4">
               <AlertCircle className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No flights found</h3>
            <p className="text-slate-500">We couldn't find any flights matching your search.</p>
          </div>
        ) : (
          viewMode === 'grid' ? (
             <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <AnimatePresence>
                 {rows.map((flight) => (
                   <FlightCard key={flight.id} flight={flight} type={activeTab} />
                 ))}
               </AnimatePresence>
             </motion.div>
          ) : (
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-900 text-white border-b border-slate-800">
                    <tr>
                      <th className="p-6 font-bold uppercase tracking-wider text-xs opacity-70">Flight</th>
                      <th className="p-6 font-bold uppercase tracking-wider text-xs opacity-70">Destination</th>
                      <th className="p-6 font-bold uppercase tracking-wider text-xs opacity-70">Scheduled</th>
                      <th className="p-6 font-bold uppercase tracking-wider text-xs opacity-70">Status</th>
                      <th className="p-6 font-bold uppercase tracking-wider text-xs opacity-70">Gate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {rows.map((flight) => (
                      <tr key={flight.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="p-6">
                            <div className="flex items-center gap-3">
                              {AIRLINE_ASSETS[flight.airline]?.logo && (
                                <img src={AIRLINE_ASSETS[flight.airline].logo} alt="" className="w-8 h-8 object-contain opacity-80" />
                              )}
                              <div>
                                <div className="font-bold text-slate-900 text-lg font-mono">{flight.flightNo}</div>
                                <div className="text-sm text-slate-500 font-medium">{flight.airline}</div>
                              </div>
                            </div>
                        </td>
                        <td className="p-6">
                          <div className="font-bold text-slate-800">{activeTab === 'arrivals' ? 'Colombo (CMB)' : flight.city}</div>
                          {activeTab !== 'arrivals' && <div className="text-sm text-slate-400">{flight.city.substring(0,3).toUpperCase()}</div>}
                        </td>
                        <td className="p-6 font-mono font-bold text-slate-600">{flight.time}</td>
                        <td className="p-6">
                           <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                            flight.status.toLowerCase().includes('on time') ? 'bg-emerald-100 text-emerald-700' : 
                            flight.status.toLowerCase().includes('delayed') ? 'bg-amber-100 text-amber-700' : 
                            'bg-slate-100 text-slate-700'
                          }`}>
                            {flight.status}
                          </span>
                        </td>
                        <td className="p-6 font-mono font-bold text-slate-700">{flight.gate || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )
        )}
      </Container>
    </PageTransition>
  );
}
