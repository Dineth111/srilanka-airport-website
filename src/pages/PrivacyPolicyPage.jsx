import React from 'react';
import PageTransition from '../layouts/PageTransition';
import Container from '../components/ui/Container';
import { IMAGES } from '../constants/images';

export default function PrivacyPolicyPage() {
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
            <div className="text-xs font-black tracking-[0.25em] text-white/80 uppercase">Legal</div>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
            <p className="mt-3 text-slate-300 text-lg max-w-2xl">
              How this site handles information (demo content).
            </p>
          </div>
        </div>
      </div>

      <Container className="py-14">
        <div className="max-w-3xl">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 space-y-6">
            <p className="text-slate-600 leading-relaxed">
              This web app is a demonstration project. If you deploy it publicly, replace this policy with an
              official privacy policy reviewed by legal counsel.
            </p>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">What we collect</h2>
              <ul className="mt-2 text-slate-600 space-y-2 list-disc pl-5">
                <li>Contact form details you submit (name, email, message).</li>
                <li>Demo “Shop & Dine” order details stored locally in your browser (localStorage).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">How we use information</h2>
              <ul className="mt-2 text-slate-600 space-y-2 list-disc pl-5">
                <li>To present your cart and demo order confirmation pages.</li>
                <li>To simulate message submission on the Contact page.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Storage</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                The demo cart and orders are saved in your browser via localStorage. Clearing your browser storage
                will remove them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-extrabold text-slate-900">Third-party services</h2>
              <p className="mt-2 text-slate-600 leading-relaxed">
                Some pages may embed third-party content (for example, Google Maps on the Contact page). Those
                services may collect data according to their own policies.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
}
