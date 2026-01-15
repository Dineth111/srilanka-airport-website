import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';

const stats = [
  { id: 1, label: 'Annual Passengers', value: '10M+', sub: 'Traveling smooth' },
  { id: 2, label: 'Destinations', value: '45+', sub: 'World-wide connections' },
  { id: 3, label: 'Daily Flights', value: '150+', sub: 'On-time performance' },
  { id: 4, label: 'Cargo Tonnage', value: '250K', sub: 'metric tons per year' },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <Container className="relative z-10 py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Airport at a Glance</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Key numbers for passengers, destinations, and daily operations (mock).
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
            >
              <Card className="p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-primary">{stat.label}</div>
                <div className="mt-2 text-sm text-slate-600">{stat.sub}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
