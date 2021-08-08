import React from 'react';
import Boards from '../../Components/AboutUs/Boards';
import TopHeader from '../../Components/AboutUs/TopHeader';
import VisiMisi from '../../Components/AboutUs/VisiMisi';
import Layout from '../../Components/Layout';
import Header from '../../header/abooutUs';

export default function index() {
  return (
    <Layout className="about-us" neverTransparentNavbar>
      <Header />
      <TopHeader />
      <VisiMisi />
      <Boards />
    </Layout>
  );
}
