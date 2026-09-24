import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection({ t }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="wp-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3">
            {t.faq.badge}
          </span>
          <h2 className="wp-section-title text-slate-900 mb-4">
            {t.faq.title}
          </h2>
          <p className="wp-section-subtitle mx-auto">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion with Schema.org FAQPage Structured Data */}
        <div 
          itemScope 
          itemType="https://schema.org/FAQPage" 
          className="max-w-3xl mx-auto space-y-3.5"
        >
          {t.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 hover:bg-slate-50/80 transition-colors"
                >
                  <span itemProp="name" className="font-serif text-base sm:text-lg font-bold text-slate-900">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-slate-100 text-slate-600 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-turkish-100 text-turkish-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    itemScope 
                    itemProp="acceptedAnswer" 
                    itemType="https://schema.org/Answer" 
                    className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40 animate-fadeIn"
                  >
                    <div itemProp="text">
                      {item.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
