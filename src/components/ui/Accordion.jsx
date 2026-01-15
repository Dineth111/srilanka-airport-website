import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function classNames(...items) {
  return items.filter(Boolean).join(' ');
}

export default function Accordion({ items }) {
  const baseId = useId();
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {items.map((it, idx) => {
        const isOpen = openId === it.id;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div key={it.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <button
              id={buttonId}
              type="button"
              className="w-full px-5 py-4 flex items-center justify-between text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId((v) => (v === it.id ? null : it.id))}
            >
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary flex items-center justify-center">
                  <it.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{it.title}</div>
                  <div className="text-sm text-slate-600">{it.subtitle}</div>
                </div>
              </div>

              <ChevronDown
                className={classNames('h-5 w-5 text-slate-500 transition-transform', isOpen && 'rotate-180')}
                aria-hidden="true"
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={classNames('px-5 pb-5', !isOpen && 'hidden')}
            >
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                {it.items.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
