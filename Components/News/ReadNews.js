import React from 'react';
import {useSelector} from 'react-redux';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';
import {FiGlobe} from 'react-icons/fi';
import Content from 'dangerously-set-html-content';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import imageStorage from '../../helpers/imageStorage';
import timeParser from '../../helpers/timeParser';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function ReadNews() {
  const [image, setImage] = React.useState('');
  const [date, setDate] = React.useState('');
  const [ref1, wRef1, hRef1] = getComponentWidth();
  const {
    title,
    shortContent,
    content,
    image: img,
    slug,
    date: dt,
  } = useSelector((state) => state.readNews);
  const [share, setShare] = React.useState([
    {href: '#', Icons: FaFacebookF},
    {href: '#', Icons: FaInstagram},
    {href: '#', Icons: FiGlobe},
    {href: '#', Icons: FaLinkedinIn},
    {href: '#', Icons: FaYoutube},
  ]);

  React.useEffect(() => {
    if (img && dt) {
      setImage((x) => {
        x = imageStorage(img);
        console.log(x);
        return x;
      });
      setDate((x) => {
        x = timeParser(dt);
        console.log(x);
        return x;
      });
    }
  }, [img, dt]);

  const {xs, sm, md, lg} = useWindowDimensions();

  return (
    <div className="read-news row no-gutters">
      <div
        ref={ref1}
        className="col-12 container-md image order-3 order-md-1 mb-3 p-0"
      >
        <img
          height={wRef1 ? `${(wRef1 * 3) / 4}px` : `${(wRef1 * 3) / 4}px`}
          src={image}
          alt={`${slug}-photos`}
        />
      </div>
      <div className="col-12 container title order-1 order-md-2 mb-1 mb-md-2">
        <h3>{title}</h3>
      </div>
      <div
        className={`col-12 container date order-2 order-md-3 mb-1 mb-md-2 d-flex ${
          sm ? 'justify-content-end' : 'justify-content-start'
        }`}
      >
        <p className="m-0">{date}</p>
      </div>
      <div className="col-12 container article-content order-4 order-md-4">
        <article>
          <Content html={content} />
        </article>
      </div>
      <div className="col-12 container mt-3 share-article order-5 order-md-5">
        <section
          className={`d-flex justify-content-between align-items-center ${
            xs ? 'w-100' : sm ? 'w-60' : md ? 'w-80' : lg ? 'w-60' : 'w-50'
          }`}
        >
          <span className="share-caption">Share Artikel ini</span>
          {share.map((val, idx) => {
            const {href, Icons} = val;
            return (
              <a
                key={idx}
                href={href}
                className="share-btn d-flex justify-content-center align-items-center"
              >
                <Icons />
              </a>
            );
          })}
        </section>
      </div>
    </div>
  );
}
