import React from 'react';
import Head from 'next/head';
import {BiCalendarAlt} from 'react-icons/bi';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {ImFacebook} from 'react-icons/im';
import {IoLogoInstagram, IoLogoYoutube} from 'react-icons/io';
import {FaHeadset} from 'react-icons/fa';
import MultiCarousel from 'react-multi-carousel';
import {Input, Form, FormGroup} from 'reactstrap';
import responsive from '../helpers/topCarousel';
import st from '../styles/Home.module.css';
import CustomDot from '../helpers/customDot';
import getWindowDimensions from '../helpers/getWindowDimensions';
import crsl1 from '../Assets/Photos/crsl1.jpg';
import crsl2 from '../Assets/Photos/crsl2.jpg';
import crsl3 from '../Assets/Photos/crsl3.jpg';
import crsl4 from '../Assets/Photos/crsl4.jpg';
import arrayanIcon from '../Assets/Icons/arrayanIcon.svg';
import HomeHeader from './header/home';
import LoadingScreen from '../Components/LoadingScreen';
import FooterElement from '../Components/Footer/FooterElement';
import ParallaxRight from '../Components/ParallaxRight';
import ParallaxLeft from '../Components/ParallaxLeft';
import RegistrationForm from '../Components/Home/RegistrationForm';
import Testimony from '../Components/Home/Testimony';
import Projects from '../Components/Home/Projects';
import Highlight from '../Components/Home/Highlight';
import TopHeader from '../Components/Home/TopHeader';

function useVisibiliyRef(options) {
  const ref = React.useRef();
  const [visible, setVisibility] = React.useState(true);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisibility(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, visible];
}

export default function Home() {
  // get windows dimension
  const {width, height, sm, md, lg, xl} = getWindowDimensions();

  // get visibility of top header
  const [refTopHeader, visTopHeader] = useVisibiliyRef({treshold: 1.0});
  const [refPrlxLeftTop, visPrlxLeftTop] = useVisibiliyRef({treshold: 1.0});
  const [refPrlxLeftMid, visPrlxLeftMid] = useVisibiliyRef({treshold: 1.0});
  const [refPrlxLeftEnd, visPrlxLeftEnd] = useVisibiliyRef({treshold: 1.0});
  const [refPrlxRightTop, visPrlxRightTop] = useVisibiliyRef({
    treshold: 1.0,
  });
  const [refPrlxRightMid, visPrlxRightMid] = useVisibiliyRef({
    treshold: 1.0,
  });
  const [refPrlxRightEnd, visPrlxRightEnd] = useVisibiliyRef({
    treshold: 1.0,
  });

  // scroll amount store
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // useState initialisation
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [topCarousel, setTopCarousel] = React.useState(0);
  const [carouselTop, setCarouselTop] = React.useState([
    {
      src: crsl1,
      altText: 'integritas-keteladanan',
      caption: 'Integritas dan Keteladanan yang Tinggi.',
    },
    {
      src: crsl2,
      altText: 'pelayanan-terbaik',
      caption: 'Melayani Dengan Pelayanan Terbaik dan Penuh Tanggung Jawab',
    },
    {
      src: crsl3,
      altText: 'inovatif-ekspansif',
      caption: 'Inovatif, Ekpansif, dan Penuh Kebaruan',
    },
    {
      src: crsl4,
      altText: 'kemitraan-progresif',
      caption: 'Kemitraan yang Progresif',
    },
  ]);
  const [carouselTextTop, setCarouselTextTop] = React.useState([
    {
      title:
        'Well Established Property Company Specialized in Low Cost Housing',
      subtitle:
        'Arrayan Group is a market leader in providing Subsidy & Low cost housing located in Bekasi, Karawang & Purwakarta Region.',
      btnText: 'Dapatkan Penawaran Menarik Sekarang',
    },
    {
      title:
        'Well Established Property Company Specialized in Low Cost Housing',
      subtitle:
        'Arrayan Group is a market leader in providing Subsidy & Low cost housing located in Bekasi, Karawang & Purwakarta Region.',
      btnText: 'Dapatkan Penawaran Menarik Sekarang',
    },
    {
      title:
        'Well Established Property Company Specialized in Low Cost Housing',
      subtitle:
        'Arrayan Group is a market leader in providing Subsidy & Low cost housing located in Bekasi, Karawang & Purwakarta Region.',
      btnText: 'Dapatkan Penawaran Menarik Sekarang',
    },
    {
      title:
        'Well Established Property Company Specialized in Low Cost Housing',
      subtitle:
        'Arrayan Group is a market leader in providing Subsidy & Low cost housing located in Bekasi, Karawang & Purwakarta Region.',
      btnText: 'Dapatkan Penawaran Menarik Sekarang',
    },
  ]);
  const [projectList, setProjectList] = React.useState([
    {
      project: 'Grand CIKARANG CITY 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      link: '#',
      picture:
        'https://www.propertyinside.id/wp-content/uploads/2019/08/Grand-Vista-Cikarang-drone.jpg',
    },
    {
      project: 'Grand Vista CIKARANG',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      link: '#',
      picture:
        'https://www.propertyinside.id/wp-content/uploads/2019/08/Grand-Vista-Cikarang-drone.jpg',
    },
    {
      project: 'Vila Kencana CIKARANG',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      link: '#',
      picture:
        'https://www.propertyinside.id/wp-content/uploads/2019/08/Grand-Vista-Cikarang-drone.jpg',
    },
    {
      project: 'Grand Purwakarta city',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      link: '#',
      picture:
        'https://www.propertyinside.id/wp-content/uploads/2019/08/Grand-Vista-Cikarang-drone.jpg',
    },
  ]);
  const [testimonyList, setTestimonyList] = React.useState([
    {
      name: 'Grand Cicakarang City 2',
      testi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 4.8,
    },
    {
      name: 'Grand Cicakarang City 2',
      testi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 4.5,
    },
    {
      name: 'Grand Cicakarang City 2',
      testi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 4.6,
    },
    {
      name: 'Grand Cicakarang City 2',
      testi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 5,
    },
    {
      name: 'Grand Cicakarang City 2',
      testi:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      rating: 3.8,
    },
  ]);
  const [newsOrder, setNewsOrder] = React.useState(0);
  const [newsList, setNewsList] = React.useState([
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '04 Mei 2017',
      link: '#',
      picture:
        'https://cdn.statically.io/img/langgam.id/f=auto/wp-content/uploads/2020/10/313e1003-51a7-45bc-bf06-4c1888533a32.jpg',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '04 Mei 2017',
      link: '#',
      picture:
        'https://cdn.statically.io/img/langgam.id/f=auto/wp-content/uploads/2020/10/313e1003-51a7-45bc-bf06-4c1888533a32.jpg',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '04 Mei 2017',
      link: '#',
      picture:
        'https://cdn.statically.io/img/langgam.id/f=auto/wp-content/uploads/2020/10/313e1003-51a7-45bc-bf06-4c1888533a32.jpg',
    },
    {
      title:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '04 Mei 2017',
      link: '#',
      picture:
        'https://cdn.statically.io/img/langgam.id/f=auto/wp-content/uploads/2020/10/313e1003-51a7-45bc-bf06-4c1888533a32.jpg',
    },
  ]);
  const esgrim =
    'https://media.istockphoto.com/photos/ice-cream-picture-id147273409?k=6&m=147273409&s=612x612&w=0&h=7g3kiKizrqiUs7owHgEJvqzddjIcysmmWVK1ejss9p4=';

  // useRef initialization
  const refHomeCont = React.useRef(null);

  // timer carousel on second
  const topCarTimer = 3.5;

  // timer for testimony on second
  const testiTimer = 4;

  // cp number
  const cpNumber = '021-2250-4920';

  // timer for loading
  const [loadingTime, setLoadingTime] = React.useState(5);
  const [movingPart, setMovingPart] = React.useState(true);

  React.useEffect(() => {
    const loadingID = setTimeout(() => {
      setLoading(false);
    }, loadingTime * 1000);
    const movingPartID = setTimeout(() => {
      setMovingPart(false);
    }, 4 * 1000);
    return () => {
      clearTimeout(movingPartID);
      clearTimeout(loadingID);
    };
  }, []);

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
      <HomeHeader />
      <LoadingScreen movingPart={movingPart} loading={loading} />
      {/* left parallax */}
      <ParallaxLeft offsetY={offsetY} refHomeCont={refHomeCont} open={open} />
      {/* right parallax */}
      <ParallaxRight offsetY={offsetY} refHomeCont={refHomeCont} open={open} />
      {/* navbar */}
      <div className="navbar-ar-cont">
        <div
          className={`navbar-ar text-light ${
            visTopHeader || open ? '' : 'change-bg shadow'
          } ${open ? 'close' : ''}`}
        >
          <div className="container h-100 d-flex align-items-center justify-content-between">
            <div className="navbar-left container d-flex w-83 position-relative">
              <div className="logo">
                <img src={arrayanIcon} alt="icon-arrayan" />
              </div>
              <div className="contact">
                <a
                  className="contact-button text-decoration-none text-white"
                  href={`tel:${cpNumber}`}
                >
                  <div className="text-small">
                    <text>
                      <span>
                        <FaHeadset />
                      </span>{' '}
                      Call Center
                    </text>
                  </div>
                  {cpNumber}
                </a>
              </div>
            </div>
            <div
              className={`w-17 d-flex justify-content-right position-relative ${
                open ? 'open' : ''
              }`}
            >
              <button
                onClick={() => {
                  setOpen((x) => !x);
                }}
                type="button"
                className={`menu-toggle ${visTopHeader ? '' : 'change-color'}`}
              >
                &nbsp;
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={open ? 'open' : ''}>
        <nav>
          <ul className="menu">
            <li data-text="Projects">
              <a className="text-decoration-none text-white" href="#ourProject">
                Projects
              </a>
            </li>
            <li data-text="Testimony">
              <a className="text-decoration-none text-white" href="#testimony">
                Testimony
              </a>
            </li>
            <li data-text="Contact">
              <a
                className="text-decoration-none text-white"
                href="#formContact"
              >
                Contact
              </a>
            </li>
            <li data-text="News">
              <a
                className="text-decoration-none text-white"
                href="#newsArrayan"
              >
                News
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* container of all content in home page */}
      <div
        className={`w-100 p-0 m-0 page-container ${
          loading ? 'loading' : 'loaded'
        } ${open ? 'open' : 'close'}`}
      >
        {/* top header */}
        <TopHeader
          open={open}
          refTopHeader={refTopHeader}
          carouselTop={carouselTop}
          carouselTextTop={carouselTextTop}
          topCarTimer={topCarTimer}
        />

        {/* content */}
        <section className="content mt-5 mt-md-2">
          {/* highlight part */}
          <Highlight />

          {/* project */}
          <Projects projectList={projectList} />

          {/* testimony */}
          <Testimony
            testimonyList={testimonyList}
            testiTimer={testiTimer}
            testiImg={esgrim}
          />

          {/* form */}
          <RegistrationForm />

          {/* footer element */}
          {/* <FooterElement
            newsList={newsList}
            OurLink={OurLink}
            HeadOffice={HeadOffice}
            ProjectOffice={ProjectOffice}
            socialMedia={socialMedia}
            markers={markers}
          /> */}
        </section>
      </div>
    </div>
  );
}
