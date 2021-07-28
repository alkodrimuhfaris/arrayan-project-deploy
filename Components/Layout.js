import React from 'react';
import {ImFacebook} from 'react-icons/im';
import {IoLogoInstagram, IoLogoYoutube} from 'react-icons/io';
import LoadingScreen from './LoadingScreen';
import FooterElement from './Footer/FooterElement';
import ParallaxRight from './ParallaxRight';
import ParallaxLeft from './ParallaxLeft';
import RegistrationForm from './Home/RegistrationForm';
import Navbar from './Navbar';
import Menu from './Menu';
import getScrollAmount from '../componentHelpers/getScrollAmount';
import useWindowDimensions from '../componentHelpers/getWindowDimensions';

export default function Layout({
  neverTransparentNavbar = false,
  className = 'home',
  visTopHeader = false,
  loading = false,
  movingPart = false,
  ...props
}) {
  const {sm} = useWindowDimensions();
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
    {desc: 'Home', link: '#'},
    {desc: 'About', link: '#'},
    {desc: 'Our Project', link: '#'},
    {desc: 'Investor', link: '#'},
    {desc: 'News', link: '#'},
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

  return (
    <div
      ref={refHomeCont}
      className="position-relative w-100 page-full-cont overflow-hidden"
    >
      <LoadingScreen movingPart={movingPart} loading={loading} />
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
        <section className={`content ${className}`}>
          <div
            style={{
              height: neverTransparentNavbar ? (sm ? `3.5em` : '5em') : '0px',
              width: '100%',
              position: 'relative',
            }}
          />
          {/* top header */}

          {props.children}

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
