import {ImFacebook} from 'react-icons/im';
import {IoLogoInstagram, IoLogoYoutube} from 'react-icons/io';
import leftTop from '../Assets/Parallax/kiri-top.png';
import leftMid from '../Assets/Parallax/kiri-branch-middle.png';
import leftEnd from '../Assets/Parallax/kiri-end.png';
import rightTop from '../Assets/Parallax/kanan-branch-top.png';
import rightMid from '../Assets/Parallax/kanan-mid.png';
import rightEnd from '../Assets/Parallax/kanan-branch-end.png';
import asmatA from '../Assets/Boards/Asmat-Amin.png';
import astiniB from '../Assets/Boards/Astini-B-Oudang.png';
import hengkyE from '../Assets/Boards/Hengky-Esa-Putra.png';
import rachmatW from '../Assets/Boards/Rachmat-Wahyudi.png';
import gpc from '../Assets/MapsIcon/Grand-Purwakarta-City.svg';
import gvc from '../Assets/MapsIcon/Grand-Vista-Cikarang.svg';
// import gcc from '../Assets/MapsIcon/Grand-Cikarang-City-2.svg';
import gcc from '../Assets/MapsIcon/Grand-Cikarang-City-2.png';
import vkc from '../Assets/MapsIcon/Villa-Kencana-Cikarang-01.svg';
import Award1 from '../Assets/Icons/Awards-01.svg';
import Award2 from '../Assets/Icons/Awards-02.svg';
import Award3 from '../Assets/Icons/Awards-03.svg';
import Award4 from '../Assets/Icons/Awards-04.svg';

export const cpNumber = '021-2250-4920';

export const markers = [
  {lat: -6.2644619, lng: 107.2672509},
  {lat: -6.3645619, lng: 107.2672409},
  {lat: -6.1646619, lng: 107.2672309},
];

export const socialMedia = [
  {socmed: 'facebook', link: '#', Logo: ImFacebook},
  {socmed: 'instagram', link: '#', Logo: IoLogoInstagram},
  {socmed: 'youtube', link: '#', Logo: IoLogoYoutube},
];

export const OurLink = [
  {
    desc: 'Home',
    href: {
      pathname: '/',
    },
  },
  {
    desc: 'About',
    href: {
      pathname: '/about-us',
      query: {jump: 'about-us'},
    },
  },
  {
    desc: 'Our Project',
    href: {
      pathname: '/',
      query: {jump: 'projects'},
    },
  },
  {
    desc: 'Testimony',
    href: {
      pathname: '/',
      query: {jump: 'testimony'},
    },
  },
  {
    desc: 'Contact',
    href: {
      query: {jump: 'contact'},
    },
  },
  {
    desc: 'News',
    href: {
      pathname: '/news',
      query: {jump: 'news'},
    },
  },
];

export const HeadOffice = [
  {desc: 'Graha Iskandarsyah 2nd Floor', link: '#'},
  {desc: 'Jl. Iskandarsyah NO 66-C', link: '#'},
  {desc: 'Kebayoran Baru, Jaksel', link: '#'},
  {desc: 'DKI Jakarta 12160', link: '#'},
];

export const ProjectOffice = [
  {
    desc: `Cikarang Square Blok B36-38`,
    link: '#',
  },
  {
    desc: `Jl. Raya Cikarang Bekasi`,
    link: '#',
  },
  {
    desc: `Jawa Barat 17530`,
    link: '#',
  },
];

const waNumber = `6282130004545`;

export const whatsAppLink = `https://api.whatsapp.com/send?phone=${waNumber}}&text=Halo%20Assalamualaikum%0A%0ANama%20saya:%0ADaerah%20Tinggal:%0A%0ASaya%20tertarik%20dengan%20produk%20Arrayan%20Group.%20Bisa%20jelaskan%20detailnya%20kepada%20saya.%0ATerima%20Kasih.`;

export const menu = [
  {
    name: 'Projects',
    linkHref: {pathname: '/', query: {jump: 'projects'}},
    href: '#ourProject',
  },
  {
    name: 'Testimony',
    linkHref: {
      pathname: '/',
      query: {jump: 'testimony'},
    },
    href: '#testimony',
  },
  {
    name: 'Contact',
    linkHref: {
      query: {jump: 'contact'},
    },
    href: '#formContact',
  },
  {
    name: 'News',
    linkHref: {
      pathname: '/news',
      query: {jump: 'news'},
    },
    href: '#newsArrayan',
  },
  {
    name: 'About Us',
    linkHref: {
      pathname: '/about-us',
      query: {jump: 'about-us'},
    },
    href: '#aboutUs',
  },
];

export const parallaxLeft = [
  {src: leftTop, position: '8%', speed: 0.7},
  {src: leftMid, position: '30%', speed: 0.5},
  {src: leftEnd, position: '35%', speed: 0.73},
];

export const parallaxRight = [
  {src: rightTop, position: '-1%', speed: 0.3},
  {src: rightMid, position: '20%', speed: 0.7},
  {src: rightEnd, position: '45%', speed: 0.52},
];

export const boards = [
  {name: 'Asmat Amin', position: 'President Commissioner', photo: asmatA},
  {
    name: 'Hengki Esa Putra',
    position: 'Chief Operation Officer',
    photo: hengkyE,
  },
  {name: 'Rachmat Wahyudi', position: 'Chief Finance Officer', photo: rachmatW},
  {name: 'Astini B. Oudang', position: 'Commissioner', photo: astiniB},
];

export const desc = [
  'Asmat Amin lahir di Bekasi, Indonesia, pada Februari 1972 Pada tahun 1991 memperoleh gelar di Selandia Baru Dan setelah itu, ia memperoleh gelar Teknik Industri di Amerika Serikat di Universitas Toledo, Ohio Pada tahun 1995 ia kembali ke Indonesia untuk memulai bisnis produksi dan penjualan genteng Pada puncak krisis moneter tahun 1998 bisnisnya berkembang menjadi penambangan pasir dan kontraktor infrastruktur untuk jalan dan bangunan Rekam jejak yang terbukti sebagai pengembang yang menyediakan perumahan bagi pekerja berpenghasilan rendah sejak tahun 2001',
  'Hengki Esa Putra adalah seorang eksekutif senior dengan karir yang panjang di sektor real estate. Hengki Esa Putra sudah bergabung dengan Arrayan Group sejak 2011, dan sekarang menjabat sebagai direktur. Merupakan Lulusan Borobudur University, Hengka Esa Putra juga pernah menjabat posisi direktur di berbagai perusahaan diantaranya PT. Karawang Arrayan Development dan PT. Alexandra Citra Pertiwi.',
  'Rachmat telah menjadi CFO PT Arrayan Nusantara Development sejak Juni 2019 di mana ia bekerja sama dengan tim manajemen senior di semua aspek perencanaan bisnis dan keuangan serta penggalangan dana. Sebelumnya menjabat sebagai CFO PT Renadi Realti Mandiri, pengembang properti yang mengembangkan rumah tapak, proyek perhotelan, dan properti komersial. Rachmat telah berkecimpung di sektor properti Indonesia sejak tahun 2000 dan telah bekerja dengan perusahaan-perusahaan seperti Megapolitan Group, PT Grand Uway Development, dan PT Deyon Resources. Meraih gelar MBA dari Universitas Gadjah Mada dan merupakan akuntan berkualifikasi dengan gelar dari Universitas Diponogoro ',
  'Astini adalah anggota dewan komisaris PT Arrayan Nusantara Development Beliau memiliki pengalaman lebih dari 10 tahun di industri logistik, perkapalan, pelabuhan dan perdagangan. Saat ini menjabat sebagai Direktur Eksekutif PT Basis Utama Prima, sebuah perusahaan investasi yang terdiversifikasi dengan berbagai kepemilikan properti di Indonesia. Beliau juga merupakan Direktur Eksekutif PT Pelayaran Intilintas Trithanusantara sebuah perusahaan pelayaran dan jasa kelautan lepas pantai yang mendukung industri minyak gas lepas pantai. Dia memiliki gelar MBA dari Georgetown University, McDonough School of Business, MS dalam Riset Operasi dari Stanford University, dan BS di bidang Teknik Manufaktur dari Boston University',
];

export const visi =
  'Menjadi pengembang kota mandiri terkemuka yang menyediakan kawasan hunian yang sehat dan nyaman, untuk Mewujudkan Keadilan Sosial Bagi Seluruh rakyat Indonesia.';

export const misi = [
  'Berkontribusi dalam pembangunan infrastruktur permukiman dan lingkungan dalam rangka mewujudkan dan meningkatkan kualitas hidup manusia Indonesia',
  'Mewujudkan dan mengoptimalkan dukungan teknologi informasi dan inovasi dalam dalam menghasilkan produk yang layak, tepat waktu dan tepat guna.',
  'Mendukung program pemerintah dalam rangka mendorong pembangunan perkotaan yang berkelanjutan.',
  'Meningkatkan indeks pembangunan manusia.',
  'Meningkatkan tata kelola organisasi dan tata Kelola Kawasan yang integrasi',
];

export const locations = [
  {
    name: 'Grand Purwakarta City',
    address: 'Mulyamekar, Purwakarta West Java 41151',
    photo: gpc,
    href: 'https://goo.gl/maps/k3HZNLoEhubFrTMW7',
  },
  {
    name: 'Grand Vista Cikarang',
    address: 'Jayamulya, Bekasi West Java 17330',
    photo: gvc,
    href: 'https://goo.gl/maps/a86ofoFCcbdxSr6T7',
  },
  {
    name: 'Grand Cikarang City 2',
    address: 'Kedungwaringin, Bekasi West Java 17540',
    photo: gcc,
    href: 'https://goo.gl/maps/1gfXKwiNZnokRS2t8',
  },
  {
    name: 'Vila Kencana Cikarang',
    address: 'Karangsentosa, Bekasi West Java 17530',
    photo: vkc,
    href: 'https://goo.gl/maps/6ptMeD16vr1WEdpT9',
  },
];

export const highlight = [
  {title: 'Berdiri Sejak', desc: '2010'},
  {title: 'Mengelola Lahan', desc: '698 Ha'},
  {title: 'Unit Terjual', desc: '15.000'},
  {title: 'Akan Dibangun', desc: '20.000'},
];

export const awards = [
  {Award: Award1},
  {Award: Award2},
  {Award: Award3},
  {Award: Award4},
];
