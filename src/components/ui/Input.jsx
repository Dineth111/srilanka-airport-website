import React from 'react';

export default function Input({ className = '', ...props }) {
  return (
    <input
      className={
        'mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder:text-slate-400 shadow-sm ' +
        'focus:outline-none focus:ring-4 focus:ring-primary/15 focus:border-primary ' +
        className
      }
      {...props}
    />
  );
}
