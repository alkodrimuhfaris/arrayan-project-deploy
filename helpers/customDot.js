import React from 'react';

export default function CustomDot({onClick, dotClass = '', ...rest}) {
  const {active} = rest;
  return (
    <button
      type="button"
      onClick={() => onClick()}
      className={`${dotClass} shadow-none mx-1 ${active ? 'active' : ''}`}
    >
      &nbsp;
    </button>
  );
}
