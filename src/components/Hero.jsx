import React from 'react';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Building, 
  Scale, 
  FileSpreadsheet, 
  Award, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Hero({ t, onOpenConsultation }) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-6 pb-20 lg:pt-10 lg:pb-28">
      {/* Background Architectural Overlay Pattern */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-repeat"
        style={{
          backgroundImage: `radial-gradient(#d7b366 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />
      
      {/* Ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="wp-container relative z-10">
        {/* WordPress Announcement Bar */}
        <div className="mb-8">
          <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-slate-800/90 border border-slate-700/80 text-xs text-slate-300 shadow-sm hover:border-gold-500/50 transition-colors">
            <span className="px-2.5 py-0.5 rounded-full bg-gold-500/20 text-gold-300 font-bold tracking-wide uppercase text-[10px]">
              {t.announcement.tag}
            </span>
            <span className="line-clamp-1">{t.announcement.text}</span>
            <a 
              href="#blog" 
              className="font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1 ml-1"
            >
              <span>{t.announcement.action}</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-gold-950/70 border border-gold-600/30 text-gold-400 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>{t.hero.badge}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              {t.hero.titlePre}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.titlePost}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
              {t.hero.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-gold-500/20 hover:shadow-gold-500/30 transition-all group"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#estimator"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 font-semibold text-sm sm:text-base border border-slate-700 hover:border-slate-600 transition-all"
              >
                <Calculator className="w-4 h-4 text-gold-400" />
                <span>{t.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-400">
                {t.hero.trustBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card with Verified Status */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-gold-500/40 via-slate-700/50 to-gold-400/20 blur-sm" />
              
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl">
                {/* Hero architectural image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                    alt="Masterpiece Desain Arsitektur Tropis Modern dan Konstruksi Berstandar SNI LivingKu Indonesia"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    fetchPriority="high"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-md border border-slate-700 flex items-center gap-2 text-xs font-semibold text-gold-400">
                    <Award className="w-4 h-4 text-gold-400" />
                    <span>Verified Indonesian Standard 2026</span>
                  </div>
                </div>

                {/* Card Content & Quick Service Checklist */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700 text-xs">
                    <span className="text-slate-400 font-medium">Turnkey Integration</span>
                    <span className="text-gold-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> 100% Guaranteed Legal
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-700/40 border border-slate-700">
                      <div className="p-2 rounded bg-gold-500/10 text-gold-400 shrink-0">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Desain & Kontraktor Lapangan</div>
                        <div className="text-[11px] text-slate-400">Gambar DED, BQ transparan, dan pengawasan berkala.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-700/40 border border-slate-700">
                      <div className="p-2 rounded bg-gold-500/10 text-gold-400 shrink-0">
                        <Scale className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Legalitas PMDN / PMA & Izin PBG</div>
                        <div className="text-[11px] text-slate-400">Sertifikasi OSS-RBA, SK Kemenkumham, KITAS resmi.</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-700/40 border border-slate-700">
                      <div className="p-2 rounded bg-gold-500/10 text-gold-400 shrink-0">
                        <FileSpreadsheet className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Laporan Keuangan & Pajak PPN 12%</div>
                        <div className="text-[11px] text-slate-400">SPT Masa, SPT Tahunan, PSAK, dan mitigasi SP2DK.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Bar */}
        <div className="mt-16 pt-10 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {t.hero.stats.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gold-400">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
