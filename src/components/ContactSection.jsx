import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2 
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ContactSection({ t, preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || 'Jasa Konstruksi & RAB Estimator',
    budget: 'Rp 500 Juta - Rp 1.5 Miliar',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Update service if prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Halo LivingKu, saya ingin mengajukan konsultasi [Ref: LK-CNT-26]:
- Nama: ${formData.name || '-'}
- Kontak: ${formData.phone || '-'}
- Email: ${formData.email || '-'}
- Layanan: ${formData.service}
- Estimasi Budget: ${formData.budget}
- Catatan Proyek: ${formData.message || '-'}
- Kode Referensi: LK-CNT-26`;

  const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="wp-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-600 bg-gold-50 px-3 py-1 rounded-full inline-block mb-3">
            {t.contact.badge}
          </span>
          <h2 className="wp-section-title text-slate-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="wp-section-subtitle mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Office Information & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 space-y-6 shadow-sm">
              <div>
                <span className="text-xs font-bold text-gold-700 bg-gold-100/70 px-2.5 py-0.5 rounded border border-gold-200 uppercase tracking-widest inline-block mb-2">
                  Kantor Representatif
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  LivingKu Advisory Hub
                </h3>
              </div>

              <div className="space-y-6 text-sm text-slate-600">
                {t.contact.offices.map((office, idx) => (
                  <div key={idx} className="space-y-2 pb-5 border-b border-slate-200 last:border-0 last:pb-0">
                    <div className="flex items-center gap-2 font-bold text-slate-900">
                      <Building2 className="w-4 h-4 text-gold-600" />
                      <span>{office.city}</span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-600">
                      <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <Phone className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <Mail className="w-4 h-4 text-gold-600 shrink-0" />
                      <span>{office.email}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp direct banner */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white" />
                  <span>{t.contact.form.whatsappDirect}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Box */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
              <Clock className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Jam Operasional Konsultasi:</span>
                Senin - Sabtu: 08.30 - 17.30 WIB. Permintaan konsultasi di luar jam kerja akan direspon pada hari kerja berikutnya.
              </div>
            </div>
          </div>

          {/* Right: WordPress-style Consultation Form */}
          <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 lg:p-10 rounded-2xl border border-slate-200 shadow-wp">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Permintaan Terkirim!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {t.contact.form.submitSuccess}
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-xs font-bold shadow hover:bg-emerald-500"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Lanjutkan via WhatsApp Sekarang</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    Kirim Formulir Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.form.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  {/* WhatsApp / Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.contact.form.phonePlaceholder}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder={t.contact.form.emailPlaceholder}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    />
                  </div>

                  {/* Selected Service */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.service} *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    >
                      <option value="Jasa Interior & Eksterior Design">Jasa Interior & Eksterior Design</option>
                      <option value="Jasa Konstruksi & RAB Estimator">Jasa Konstruksi & RAB Estimator</option>
                      <option value="Pendirian Legalitas PMDN & PMA">Pendirian Legalitas PMDN & PMA</option>
                      <option value="Pengurusan Accounting & Tax">Pengurusan Accounting & Tax</option>
                      <option value="Paket Lengkap Terpadu (All-in-One)">Paket Lengkap Terpadu (All-in-One)</option>
                    </select>
                  </div>
                </div>

                {/* Estimated Budget */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.budget}
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  >
                    {t.contact.form.budgetOptions.map((opt, oIdx) => (
                      <option key={oIdx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={t.contact.form.messagePlaceholder}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>{t.contact.form.submit}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
