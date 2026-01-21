import React from 'react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { IMAGES } from '../constants/images';

export default function TermsPage() {
  return (
    <PageTransition>
      <div className="relative h-[38vh] bg-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.HERO.SLIDE_1})` }}
        />
        <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-black tracking-[0.25em] text-white/80 uppercase">Legal</div>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-white tracking-tight">Terms of Use</h1>
            <p className="mt-3 text-slate-300 text-lg max-w-2xl">
              Guidelines and disclaimers for using this website (demo content).
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="max-w-3xl">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 space-y-6">
            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Demo disclaimer</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                This project is a demonstration airport portal. Information shown (flight status, pricing, phone
                numbers, schedules) may be sample content.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">No warranties</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                The site is provided “as is” without warranties. Always verify time-critical travel details with
                your airline or airport authorities.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Acceptable use</h2>
              <ul className="mt-2 text-slate-600 space-y-2 list-disc pl-5">
                <li>Do not attempt to disrupt or abuse the service.</li>
                <li>Do not submit false or harmful information.</li>
                <li>Respect others and follow applicable laws.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Changes</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                If deployed, these terms may be updated from time to time. The “last updated” date should be
                displayed and maintained by the site owner.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
