import React from 'react';

export default function LayoutNews({slug = [], mainPage = false}) {
  return (
    <div className="my-5 container-lg">
      <div className="row">
        <div className="col-12 col-md-8 col-xl-9 order-1 order-md-1">
          this is for news list
        </div>
        <div className="col-12 col-md-4 col-xl-3 order-3 order-md-2">
          <div className="row">
            <div className={`col-12 ${!mainPage ? 'order-1 order-md-2' : ''}`}>
              this is for artikel terpopuler
            </div>
            <div className={`col-12 ${!mainPage ? 'order-1 order-md-2' : ''}`}>
              this is for tags
            </div>
          </div>
        </div>
        {mainPage ? (
          <div className="col-12 col-md-12 order-2 order-md-3 d-flex align-items-center justify-content-center my-3">
            <div>this is for pagination</div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
