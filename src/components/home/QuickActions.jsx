import React from 'react';
import { PlaneLanding, PlaneTakeoff, Car, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';

const actions = [
  {
    id: 'flight-status',
    title: 'Flight Status',
    description: 'Search arrivals and departures with status badges.',
    icon: PlaneLanding,
    to: '/flights',
  },
  {
    id: 'parking',
    title: 'Parking',
    description: 'Short/long stay parking with demo booking.',
    icon: Car,
    to: '/parking',
  },
  {
    id: 'arrivals',
    title: 'Arrivals',
    description: 'Incoming flights and estimated times.',
    icon: PlaneLanding,
    to: '/flights?tab=arrivals',
  },
  {
    id: 'departures',
    title: 'Departures',
    description: 'Outgoing flights, terminals and status.',
    icon: PlaneTakeoff,
    to: '/flights?tab=departures',
  },
];

export default function QuickActions() {
  return (
    <section className="relative -mt-16 z-20">
      <Container className="pb-10">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-black tracking-[0.25em] text-primary uppercase">Quick Access</div>
            <div className="text-sm text-slate-600 mt-1">Most-used actions in one tap.</div>
          </div>
          <Button to="/passenger-guide" variant="outline" size="sm" className="rounded-full">
            Passenger Guide <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((a) => (
            <Card
              key={a.id}
              className="p-5 bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-900/5 hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/15 to-sky-200/30 text-primary flex items-center justify-center border border-primary/10">
                  <a.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-base font-extrabold text-slate-900 tracking-tight">{a.title}</div>
                  <p className="mt-1 text-sm text-slate-600 leading-snug">{a.description}</p>
                  <div className="mt-4">
                    <Button to={a.to} className="rounded-xl h-10 px-4">
                      Open <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
