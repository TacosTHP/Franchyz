import React from 'react';
import HomeNavbar from 'components/layouts/HomeNavbar';
import Carousel from 'components/Carousel';
import StatisticsBandeau from 'components/StatisticsBandeau';

const Home = () => (
  <>
    <HomeNavbar />
    <Carousel />
    <StatisticsBandeau />
    <Carousel />
  </>
);

export default Home;
