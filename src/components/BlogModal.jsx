import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  Copy, 
  Check, 
  Bookmark, 
  Tag, 
  ArrowLeft 
} from 'lucide-react';

export default function BlogModal({ post, onClose, lang }) {
  const [copied, setCopied] = useState(false);

  if (!post) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(`Baca artikel wawasan LivingKu: "${post.title}" di ${window.location.href}`)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with back and close */}
        <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{lang === 'id' ? 'Kembali ke Daftar Blog' : 'Back to Blog List'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleWhatsAppShare}
              className="p-2 rounded-full text-slate-600 hover:text-emerald-600 hover:bg-slate-100 transition-colors"
              title="Bagikan ke WhatsApp"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 rounded-full text-slate-600 hover:text-gold-600 hover:bg-slate-100 transition-colors"
              title="Salin Tautan"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-100">
          <img
            src={post.image}
            alt={`Foto Utama Artikel: ${post.title} oleh ${post.author} - LivingKu Insight`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute bottom-4 left-6 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded text-gold-400 text-xs font-semibold">
            {post.category}
          </div>
        </div>

        {/* Modal Body: Editorial Article */}
        <div className="p-6 sm:p-10">
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="w-4 h-4 text-gold-600" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Article Title */}
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-6">
            {post.title}
          </h1>

          {/* Lead excerpt */}
          <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-gold-500 text-slate-700 text-sm sm:text-base italic leading-relaxed mb-8">
            "{post.excerpt}"
          </div>

          {/* Article Content */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
            {post.content.split('\n\n').map((paragraph, pIdx) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={pIdx} className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-2">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={pIdx} className="font-sans text-base sm:text-lg font-bold text-slate-900 mt-4 mb-2 text-gold-700">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.includes('- ')) {
                const lines = paragraph.split('\n');
                return (
                  <ul key={pIdx} className="list-disc list-inside space-y-1 my-3 text-slate-700">
                    {lines.map((l, lIdx) => (
                      <li key={lIdx}>{l.replace(/^[-\d.]+\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400 mr-1" />
            {post.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA bottom banner */}
          <div className="mt-8 p-6 rounded-xl bg-amber-50/80 border border-amber-200/90 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div>
              <div className="font-serif font-bold text-sm text-slate-900">Butuh Bantuan Konsultasi Terkait Topik Ini?</div>
              <div className="text-xs text-slate-600">Hubungi tim ahli LivingKu untuk audit teknis dan konsultasi awal gratis.</div>
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="shrink-0 px-4 py-2 rounded-lg bg-gold-500 text-slate-950 text-xs font-bold hover:bg-gold-400 transition-colors shadow-sm"
            >
              Hubungi Konsultan Kami
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
