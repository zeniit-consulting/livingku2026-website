import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Layers, 
  Clock, 
  CheckCircle2, 
  Send, 
  Copy, 
  Check, 
  HelpCircle,
  Building,
  Info
} from 'lucide-react';

export default function RabEstimator({ t, lang }) {
  const [selectedServiceId, setSelectedServiceId] = useState('residential');
  const [area, setArea] = useState(150);
  const [selectedTierId, setSelectedTierId] = useState('premium');
  const [copied, setCopied] = useState(false);

  const selectedService = t.estimator.servicesOptions.find(s => s.id === selectedServiceId) || t.estimator.servicesOptions[0];
  const selectedTier = t.estimator.tiers.find(tier => tier.id === selectedTierId) || t.estimator.tiers[1];

  // Calculation logic
  const calculation = useMemo(() => {
    if (selectedService.isFixed) {
      const baseCost = selectedService.baseRate;
      const minCost = baseCost;
      const maxCost = Math.round(baseCost * 1.25);
      return {
        minCost,
        maxCost,
        duration: lang === 'id' ? '14 - 30 Hari Kerja' : '14 - 30 Business Days',
        isFixed: true,
        breakdown: [
          { name: lang === 'id' ? 'Akta Notaris & SK Kemenkumham' : 'Notary Deed & Ministry Approval', pct: 25 },
          { name: lang === 'id' ? 'NIB OSS-RBA & KBLI Sertifikasi' : 'NIB OSS-RBA & KBLI Certification', pct: 30 },
          { name: lang === 'id' ? 'Persetujuan Bangunan Gedung (PBG)' : 'PBG Building Approval Permit', pct: 35 },
          { name: lang === 'id' ? 'DJP Online & Administrasi Bank' : 'Tax & Corporate Banking Setup', pct: 10 },
        ]
      };
    }

    const ratePerM2 = selectedService.baseRate * selectedTier.multiplier;
    const totalEst = ratePerM2 * area;
    const minCost = Math.round(totalEst * 0.95);
    const maxCost = Math.round(totalEst * 1.15);

    // Timeline calculation based on area
    let durationText = '';
    if (area <= 100) {
      durationText = lang === 'id' ? '3 - 4 Bulan' : '3 - 4 Months';
    } else if (area <= 250) {
      durationText = lang === 'id' ? '5 - 7 Bulan' : '5 - 7 Months';
    } else if (area <= 500) {
      durationText = lang === 'id' ? '8 - 11 Bulan' : '8 - 11 Months';
    } else {
      durationText = lang === 'id' ? '12+ Bulan' : '12+ Months';
    }

    const breakdown = [
      { name: lang === 'id' ? 'Struktur & Pondasi (Sipil)' : 'Substructure & Framing', pct: 40 },
      { name: lang === 'id' ? 'Finishing Dinding, Lantai & Plafon' : 'Architectural Finishes', pct: 35 },
      { name: lang === 'id' ? 'Instalasi MEP & Sanitasi' : 'MEP & Plumbing Systems', pct: 15 },
      { name: lang === 'id' ? 'Supervisi & Standar K3' : 'Site Supervision & Safety', pct: 10 },
    ];

    return { minCost, maxCost, duration: durationText, isFixed: false, breakdown };
  }, [selectedService, selectedTier, area, lang]);

  const formatIDR = (num) => {
    return new Intl.NumberFormat(lang === 'id' ? 'id-ID' : 'en-US', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0,
    }).format(num);
  };

  const shareText = `Halo Tim LivingKu, saya melakukan simulasi RAB di website [Ref: LK-RAB-26]:
- Layanan: ${selectedService.name}
- Luas Area: ${calculation.isFixed ? 'Paket Layanan' : `${area} m²`}
- Spesifikasi: ${selectedTier.name}
- Estimasi Biaya: ${formatIDR(calculation.minCost)} - ${formatIDR(calculation.maxCost)}
- Estimasi Durasi: ${calculation.duration}
- Kode Referensi: LK-RAB-26

Mohon info untuk jadwal survei lokasi dan konsultasi DED terperinci. Terima kasih.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(shareText)}`;

  return (
    <section id="estimator" className="py-20 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      {/* Blueprint grid accent */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#d7b366 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      <div className="wp-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold mb-3 border border-gold-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.estimator.badge}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {t.estimator.title}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light mx-auto">
            {t.estimator.subtitle}
          </p>
        </div>

        {/* Interactive Calculator Box */}
        <div className="max-w-5xl mx-auto bg-slate-800/90 rounded-2xl border border-slate-700 shadow-2xl p-6 sm:p-8 lg:p-10 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Scope Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                  1. {t.estimator.serviceLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {t.estimator.servicesOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedServiceId(opt.id)}
                      className={`p-3 rounded-lg text-left text-xs sm:text-sm font-medium transition-all border ${
                        selectedServiceId === opt.id
                          ? 'bg-gold-500 text-slate-950 border-gold-400 shadow-md font-bold'
                          : 'bg-slate-700/60 text-slate-200 border-slate-600 hover:border-slate-500 hover:bg-slate-700'
                      }`}
                    >
                      <div className="line-clamp-1">{opt.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Area Slider (if not fixed) */}
              {!calculation.isFixed ? (
                <div>
                  <div className="flex justify-between items-center mb-2.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      2. {t.estimator.areaLabel}
                    </label>
                    <span className="text-base font-serif font-bold text-gold-400 bg-slate-700/80 px-3 py-0.5 rounded border border-slate-600">
                      {area} m²
                    </span>
                  </div>
                  <input
                    type="range"
                    min="36"
                    max="1000"
                    step="10"
                    value={area}
                    onChange={(e) => setArea(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1.5">
                    <span>36 m² (Studio/Pavilion)</span>
                    <span>150 m² (Villa Standar)</span>
                    <span>300 m² (Mewah)</span>
                    <span>1000 m² (Komersial)</span>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-lg bg-slate-700/50 border border-slate-600 text-xs text-slate-300 flex items-start gap-3">
                  <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">Paket Legalitas Terintegrasi:</span>
                    Meliputi pendirian badan usaha resmi, sertifikasi OSS-RBA, perizinan gedung PBG/SLF, dan pendaftaran perpajakan korporasi.
                  </div>
                </div>
              )}

              {/* Material Tier Selection (if not fixed) */}
              {!calculation.isFixed && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2.5">
                    3. {t.estimator.tierLabel}
                  </label>
                  <div className="space-y-2.5">
                    {t.estimator.tiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3.5 rounded-lg cursor-pointer transition-all border ${
                          selectedTierId === tier.id
                            ? 'bg-slate-700/90 border-gold-500 shadow-sm'
                            : 'bg-slate-800/60 border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold ${selectedTierId === tier.id ? 'text-gold-400' : 'text-slate-200'}`}>
                            {tier.name}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded bg-slate-900/60 text-slate-400">
                            {tier.multiplier}x Base
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {tier.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Output Panel */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-xl p-6 border border-slate-700/80 space-y-6">
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                  {t.estimator.resultTitle}
                </span>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-amber-200">
                  {formatIDR(calculation.minCost)}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  hingga <span className="text-slate-200 font-semibold">{formatIDR(calculation.maxCost)}</span>
                </div>
              </div>

              {/* Timeline indicator */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800">
                <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <div className="text-xs text-slate-400">{t.estimator.estimatedTime}</div>
                  <div className="text-sm font-bold text-white">{calculation.duration}</div>
                </div>
              </div>

              {/* Breakdown percentage */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Simulasi Alokasi Biaya:
                </span>
                <div className="space-y-2">
                  {calculation.breakdown.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs text-slate-300">
                        <span className="line-clamp-1">{item.name}</span>
                        <span className="font-mono text-gold-400 font-bold">{item.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full" 
                          style={{ width: `${item.pct}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer note */}
              <p className="text-[11px] text-slate-400 leading-relaxed italic border-t border-slate-800 pt-3">
                {t.estimator.note}
              </p>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.estimator.ctaWhatsapp}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-xs border border-slate-700 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Tersalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Rincian Estimasi Ini</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
