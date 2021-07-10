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
import Award1 from '../Assets/Icons/Awards-01.svg';
import Award2 from '../Assets/Icons/Awards-02.svg';
import Award3 from '../Assets/Icons/Awards-03.svg';
import Award4 from '../Assets/Icons/Awards-04.svg';
import arrayanIcon from '../Assets/Icons/arrayanIcon.svg';
import arrayanIconColor from '../Assets/Icons/arrayanIconColor.svg';
import Testimony from '../componentHelpers/Testimony';
import HomeHeader from './header/home';
import leftTop from '../Assets/Parallax/kiri-top.png';
import leftMid from '../Assets/Parallax/kiri-branch-middle.png';
import leftEnd from '../Assets/Parallax/kiri-end.png';
import rightTop from '../Assets/Parallax/kanan-branch-top.png';
import rightMid from '../Assets/Parallax/kanan-mid.png';
import rightEnd from '../Assets/Parallax/kanan-branch-end.png';
import maps from '../Assets/Photos/GoogleMaps.png';
import LoadingScreen from '../Components/LoadingScreen';
import FooterElement from '../Components/Footer/FooterElement';

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
  const [divisionForm, setDivisionForm] = React.useState('');
  const [groupForm, setGroupForm] = React.useState('');
  const [fullNameForm, setFullNameForm] = React.useState('');
  const [phoneNumberForm, setPhoneNumberForm] = React.useState('');
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
  const [testi, setTesti] = React.useState(0);
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
  const refCar = React.useRef(null);
  const refCarText = React.useRef(null);
  const refTesti = React.useRef(null);
  const refTestiWrapper = React.useRef(null);
  const refTestiIndv = React.useRef(null);
  const refTestiBlur = React.useRef(null);
  const refNews = React.useRef(null);
  const refNewsCont = React.useRef(null);
  const refHomeCont = React.useRef(null);

  // timer carousel on second
  const topCarTimer = 3.5;

  // timer for testimony on second
  const testiTimer = 4;

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

  React.useEffect(() => {
    const intervalID = setInterval(
      () =>
        setTopCarousel((x) => {
          x = x === carouselTop.length - 1 ? 0 : x + 1;
          return x;
        }),
      topCarTimer * 1000,
    );

    const intervalTesti = setInterval(
      () =>
        setTesti((x) => {
          x = x === testimonyList.length - 1 ? 0 : x + 1;
          return x;
        }),
      testiTimer * 1000,
    );

    return () => {
      clearInterval(intervalID);
      clearInterval(intervalTesti);
    };
  }, []);

  const parallaxLeft = [
    {src: leftTop, position: '8%', speed: 0.7},
    {src: leftMid, position: '30%', speed: 0.5},
    {src: leftEnd, position: '35%', speed: 0.73},
  ];

  const parallaxRight = [
    {src: rightTop, position: '-1%', speed: 0.3},
    {src: rightMid, position: '20%', speed: 0.7},
    {src: rightEnd, position: '45%', speed: 0.52},
  ];

  const topSlider = [
    {class: 'slider-left', Icon: AiOutlineArrowLeft},
    {class: 'slider-right', Icon: AiOutlineArrowRight},
  ];

  const testiSlider = [
    {class: 'testi-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'testi-slider-right', Icon: AiOutlineArrowRight},
  ];

  const newsSlider = [
    {class: 'news-slider-left', Icon: AiOutlineArrowLeft},
    {class: 'news-slider-right', Icon: AiOutlineArrowRight},
  ];

  const hightlight = [
    {title: 'Berdiri Sejak', desc: '2010'},
    {title: 'Mengelola Lahan', desc: '698 Ha'},
    {title: 'Unit Terjual', desc: '15.000'},
    {title: 'Akan Dibangun', desc: '20.000'},
  ];

  const awards = [
    {Award: Award1},
    {Award: Award2},
    {Award: Award3},
    {Award: Award4},
  ];

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

  const sliderTopCar = (dir) => {
    setTopCarousel((x) => {
      x = dir === 'slider-left' ? x - 1 : x + 1;
      x = dir === 'slider-left' && x < 0 ? carouselTop.length - 1 : x;
      x = dir === 'slider-right' && x > carouselTop.length - 1 ? 0 : x;
      return x;
    });
  };

  const changeTestiSlide = (dir) => {
    setTesti((x) => {
      x = dir === 'testi-slider-left' ? x - 1 : x + 1;
      x = dir === 'testi-slider-left' && x < 0 ? testimonyList.length - 1 : x;
      x = dir === 'testi-slider-right' && x > testimonyList.length - 1 ? 0 : x;
      return x;
    });
  };

  const changeNewsSlide = (dir) => {
    setNewsOrder((x) => {
      x = dir === 'news-slider-left' ? x - 1 : x + 1;
      x = dir === 'news-slider-left' && x < 0 ? newsList.length - 1 : x;
      x = dir === 'news-slider-right' && x > newsList.length - 1 ? 0 : x;
      return x;
    });
  };

  const submitForm = () => {
    const payload = {
      name: fullNameForm,
      phone: phoneNumberForm,
      division: divisionForm,
      group: groupForm,
    };
    console.log(payload);
  };

  return (
    <div
      ref={refHomeCont}
      className="position-relative w-100 page-full-cont overflow-hidden"
    >
      <HomeHeader />
      <LoadingScreen movingPart={movingPart} loading={loading} />
      {/* left parallax */}
      <div className={`parallax-left ${open ? 'open' : ''}`}>
        <div className="parallax-left-relative">
          {parallaxLeft.map((val, idx) => {
            const {src, position, speed} = val;
            return (
              <div
                key={idx}
                style={{
                  transform: refHomeCont.current
                    ? `translateY(${speed * offsetY}px)`
                    : '',
                  top: position,
                }}
                className="left-wrapper"
              >
                <div className="position-relative w-100 h-100">
                  <img src={src} alt={`parallax-left-${idx}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* right parallax */}
      <div className={`parallax-right ${open ? 'open' : ''}`}>
        <div className="parallax-right-relative">
          {parallaxRight.map((val, idx) => {
            const {src, position, speed} = val;
            return (
              <div
                key={idx}
                style={{
                  transform: refHomeCont.current
                    ? `translateY(${speed * offsetY}px)`
                    : '',
                  width: idx === 0 ? '200%' : '100%',
                  top: position,
                }}
                className="right-wrapper"
              >
                <div className="position-relative w-100 h-100">
                  <img src={src} alt={`parallax-right-${idx}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
                  href="tel:(021)-2250-4920"
                >
                  <div className="text-small">
                    <text>
                      <span>
                        <FaHeadset />
                      </span>{' '}
                      Call Center
                    </text>
                  </div>
                  021 2250 4920
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
        className={`w-100 p-0 m-0 page-container ${open ? 'open' : 'close'}`}
      >
        {/* top header */}
        <div className="top-header container-lg mb-2">
          <div
            ref={refTopHeader}
            className="text-ctn row row-eq-height no-gutters position-relative"
          >
            {/* slider carousel */}
            <div
              className={`slider-btn ${
                md ? 'col-12 w-100 order-2 order-md-3' : 'position-absolute'
              } d-flex`}
            >
              <div className="slider-btn-ctl justify-content-center align-items-center d-flex w-100">
                {carouselTop.map((_, index) => {
                  const setActive = index === topCarousel ? 'active' : '';
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`slider-btns ar_carousel_slider_btn mx-1 ${setActive}`}
                      onClick={() => setTopCarousel(index)}
                    >
                      &nbsp;
                    </button>
                  );
                })}
              </div>
            </div>

            {/* text container */}
            <div className="header-text col-12 order-3 order-md-1 panel col-md-13 col-lg-10 bg-ar-dark">
              <div className="container pt-0 pt-md-5 pt-lg-0 mt-0 mt-md-5 mt-lg-0">
                <section className="col-12 col-md-12 col-lg-6 overflow-hidden">
                  <div
                    ref={refCarText}
                    style={{
                      height: sm
                        ? '300px'
                        : md
                        ? '300px'
                        : lg
                        ? '350px'
                        : xl
                        ? '350px'
                        : '350px',
                      width: '100%',
                      transform: refCarText.current
                        ? `translate(-${
                            refCarText.current.offsetWidth * topCarousel
                          }px, 0px)`
                        : '',
                      transition: '0.3s ease',
                    }}
                    className="text-carousel-cont w-100 position-relative"
                  >
                    {carouselTextTop.map((val, idx) => {
                      const widthCar = refCarText.current
                        ? refCarText.current.offsetWidth
                        : 0;
                      return (
                        <div
                          style={{
                            left: `${idx * widthCar}px`,
                          }}
                          className="text-carousel w-100 h-100 px-4 pb-2 position-absolute"
                        >
                          <h1 className="title text-uppercase">{val.title}</h1>
                          <p className="subtitle">{val.subtitle}</p>
                          <button type="button" className="btn btn-block">
                            {val.btnText}
                          </button>
                        </div>
                      );
                    })}
                    <div className="container" />
                  </div>
                </section>
              </div>
            </div>

            {/* container image carousel */}
            <div className="header-img col-12 col-md-12 col-lg-2 order-1 order-md-2">
              <div className="header-img-container overflow-hidden">
                <div className="position-relative w-100 h-100">
                  <div className="carousel-cont-absolute">
                    <ul
                      ref={refCar}
                      style={{
                        transform: refCar.current
                          ? `translate(-${
                              refCar.current.offsetWidth * topCarousel
                            }px, 0px)`
                          : '',
                        transition: '0.3s ease',
                        width: '100%',
                      }}
                      className="ar_carousel_track position-relative"
                    >
                      {carouselTop.map((item, index) => {
                        const setActive =
                          index === topCarousel ? 'ar_car_active' : '';
                        const widthCar = refCar.current
                          ? refCar.current.offsetWidth
                          : 0;
                        return (
                          <li
                            style={{
                              left: `${index * widthCar}px`,
                            }}
                            key={index}
                            className={`ar_carousel_slide ${setActive}`}
                          >
                            <img src={item.src} alt={item.altText} />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="slider-cont-absolute">
                    <div
                      className={`overflow-hidden slider-header-container ${
                        open ? 'close' : ''
                      } position-relative`}
                    >
                      {topSlider.map((val, index) => {
                        const {Icon} = val;
                        return (
                          <button
                            onClick={() => sliderTopCar(val.class)}
                            key={index}
                            type="button"
                            className={`position-absolute d-flex align-items-center justify-content-center btn ${val.class}`}
                          >
                            <Icon />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <section className="content mt-5 mt-md-2">
          {/* highlight part */}
          <section className="awards mb-3 mb-md-0 container text-center">
            <section className="row no-gutters">
              {hightlight.map((val, index) => (
                <div key={index} className="p-2 p-md-4 col-6 col-md-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <article className="highlight d-flex flex-column align-items-center justify-content-center">
                      <h1 className="m-0 title">{val.title}</h1>
                      <text className="m-0 subtitle">{val.desc}</text>
                    </article>
                  </div>
                </div>
              ))}
            </section>

            {/* award part */}
            <section className="row no-gutters">
              {awards.map((val, index) => {
                const {Award} = val;
                return (
                  <div key={index} className="p-2 p-md-4 col-6 col-md-3">
                    <div className="award-container d-flex justify-content-center align-items-center">
                      <article className="award rounded">
                        <img src={Award} alt={`awards-${index + 1}`} />
                      </article>
                    </div>
                  </div>
                );
              })}
            </section>
          </section>

          {/* project */}
          <section id="ourProject" className="projects my-5">
            <article className="container mb-4 text-ar-dark text-center">
              <h1 className="title">Our Project</h1>
            </article>
            <article className="project container">
              <div className="row no-gutters">
                {projectList.map((val, idx) => {
                  const a = idx + 1;
                  const even = a % 2 === 0;
                  return (
                    <div className="col-12 col-md-6 col-lg-12 col-xl-12 m-0 p-0">
                      <article
                        className={`project-wrapper w-100 ${
                          even ? 'even' : 'odd'
                        }`}
                      >
                        <div className="project-img-container">
                          <img
                            className={`img-main ${
                              even ? 'img-main-even' : 'img-main-odd'
                            }`}
                            src={val.picture}
                            alt={`project-${idx}`}
                          />
                          <img
                            className={`img-behind ${
                              even ? 'img-behind-even' : 'img-behind-odd'
                            }`}
                            src={val.picture}
                            alt={`project-${idx}`}
                          />
                        </div>
                        <div
                          className={`project-desc-wrapper ${
                            even ? 'even' : 'odd'
                          }`}
                        >
                          <h2 className="project-title">{val.project}</h2>
                          <p
                            className={`project-desc ${even ? 'even' : 'odd'}`}
                          >
                            {val.description}
                          </p>
                          <a className="project-btn" href={val.link}>
                            Info lebih lanjut
                          </a>
                        </div>
                      </article>
                    </div>
                  );
                })}
              </div>
            </article>
          </section>

          {/* testimony */}
          <section
            id="testimony"
            className="testimony position-relative overflow-hidden text-center my-lg-5 mb-0"
          >
            <section className="container">
              <h1 className="title mx-auto text-ar-dark">
                Testimoni Arrayan Group
              </h1>
              <p className="subtitle mx-auto text-grey">
                Yakin belum memiliki property dari Arrayan Group? Yul kita tanya
                apa pendapat orang yang sudah memiliki property di Arrayan
                Group.
              </p>
            </section>
            <div className="">
              <section
                className="testi-container container position-relative"
                ref={refTesti}
              >
                <div className="bg-img-container">
                  <img src={esgrim} alt="testimony" />
                  {testiSlider.map((val, idx) => {
                    const {Icon} = val;
                    return (
                      <button
                        onClick={() => changeTestiSlide(val.class)}
                        key={idx}
                        type="button"
                        className={`position-absolute d-flex align-items-center justify-content-center btn ${val.class}`}
                      >
                        <Icon />
                      </button>
                    );
                  })}
                </div>
                <article ref={refTestiWrapper} className="testi-wrapper">
                  <div
                    style={{
                      width: md
                        ? '100%'
                        : refTestiWrapper.current && refTestiIndv.current
                        ? `${2 * refTestiIndv.current.offsetWidth}px`
                        : '100%',
                    }}
                    className="testi-inside-wrapper"
                  >
                    <div
                      className="testi-blur-left"
                      style={{
                        width: md
                          ? refTestiWrapper.current && refTestiIndv.current
                            ? `${refTestiIndv.current.offsetWidth / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                            : '0%'
                          : '0%',
                      }}
                    />
                    <div
                      className="testi-blur-right"
                      style={{
                        width: md
                          ? `${refTestiIndv.current.offsetWidth / 4}px` // dibagi 4 karena panjangnya hanya seperempat
                          : refTestiWrapper.current && refTestiIndv.current
                          ? `${
                              refTestiWrapper.current.offsetWidth -
                              2 * refTestiIndv.current.offsetWidth
                            }px`
                          : '0%',
                      }}
                      ref={refTestiBlur}
                    />

                    <div
                      className="w-100 h-100 testi-tracker position-relative"
                      style={{
                        transform: !refTestiIndv.current
                          ? ''
                          : md
                          ? `translate(-${
                              testi * refTestiIndv.current.offsetWidth
                            }px, 0px)`
                          : `translate(-${
                              testi * refTestiIndv.current.offsetWidth
                            }px, 0px)`,
                        transition: '0.3s ease',
                      }}
                    >
                      {testimonyList.map((val, idx) => {
                        const firstRef = idx === 0 ? refTestiIndv : null;
                        const widthRefTesti = refTestiIndv.current
                          ? refTestiIndv.current.offsetWidth
                          : 0;
                        // const widthRefBlur = refTestiBlur.current
                        //   ? refTestiBlur.current.offsetWidth
                        //   : 0;
                        return (
                          <div
                            ref={firstRef}
                            className="testi-individual h-100 position-absolute"
                            style={{
                              left: md
                                ? `${widthRefTesti / 4 + idx * widthRefTesti}px`
                                : `${idx * widthRefTesti}px`,
                            }}
                          >
                            <Testimony
                              name={val.name}
                              comment={val.testi}
                              rating={val.rating}
                              bp={md}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </section>
            </div>
          </section>

          {/* form */}
          <section
            id="formContact"
            className="mt-0 mt-lg-3 form-contact bg-ar-dark text-white"
          >
            <section className="container text-center">
              <h1 className="title my-4 mx-auto">
                Sudah Siap Membuka #pintupertama Anda?
              </h1>
              <p className="subtitle w-80 my-4 mx-auto">
                Keputusan finansial paling penting dalam hidup Anda dimulai dari
                sini, karenanya tim Arrayan Group selalu siap untuk membantu
                Anda dalam setiap langkahnya
              </p>
            </section>
            {/* the form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                submitForm();
              }}
              className="form ar-form"
            >
              <div className="container d-flex flex-column justify-content-center align-items-center mx-auto">
                <div className="row w-100 no-gutters">
                  <div className="col-12 pt-2 pb-3 col-md-6">
                    <select
                      // type="select"
                      id="division"
                      name="division"
                      value={divisionForm}
                      onChange={(e) => setDivisionForm(e.target.value)}
                      className="input-form rounded-0 py-2"
                      placeholder="Bagian Yang Ingin Dihubungi"
                    >
                      <option value="" selected className="d-none">
                        Bagian Yang Ingin Dihubungi
                      </option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                  <div className="col-12 pt-2 pb-3 col-md-6">
                    <select
                      value={groupForm}
                      onChange={(e) => setGroupForm(e.target.value)}
                      name="group"
                      id="group"
                      className="input-form rounded-0 py-2"
                    >
                      <option value="" selected className="d-none">
                        Perumahan Arrayan Group
                      </option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="fiat">Fiat</option>
                      <option value="audi">Audi</option>
                    </select>
                  </div>
                </div>
                <div className="row w-100 no-gutters">
                  <div className="col-12 pt-2 pb-3 col-md-6">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={fullNameForm}
                      onChange={(e) => setFullNameForm(e.target.value)}
                      className="input-form rounded-0 py-2 w-100"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="col-12 pt-2 pb-3 col-md-6">
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={phoneNumberForm}
                      onChange={(e) => setPhoneNumberForm(e.target.value)}
                      className="input-form rounded-0 py-2 w-100"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                </div>
                <button type="submit" className="btn-ar rounded btn-form my-4">
                  Hubungi Kami
                </button>
              </div>
            </form>
          </section>

          {/* footer element */}
          <FooterElement
            newsList={newsList}
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
