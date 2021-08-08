import React from 'react';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {StaticGoogleMap, Marker, Path} from 'react-static-google-map';
import useWindowDimensions from '../../componentHelpers/getWindowDimensions';
import carouselControler from '../../componentHelpers/carouselControler';
import gpc from '../../Assets/MapsIcon/Grand-Purwakarta-City.svg';
import gvc from '../../Assets/MapsIcon/Grand-Vista-Cikarang.svg';
import gcc from '../../Assets/MapsIcon/Grand-Cikarang-City-2.svg';
import vkc from '../../Assets/MapsIcon/Villa-Kencana-Cikarang-01.svg';
import abtUs from '../../Assets/Photos/abtUs.jpg';
import getComponentWidth from '../../componentHelpers/getComponentWidth';

export default function Maps() {
  const carouselTransition = '0.3s ease';
  const [ref1, wRef1, hRef1] = getComponentWidth();
  const [ref2, wRef2, hRef2] = getComponentWidth();
  const [heightRatio, setHeightRatio] = React.useState(2.6667);
  const [refPhoto, wRefPhoto, hRefPhoto] = getComponentWidth();
  const [widthMap, setWidthMap] = React.useState(0);
  const locations = [
    {
      name: 'Grand Purwakarta City',
      address: 'Mulyamekar, Purwakarta West Java 41151',
      photo: gpc,
      href: '#',
    },
    {
      name: 'Grand Vista Cikarang',
      address: 'Jayamulya, Bekasi West Java 17330',
      photo: gvc,
      href: '#',
    },
    {
      name: 'Grand Cikarang City 2',
      address: 'Kedungwaringin, Bekasi West Java 17540',
      photo: gcc,
      href: '#',
    },
    {
      name: 'Vila Kencana CIkarang',
      address: 'Karangsentosa, Bekasi West Java 17530',
      photo: vkc,
      href: '#',
    },
  ];

  const {width, xsO, smO, mdO, lg, lgO, xlO} = useWindowDimensions();

  const slider = [
    {class: 'right', Icon: AiOutlineArrowRight},
    {class: 'left', Icon: AiOutlineArrowLeft},
  ];

  const {
    carouselArray: locationsArray,
    carouselNum: carousel,
    transition,
    sliderFunc,
    handleTouchMove,
    handleTouchStart,
    handleTouchEnd,
  } = carouselControler({
    carousel: locations,
    transition: carouselTransition,
    rightDir: slider[0].class,
    leftDir: slider[1].class,
    infinity: false,
  });

  React.useEffect(() => {
    const widthPhoto =
      smO || xsO
        ? wRef2 - 100
        : mdO
        ? (wRef2 - 100) / 2
        : lgO
        ? (wRef2 - 100) / 3
        : xlO
        ? (wRef2 - 100) / 4
        : (wRef2 - 100) / 4;
    setWidthMap(widthPhoto);
    setHeightRatio(() =>
      smO || xsO ? 0.9 : mdO ? 1.5 : lgO ? 2 : xlO ? 2.6667777 : 2.6667777,
    );
  }, [width, carousel]);

  return (
    <section
      ref={ref1}
      className="maps d-flex flex-column justify-content-center align-items-center mt-5"
      style={{
        height: `${wRef1 / heightRatio}px`,
      }}
    >
      <h1>Lokasi</h1>
      <div className="w-100">
        <div
          ref={ref2}
          style={{
            height: `${wRef1 / (heightRatio * 1.3)}px`,
            minHeight: '200px',
          }}
          className="container p-0 maps-container position-relative"
        >
          {!lg
            ? null
            : slider.map((val, idx) => {
                const {class: cls, Icon} = val;
                return (
                  <div key={idx} className={`maps-slider-btn-cont ${cls}`}>
                    <div className="position-relative h-100 w-100">
                      <button
                        type="button"
                        onClick={() => sliderFunc(cls)}
                        className={`maps-slider-btn color-white ${cls}`}
                      >
                        <Icon />
                      </button>
                    </div>
                  </div>
                );
              })}
          <div
            style={{
              width: `${wRef2 - 100}px`,
              marginLeft: '50px',
            }}
            className="maps-tracker-cont overflow-hidden h-100"
          >
            <div
              style={{
                transform: `translate(-${widthMap * carousel}px)`,
                transition,
              }}
              onTouchMove={handleTouchMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className="maps-tracker position-relative h-100"
            >
              {locationsArray.map((val, idx) => {
                const {name, href, address, photo} = val;
                return (
                  <div
                    key={idx}
                    style={{
                      left: `${idx * widthMap}px`,
                      top: '0px',
                      width: `${widthMap}px`,
                      height: '100%',
                    }}
                    className="maps-ind position-absolute"
                  >
                    <a href={href} className="maps-ind-cont shadow p-3">
                      <img src={photo} alt={name} />
                      <div className="text-map d-flex flex-column align-items-center justify-content-center">
                        <h3>{name}</h3>
                        <p className="w-100">{address}</p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
