import React from 'react';

export default function Statement() {
  const valueProps = [
    {
      icon: '#i-layers',
      badge: '100% Hak Milik',
      title: 'Kepemilikan Penuh',
      desc: 'Seluruh source code dan database diserahkan seutuhnya. Sistem resmi menjadi aset permanen bisnis Anda tanpa keterikatan vendor.',
    },
    {
      icon: '#i-wallet',
      badge: 'Bebas Biaya Sewa',
      title: 'Investasi Sekali Bayar',
      desc: 'Sistem dibuat khusus untuk Anda tanpa biaya langganan bulanan, tanpa biaya lisensi per pengguna, dan tanpa tagihan tersembunyi.',
    },
    {
      icon: '#i-check',
      badge: 'Didampingi',
      title: 'Garansi & Pelatihan',
      desc: 'Kami mendampingi pelatihan staf hingga lancar digunakan, menyediakan panduan pemakaian, serta garansi perbaikan jika ada kendala.',
    },
  ];

  return (
    <section className="statement container" id="about">
      <svg className="star-badge" aria-hidden="true">
        <use href="#g-star-8" />
      </svg>
      <h2 className="statement__text">
        Bangun sistem digital yang dirancang khusus untuk alur bisnis Anda —{' '}
        <span className="statement__highlight">andal, aman, dan 100% milik Anda.</span>
      </h2>

      {/* 3 Kartu Keunggulan Seimbang & Profesional */}
      <div className="statement__cards">
        {valueProps.map((item, index) => (
          <div key={index} className="statement__card">
            <div className="statement__card-top">
              <span className="icon-box">
                <svg><use href={item.icon} /></svg>
              </span>
              <span className="tag-mini">{item.badge}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
