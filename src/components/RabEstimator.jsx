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
import WhatsAppIcon from './WhatsAppIcon';

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
          { name: lang === 'id' ? 'Akta & SK Kemenkumham' : 'Notary Deed & Approval', pct: 25 },
          { name: lang === 'id' ? 'NIB OSS-RBA & KBLI' : 'NIB OSS-RBA & KBLI', pct: 30 },
          { name: lang === 'id' ? 'Izin Bangunan PBG/SLF' : 'PBG/SLF Approval Permit', pct: 35 },
          { name: lang === 'id' ? 'DJP & Administrasi Bank' : 'Tax & Banking Setup', pct: 10 },
        ]
      };
    }

    const ratePerM2 = selectedService.baseRate * selectedTier.multiplier;
    const totalEst = ratePerM2 * area;
    const minCost = Math.round(totalEst * 0.95);
    const maxCost = Math.round(totalEst * 1.15);

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
      { name: lang === 'id' ? 'Finishing Dinding & Lantai' : 'Architectural Finishes', pct: 35 },
      { name: lang === 'id' ? 'Instalasi MEP & Sanitasi' : 'MEP & Plumbing Systems', pct: 15 },
      { name: lang === 'id' ? 'Supervisi & K3' : 'Site Supervision & Safety', pct: 10 },
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

  const shareText = `Halo Tim Livingku.ID, saya melakukan simulasi RAB di website:
- Layanan: ${selectedService.name}
- Luas Area: ${calculation.isFixed ? 'Paket Layanan' : `${area} m²`}
- Spesifikasi: ${selectedTier.name}
- Estimasi Biaya: ${formatIDR(calculation.minCost)} - ${formatIDR(calculation.maxCost)}
- Estimasi Durasi: ${calculation.duration}
- Kode Referensi: LK-RAB-26

Mohon info survei lokasi dan konsultasi DED terperinci. Terima kasih.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/628970065402?text=${encodeURIComponent(shareText)}`;

  return (
    <section id="estimator" className="py-16 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200 scroll-mt-20">
      <div className="wp-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-gold-800 text-xs font-semibold mb-2.5">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Anggaran</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-2">
            Simulasi Biaya Proyek &amp; RAB SNI
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mx-auto">
            Hitung perkiraan biaya investasi berdasarkan luas dan mutu material sebelum masuk ke Gambar Kerja (DED).
          </p>
        </div>

        {/* Light Box Layout */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 lg:p-9">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-5">
              {/* Scope Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. Pilih Lingkup Pekerjaan
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {t.estimator.servicesOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedServiceId(opt.id)}
                      className={`p-3 rounded-lg text-left text-xs sm:text-sm transition-all border ${
                        selectedServiceId === opt.id
                          ? 'bg-slate-900 text-gold-300 border-slate-900 shadow-sm font-bold'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
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
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      2. Luas Area Bangunan
                    </label>
                    <span className="text-sm font-serif font-bold text-slate-900 bg-slate-100 px-3 py-0.5 rounded border border-slate-200">
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
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-gold-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                    <span>36 m²</span>
                    <span>150 m² (Villa Standar)</span>
                    <span>300 m² (Mewah)</span>
                    <span>1000 m²</span>
                  </div>
                </div>
              ) : (
                <div className="p-3.5 rounded-lg bg-gold-50/70 border border-gold-200 text-xs text-slate-700 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-gold-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block mb-0.5">Paket Legalitas Terpadu:</span>
                    Akta pendirian, OSS-RBA NIB, persetujuan gedung PBG/SLF, dan administrasi perpajakan.
                  </div>
                </div>
              )}

              {/* Material Tier Selection (if not fixed) */}
              {!calculation.isFixed && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    3. Kualitas Spesifikasi Material
                  </label>
                  <div className="space-y-2">
                    {t.estimator.tiers.map((tier) => (
                      <div
                        key={tier.id}
                        onClick={() => setSelectedTierId(tier.id)}
                        className={`p-3 rounded-lg cursor-pointer transition-all border ${
                          selectedTierId === tier.id
                            ? 'bg-gold-50/60 border-gold-500 shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-xs sm:text-sm font-bold ${selectedTierId === tier.id ? 'text-gold-800' : 'text-slate-800'}`}>
                            {tier.name}
                          </span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                            {tier.multiplier}x Base
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug line-clamp-1">
                          {tier.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Output Panel (Bright Theme) */}
            <div className="lg:col-span-5 bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 space-y-4">
              <div>
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                  Estimasi Rentang Anggaran:
                </span>
                <div className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {formatIDR(calculation.minCost)}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  hingga <span className="text-slate-800 font-semibold">{formatIDR(calculation.maxCost)}</span>
                </div>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200">
                <Clock className="w-4 h-4 text-gold-600 shrink-0" />
                <div>
                  <div className="text-[11px] text-slate-500">Estimasi Durasi Pengerjaan:</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{calculation.duration}</div>
                </div>
              </div>

              {/* Breakdown percentage */}
              <div className="space-y-1.5 pt-2 border-t border-slate-200">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Alokasi Biaya:
                </span>
                <div className="space-y-1.5">
                  {calculation.breakdown.map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex justify-between text-xs text-slate-700">
                        <span className="line-clamp-1">{item.name}</span>
                        <span className="font-mono text-gold-700 font-bold">{item.pct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gold-500 rounded-full" 
                          style={{ width: `${item.pct}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed italic border-t border-slate-200 pt-2">
                *Estimasi awal berdasarkan standar AHSP Jabodetabek &amp; Bali 2026. Nilai kontrak definitif ditetapkan setelah survei dan gambar DED.
              </p>

              {/* Action Buttons (Clean labels, no ref code in UI) */}
              <div className="space-y-2 pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Konsultasikan Estimasi Ini via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs border border-slate-300 font-medium transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Rincian Tersalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Rincian Estimasi</span>
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
