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
    <FeatureBandeau
      title="You're a Football Team Manager ?"
      description={`
        Managing an Amateur Football Team is a challenging responsibility.
        From playmaking to attendance management, your role is central.

        With FRANCHYZ, manage your Teams, your Players and the Events they have to attend to.
        Get immediate access to your personal Dashboard and organize your Teams success !

        Manage your Team to the NEXT LEVEL !
      `}
      image={content.footballImage}
      imageLeft
      CTA="Manage my Team Now !"
      icon={<GiAmericanFootballHelmet />}
      url="/register"
    />
    <PrimaryCTABandeau
      title="Managing Players attendance"
      description={`
        Building a winning Football team requires Discipline.

        With your personal Dashboard and the Attendance Managagement Module,
        follow your players attendances and build the Team who'll definitely win !
      `}
      CTA="Manage my Team Now !"
      icon={<GiAmericanFootballHelmet />}
      url="/register"
    />
    <FeatureBandeau
      title="You're a Football Player ?"
      description={`
        Success comes after pain.

        Through your Training and your Games performance, reach the summit and become
        the MVP of your Team !

        With FRANCHYZ, get access to your Coach Practices Instructions and follow your selection
        to the Big Time Games !
      `}
      image={content.footballImage}
      imageLeft={false}
      CTA="Meet my Team Now !"
      icon={<GiAmericanFootballHelmet />}
      url="/register"
    />
    <PrimaryCTABandeau
      title="Accessing Practice Instructions"
      description={`
        Each time your Coach create a Practice, we allow the opportunity of submitting Practice Instructions.
        These Instructions can be focused on a Player, a Position or the whole Team.

        Get access to these instructions before the Practice and Feel the Pain now !
      `}
      CTA="Meet my Team Now !"
      icon={<GiAmericanFootballHelmet />}
      url="/register"
    />
    <Testimonials testimonials={content.testimonials} />
    <Footer />
  </>
);

export default Home;
