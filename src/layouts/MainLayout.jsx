import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-transparent text-slate-900 flex">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
