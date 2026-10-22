import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
  return (
    <header className="hero sky">
      {/* 8-pointed gradient stars drifting in background */}
      <svg className="deco-star deco-star--hero-1" width="48" height="48" aria-hidden="true">
        <use href="#g-star-8" />
      </svg>
      <svg className="deco-star deco-star--hero-2" width="64" height="64" aria-hidden="true">
        <use href="#g-star-8" />
      </svg>
      <svg className="deco-star deco-star--hero-3" width="36" height="36" aria-hidden="true">
        <use href="#g-star-8" />
      </svg>

      {/* Slim Navbar inside header */}
      <Navbar />

      <div className="hero__body">
        <h1 className="display">
          Website dan aplikasi yang <em>rapi</em>,<br />
          cepat, dan milik Anda
        </h1>
        <p className="lead lead--light">
          Kami membangun website, sistem informasi, kasir POS, dan aplikasi mobile sesuai alur kerja bisnis Anda. Source code diserahkan 100% dan menjadi hak milik Anda sepenuhnya.
        </p>
        <div className="btn-row">
          <a
            href="https://wa.me/6285606231627?text=Halo%20CakraDev%2C%20saya%20ingin%20konsultasi%20pembuatan%20website/aplikasi"
            className="btn btn--dark"
          >
            Konsultasi Gratis
          </a>
          <a href="#layanan" className="btn btn--light">
            Lihat Layanan
          </a>
        </div>
      </div>

      <div className="hero__mock">
        <div className="mock mock--tilt">
          <div className="mock__head">
            <span>Transaksi hari ini</span>
            <span className="pill pill--blue">+12%</span>
          </div>
          <div className="mock__big">
            128<small>transaksi</small>
          </div>
          <div className="bars">
            <i style={{ '--h': '35%' }}></i>
            <i style={{ '--h': '60%' }}></i>
            <i style={{ '--h': '45%' }}></i>
            <i style={{ '--h': '90%' }}></i>
          </div>
        </div>

        <div className="mock mock--main">
          <div className="mock__head">
            <span>Performa Sistem</span>
            <span className="pill pill--blue">
              <svg><use href="#i-chev" /></svg> Optimal
            </span>
          </div>
          <svg className="gauge">
            <use href="#gauge" />
          </svg>
          <div className="mock__big mock__big--center">98%</div>
        </div>

        <div className="mock mock--side">
          <div className="mock__head">
            <span>Server</span>
            <span className="status-dot"></span>
          </div>
          <div className="mock__status">Online 24/7</div>
          <div className="mock__sub">Uptime 99.9%</div>
        </div>
      </div>
    </header>
  );
}
