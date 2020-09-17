import React from 'react';
import HomeNavbar from 'components/layouts/HomeNavbar';
import Carousel from 'components/Carousel';
import StatisticsBandeau from 'components/StatisticsBandeau';
import FeatureBandeau from 'components/FeatureBandeau';
import PrimaryCTABandeau from 'components/PrimaryCTABandeau';
import Testimonials from 'components/Testimonials';
import Footer from 'components/layouts/Footer';

import { GiAmericanFootballHelmet } from 'react-icons/gi';

import * as content from 'helpers/contentHelpers';

const Home = () => (
  <>
    <HomeNavbar />
    <Carousel />
    <StatisticsBandeau />
    <PrimaryCTABandeau
      title={content.title}
      description={content.description}
      CTA="Meet my Team Now !"
      icon={<GiAmericanFootballHelmet />}
    />
    <FeatureBandeau
      title={content.title}
      description={content.description}
      image={content.footballImage}
      imageLeft
    />
    <FeatureBandeau
      title={content.title}
      description={content.description}
      image={content.footballImage}
      imageLeft={false}
    />
    <PrimaryCTABandeau
      title={content.title}
      description={content.description}
      CTA="Meet my Team Now !"
      icon={<GiAmericanFootballHelmet />}
    />
    <Testimonials testimonials={content.testimonials} />
    <Footer />
  </>
);

export default Home;
