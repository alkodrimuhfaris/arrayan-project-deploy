import React from 'react';
import {GoQuote} from 'react-icons/go';
import {AiOutlineStar, AiFillStar} from 'react-icons/ai';
import useWindowDimensions from '../../helpers/getWindowDimensions';

export default function Testi({
  rating = 3.5,
  comment = '',
  name = '',
  bp,
  ...props
}) {
  const {md} = useWindowDimensions();

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <article className="h-85">
        <div className="testimony-card shadow d-flex flex-column justify-content-between bg-white text-right text-black h-100 p-2 px-3 p-md-4">
          <div className="d-flex align-items-center justify-content-center mb-2">
            <GoQuote size={bp ? '1em' : '2em'} />
          </div>
          <div
            style={{height: '1em'}}
            className="stars w-100 my-0 my-md-3 d-flex align-items-center justify-content-center"
          >
            {[0, 1, 2, 3, 4].map((_, index) => {
              const scale = (rating * 100) / 5;
              const dif = scale - index * 20;
              const rat =
                dif >= 20 ? '0%' : dif < 0 ? '100%' : `${100 - dif * 5}%`;
              return (
                <div
                  key={index}
                  style={{height: '1em'}}
                  className="star position-relative p-3"
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '0px',
                      left: '0px',
                      zIndex: 2,
                      color: 'gold',
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <AiOutlineStar />
                  </div>
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: '0px',
                      left: '0px',
                      zIndex: 1,
                      color: 'gold',
                    }}
                  >
                    <div
                      className="d-flex align-items-center justify-content-end"
                      style={{
                        backgroundColor: 'transparent',
                        position: 'absolute',
                        top: '0px',
                        right: '0px',
                        transform: 'translate(-50%, 0)',
                        zIndex: 3,
                        width: 'calc(1em)',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'white',
                          height: '100%',
                          width: rat,
                        }}
                      />
                    </div>
                    <AiFillStar />
                  </div>
                </div>
              );
            })}
          </div>
          <p className="fading-text">{comment}</p>
          <h2 className="testimony-name">{name}</h2>
        </div>
      </article>
    </div>
  );
}
