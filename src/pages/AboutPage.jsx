import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import TestimonialsSection from '../components/TestimonialsSection';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  Target, 
  Compass, 
  CheckCircle2, 
  FileCheck 
} from 'lucide-react';

export default function AboutPage({ t, lang, onOpenConsultation }) {
  const breadcrumbs = [
    { label: lang === 'id' ? 'Tentang Kami' : 'About Us' }
  ];

  const about = t.about;

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbs} homeLabel={t.nav.home} />

      {/* Header */}
      <section className="py-14 bg-white border-b border-slate-200 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0ea8a4 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
        <div className="wp-container relative z-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-3 border border-gold-300">
            {about.badge}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            {about.title}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
            {about.subtitle}
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="wp-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block">
                {lang === 'id' ? 'Latar Belakang' : 'Background Story'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {about.storyTitle}
              </h2>
              <div className="text-slate-600 text-sm sm:text-base leading-relaxed space-y-3 font-light">
                {about.story.split('\n\n').map((par, pIdx) => (
                  <p key={pIdx}>{par}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-turkish-50/70 border border-turkish-200/80 text-slate-900 space-y-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-2 text-gold-800 font-serif font-bold text-lg mb-1">
                    <Target className="w-5 h-5 text-gold-600" />
                    <span>{lang === 'id' ? 'Visi Kami' : 'Our Vision'}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {about.vision}
                  </p>
                </div>

                <div className="pt-4 border-t border-turkish-200/80">
                  <div className="flex items-center gap-2 text-gold-800 font-serif font-bold text-lg mb-1">
                    <Compass className="w-5 h-5 text-gold-600" />
                    <span>{lang === 'id' ? 'Misi Kami' : 'Our Mission'}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {about.mission}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="wp-container max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-100/80 px-3 py-1 rounded-full inline-block mb-2">
              {lang === 'id' ? 'Nilai Pokok' : 'Core Values'}
            </span>
            <h3 className="wp-section-title text-slate-900">
              {lang === 'id' ? 'Prinsip Kerja Tanpa Kompromi' : 'Guiding Corporate Principles'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((val, vIdx) => (
              <div
                key={vIdx}
                className="p-6 rounded-xl bg-white border border-slate-200 shadow-wp flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gold-100 text-gold-700 flex items-center justify-center font-serif font-bold mb-4">
                    0{vIdx + 1}
                  </div>
                  <h4 className="font-serif font-bold text-slate-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Team */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="wp-container max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-2">
              {lang === 'id' ? 'Dewan Direksi & Pakar' : 'Executive Partners'}
            </span>
            <h3 className="wp-section-title text-slate-900">
              {lang === 'id' ? 'Dipimpin Praktisi Senior Berpengalaman' : 'Led by Licensed Industry Practitioners'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {about.team.map((member, mIdx) => (
              <div
                key={mIdx}
                className="p-6 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-gold-400 hover:shadow-wp transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-serif font-bold text-lg text-slate-900">
                        {member.name}
                      </h4>
                      <div className="text-xs font-semibold text-gold-700 mt-0.5">
                        {member.role}
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-200/80 text-[11px] font-mono text-slate-700 font-semibold">
                      {member.exp}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-3">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations & Licenses */}
      <section className="py-14 bg-white border-b border-slate-200 text-slate-900">
        <div className="wp-container max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 bg-gold-100/80 px-3 py-1 rounded-full inline-block border border-gold-300">
            {lang === 'id' ? 'Legalitas Firma' : 'Corporate Licenses'}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            {lang === 'id' ? 'Sertifikasi Resmi & Keanggotaan Asosiasi' : 'Official Accreditations & Affiliations'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-2xl mx-auto text-xs text-slate-700 pt-2">
            {about.certifications.map((cert, cIdx) => (
              <div key={cIdx} className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              type="button"
              onClick={() => onOpenConsultation('Konsultasi Kredensial Firma (Ref: LK-ABT-26)')}
              className="px-6 py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-colors"
            >
              {lang === 'id' ? 'Konsultasi dengan Dewan Pakar' : 'Consult with Our Principals'}
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection lang={lang} />
    </div>
  );
}
