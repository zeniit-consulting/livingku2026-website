import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items, homeLabel = 'Beranda' }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/70 border-b border-slate-200 py-2.5 text-xs text-slate-600">
      <div className="wp-container">
        <ol className="flex items-center gap-1.5 flex-wrap list-none p-0 m-0">
          <li className="inline-flex items-center">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-gold-700 transition-colors">
              <Home className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span>{homeLabel}</span>
            </Link>
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={idx} className="inline-flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
                {isLast || !item.to ? (
                  <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className="hover:text-gold-700 transition-colors">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
