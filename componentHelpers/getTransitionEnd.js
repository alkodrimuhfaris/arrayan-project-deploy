import React from 'react';

export default function getTransitionEnd(
  ref = {current: null},
  cb = () => {},
  controller = [],
) {
  const [tEnd, setTEnd] = React.useState(false);
  React.useEffect(() => {
    if (ref.current) {
      ref.current.ontransitionend = () => {
        cb();
      };
      setTEnd(ref.current.transitionend);
    }
  }, [ref.current, ...controller]);
  return tEnd;
}
