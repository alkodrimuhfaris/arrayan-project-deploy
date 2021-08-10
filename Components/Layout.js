import React from 'react';
import {ImFacebook} from 'react-icons/im';
import {IoLogoInstagram, IoLogoYoutube} from 'react-icons/io';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import LoadingScreen from './LoadingScreen';
import FooterElement from './Footer/FooterElement';
import ParallaxRight from './ParallaxRight';
import ParallaxLeft from './ParallaxLeft';
import RegistrationForm from './Home/RegistrationForm';
import Navbar from './Navbar';
import Menu from './Menu';
import getScrollAmount from '../componentHelpers/getScrollAmount';
import useWindowDimensions from '../componentHelpers/getWindowDimensions';
import WaIcon from '../Assets/Icons/WA-Icon.svg';

export default function Layout({
  neverTransparentNavbar = false,
  className = 'home',
  visTopHeader = false,
  loading = false,
  ...props
}) {
  const [screenSize, setScreenSize] = React.useState('');
  const {sm, xsO, smO, mdO, lgO, xlO, width} = useWindowDimensions();

  // cp number
  const cpNumber = '021-2250-4920';

  // scroll amount store
  const offsetY = getScrollAmount();

  // useState initialisation
  const [open, setOpen] = React.useState(false);

  // useRef initialization
  const refHomeCont = React.useRef(null);
  const refNavBar = React.useRef(null);

  const markers = [
    {lat: -6.2644619, lng: 107.2672509},
    {lat: -6.3645619, lng: 107.2672409},
    {lat: -6.1646619, lng: 107.2672309},
  ];

  const socialMedia = [
    {socmed: 'facebook', link: '#', Logo: ImFacebook},
    {socmed: 'instagram', link: '#', Logo: IoLogoInstagram},
    {socmed: 'youtube', link: '#', Logo: IoLogoYoutube},
  ];

  const OurLink = [
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

  const HeadOffice = [
    {desc: 'Graha Iskandarsyah 2nd Floor', link: '#'},
    {desc: 'Jl. Iskandarsyah NO 66-C', link: '#'},
    {desc: 'Kebayoran Baru, Jaksel', link: '#'},
    {desc: 'DKI Jakarta 12160', link: '#'},
  ];

  const ProjectOffice = [
    {desc: 'Cikarang Square Blok B 18', link: '#'},
    {desc: 'Jl. Raya Cikarang Bekasi', link: '#'},
    {desc: 'Jawa Barat 17530', link: '#'},
  ];

  // function goes here
  React.useEffect(() => {
    setScreenSize((x) => {
      x = xsO || smO ? 'sm' : mdO ? 'md' : lgO ? 'lg' : xlO ? 'xl' : 'xl';
      return x;
    });
  }, [width, xsO, smO, mdO, lgO, xlO]);

  return (
    <div
      ref={refHomeCont}
      className="position-relative w-100 page-full-cont overflow-hidden"
    >
      <LoadingScreen loading={loading} />
      {/* left parallax */}
      <ParallaxLeft
        offsetY={offsetY}
        refHomeCont={refHomeCont}
        open={open}
        loading={loading}
      />
      {/* right parallax */}
      <ParallaxRight
        offsetY={offsetY}
        refHomeCont={refHomeCont}
        open={open}
        loading={loading}
      />
      {/* navbar */}
      <Navbar
        refNavBar={refNavBar}
        open={open}
        setOpen={setOpen}
        cpNumber={cpNumber}
        visTopHeader={visTopHeader}
        neverTransparentBG={neverTransparentNavbar}
      />

      <Menu open={open} />

      {/* container of all content in home page */}
      <div
        className={`w-100 p-0 m-0 page-container ${
          loading ? 'loading' : 'loaded'
        } ${open ? 'open' : 'close'}`}
      >
        {/* content */}
        <section className={`content ${screenSize} ${className}`}>
          <div
            style={{
              height: neverTransparentNavbar ? (sm ? `3.5em` : '5em') : '0px',
              width: '100%',
              position: 'relative',
            }}
          />
          {/* top header */}

          {props.children}

          <a
            href="https://api.whatsapp.com/send?phone=628997665593&text=Halo%20Assalamualaikum%0A%0ANama%20saya:%0ADaerah%20Tinggal:%0A%0ASaya%20tertarik%20dengan%20produk%20Arrayan%20Group.%20Bisa%20jelaskan%20detailnya%20kepada%20saya.%0ATerima%20Kasih."
            className="wa-float"
            target="_blank"
            rel="noreferrer"
          >
            <div className="d-flex align-items-center justify-content-center">
              <img
                src={WaIcon}
                width="100%"
                height="100%"
                alt="icon-whatsapp-call"
              />
            </div>
          </a>

          {/* form */}
          <RegistrationForm />

          {/* footer element */}
          <FooterElement
            OurLink={OurLink}
            HeadOffice={HeadOffice}
            ProjectOffice={ProjectOffice}
            socialMedia={socialMedia}
            markers={markers}
          />
        </section>
      </div>
    </div>
  );
}
