import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Tag, 
  Plus, 
  Trash2, 
  Check, 
  RefreshCw,
  Eye
} from 'lucide-react';
import ImageField from './ImageField';

export default function PortfolioCMS({ items = [], onUpdatePortfolio }) {
  const [portfolioList, setPortfolioList] = useState(items);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleFieldChange = (index, field, value) => {
    const updated = [...portfolioList];
    updated[index] = {
      ...updated[index],
      [field]: value
    };
    setPortfolioList(updated);
  };

  const handleAddNewItem = () => {
    const newItem = {
      title: 'Proyek Baru Livingku.ID',
      category: 'Residential',
      location: 'Canggu, Bali',
      scope: 'Perencanaan Arsitektur & Pelaksanaan Konstruksi',
      area: '350 m²',
      duration: '8 Bulan',
      year: '2026',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
      description: 'Deskripsi singkat mengenai proyek dan spesifikasi bangunan.'
    };
    setPortfolioList([newItem, ...portfolioList]);
  };

  const handleDeleteItem = (index) => {
    if (confirm('Hapus proyek ini dari portofolio?')) {
      const updated = portfolioList.filter((_, i) => i !== index);
      setPortfolioList(updated);
    }
  };

  const handleSave = () => {
    onUpdatePortfolio(portfolioList);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200">
        <div>
          <h3 className="font-serif text-base font-bold text-slate-900">
            Koleksi Galeri Foto Portofolio Proyek
          </h3>
          <p className="text-xs text-slate-500">
            Tambah, edit, ganti foto hasil konstruksi arsitektur, dan perbarui data proyek.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleAddNewItem}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Proyek Baru</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-5 py-2 bg-turkish-600 hover:bg-turkish-700 text-white rounded-lg text-xs font-bold shadow-md transition-colors"
          >
            {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <RefreshCw className="w-4 h-4" />}
            <span>{savedSuccess ? 'Tersimpan!' : 'Simpan Portofolio'}</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioList.map((item, idx) => (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4 hover:border-turkish-300 transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-xs font-bold text-turkish-700 uppercase tracking-wider">
                  Proyek #{idx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => handleDeleteItem(idx)}
                  className="text-xs text-rose-500 hover:text-rose-700 inline-flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Hapus</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Nama Proyek</label>
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleFieldChange(idx, 'title', e.target.value)}
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 font-medium"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Kategori Proyek</label>
                  <input
                    type="text"
                    value={item.category}
                    onChange={(e) => handleFieldChange(idx, 'category', e.target.value)}
                    placeholder="Residential, Commercial, Interior..."
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Lokasi</label>
                  <input
                    type="text"
                    value={item.location}
                    onChange={(e) => handleFieldChange(idx, 'location', e.target.value)}
                    placeholder="Uluwatu, Bali"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 uppercase">Lingkup / Cakupan Kerja</label>
                  <input
                    type="text"
                    value={item.scope}
                    onChange={(e) => handleFieldChange(idx, 'scope', e.target.value)}
                    placeholder="Perencanaan Arsitektur, Interior, RAB SNI..."
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Luas Bangunan</label>
                  <input
                    type="text"
                    value={item.area}
                    onChange={(e) => handleFieldChange(idx, 'area', e.target.value)}
                    placeholder="350 m²"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 uppercase">Durasi / Tahun</label>
                  <input
                    type="text"
                    value={item.duration || item.year || ''}
                    onChange={(e) => handleFieldChange(idx, 'duration', e.target.value)}
                    placeholder="8 Bulan (2026)"
                    className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500"
                  />
                </div>
              </div>

              {/* Photo ImageField */}
              <ImageField
                label="Foto Dokumentasi Proyek"
                value={item.image}
                onChange={(newUrl) => handleFieldChange(idx, 'image', newUrl)}
                helpText="Unggah foto arsitektur atau masukkan URL gambar."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
