import React from 'react';

const steps = [
  {
    step: 'TAHAP 1',
    title: 'Konsultasi',
    desc: 'Kami pelajari masalah alur kerja Anda, menyepakati daftar fitur, estimasi waktu, dan rincian biaya.',
  },
  {
    step: 'TAHAP 2',
    title: 'Desain tampilan dan database',
    desc: 'Rancangan antarmuka yang rapi dan mudah dipahami staf, serta struktur database yang aman.',
  },
  {
    step: 'TAHAP 3',
    title: 'Pengerjaan',
    desc: 'Sistem dibangun dengan kode bersih. Anda menerima tautan demo untuk memantau progres tiap minggu.',
  },
  {
    step: 'TAHAP 4',
    title: 'Go-live',
    desc: 'Pengujian menyeluruh, pelatihan staf, pemasangan ke server, dan serah terima source code dengan garansi.',
  },
];

export default function Workflow() {
  return (
    <section className="bento steps container" id="alur">
      <h2 className="section-title section-title--center">
        <span className="faded">Alur</span> kerja yang terstruktur
      </h2>
      <p className="lead lead--dark">
        Prosesnya jelas dan Anda bisa memantau perkembangan sistem lewat tautan demo setiap minggu.
      </p>

      <div className="bento__grid">
        {steps.map((st, i) => (
          <article className="bento__card" key={i}>
            <span className="tag tag--plain">{st.step}</span>
            <h3>{st.title}</h3>
            <p>{st.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
