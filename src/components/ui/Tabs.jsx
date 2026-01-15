import React from 'react';

function classNames(...items) {
  return items.filter(Boolean).join(' ');
}

export default function Tabs({ tabs, activeId, onChange }) {
  return (
    <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1">
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => onChange(t.id)}
          className={classNames(
            'px-4 h-9 rounded-lg text-sm font-medium transition-colors',
            activeId === t.id ? 'bg-primary text-white' : 'text-slate-700 hover:bg-slate-50'
          )}
          aria-pressed={activeId === t.id}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
