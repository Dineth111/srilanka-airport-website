import React from 'react';

export default function Skeleton({ className = '' }) {
  return (
    <div
      className={
        'rounded-xl bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 animate-pulse ' + className
      }
      aria-hidden="true"
    />
  );
}
