import React from 'react';
import {Bars, useLoading} from '@agney/react-loading';

export default function ModalLoading({loading = false}) {
  const {containerProps, indicatorEl} = useLoading({
    loading,
    indicator: <Bars width="50" />,
  });
  return (
    <div
      className={`dark-mode-loading ${
        loading ? 'loading-modal' : 'loading-modal-close'
      }`}
    >
      <section
        className={`${
          loading ? 'loading-modal-main' : 'loading-modal-main-close'
        }`}
      >
        <section {...containerProps} style={{color: 'rgba(16, 185, 129, 1)'}}>
          {indicatorEl}
        </section>
      </section>
    </div>
  );
}
