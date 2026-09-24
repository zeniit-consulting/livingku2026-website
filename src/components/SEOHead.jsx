import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_METAS = {
  title: 'Livingku.ID — Studio Desain, Kontraktor RAB & Legalitas PMDN/PMA',
  description: 'Livingku.ID menyatukan jasa arsitektur interior & eksterior, kontraktor umum berlisensi LPJK dengan RAB transparan, pengurusan izin PT PMDN & PMA via OSS-RBA, serta kepatuhan akuntansi dan pajak korporasi di Indonesia.',
  keywords: 'arsitek indonesia, arsitek bali, kontraktor rumah mewah, jasa rab rumah, kontraktor villa seminyak, pendirian pt pma bali, izin pbg slf oss rba, kitas investor, konsultan pajak konstruksi, accounting ppn 12 persen, livingku'
};

const ROUTE_SEO_ID = {
  '/': {
    title: 'Livingku.ID — Studio Desain, Kontraktor RAB & Legalitas PMDN/PMA Indonesia',
    description: 'Solusi terintegrasi arsitektur tropis presisi, kontraktor umum berstandar SNI dengan RAB transparan, pendirian PT PMA & PMDN via OSS-RBA, serta konsultan pajak korporasi resmi di Indonesia.',
    keywords: 'livingku.id, arsitek indonesia, arsitek bali, kontraktor sipil, jasa kontraktor bali, kontraktor villa bali, rancang bangun jabodetabek, estimasi rab sni, pendirian pt pma, legalitas usaha oss rba, pbg slf bali, konsultan pajak konstruksi'
  },
  '/layanan': {
    title: 'Layanan Terpadu — Arsitektur, Kontraktor RAB, Legalitas PMA & Pajak | Livingku.ID',
    description: 'Eksplorasi 4 pilar layanan Livingku.ID: Desain Arsitektur DED & Render 4K, Jasa Konstruksi dengan Bill of Quantity (BQ) rinci, Pendirian PT PMA/PMDN & PBG, serta Akuntansi & Pajak PPN 12%.',
    keywords: 'livingku.id, jasa arsitek rumah mewah, kontraktor bangunan komersial, jasa renovasi gedung, hitung rab bangun rumah, izin pbg slf bali, pendirian pt pma jakarta bali, pengurusan kitas investor, konsultan pajak badan usaha, sp2dk pph konstruksi'
  },
  '/simulasi-rab': {
    title: 'Kalkulator Simulasi RAB Konstruksi & Legalitas 2026 | Livingku.ID',
    description: 'Hitung estimasi anggaran biaya (RAB) pembangunan rumah mewah, villa tropis, kantor komersial, dan pengurusan izin PBG/PMA secara interaktif dan transparan berdasarkan parameter meter persegi terkini.',
    keywords: 'livingku.id, kalkulator rab rumah, estimasi biaya bangun rumah per meter 2026, hitung biaya konstruksi villa bali, rab renovasi kantor, kalkulator sni konstruksi, estimasi biaya pbg slf, biaya pendirian pt pma'
  },
  '/portofolio': {
    title: 'Portofolio Proyek — Galeri Realisasi Villa & Komersial | Livingku.ID',
    description: 'Dokumentasi portofolio nyata Livingku.ID: rancang bangun villa mewah di Bali, fit-out interior kantor SCBD Jakarta, cafe & restoran komersial dengan kendali mutu bersertifikat dan izin resmi terbit.',
    keywords: 'livingku.id, portofolio arsitek bali, hasil karya kontraktor livingku.id, desain villa mewah uluwatu canggu, interior kantor scbd jakarta, kontraktor pbg berizin, foto realisasi bangunan tropis modern'
  },
  '/blog': {
    title: 'Berita & Wawasan Industri — Konstruksi, Legalitas OSS & Pajak Properti | Livingku.ID',
    description: 'Kumpulan panduan praktis, analisis regulasi OSS-RBA terbaru 2026, tips penyusunan RAB anti overbudget, dan strategi efisiensi pajak PPN 12% untuk investor dan pemilik properti di Indonesia.',
    keywords: 'livingku.id, berita konstruksi indonesia, panduan rab bangun rumah, aturan pt pma 2026, tarif ppn 12 persen konstruksi, cara mengurus pbg slf oss, tren arsitektur tropis modern bali, tips investasi properti wna'
  },
  '/tentang-kami': {
    title: 'Tentang Kami — Firma Terpadu Arsitektur, Konstruksi & Legalitas | Livingku.ID',
    description: 'Mengenal profil Livingku.ID: tim arsitek berlisensi IAI, kontraktor berakreditasi LPJK/GAPENSI, notaris hukum bisnis PMA, dan konsultan pajak bersertifikat BKP dengan dedikasi transparansi dan mutu prima.',
    keywords: 'livingku.id, tentang livingku.id, profil perusahaan kontraktor livingku, arsitek iai indonesia, konsultan legalitas pma denpasar bali, kontraktor gapensi lpjk, konsultan pajak bkp terdaftar'
  },
  '/kontak': {
    title: 'Hubungi Kami — Konsultasi Arsitektur, RAB & Legalitas Denpasar | Livingku.ID',
    description: 'Hubungi tim profesional Livingku.ID untuk konsultasi gratis, permintaan penawaran RAB, atau jadwal survei lokasi. Kantor pusat: Jalan Kusuma Bangsa VII No. 71 Denpasar, Bali. WhatsApp: +62 897-0065-402.',
    keywords: 'livingku.id, kontak livingku.id, kantor livingku denpasar bali, konsultasi arsitek bali, nomor whatsapp kontraktor bali, konsultasi gratis rab rumah, alamat livingku denpasar, jasa pma bali kontak'
  },
  '/cms': {
    title: 'CMS Portal — Livingku.ID Content Management System',
    description: 'Portal manajemen konten, galeri foto, berita, dan copywriting resmi Livingku.ID.',
    keywords: 'cms livingku admin'
  }
};

const ROUTE_SEO_EN = {
  '/': {
    title: 'Livingku.ID — Integrated Architecture, General Contractor & PMA Advisory Indonesia',
    description: 'Integrated solutions for precision tropical architecture, SNI-standard civil construction with transparent BOQ, PT PMA / PMDN licensing via OSS-RBA, and certified corporate tax advisory in Indonesia.',
    keywords: 'livingku.id, architect bali, architect indonesia, luxury villa contractor bali, civil construction indonesia, boq estimator, company registration indonesia, pt pma setup bali, oss rba license, kitas investor, construction tax consultant'
  },
  '/layanan': {
    title: 'Integrated Services — Architecture, Construction, PMA Legal & Tax | Livingku.ID',
    description: 'Explore the 4 core pillars of Livingku.ID: Architectural DED & 4K 3D Rendering, Certified Contracting with transparent BOQ, PT PMA/PMDN & Building Approval (PBG/SLF), and Accounting & 12% VAT Compliance.',
    keywords: 'livingku.id, architectural design bali, villa building contractor, commercial renovation, boq calculation indonesia, pbg slf permit bali, company incorporation bali jakarta, foreign investment pma kitas, corporate tax advisor'
  },
  '/simulasi-rab': {
    title: '2026 Construction Cost & BOQ Simulator | Livingku.ID',
    description: 'Interactive cost and budget estimator for luxury homes, tropical villas, commercial offices, and building licensing permits in Bali and Indonesia based on verified square-meter construction indices.',
    keywords: 'livingku.id, construction cost calculator bali, build cost per sqm 2026, villa construction boq, office renovation cost, sni construction estimator, pbg permit cost, pt pma registration fee'
  },
  '/portofolio': {
    title: 'Projects Portfolio — Luxury Villas & Commercial Works | Livingku.ID',
    description: 'Explore verified completed works by Livingku.ID: luxury villas across Uluwatu & Canggu Bali, corporate office fit-outs in SCBD Jakarta, and commercial hospitality spaces built with strict QA and official permits.',
    keywords: 'livingku.id, bali architect portfolio, livingku projects, luxury villa uluwatu canggu, scbd office fitout, certified building contractor, tropical modern architecture portfolio'
  },
  '/blog': {
    title: 'Industry Insights & News — Construction, OSS Legal & Property Tax | Livingku.ID',
    description: 'Comprehensive guides, 2026 OSS-RBA foreign investment updates, transparent BOQ planning strategies, and 12% VAT compliance advisory for property developers and international investors in Indonesia.',
    keywords: 'livingku.id, indonesia construction news, boq planning guide, pt pma rules 2026, 12 percent vat indonesia, pbg slf oss permit guide, modern tropical architecture bali, foreign property investment tips'
  },
  '/tentang-kami': {
    title: 'About Us — Integrated Architecture, Contracting & Statutory Advisory | Livingku.ID',
    description: 'Discover Livingku.ID: certified IAI architects, LPJK/GAPENSI licensed builders, corporate legal counsel, and BKP certified tax consultants dedicated to transparency and engineering excellence in Indonesia.',
    keywords: 'livingku.id, about livingku, livingku contractor profile, iai architect indonesia, pma corporate legal bali, gapensi lpjk contractor, certified tax consultant bkp'
  },
  '/kontak': {
    title: 'Contact Us — Architecture, BOQ & Legal Advisory Hub Denpasar | Livingku.ID',
    description: 'Connect with Livingku.ID for project inquiries, custom BOQ proposals, or site survey appointments. Headquarters: Jalan Kusuma Bangsa VII No. 71 Denpasar, Bali. Official WhatsApp: +62 897-0065-402.',
    keywords: 'livingku.id, contact livingku, livingku bali office, architect consultation bali, contractor whatsapp number, free boq consultation, pma consultant bali contact'
  },
  '/cms': {
    title: 'CMS Portal — Livingku.ID Content Management System',
    description: 'Content management, media gallery, blog publishing, and copywriting portal for Livingku.ID.',
    keywords: 'cms livingku admin'
  }
};

export default function SEOHead({ lang = 'id' }) {
  const location = useLocation();
  const path = location.pathname.endsWith('/') && location.pathname.length > 1
    ? location.pathname.slice(0, -1)
    : location.pathname;

  const routeMap = lang === 'en' ? ROUTE_SEO_EN : ROUTE_SEO_ID;
  const currentSEO = routeMap[path] || (lang === 'en' ? ROUTE_SEO_EN['/'] : ROUTE_SEO_ID['/']);

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
    if (ogUrl) ogUrl.setAttribute('content', `https://livingku.id${path}`);

    // 5. Dynamic Twitter
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', currentSEO.title);

    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', currentSEO.description);

    // 6. Dynamic Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://livingku.id${path === '/' ? '' : path}`);
    }
  }, [path, currentSEO, lang]);

  return null;
}
