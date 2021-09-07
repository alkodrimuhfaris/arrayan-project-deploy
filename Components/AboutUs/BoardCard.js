import React from 'react';

export default function BoardCard({
  idx,
  ref1,
  wRef1,
  setSelected = (a) => a,
  selectBoard = (a) => a,
  toggle = () => null,
  name,
  photo,
  position,
}) {
  return (
    <div
      key={idx}
      ref={idx === 0 ? ref1 : null}
      style={{
        height: `${wRef1 / 0.82}px`,
      }}
      className="col-lg-3 col-md-6 col-12"
    >
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <button
          onClick={() => {
            setSelected(idx);
            selectBoard(idx);
            toggle();
          }}
          type="button"
          className="card p-0"
        >
          {photo !== '' ? (
            <div className="img-top">
              <img src={photo} alt="asmat-a" />
            </div>
          ) : (
            <div className="card-img-top bg-secondary img-replacer" />
          )}
          <div className="card-body d-flex flex-column align-items-center justify-content-center">
            <h5 className="title m-0">{name}</h5>
            <h6 className="subtitle m-0">{position}</h6>
          </div>
        </button>
      </div>
    </div>
  );
}
