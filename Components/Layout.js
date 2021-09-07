import React from 'react';
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
import {
  cpNumber,
  socialMedia,
  OurLink,
  HeadOffice,
  ProjectOffice,
  markers,
  whatsAppLink,
} from '../lib/dto';

export default function Layout({
  neverTransparentNavbar = false,
  className = 'home',
  visTopHeader = false,
  loading = false,
  ...props
}) {
  const [screenSize, setScreenSize] = React.useState('');
  const {sm, xsO, smO, mdO, lgO, xlO, width} = useWindowDimensions();

  // scroll amount store
  const offsetY = getScrollAmount();

  // useState initialisation
  const [open, setOpen] = React.useState(false);

  // useRef initialization
  const refHomeCont = React.useRef(null);
  const refNavBar = React.useRef(null);

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
            href={whatsAppLink}
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
