import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Info, 
  Check, 
  RefreshCw, 
  Plus, 
  Trash2,
  Image as ImageIcon
} from 'lucide-react';
import ImageField from './ImageField';

export default function ServicesPhotosCMS({ services = [], onUpdateServices }) {
  const [servicesList, setServicesList] = useState(services);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleFieldChange = (index, field, value) => {
    const updated = [...servicesList];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setServicesList(updated);
  };

  const handleSave = () => {
    onUpdateServices(servicesList);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <h3 className="font-serif text-base font-bold text-slate-900">
            Pengelolaan 4 Pilar Layanan Utama
          </h3>
          <p className="text-xs text-slate-500">
            Perbarui foto thumbnail, judul layanan, kategori, deskripsi ringkas, dan deliverables.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-turkish-600 hover:bg-turkish-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
        >
          {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <RefreshCw className="w-4 h-4" />}
          <span>{savedSuccess ? 'Perubahan Disimpan!' : 'Simpan Semua Layanan'}</span>
        </button>
      </div>

      <div className="space-y-6">
        {servicesList.map((service, idx) => (
          <div 
            key={service.id || idx}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4 hover:border-slate-300 transition-colors"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-turkish-100 text-turkish-800 text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <h4 className="font-serif text-sm font-bold text-slate-900">
                  {service.title} ({service.key})
                </h4>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-slate-100 text-slate-600">
                ID: {service.id}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Judul Layanan</label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => handleFieldChange(idx, 'title', e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 font-medium"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Kategori / Sub-judul</label>
                <input
                  type="text"
                  value={service.category}
                  onChange={(e) => handleFieldChange(idx, 'category', e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                />
              </div>
            </div>

            {/* Photo ImageField */}
            <ImageField
              label="Thumbnail Foto Layanan"
              value={service.image}
              onChange={(newUrl) => handleFieldChange(idx, 'image', newUrl)}
              helpText="Foto ini tampil pada kartu layanan di Beranda, dropdown header, dan halaman detail Layanan."
            />

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 uppercase">Ringkasan (Summary)</label>
              <textarea
                rows={2}
                value={service.summary}
                onChange={(e) => handleFieldChange(idx, 'summary', e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Estimasi Waktu Pengerjaan (Timeline)</label>
                <input
                  type="text"
                  value={service.timeline || ''}
                  onChange={(e) => handleFieldChange(idx, 'timeline', e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700 uppercase">Hasil Akhir (Deliverable)</label>
                <input
                  type="text"
                  value={service.deliverable || ''}
                  onChange={(e) => handleFieldChange(idx, 'deliverable', e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
