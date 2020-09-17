import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from 'components/Buttons/PrimaryButton';

import { GiAmericanFootballHelmet } from 'react-icons/gi';

import 'styles/nav.scss';

const HomeNavbar = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollSpy = window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.pageYOffset > scrollIndex) {
      if (navbar.classList.contains('sticky-top') === true) {
        navbar.classList.remove('sticky-top');
      }
      setScrollIndex(window.pageYOffset);
    }
    if (navbar.classList.contains('sticky-top') === false) {
      if (window.pageYOffset < scrollIndex) {
        navbar.classList.add('sticky-top');
        const updatedIndex = window.pageYOffset;
        setScrollIndex(updatedIndex);
      }
    }
  });
  return (
    <nav className="navbar navbar-expand-lg py-3 px-5 bg-dark" id="navbar">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="logo">FRANCHYZ</Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="float-right" id="authNav">
          <Link to="/register">
            <PrimaryButton text="Meet my Team now !" icon={<GiAmericanFootballHelmet />} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
