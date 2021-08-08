import React from 'react';

export default function VisiMisi() {
  const visi =
    'Menjadi pengembang kota mandiri terkemuka yang menyediakan kawasan hunian yang sehat dan nyaman, untuk Mewujudkan Keadilan Sosial Bagi Seluruh rakyat Indonesia.';
  const misi = [
    'Berkontribusi dalam pembangunan infrastruktur permukiman dan lingkungan dalam rangka mewujudkan dan meningkatkan kualitas hidup manusia Indonesia',
    'Mewujudkan dan mengoptimalkan dukungan teknologi informasi dan inovasi dalam dalam menghasilkan produk yang layak, tepat waktu dan tepat guna.',
    'Mendukung program pemerintah dalam rangka mendorong pembangunan perkotaan yang berkelanjutan.',
    'Meningkatkan indeks pembangunan manusia.',
    'Meningkatkan tata kelola organisasi dan tata Kelola Kawasan yang integrasi',
  ];

  return (
    <div className="visi-misi bg-ar-dark text-white py-5">
      <div className="container">
        <div className="visi">
          <h1>Visi</h1>
          <p>{visi}</p>
        </div>
        <div className="visi">
          <h1>Misi</h1>
          <ol className="m-0 p-0">
            {misi.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
