import React from 'react';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import useWindowDimensions from './getWindowDimensions';

export default function scrollToElement({jumpElement = ''}) {
  const refScroll = React.useRef(null);
  const router = useRouter();
  const {jump} = router.query;
  const {sm} = useWindowDimensions();

  React.useEffect(() => {
    let timeOutID;
    if (jumpElement !== '' && jump === jumpElement && refScroll.current) {
      timeOutID = setTimeout(() => {
        const yOffset = sm ? -60 : -90; // adapting to height of navbar on sm and non sm in pixel
        const y =
          refScroll.current.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }, 400);
    }
    return () => clearTimeout(timeOutID);
  }, [jump, jumpElement]);

  return {refScroll};
}
