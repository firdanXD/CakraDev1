import React from 'react';

export default function Features() {
  return (
    <section className="bento container">
      <h2 className="section-title section-title--center">
        Website rapi, <em>mudah dipakai</em>
        <svg className="dot-inline" aria-hidden="true">
          <use href="#g-star-8" />
        </svg>
      </h2>
      <p className="lead lead--dark">
        Setiap website dan sistem dirancang agar rapi, cepat dibuka lewat HP, dan mudah dikelola untuk memajukan usaha Anda.
      </p>
      <a href="#paket" className="btn btn--dark">
        Lihat Paket &amp; Biaya
      </a>

      <div className="bento__grid">
        {/* Card 1: Tampilan Rapi */}
        <article className="bento__card">
          <span className="tag tag--plain">TAMPILAN RAPI</span>
          <h3>Mudah dipelajari &amp; navigasi jelas</h3>
          <div className="mock mock--flat">
            <div className="mock__head">
              <span>Struktur Navigasi</span>
              <span className="pill pill--blue">100% Rapi</span>
            </div>
            <div className="mock__big">98%</div>
            <div className="bars">
              <i style={{ '--h': '35%' }}></i>
              <i style={{ '--h': '60%' }}></i>
              <i style={{ '--h': '45%' }}></i>
              <i style={{ '--h': '85%' }}></i>
            </div>
          </div>
          <p>Tata letak bersih dan proporsional. Pengunjung dan staf langsung mengerti alur informasi tanpa perlu instruksi rumit.</p>
        </article>

        {/* Card 2: Performa Ringan */}
        <article className="bento__card">
          <span className="tag tag--plain">PERFORMA RINGAN</span>
          <h3>Cepat dibuka di semua HP</h3>
          <div className="mock mock--flat">
            <div className="mock__head">
              <span>Kecepatan Akses</span>
              <span className="pill pill--blue">Optimal</span>
            </div>
            <svg className="gauge" aria-hidden="true">
              <use href="#gauge" />
            </svg>
            <div className="mock__big mock__big--center">99%</div>
          </div>
          <p>Dibangun dengan kode bersih dan aset yang dioptimasi, memastikan halaman website enteng dan hemat kuota internet pelanggan.</p>
        </article>

        {/* Card 3: Order Praktis via WhatsApp */}
        <article className="bento__card">
          <span className="tag tag--plain">ORDER PRAKTIS</span>
          <h3>Terhubung langsung ke WhatsApp</h3>
          <div className="mock mock--flat mock--verify">
            <p>
              Pemesanan Masuk
              <br />
              <small>Terhubung langsung ke admin</small>
            </p>
            <div className="mock__amount">
              <small>Status</small>Aktif
            </div>
          </div>
          <p>Tombol pesanan dan kontak otomatis terhubung ke WhatsApp dengan format pesan rapi, mempermudah Anda merespon pelanggan.</p>
        </article>

        {/* Card 4: Siap Pakai & Bergaransi */}
        <article className="bento__card">
          <span className="tag tag--plain">SIAP PAKAI</span>
          <h3>Beres setup sampai online</h3>
          <div className="mock mock--flat">
            <div className="mock__head">
              <span>Domain &amp; Hosting</span>
              <span className="status-dot"></span>
            </div>
            <div className="mock__status">Online 24/7</div>
            <div className="mock__sub">Domain .com, SSL aman, &amp; panduan kelola</div>
          </div>
          <p>Tidak perlu pusing urusan teknis server. Kami bantu daftarkan domain, hosting, dan beri pendampingan hingga website siap digunakan.</p>
        </article>
      </div>
    </section>
  );
}
