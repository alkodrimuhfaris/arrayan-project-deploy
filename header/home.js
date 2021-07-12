import Head from 'next/head';

function HomeHeader() {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>
        Arrayan Group | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota
      </title>
      <meta
        property="og:title"
        content="Arrayan Group | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota, Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang"
        key="title"
      />
      <meta
        name="description"
        content="Pusat Rumah Murah Subsidi Di Daerah Ibukota. Kunjungi Wesite Kami Untuk Rumah Murah Bersubsidi Yang Nyaman Dengan Fasilitas Terbaik Di Kelasnya. Berlokasi di Bekasi, Karawang, dan Purwakarta. Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="og:title"
        content="Arrayan Group | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota"
      />
      <meta
        property="og:description"
        content="Pusat Rumah Murah Subsidi Di Daerah Ibukota. Kunjungi Wesite Kami Untuk Rumah Murah Bersubsidi Yang Nyaman Dengan Fasilitas Terbaik Di Kelasnya. Berlokasi di Bekasi, Karawang, dan Purwakarta. Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang"
      />
      <meta
        property="og:image"
        content="https://arrayan-engine.lihar.id/storage/slider/11de60f1febf4f9a9c79d9780f43a900.jpg"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="twitter:title"
        content="Arrayan Group | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota"
      />
      <meta
        property="twitter:description"
        content="Pusat Rumah Murah Subsidi Di Daerah Ibukota. Kunjungi Wesite Kami Untuk Rumah Murah Bersubsidi Yang Nyaman Dengan Fasilitas Terbaik Di Kelasnya. Berlokasi di Bekasi, Karawang, dan Purwakarta. Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang"
      />
      <meta
        property="twitter:image"
        content="https://arrayan-engine.lihar.id/storage/slider/11de60f1febf4f9a9c79d9780f43a900.jpg"
      />

      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}

export default HomeHeader;
