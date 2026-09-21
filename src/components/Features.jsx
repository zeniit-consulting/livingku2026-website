import React from 'react';
import { 
  ShieldCheck, 
  Calculator, 
  HardHat, 
  Briefcase 
} from 'lucide-react';

export default function Features({ t }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Calculator: Calculator,
    HardHat: HardHat,
    Briefcase: Briefcase,
  };

  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="wp-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-3">
            {t.features.badge}
          </span>
          <h2 className="wp-section-title text-slate-900 mb-4">
            {t.features.title}
          </h2>
          <p className="wp-section-subtitle mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:border-gold-300 hover:bg-white hover:shadow-wp transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
