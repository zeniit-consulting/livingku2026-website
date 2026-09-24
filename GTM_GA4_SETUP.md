# Panduan Integrasi Google Tag Manager (GTM) & Google Analytics 4 (GA4) — Livingku.ID

Sistem GTM pada website Livingku.ID telah disiapkan secara otomatis dan terstruktur dengan standar Google Tag Manager DataLayer & GA4 Recommended Events.

---

## 1. Konfigurasi Container ID

Kode GTM telah terpasang di:
- `<head>`: [index.html](file:///Users/user/orca/projects/web_livingku_2026/index.html)
- `<body>`: [index.html](file:///Users/user/orca/projects/web_livingku_2026/index.html) (noscript fallback)

ID GTM diambil secara otomatis dari environment variable:
- Buka file [.env](file:///Users/user/orca/projects/web_livingku_2026/.env)
- Ganti `GTM-XXXXXXX` dengan ID Container GTM Anda:
  ```env
  VITE_GTM_ID=GTM-ABC1234
  ```

---

## 2. Event & DataLayer yang Sudah Terpasang Otomatis

Livingku.ID adalah Single Page Application (React SPA), sehingga modul pelacakan `src/utils/gtm.js` telah mengirimkan event berikut langsung ke `window.dataLayer`:

| Event GA4 | Trigger | Parameter yang Dikirim |
|---|---|---|
| `virtual_page_view` | Setiap navigasi halaman (Home, Layanan, Portofolio, dll) | `page_location`, `page_path`, `page_title` |
| `generate_lead` | Klik tombol WhatsApp (Floating Button, Kartu Layanan, Estimator) | `lead_type`, `lead_source`, `service_name` |
| `calculate_rab` | Interaksi / kalkulasi RAB konstruksi | `building_type`, `estimated_amount` |

---

## 3. Langkah Setup di Dashboard Google Tag Manager

### Langkah 1: Hubungkan GTM ke GA4 (Google Tag)
1. Buka [tagmanager.google.com](https://tagmanager.google.com/).
2. Masuk ke menu **Tags** > Klik **New**.
3. Beri nama: `Google Tag - GA4`.
4. Pilih Tag Type: **Google Tag**.
5. Isi **Tag ID**: Masukkan Measurement ID GA4 Anda (contoh: `G-XXXXXXXXXX`).
6. Trigger: Pilih **Initialization - All Pages**.
7. Klik **Save**.

---

### Langkah 2: Setup Pelacakan Halaman SPA (`virtual_page_view`)
1. **Buat Trigger**:
   - Menu **Triggers** > Klik **New**.
   - Beri nama: `Custom Event - virtual_page_view`.
   - Event type: **Custom Event**.
   - Event name: `virtual_page_view`.
   - Trigger fires on: **All Custom Events**. Klik **Save**.
2. **Buat Tag**:
   - Menu **Tags** > Klik **New**.
   - Beri nama: `GA4 Event - Virtual Pageview`.
   - Tag Type: **Google Analytics: GA4 Event**.
   - Measurement ID: Masukkan ID GA4 (`G-XXXXXXXXXX`).
   - Event Name: `page_view`.
   - Trigger: Pilih `Custom Event - virtual_page_view`. Klik **Save**.

---

### Langkah 3: Setup Konversi WhatsApp Lead (`generate_lead`)
1. **Buat Trigger**:
   - Menu **Triggers** > Klik **New**.
   - Beri nama: `Custom Event - generate_lead`.
   - Event type: **Custom Event**.
   - Event name: `generate_lead`. Klik **Save**.
2. **Buat Variabel DataLayer** (Opsional untuk menangkap detail):
   - Menu **Variables** > **User-Defined Variables** > Klik **New**.
   - Tipe: **Data Layer Variable** > Data Layer Variable Name: `lead_source`. Beri nama `dlv - lead_source`.
   - Lakukan hal yang sama untuk `service_name`.
3. **Buat Tag**:
   - Menu **Tags** > Klik **New**.
   - Beri nama: `GA4 Event - Generate Lead WhatsApp`.
   - Tag Type: **Google Analytics: GA4 Event**.
   - Event Name: `generate_lead`.
   - Event Parameters:
     - `lead_source` = `{{dlv - lead_source}}`
     - `service_name` = `{{dlv - service_name}}`
   - Trigger: Pilih `Custom Event - generate_lead`. Klik **Save**.

---

## 4. Cara Uji Coba & Verifikasi (Preview Mode)
1. Di GTM, klik tombol **Preview** di kanan atas.
2. Masukkan URL website Anda (`http://localhost:3000` atau domain production).
3. Google Tag Assistant akan terbuka:
   - Klik navigasi halaman: lihat event `virtual_page_view` terpicu.
   - Klik tombol WhatsApp: lihat event `generate_lead` masuk ke GA4 DebugView.
4. Jika sudah sesuai, klik tombol **Submit** / **Publish** di GTM.
