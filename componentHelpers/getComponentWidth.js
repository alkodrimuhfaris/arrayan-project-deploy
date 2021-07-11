import React from 'react';
import useWindowDimensions from './getWindowDimensions';

export default function getComponentWidth(ref = {current: null}) {
  const [w, setW] = React.useState(0);
  const [h, setH] = React.useState(0);
  const {width, height} = useWindowDimensions();

  React.useEffect(() => {
    setW(() => (ref.current ? ref.current.offsetWidth : 0));
    setH(() => (ref.current ? ref.current.offsetHeight : 0));
  }, [width, height, ref.current]);

  return [w, h];
}
