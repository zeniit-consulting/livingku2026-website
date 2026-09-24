import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Building2, 
  FileCheck2, 
  Receipt 
} from 'lucide-react';

export default function Footer({ t, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Main Footer Widget Area (WordPress 4-Column Layout) */}
      <div className="wp-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Simplified Logo: Standalone white logo without background box and without text */}
            <Link to="/" className="inline-flex items-center group py-1" aria-label="Livingku.ID Home">
              <img 
                src="/images/logo-white.png" 
                alt="Livingku.ID" 
                width="225"
                height="66"
                loading="lazy"
                decoding="async"
                className="h-[54px] sm:h-[60px] w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
              />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {t.footer.about}
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-turkish-400 shrink-0 mt-0.5" />
                <span>Jalan Kusuma Bangsa VII No. 71 Denpasar</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-turkish-400 shrink-0" />
                <a 
                  href="https://wa.me/628970065402?text=Halo+Livingku%2C+saya+tertarik+dengan+properti+di+Livingku+dan+ingin+bertanya+lebih+lanjut."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-turkish-300 transition-colors"
                >
                  +62 897-0065-402
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-turkish-400 shrink-0" />
                <a 
                  href="mailto:hello@livingku.id" 
                  className="hover:text-turkish-300 transition-colors"
                >
                  hello@livingku.id
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Services Dedicated Pages (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-800 inline-block">
              {t.nav.services}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/layanan#design" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Building2 className="w-3 h-3 text-gold-500" />
                  <span>{t.nav.servicesDropdown.design}</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan#construction" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-gold-500" />
                  <span>{t.nav.servicesDropdown.construction}</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan#legal" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <FileCheck2 className="w-3 h-3 text-gold-500" />
                  <span>{t.nav.servicesDropdown.legal}</span>
                </Link>
              </li>
              <li>
                <Link to="/layanan#tax" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <Receipt className="w-3 h-3 text-gold-500" />
                  <span>{t.nav.servicesDropdown.tax}</span>
                </Link>
              </li>
              <li className="pt-2">
                <Link to="/simulasi-rab" className="inline-flex items-center gap-1 text-gold-400 font-bold hover:underline">
                  <span>Simulasi Biaya RAB Online →</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation Pages (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-800 inline-block">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-gold-400 transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/tentang-kami" className="hover:text-gold-400 transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/layanan" className="hover:text-gold-400 transition-colors">{t.nav.services}</Link></li>
              <li><Link to="/simulasi-rab" className="hover:text-gold-400 transition-colors">{t.nav.calculator}</Link></li>
              <li><Link to="/portofolio" className="hover:text-gold-400 transition-colors">{t.nav.portfolio}</Link></li>
              <li><Link to="/blog" className="hover:text-gold-400 transition-colors">{t.nav.blog}</Link></li>
              <li><Link to="/kontak" className="hover:text-gold-400 transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Compliance (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider pb-1 border-b border-slate-800 inline-block">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              {t.footer.newsletterDesc}
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert(lang === 'id' ? 'Terima kasih telah berlangganan buletin Livingku.ID!' : 'Thank you for subscribing to Livingku.ID insights!'); }} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="email@perusahaan.com"
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gold-600 hover:bg-gold-500 text-white rounded text-xs font-bold transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="pt-2">
              <div className="text-[11px] text-slate-500 font-mono">
                Regulasi Terdaftar: BKPM • OSS-RBA • DJP • LPJK
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-6">
        <div className="wp-container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            {t.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <Link to="/tentang-kami" className="hover:text-gold-400 transition-colors">{t.footer.privacy}</Link>
            <span>•</span>
            <Link to="/tentang-kami" className="hover:text-gold-400 transition-colors">{t.footer.terms}</Link>
            <span>•</span>
            <Link to="/cms" className="hover:text-turkish-400 text-slate-500 font-medium transition-colors" title="Akses CMS Portal">
              CMS Admin
            </Link>
            <span>•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
