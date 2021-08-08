import React from 'react';
import {useRouter} from 'next/router';
import {useSelector} from 'react-redux';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';
import {UncontrolledTooltip} from 'reactstrap';
import {AiOutlineTwitter} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import {FiGlobe} from 'react-icons/fi';
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from 'react-share';
import Content from 'dangerously-set-html-content';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import imageStorage from '../../helpers/imageStorage';
import timeParser from '../../helpers/timeParser';
import getComponentWidth from '../../componentHelpers/getComponentWidth';
import getSelfUrl from '../../helpers/getSelfUrl';

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
  const router = useRouter();
  const [url, setUrl] = React.useState('');
  const [copyUrl, setCopyUrl] = React.useState(false);
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  const [share, setShare] = React.useState([
    {href: '#', Icons: FaFacebookF, ShareBtn: FacebookShareButton},
    {href: '#', Icons: AiOutlineTwitter, ShareBtn: TwitterShareButton},
    {href: '#', Icons: FiGlobe, ShareBtn: 'email'},
    {href: '#', Icons: FaLinkedinIn, ShareBtn: LinkedinShareButton},
    {href: '#', Icons: FaWhatsapp, ShareBtn: WhatsappShareButton},
  ]);

  const toggle = () => setTooltipOpen((x) => !x);

  React.useEffect(() => {
    let timeOutID = null;
    if (tooltipOpen) {
      timeOutID = setTimeout(() => {
        setTooltipOpen(false);
      }, 2 * 1000);
    }
    return () => {
      clearTimeout(timeOutID);
    };
  }, [tooltipOpen]);

  React.useEffect(() => {
    setUrl((x) => {
      x = getSelfUrl(router.asPath);
      return x;
    });
  }, [router]);

  React.useEffect(() => {
    if (img && dt) {
      setImage((x) => {
        x = imageStorage(img);
        return x;
      });
      setDate((x) => {
        x = timeParser(dt);
        return x;
      });
    }
  }, [img, dt]);

  React.useEffect(() => {
    if (copyUrl && url) {
      navigator.clipboard.writeText(url);
      setCopyUrl(false);
    }
  }, [copyUrl]);

  const {xs, sm, md, lg} = useWindowDimensions();

  return (
    <div className="read-news row no-gutters">
      <div
        ref={ref1}
        className="col-12 container-md image order-3 order-md-1 mb-3 p-0"
      >
        <img
          height={wRef1 ? `${(wRef1 * 9) / 16}px` : `${(wRef1 * 3) / 4}px`}
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
            const {href, Icons, ShareBtn} = val;
            return (
              <button
                type="button"
                key={idx}
                href={href}
                className="share-btn d-flex justify-content-center align-items-center"
              >
                {ShareBtn !== 'email' ? (
                  <ShareBtn
                    className="d-flex justify-content-center align-items-center share-btn"
                    url={url}
                    title={title}
                    quote={title}
                    subject={title}
                    body={shortContent}
                  >
                    <Icons />
                  </ShareBtn>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setCopyUrl(true);
                      setTooltipOpen(true);
                    }}
                    id="tooltip-1"
                    className="share-btn d-flex justify-content-center align-items-center"
                  >
                    <Icons />
                  </button>
                )}
              </button>
            );
          })}
        </section>
      </div>

      <UncontrolledTooltip
        target="tooltip-1"
        placement="bottom"
        isOpen={tooltipOpen}
        toggle={toggle}
        trigger="click"
      >
        tautan berhasil disalin!
      </UncontrolledTooltip>
    </div>
  );
}
