import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumb({ items, homeLabel = 'Beranda' }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/70 border-b border-slate-200 py-2.5 text-xs text-slate-600">
      <div className="wp-container">
        <ol 
          itemScope 
          itemType="https://schema.org/BreadcrumbList" 
          className="flex items-center gap-1.5 flex-wrap list-none p-0 m-0"
        >
          <li 
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem" 
            className="inline-flex items-center"
          >
            <Link 
              itemProp="item" 
              to="/" 
              className="inline-flex items-center gap-1 hover:text-turkish-700 transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-slate-500" aria-hidden="true" />
              <span itemProp="name">{homeLabel}</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            const position = idx + 2;
            return (
              <li 
                key={idx} 
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem" 
                className="inline-flex items-center gap-1.5"
              >
                <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" aria-hidden="true" />
                {isLast || !item.to ? (
                  <span 
                    itemProp="name" 
                    className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none" 
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    itemProp="item" 
                    to={item.to} 
                    className="hover:text-turkish-700 transition-colors"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(position)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
