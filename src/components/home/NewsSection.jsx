import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { news } from '../../data/news';

export default function NewsSection() {
  return (
    <section className="bg-slate-50 border-t border-slate-200">
      <Container className="py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">News & Announcements</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Latest updates, notices and operational announcements (mock).
            </p>
          </div>
          <div className="hidden sm:block">
            <Button to="/contact" variant="outline">Get Updates</Button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((n) => (
            <Card key={n.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">{n.category}</div>
              <div className="mt-2 text-lg font-bold text-slate-900 leading-snug">{n.title}</div>
              <p className="mt-2 text-sm text-slate-600">{n.summary}</p>
              <div className="mt-4 text-sm text-slate-500">{n.date}</div>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button to="/contact" variant="outline">Get Updates</Button>
        </div>
      </Container>
    </section>
  );
}
