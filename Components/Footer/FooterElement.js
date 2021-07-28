import React from 'react';
import Links from './Links';
import Maps from './Maps';
import News from './News';

export default function FooterElement({
  OurLink = [],
  HeadOffice = [],
  ProjectOffice = [],
  socialMedia = [],
  markers = [],
}) {
  return (
    <div className="footer-ar d-flex flex-column">
      {/* News from arrayan */}
      <News />

      {/* google maps */}
      <Maps markers={markers} />

      {/* footer */}
      <Links
        OurLink={OurLink}
        HeadOffice={HeadOffice}
        ProjectOffice={ProjectOffice}
        socialMedia={socialMedia}
      />
    </div>
  );
}
