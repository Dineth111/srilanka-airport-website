import React from 'react';
import { Link } from 'react-router-dom';

function classNames(...items) {
  return items.filter(Boolean).join(' ');
}

export default function Button({
  as,
  to,
  href,
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const Comp = as || (to ? Link : href ? 'a' : 'button');

  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus:outline-none focus:ring-4 focus:ring-primary/15 disabled:opacity-60 disabled:pointer-events-none';

  const variants = {
    solid: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border border-slate-300 text-slate-900 hover:bg-slate-50',
    ghost: 'text-slate-900 hover:bg-slate-50',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-5 text-base',
  };

  return (
    <Comp
      to={to}
      href={href}
      className={classNames(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
