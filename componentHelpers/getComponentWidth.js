import React from 'react';
import useWindowDimensions from './getWindowDimensions';

export default function getComponentWidth(ref = {current: null}) {
  const [w, setW] = React.useState(0);
  const {width} = useWindowDimensions();

  React.useEffect(() => {
    setW(() => (ref.current ? ref.current.offsetWidth : 0));
  }, [width]);

  return w;
}
