import React from 'react';
import TopHeader from './TopHeader';
import Highlight from './Highlight';
import Projects from './Projects';
import Testimony from './Testimony';
import FormRegis from './FormRegis';
import FooterElement from '../Footer/FooterElement';

export default function Content({
  open = false,
  loading = false,
  carouselTop = [],
  carouselTextTop = [],
  highlight = [],
  awards = [],
  projectList = [],
  testimonyList = [],
  newsList = [],
  OurLink = [],
  HeadOffice = [],
  ProjectOffice = [],
  socialMedia = [],
  markers = [],
  testiTimer = 10,
  topCarTimer = 10,
  testiImg = '',
  refTopHeader,
}) {
  return (
    <div
      className={`w-100 p-0 m-0 page-container ${open ? 'open' : 'close'} ${
        loading ? 'loading' : 'loaded'
      }`}
    >
      {/* top header */}
      <TopHeader
        refTopHeader={refTopHeader}
        carouselTop={carouselTop}
        carouselTextTop={carouselTextTop}
        open={open}
        topCarTimer={topCarTimer}
      />

      {/* content */}
      <section className="content mt-5 mt-md-2">
        {/* highlight part */}
        <Highlight highlight={highlight} awards={awards} />

        {/* project */}
        <Projects projectList={projectList} />

        {/* testimony */}
        <Testimony
          testimonyList={testimonyList}
          testiTimer={testiTimer}
          testiImg={testiImg}
        />

        {/* form */}
        <FormRegis />

        {/* berita dari arrayan */}
        <FooterElement
          newsList={newsList}
          markers={markers}
          OurLink={OurLink}
          HeadOffice={HeadOffice}
          ProjectOffice={ProjectOffice}
          socialMedia={socialMedia}
        />
      </section>
    </div>
  );
}
