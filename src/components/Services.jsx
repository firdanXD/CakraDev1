import React from 'react';

export default function Services() {
  return (
    <section className="finance sky" id="layanan">
      <svg className="deco-star deco-star--sec-left" aria-hidden="true">
        <use href="#g-star-12" />
      </svg>
      <svg className="deco-star deco-star--sec-right" aria-hidden="true">
        <use href="#g-sparkle-4" />
      </svg>

      <svg className="star-badge" aria-hidden="true">
        <use href="#g-star-12" />
      </svg>
      <h2 className="section-title section-title--center">Layanan Pembuatan Website</h2>
      <p className="lead lead--light">
        Membantu usaha Anda memiliki website profesional yang rapi, cepat dibuka, dan mudah dikelola dengan biaya terjangkau.
      </p>

      <div className="cards-4">
        <article className="card-w">
          <span className="icon-box">
            <svg><use href="#i-layers" /></svg>
          </span>
          <h3>Website Profil &amp; UMKM</h3>
          <p>Tampil terpercaya di Google dan sosial media. Lengkap dengan info usaha, galeri foto, peta lokasi, dan tombol chat WhatsApp.</p>
        </article>

        <article className="card-w">
          <span className="icon-box">
            <svg><use href="#i-building" /></svg>
          </span>
          <h3>Katalog &amp; Menu Online</h3>
          <p>Tampilkan produk toko atau daftar menu resto secara rapi dan menarik. Pelanggan bisa langsung memilih dan pesan ke WhatsApp Anda.</p>
        </article>

        <article className="card-w">
          <span className="icon-box">
            <svg><use href="#i-wallet" /></svg>
          </span>
          <h3>Landing Page Promosi</h3>
          <p>Halaman khusus penawaran produk untuk iklan di TikTok atau Instagram Ads, lengkap dengan testimoni dan formulir pemesanan.</p>
        </article>

        <article className="card-w">
          <span className="icon-box">
            <svg><use href="#i-phone" /></svg>
          </span>
          <h3>Aplikasi Web &amp; Kasir Ringan</h3>
          <p>Sistem kasir POS toko sederhana atau pencatatan transaksi harian berbasis web yang enteng dan mudah dioperasikan staf.</p>
        </article>
      </div>
    </section>
  );
}
