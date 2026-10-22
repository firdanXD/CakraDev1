import React from 'react';

export default function Portfolio() {
  return (
    <section className="discover container" id="portofolio">
      <h2 className="section-title section-title--center">
        Portofolio <em>Projek</em>
        <svg className="dot-inline" aria-hidden="true">
          <use href="#g-star-8" />
        </svg>
      </h2>
      <p className="lead lead--dark">
        Beberapa sistem yang sudah kami bangun. Anda bisa memesan yang serupa atau menyesuaikan fiturnya.
      </p>

      <div className="cards-3 posts">
        {/* Project 1 */}
        <article className="post">
          <div className="post__preview">
            <div className="preview-card">
              <div className="preview-card__top">
                <span className="tag-mini">Web Invitation</span>
                <span className="status-dot"></span>
              </div>
              <div className="preview-card__title">Rizal &amp; Nabilah</div>
              <div className="preview-card__meta">RSVP Aktif • QRIS Amplop Digital</div>
            </div>
          </div>
          <h3>Malika.in — Undangan digital dan RSVP</h3>
          <p>Nama tamu personal, RSVP terhubung WhatsApp, amplop digital QRIS, dan buku tamu online.</p>
          <a
            href="https://www.rizalnabilahwedding.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--dark btn--block"
          >
            Lihat Demo Undangan
          </a>
        </article>

        {/* Project 2 */}
        <article className="post">
          <div className="post__preview">
            <div className="preview-card">
              <div className="preview-card__top">
                <span className="tag-mini">Web Edukasi</span>
                <span className="pill pill--blue">Interaktif</span>
              </div>
              <div className="preview-card__title">Modul Bicara Anak</div>
              <div className="bars bars--blue" style={{ height: '36px', marginTop: '6px' }}>
                <i style={{ '--h': '50%' }}></i>
                <i style={{ '--h': '75%' }}></i>
                <i style={{ '--h': '60%' }}></i>
                <i style={{ '--h': '95%' }}></i>
              </div>
            </div>
          </div>
          <h3>SAKA — Smart Application for Kid's Speaking</h3>
          <p>Aplikasi web edukasi interaktif untuk melatih dan memantau perkembangan kemampuan berbicara anak.</p>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20tertarik%20sistem%20seperti%20SAKA"
            className="btn btn--dark btn--block"
          >
            Pesan Sistem Serupa
          </a>
        </article>

        {/* Project 3 */}
        <article className="post">
          <div className="post__preview">
            <div className="preview-card">
              <div className="preview-card__top">
                <span className="tag-mini">Kasir &amp; Gudang</span>
                <span className="pill pill--blue">Multi-Satuan</span>
              </div>
              <div className="preview-card__title">MitraBangunan POS</div>
              <div className="preview-card__row">
                <span>Omzet Hari Ini</span>
                <b>Rp 4.250.000</b>
              </div>
            </div>
          </div>
          <h3>MitraBangunan POS — Kasir dan bon tempo</h3>
          <p>Kasir toko material dengan konversi satuan otomatis (ecer/grosir) dan pencatatan piutang pelanggan.</p>
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20tertarik%20sistem%20seperti%20MitraBangunan%20POS"
            className="btn btn--dark btn--block"
          >
            Pesan Kasir Serupa
          </a>
        </article>
      </div>
    </section>
  );
}
