import React from 'react';

export default function useVisibiliyRef(options) {
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
