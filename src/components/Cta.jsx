import React from 'react';

export default function Cta() {
  return (
    <section className="cta sky" id="contact">
      <svg className="deco-star deco-star--sec-left" aria-hidden="true">
        <use href="#g-star-12" />
      </svg>
      <svg className="deco-star deco-star--sec-right" aria-hidden="true">
        <use href="#g-sparkle-4" />
      </svg>

      <svg className="star-badge" aria-hidden="true">
        <use href="#g-star-8" />
      </svg>
      <h2 className="section-title section-title--center">
        Siap membangun sistem<br />untuk <em>bisnis Anda</em>?
      </h2>
      <p className="lead lead--light">
        Ceritakan kebutuhan Anda. Kami bantu menyusun fitur, jadwal, dan RAB yang transparan, tanpa komitmen awal.
      </p>

      <a
        href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20pembuatan%20website/aplikasi"
        className="btn btn--dark"
      >
        Mulai Diskusi via WhatsApp
      </a>

      {/* Decorative Floating Mockups */}
      <div className="mock mock--cta-left">
        <div className="mock__head">
          <span>Progres proyek</span>
          <span className="pill pill--blue">Mingguan</span>
        </div>
        <div className="mock__big">85%</div>
        <div className="bars bars--blue">
          <i style={{ '--h': '40%' }}></i>
          <i style={{ '--h': '60%' }}></i>
          <i style={{ '--h': '35%' }}></i>
          <i style={{ '--h': '75%' }}></i>
          <i style={{ '--h': '50%' }}></i>
        </div>
      </div>

      <div className="mock mock--cta-right">
        <div className="mock__head">
          <span>Garansi</span>
          <span className="status-dot"></span>
        </div>
        <div className="mock__status">100% Hak Milik</div>
        <div className="mock__sub">Source code diserahkan</div>
      </div>
    </section>
  );
}
