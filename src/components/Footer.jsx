import React from 'react';

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__top">
        <div className="footer__brand">
          <a href="#" className="footer__logo" aria-label="CakraDev">
            <img src="/logo.png" alt="CakraDev" width="26" height="26" />
            <span>CakraDev</span>
          </a>
          <p>Konsultasi gratis, Senin–Sabtu 08.00–21.00 WIB</p>
          <p className="footer__contact">
            cakradev.id@gmail.com
            <br />
            +62 856-0623-1627
          </p>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20pembuatan%20website/aplikasi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark btn--sm"
          >
            Hubungi Tim
          </a>
        </div>

        <div className="footer__col">
          <h4>Layanan</h4>
          <a href="#layanan">Website profil</a>
          <a href="#layanan">Sistem informasi</a>
          <a href="#layanan">Kasir POS</a>
          <a href="#layanan">Aplikasi mobile</a>
        </div>

        <div className="footer__col">
          <h4>Perusahaan</h4>
          <a href="#portofolio">Portofolio</a>
          <a href="#paket">Paket dan biaya</a>
          <a href="#alur">Alur kerja</a>
          <a href="#contact">Kontak</a>
        </div>

        <div className="footer__col">
          <h4>Terhubung</h4>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20pembuatan%20website/aplikasi"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <a href="mailto:cakradev.id@gmail.com">Email</a>
          <a href="https://github.com/cakradev" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://instagram.com/cakradev" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>

      {/* Giant Wordmark Display - High Contrast Solid Editorial Serif */}
      <div className="wordmark" aria-hidden="true">
        CakraDev
      </div>

      <div className="footer__bottom">
        <p>&copy; 2026 CakraDev. Pekalongan, Jawa Tengah, Indonesia.</p>
      </div>
    </footer>
  );
}
