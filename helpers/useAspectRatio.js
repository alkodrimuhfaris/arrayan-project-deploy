import React from 'react';
import useWindowDimensions from './getWindowDimensions';

export default function useAspectRatio({
  ref = {current: null},
  wRxl = 0.0,
  wRlg = 0.0,
  wRmd = 0.0,
  wRsm = 0.0,
  wrGlobal = 1,
  aRxl = 0.0,
  aRlg = 0.0,
  aRmd = 0.0,
  aRsm = 0.0,
  arGlobal = 1,
}) {
  const {sm, md, lg, xl} = useWindowDimensions();
  const [width, setWidth] = React.useState('100%');
  const [height, setHeight] = React.useState('0%');

  React.useEffect(() => {
    if (ref.current) {
      const w = ref.current.offsetWidth;
      const wd = `${
        sm && wRsm
          ? w * wRsm
          : md && wRmd
          ? w * wRmd
          : lg && wRlg
          ? w * wRlg
          : xl && wRxl
          ? w * wRxl
          : w * wrGlobal
      }px`;
      const h = `${
        sm && aRsm
          ? w / aRsm
          : md && aRmd
          ? w / aRmd
          : lg && aRlg
          ? w / aRlg
          : xl && aRxl
          ? w / aRxl
          : w / arGlobal
      }px`;
      setWidth(wd);
      setHeight(h);
    }
  }, [ref.current]);

  return {width, height};
}
