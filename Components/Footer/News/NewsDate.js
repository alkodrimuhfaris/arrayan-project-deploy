import React from 'react';
import {BiCalendarAlt} from 'react-icons/bi';

export default function NewsDate({val}) {
  return (
    <p className="news-date mb-3 small d-flex align-items-center text-ar-dark">
      <span className="icon d-flex align-items-center">
        <BiCalendarAlt />
      </span>
      <span>{val.date.split('T')[0]}</span>
    </p>
  );
}
