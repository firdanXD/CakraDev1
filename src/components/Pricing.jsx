import React from 'react';

export default function Pricing() {
  return (
    <section className="pricing sky sky--deep" id="paket">
      <svg className="deco-star deco-star--sec-left" aria-hidden="true">
        <use href="#g-sparkle-4" />
      </svg>
      <svg className="deco-star deco-star--sec-right" aria-hidden="true">
        <use href="#g-star-12" />
      </svg>

      <span className="tag tag--glass">
        <svg><use href="#i-dot" /></svg>PAKET DAN BIAYA
      </span>
      <h2 className="section-title section-title--center section-title--light">
        Biaya <em>transparan</em>,<br />sistem milik Anda sepenuhnya
      </h2>
      <p className="lead lead--light">
        Harga awal untuk kebutuhan umum. Untuk sistem kustom, kami susun rincian anggaran (RAB) gratis.
      </p>

      <div className="cards-3 plans">
        <article className="plan">
          <header>
            <svg className="plan__star">
              <use href="#g-star-8" />
            </svg>
            <span>Website Profil Bisnis</span>
          </header>
          <div className="plan__price-wrap">
            <div className="plan__sub">Mulai dari</div>
            <div className="plan__price">Rp 950.000</div>
          </div>
          <p className="plan__label">Termasuk:</p>
          <ul>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Desain custom responsif di semua HP</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Katalog produk atau galeri layanan</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Tombol WhatsApp, Google Maps &amp; kontak</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Domain .com, cloud hosting &amp; SSL</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Source code 100% hak milik penuh</span>
            </li>
          </ul>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20paket%3A%20Website%20Profil%20Bisnis"
            className="btn btn--dark btn--block"
          >
            Pilih Paket Website
          </a>
        </article>

        <article className="plan">
          <header>
            <svg className="plan__star">
              <use href="#g-star-8" />
            </svg>
            <span>Sistem Kasir POS</span>
          </header>
          <div className="plan__price-wrap">
            <div className="plan__sub">Mulai dari</div>
            <div className="plan__price">Rp 1.850.000</div>
          </div>
          <p className="plan__label">Termasuk:</p>
          <ul>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Transaksi kasir cepat &amp; scan barcode</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Struk printer thermal Bluetooth</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>QRIS dinamis &amp; rekap omzet harian</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Kelola stok barang &amp; hak akses kasir</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Panduan pemakaian &amp; pelatihan staf</span>
            </li>
          </ul>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20paket%3A%20Sistem%20Kasir%20POS"
            className="btn btn--dark btn--block"
          >
            Pilih Paket Kasir
          </a>
        </article>

        <article className="plan">
          <header>
            <svg className="plan__star">
              <use href="#g-star-8" />
            </svg>
            <span>Sistem Kustom / Web App</span>
          </header>
          <div className="plan__price-wrap">
            <div className="plan__sub">Sesuai kebutuhan • Transparan</div>
            <div className="plan__price">Custom RAB</div>
          </div>
          <p className="plan__label">Termasuk:</p>
          <ul>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Fitur dibangun sesuai alur SOP bisnis</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Multi-user (Owner, Admin, Gudang)</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Laporan keuangan &amp; ekspor PDF/Excel</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Integrasi WhatsApp notifikasi &amp; API</span>
            </li>
            <li>
              <svg><use href="#i-check" /></svg>
              <span>Garansi perbaikan bug &amp; pendampingan</span>
            </li>
          </ul>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20Sistem%20Kustom"
            className="btn btn--dark btn--block"
          >
            Ajukan Kustom RAB
          </a>
        </article>
      </div>
    </section>
  );
}
