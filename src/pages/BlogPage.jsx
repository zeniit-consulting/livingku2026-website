import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BlogSection from '../components/BlogSection';
import { BookOpen, Sparkles, TrendingUp, Tag, Mail } from 'lucide-react';

export default function BlogPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Wawasan, Regulasi & Berita' : 'Insights & Statutory News' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Header */}
      <section className="py-14 bg-slate-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#d7b366 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-400 bg-gold-500/20 px-3 py-1 rounded-full inline-block mb-3 border border-gold-500/30">
            {t.blog.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {t.blog.title}
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Full Blog Section Component with search, category filtering & reader modal */}
      <BlogSection t={t} lang={lang} />

      {/* Editorial Topics Overview & Newsletter */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="wp-container max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs text-gold-400 font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'id' ? 'Konsultasi Penulis' : 'Editorial Desk'}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {lang === 'id' ? 'Butuh Kajian Khusus Mengenai Lahan atau Bisnis Anda?' : 'Need a Specific Advisory Review for Your Property?'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl leading-relaxed">
                {lang === 'id'
                  ? 'Kirimkan pertanyaan regulasi KBLI, PBG, atau strategi PPN proyek kepada tim redaksi & konsultan hukum kami.'
                  : 'Submit questions regarding OSS zoning, building permits, or construction VAT directly to our advisors.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenConsultation('Konsultasi Regulasi & Pajak (Ref: LK-BLOG-26)')}
              className="shrink-0 px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-colors"
            >
              {lang === 'id' ? 'Ajukan Pertanyaan [Ref: LK-BLOG-26]' : 'Ask Our Experts [Ref: LK-BLOG-26]'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
