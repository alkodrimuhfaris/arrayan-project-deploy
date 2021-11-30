import React from 'react';

export default function NavBtn({changeNewsSlide, val, Icon}) {
  return (
    <button
      onClick={() => changeNewsSlide(val.class)}
      type="button"
      name={val.class}
      className={`position-absolute d-flex align-items-center justify-content-center btn ${val.class}`}
    >
      <Icon />
    </button>
  );
}
