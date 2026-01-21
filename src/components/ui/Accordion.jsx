import React, { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

function classNames(...items) {
  return items.filter(Boolean).join(' ');
}

export default function Accordion({ items }) {
  const [openId, setOpenId] = useState(items?.[0]?.id ?? null);

  return (
    <div className="space-y-2">
      {items.map((it) => {
        const isOpen = openId === it.id;
        return (
          <div key={it.id} className="border rounded-lg bg-white">
            <button
              type="button"
              className="w-full px-4 py-3 text-left font-semibold text-slate-800 flex justify-between items-center"
              onClick={() => setOpenId((v) => (v === it.id ? null : it.id))}
            >
              {it.title}
              <ChevronDown className={classNames('h-4 w-4 ml-2 transition-transform', isOpen && 'rotate-180')} />
            </button>
            {isOpen && (
              <ul className="px-4 pb-3 mt-2 space-y-1 text-sm text-slate-700">
                {it.items.map((line, i) => (
                  <li key={i}>• {line}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
