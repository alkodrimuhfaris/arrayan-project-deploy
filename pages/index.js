import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import HomeHeader from '../header/home';
import Testimony from '../Components/Home/Testimony';
import Projects from '../Components/Home/Projects';
import Highlight from '../Components/Home/Highlight';
import TopHeader from '../Components/Home/TopHeader';
import useVisibiliyRef from '../componentHelpers/useVisibilityRef';
import actions from '../redux/actions/index';
import ModalConfirm from '../Components/ModalConfirm/ModalConfirm';
import Layout from '../Components/Layout';

export default function Home() {
  const dispatch = useDispatch();
  // timer for testimony on second
  const testiTimer = 4;
  const topCarTimer = 10;
  const loadingTime = 3;

  // get visibility of top header
  const [refTopHeader, visTopHeader] = useVisibiliyRef({treshold: 1.0});

  // useState initialisation
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [movingPart, setMovingPart] = React.useState(true);
  const [openNotif, setOpenNotif] = React.useState(false);
  const [propNotif, setPropNotif] = React.useState({
    content: () => <p>Telah terjadi error, coba lagi</p>,
    confirm: () => {
      dispatch(actions.homeActions.getHome());
    },
    confirmTxt: 'Coba Lagi',
    useOneBtn: true,
    icon: 'e',
    title: 'Error',
  });

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
  } = useSelector((state) => state.newsData);

  React.useEffect(() => {
    dispatch(actions.homeActions.getHome());
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

  return (
    <Layout
      className="home"
      neverTransparentNavbar={false}
      visTopHeader={visTopHeader}
      loading={loading}
      movingPart={movingPart}
    >
      <HomeHeader />
      <ModalConfirm
        modalOpen={openNotif}
        setModalOpen={setOpenNotif}
        {...propNotif}
      />
      {/* top header */}
      <TopHeader
        open={open}
        refTopHeader={refTopHeader}
        carouselTop={sliders}
        topCarTimer={topCarTimer}
      />

      {/* highlight part */}
      <Highlight />

      {/* project */}
      <Projects projectList={projects} />

      {/* testimony */}
      <Testimony testimonyList={testimonials} testiTimer={testiTimer} />
    </Layout>
  );
}
