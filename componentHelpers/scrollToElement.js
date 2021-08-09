import React from 'react';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import useWindowDimensions from './getWindowDimensions';

export default function scrollToElement({jumpElement = ''}) {
  const [loadTime, setLoadTime] = React.useState(400);
  const refScroll = React.useRef(null);
  const firstLoad = React.useRef(null);
  const router = useRouter();
  const {pathname} = router;
  const {jump} = router.query;
  const {sm} = useWindowDimensions();
  const {success: successHome, pending: pendingHome} = useSelector(
    (state) => state.homeData,
  );
  const {success: successNews, pending: pendingNews} = useSelector(
    (state) => state.newsData,
  );

  React.useEffect(() => {
    let timeOutID;
    if (pathname !== '/') {
      const time = firstLoad.current ? 300 : 500;
      if (jumpElement !== '' && jump === jumpElement && refScroll.current) {
        timeOutID = setTimeout(() => {
          const yOffset = sm ? -60 : -90; // adapting to height of navbar on sm and non sm in pixel
          const y =
            refScroll.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }, time);
        if (!firstLoad.current) {
          firstLoad.current = true;
        }
      }
    }
    return () => clearTimeout(timeOutID);
  }, [jump, jumpElement]);

  React.useEffect(() => {
    if (pathname === '/' && jumpElement === 'projects') {
      if (pendingNews || pendingHome) {
        setLoadTime(4000);
      }
    }
  }, [successNews, successHome]);

  React.useEffect(() => {
    let timeOutID;
    if (pathname === '/' && successHome && successNews) {
      if (jumpElement !== '' && jump === jumpElement && refScroll.current) {
        timeOutID = setTimeout(() => {
          const yOffset = sm ? -60 : -90; // adapting to height of navbar on sm and non sm in pixel
          const y =
            refScroll.current.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
          setLoadTime(400);
        }, loadTime);
      }
    }
    return () => clearTimeout(timeOutID);
  }, [jump, jumpElement, pendingHome, pendingNews]);
  return {refScroll};
}
