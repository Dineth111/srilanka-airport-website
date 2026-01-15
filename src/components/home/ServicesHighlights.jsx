import React from 'react';
import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { servicesHighlights } from '../../data/services';

export default function ServicesHighlights() {
  return (
    <section className="bg-white border-t border-slate-200">
      <Container className="py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Services</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Modern facilities and assistance designed around passenger experience.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button to="/services" variant="outline">View All</Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesHighlights.map((s) => (
            <motion.div key={s.id} whileHover={{ y: -4 }} transition={{ duration: 0.18 }}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <s.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-1 text-sm text-slate-600">{s.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button to="/services" variant="outline">View All Services</Button>
        </div>
      </Container>
    </section>
  );
}
