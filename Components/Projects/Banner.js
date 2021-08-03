import React from 'react';
import {useSelector} from 'react-redux';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import imageStorage from '../../helpers/imageStorage';

export default function Banner() {
  const [bannerRef, bannerW, bannerH] = getComponentWidth();
  const {banner, slug} = useSelector((state) => state.projectData);

  return (
    <section
      ref={bannerRef}
      style={{
        width: '100%',
        height: `${bannerW / 3.2}px`,
      }}
      className="banner"
    >
      <img src={imageStorage(banner)} alt={`Banner-${slug}`} />
    </section>
  );
}
