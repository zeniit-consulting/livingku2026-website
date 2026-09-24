import React, { useState } from 'react';
import { 
  Upload, 
  Image as ImageIcon, 
  Sparkles, 
  Link as LinkIcon, 
  Check, 
  Eye, 
  RefreshCw 
} from 'lucide-react';

// Recommended high quality architecture & construction royalty-free photos
const PRESET_PHOTOS = [
  { label: 'Villa Tropis 1', url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Villa Tropis 2', url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Konstruksi & Tim Sipil', url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Proyek Komersial / Ruko', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Interior Kantor SCBD', url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Konsultasi Legalitas & Notaris', url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Pajak & Akuntansi Bisnis', url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'RAB & Blueprints', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80' },
];

export default function ImageField({ label, value, onChange, helpText }) {
  const [showPresets, setShowPresets] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  // Handle local image file upload (converts to base64 Data URL)
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran file maksimal 2MB untuk optimalisasi penyimpanan browser');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result);
      setPreviewError(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
          {label}
        </label>
      )}

      {/* Main input & preview card */}
      <div className="flex flex-col sm:flex-row gap-4 p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
        {/* Thumbnail Preview */}
        <div className="relative w-full sm:w-36 h-28 bg-slate-200 rounded-lg overflow-hidden shrink-0 border border-slate-300 flex items-center justify-center">
          {value && !previewError ? (
            <img 
              src={value} 
              alt="Preview" 
              className="w-full h-full object-cover" 
              onError={() => setPreviewError(true)}
            />
          ) : (
            <div className="text-center p-2 text-slate-400">
              <ImageIcon className="w-6 h-6 mx-auto mb-1 opacity-60" />
              <span className="text-[10px] block leading-tight">Tidak ada foto</span>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex-1 space-y-2.5">
          <div className="relative">
            <LinkIcon className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={value || ''}
              onChange={(e) => {
                onChange(e.target.value);
                setPreviewError(false);
              }}
              placeholder="https://images.unsplash.com/... atau URL gambar"
              className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-turkish-500 font-mono text-slate-700"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Upload File Button */}
            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 rounded-lg cursor-pointer transition-colors shadow-xs">
              <Upload className="w-3.5 h-3.5 text-slate-500" />
              <span>Unggah dari Komputer</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>

            {/* Presets Button */}
            <button
              type="button"
              onClick={() => setShowPresets(!showPresets)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-turkish-50 hover:bg-turkish-100 text-turkish-700 border border-turkish-200 rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-turkish-600" />
              <span>Pilih Foto Rekomendasi</span>
            </button>

            {value && (
              <button
                type="button"
                onClick={() => {
                  onChange('');
                  setPreviewError(false);
                }}
                className="text-xs text-rose-600 hover:underline ml-auto"
              >
                Hapus Foto
              </button>
            )}
          </div>

          {helpText && (
            <p className="text-[11px] text-slate-500 leading-normal">
              {helpText}
            </p>
          )}
        </div>
      </div>

      {/* Preset drawer */}
      {showPresets && (
        <div className="p-3 bg-white border border-turkish-200 rounded-xl shadow-md space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700 pb-1 border-b border-slate-100">
            <span>Pustaka Foto Berkualitas Tinggi LivingKu:</span>
            <button
              type="button"
              onClick={() => setShowPresets(false)}
              className="text-slate-400 hover:text-slate-600 text-xs"
            >
              Tutup ✕
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {PRESET_PHOTOS.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  onChange(preset.url);
                  setPreviewError(false);
                  setShowPresets(false);
                }}
                className="text-left group border border-slate-200 hover:border-turkish-500 rounded-lg p-1.5 transition-all bg-slate-50 hover:bg-turkish-50/50"
              >
                <div className="h-16 w-full rounded overflow-hidden mb-1 bg-slate-200">
                  <img src={preset.url} alt={preset.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <span className="text-[11px] font-medium text-slate-700 line-clamp-1 group-hover:text-turkish-700">
                  {preset.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
