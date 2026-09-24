import React, { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ConsultationModal({ isOpen, onClose, t, initialService, lang }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService || 'Jasa Konstruksi & RAB Estimator');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Halo LivingKu, saya ingin konsultasi langsung:
- Nama: ${name || '-'}
- WhatsApp: ${phone || '-'}
- Layanan: ${service}
- Keterangan: ${notes || '-'}`;

  const whatsappUrl = `https://wa.me/628970065402?text=${encodeURIComponent(whatsappMessage)}`;
  const directWhatsappUrl = 'https://wa.me/628970065402?text=Halo+Livingku%2C+saya+tertarik+dengan+properti+di+Livingku+dan+ingin+bertanya+lebih+lanjut.';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center items-center p-4 animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-white text-slate-900 p-6 border-b border-slate-200 flex justify-between items-center">
          <div>
            <span className="text-[10px] font-bold text-gold-700 uppercase tracking-widest block">
              LivingKu Advisory
            </span>
            <h3 className="font-serif text-xl font-bold text-slate-900">
              {lang === 'id' ? 'Ajukan Konsultasi Proyek' : 'Request Project Consultation'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl font-bold text-slate-900">
                {lang === 'id' ? 'Permintaan Terkirim!' : 'Consultation Submitted!'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t.contact.form.submitSuccess}
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>{lang === 'id' ? 'Buka WhatsApp Sekarang' : 'Chat on WhatsApp Now'}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.contact.form.name} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-gold-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.contact.form.phone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder={t.contact.form.phonePlaceholder}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-gold-500 bg-slate-50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.contact.form.service} *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-gold-500 bg-slate-50"
                >
                  <option value="Jasa Interior & Eksterior Design">Jasa Interior & Eksterior Design</option>
                  <option value="Jasa Konstruksi & RAB Estimator">Jasa Konstruksi & RAB Estimator</option>
                  <option value="Pendirian Legalitas PMDN & PMA">Pendirian Legalitas PMDN & PMA</option>
                  <option value="Pengurusan Accounting & Tax">Pengurusan Accounting & Tax</option>
                  <option value="Paket Lengkap Terpadu">Paket Lengkap Terpadu (All-in-One)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.contact.form.message}
                </label>
                <textarea
                  rows={3}
                  placeholder={t.contact.form.messagePlaceholder}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-gold-500 bg-slate-50"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold text-xs sm:text-sm shadow transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>{t.contact.form.submit}</span>
                </button>

                <a
                  href={directWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs text-center flex items-center justify-center gap-2 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>{t.contact.form.whatsappDirect}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
