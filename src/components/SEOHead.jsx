import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_METAS = {
  title: 'Livingku.ID — Studio Desain, Kontraktor RAB & Legalitas PMDN/PMA',
  description: 'Livingku.ID menyatukan jasa arsitektur interior & eksterior, kontraktor umum berlisensi LPJK dengan RAB transparan, pengurusan izin PT PMDN & PMA via OSS-RBA, serta kepatuhan akuntansi dan pajak korporasi di Indonesia.',
  keywords: 'arsitek indonesia, arsitek bali, kontraktor rumah mewah, jasa rab rumah, kontraktor villa seminyak, pendirian pt pma bali, izin pbg slf oss rba, kitas investor, konsultan pajak konstruksi, accounting ppn 12 persen, livingku'
};

const ROUTE_SEO = {
  '/': {
    title: 'Livingku.ID — Studio Desain, Kontraktor RAB & Legalitas PMDN/PMA Indonesia',
    description: 'Solusi terintegrasi arsitektur tropis presisi, kontraktor umum berstandar SNI dengan RAB transparan, pendirian PT PMA & PMDN via OSS-RBA, serta konsultan pajak korporasi resmi di Indonesia.',
    keywords: 'arsitek indonesia, arsitek bali, kontraktor sipil, jasa kontraktor bali, kontraktor villa bali, rancang bangun jabodetabek, estimasi rab sni, pendirian pt pma, legalitas usaha oss rba, pbg slf bali, konsultan pajak konstruksi'
  },
  '/layanan': {
    title: 'Layanan Terpadu — Arsitektur, Kontraktor RAB, Legalitas PMA & Pajak | Livingku.ID',
    description: 'Eksplorasi 4 pilar layanan Livingku.ID: Desain Arsitektur DED & Render 4K, Jasa Konstruksi dengan Bill of Quantity (BQ) rinci, Pendirian PT PMA/PMDN & PBG, serta Akuntansi & Pajak PPN 12%.',
    keywords: 'jasa arsitek rumah mewah, kontraktor bangunan komersial, jasa renovasi gedung, hitung rab bangun rumah, izin pbg slf bali, pendirian pt pma jakarta bali, pengurusan kitas investor, konsultan pajak badan usaha, sp2dk pph konstruksi'
  },
  '/simulasi-rab': {
    title: 'Kalkulator Simulasi RAB Konstruksi & Legalitas 2026 | Livingku.ID',
    description: 'Hitung estimasi anggaran biaya (RAB) pembangunan rumah mewah, villa tropis, kantor komersial, dan pengurusan izin PBG/PMA secara interaktif dan transparan berdasarkan parameter meter persegi terkini.',
    keywords: 'kalkulator rab rumah, estimasi biaya bangun rumah per meter 2026, hitung biaya konstruksi villa bali, rab renovasi kantor, kalkulator sni konstruksi, estimasi biaya pbg slf, biaya pendirian pt pma'
  },
  '/portofolio': {
    title: 'Portofolio Proyek — Galeri Realisasi Villa & Komersial | Livingku.ID',
    description: 'Dokumentasi portofolio nyata Livingku.ID: rancang bangun villa mewah di Bali, fit-out interior kantor SCBD Jakarta, cafe & restoran komersial dengan kendali mutu bersertifikat dan izin resmi terbit.',
    keywords: 'portofolio arsitek bali, hasil karya kontraktor livingku, desain villa mewah uluwatu canggu, interior kantor scbd jakarta, kontraktor pbg berizin, foto realisasi bangunan tropis modern'
  },
  '/blog': {
    title: 'Berita & Wawasan Industri — Konstruksi, Legalitas OSS & Pajak Properti | Livingku.ID',
    description: 'Kumpulan panduan praktis, analisis regulasi OSS-RBA terbaru 2026, tips penyusunan RAB anti overbudget, dan strategi efisiensi pajak PPN 12% untuk investor dan pemilik properti di Indonesia.',
    keywords: 'berita konstruksi indonesia, panduan rab bangun rumah, aturan pt pma 2026, tarif ppn 12 persen konstruksi, cara mengurus pbg slf oss, tren arsitektur tropis modern bali, tips investasi properti wna'
  },
  '/tentang-kami': {
    title: 'Tentang Kami — Firma Terpadu Arsitektur, Konstruksi & Legalitas | Livingku.ID',
    description: 'Mengenal profil Livingku.ID: tim arsitek berlisensi IAI, kontraktor berakreditasi LPJK/GAPENSI, notaris hukum bisnis PMA, dan konsultan pajak bersertifikat BKP dengan dedikasi transparansi dan mutu prima.',
    keywords: 'tentang livingku, profil perusahaan kontraktor livingku, arsitek iai indonesia, konsultan legalitas pma denpasar bali, kontraktor gapensi lpjk, konsultan pajak bkp terdaftar'
  },
  '/kontak': {
    title: 'Hubungi Kami — Konsultasi Arsitektur, RAB & Legalitas Denpasar | Livingku.ID',
    description: 'Hubungi tim profesional Livingku.ID untuk konsultasi gratis, permintaan penawaran RAB, atau jadwal survei lokasi. Kantor pusat: Jalan Kusuma Bangsa VII No. 71 Denpasar, Bali. WhatsApp: +62 897-0065-402.',
    keywords: 'kontak livingku, kantor livingku denpasar bali, konsultasi arsitek bali, nomor whatsapp kontraktor bali, konsultasi gratis rab rumah, alamat livingku denpasar, jasa pma bali kontak'
  },
  '/cms': {
    title: 'CMS Portal — Livingku.ID Content Management System',
    description: 'Portal manajemen konten, galeri foto, berita, dan copywriting resmi Livingku.ID.',
    keywords: 'cms livingku admin'
  }
};

export default function SEOHead({ lang = 'id' }) {
  const location = useLocation();
  const path = location.pathname.endsWith('/') && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const currentSEO = ROUTE_SEO[path] || DEFAULT_METAS;

  useEffect(() => {
    // 1. Dynamic Page Title
    document.title = currentSEO.title;

    // 2. Dynamic Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', currentSEO.description);
    }

    // 3. Dynamic Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSEO.keywords);
    }

    // 4. Dynamic Open Graph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentSEO.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentSEO.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', `https://livingku.com${path}`);

    // 5. Dynamic Twitter
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', currentSEO.title);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', currentSEO.description);

    // 6. Dynamic Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://livingku.com${path === '/' ? '' : path}`);
    }
  }, [path, currentSEO, lang]);

  return null;
}
