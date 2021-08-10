import React from 'react';
import {useSelector} from 'react-redux';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import Link from 'next/link';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import imageStorage from '../../helpers/imageStorage';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';

export default function Banner() {
  const [bannerRef, bannerW, bannerH] = getComponentWidth();
  const {banner, slug, aspectRatio} = useSelector((state) => state.projectData);

  const {sm} = useWindowDimensions();

  return (
    <section
      ref={bannerRef}
      style={{
        width: '100%',
        height: `${bannerW / aspectRatio}px`,
      }}
      className="banner position-relative"
    >
      <Link
        href={{
          pathname: '/',
          query: {jump: 'projects'},
        }}
      >
        <a
          style={{
            top: sm ? '4.5em' : '6em',
          }}
          className="go-back-projects"
        >
          <AiOutlineArrowLeft /> {sm ? '' : 'Go Back to '}Projects
        </a>
      </Link>
      <img src={imageStorage(banner)} alt={`Banner-${slug}`} />
    </section>
  );
}
