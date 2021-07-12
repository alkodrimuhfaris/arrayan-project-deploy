import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ImFacebook} from 'react-icons/im';
import {IoLogoInstagram, IoLogoYoutube} from 'react-icons/io';
import HomeHeader from '../header/home';
import LoadingScreen from '../Components/LoadingScreen';
import FooterElement from '../Components/Footer/FooterElement';
import ParallaxRight from '../Components/ParallaxRight';
import ParallaxLeft from '../Components/ParallaxLeft';
import RegistrationForm from '../Components/Home/RegistrationForm';
import Testimony from '../Components/Home/Testimony';
import Projects from '../Components/Home/Projects';
import Highlight from '../Components/Home/Highlight';
import TopHeader from '../Components/Home/TopHeader';
import useVisibiliyRef from '../componentHelpers/useVisibilityRef';
import Navbar from '../Components/Navbar';
import Menu from '../Components/Menu';
import getScrollAmount from '../componentHelpers/getScrollAmount';
import actions from '../redux/actions/index';
import ModalConfirm from '../Components/ModalConfirm/ModalConfirm';

export default function Home() {
  const dispatch = useDispatch();
  // timer for testimony on second
  const testiTimer = 4;
  const topCarTimer = 10;
  const loadingTime = 5;

  // cp number
  const cpNumber = '021-2250-4920';

  // get visibility of top header
  const [refTopHeader, visTopHeader] = useVisibiliyRef({treshold: 1.0});

  // scroll amount store
  const offsetY = getScrollAmount();

  // useState initialisation
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [movingPart, setMovingPart] = React.useState(true);
  const [openNotif, setOpenNotif] = React.useState(false);
  const [propNotif, setPropNotif] = React.useState({
    content: () => <text>Telah terjadi error, coba lagi</text>,
    confirm: () => {
      dispatch(actions.homeActions.getHome());
      dispatch(actions.newsActions.getNews());
    },
    confirmTxt: 'Coba Lagi',
    useOneBtn: true,
    icon: 'e',
    title: 'Error',
  });

  // useRef initialization
  const refHomeCont = React.useRef(null);

  // useSelector initialization
  const {
    pending: pendingHome,
    error: errorHome,
    success: successHome,
    projects,
    sliders,
    testimonials,
  } = useSelector((state) => state.homeData);
  const {
    pending: pendingNews,
    error: errorNews,
    success: successNews,
    news,
  } = useSelector((state) => state.newsData);

  React.useEffect(() => {
    dispatch(actions.homeActions.getHome());
    dispatch(actions.newsActions.getNews());
  }, []);

  React.useEffect(() => {
    let loadingID;
    let movingPartID;
    if (successNews && successHome) {
      loadingID = setTimeout(() => {
        setLoading(false);
      }, loadingTime * 1000);
      movingPartID = setTimeout(() => {
        setMovingPart(false);
      }, (loadingTime - 1) * 1000);
    }
    return () => {
      if (successNews && successHome) {
        clearTimeout(movingPartID);
        clearTimeout(loadingID);
      }
    };
  }, [successHome, successNews, pendingHome, pendingNews]);

  React.useEffect(() => {
    if (errorNews || errorHome) {
      setOpenNotif(true);
    }
  }, [errorNews, errorHome, pendingHome, pendingNews]);

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
      <ModalConfirm
        modalOpen={openNotif}
        setModalOpen={setOpenNotif}
        {...propNotif}
      />
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
        open={open}
        setOpen={setOpen}
        cpNumber={cpNumber}
        visTopHeader={visTopHeader}
      />

      <Menu open={open} />

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
          carouselTop={sliders}
          topCarTimer={topCarTimer}
        />

        {/* content */}
        <section className="content mt-5 mt-md-2">
          {/* highlight part */}
          <Highlight />

          {/* project */}
          <Projects projectList={projects} />

          {/* testimony */}
          <Testimony testimonyList={testimonials} testiTimer={testiTimer} />

          {/* form */}
          <RegistrationForm />

          {/* footer element */}
          <FooterElement
            newsList={news}
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
