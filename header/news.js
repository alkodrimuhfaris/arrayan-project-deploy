import Head from 'next/head';

function NewsHeader({
  title = 'Arrayan Update and News',
  description = 'Baca Update dan Berita Terbaru dari Arrayan, Berita Terikini Seputar Rumah dan Dunia Properti di Indonesia, Tips Jual Beli Properti',
  image = '',
}) {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title} | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota</title>
      <meta
        property="og:title"
        content={`${title} | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota, Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang`}
        key="title"
      />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="og:title"
        content={`${title} | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota, Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang`}
      />
      <meta property="og:description" content={description} />
      {image === '' ? null : <meta property="og:image" content={image} />}

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={process.env.NEXT_PUBLIC_URL} />
      <meta
        property="twitter:title"
        content={`${title} | Pusat Rumah Murah Bersubsidi Di Daerah Ibukota, Dapatkan Unit Super Murah di Grand Cikarang City 2, Grand Vista Cikarang, dan Villa Kencana Cikarang`}
      />
      <meta property="twitter:description" content={description} />
      {image === '' ? null : <meta property="twitter:image" content={image} />}

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

export default NewsHeader;
