import React from 'react';
import { Link } from 'react-router-dom';

import PrimaryButton from 'components/Buttons/PrimaryButton';

import 'styles/carousel.scss';

const Carousel = () => (
  <>
    <div id="carouselExampleSlidesOnly" className="carousel slide h-50" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="hero-image-1">
            <div className="hero-text-1">
              <h1 style={{ color: 'white' }}>FRANCHYZ</h1>
              <p>TEAM MANAGEMENT THE EASY WAY</p>
              <Link to="/register">
                <PrimaryButton text="Meet my Team now !" icon="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-image-2">
            <div className="hero-text-2">
              <h1 style={{ color: 'white' }}>FRANCHYZ</h1>
              <p>TEAM MANAGEMENT THE EASY WAY</p>
              <Link to="/register">
                <PrimaryButton text="Meet my Team now !" icon="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="hero-image-3">
            <div className="hero-text-3">
              <h1 style={{ color: 'white' }}>FRANCHYZ</h1>
              <p>TEAM MANAGEMENT THE EASY WAY</p>
              <Link to="/register">
                <PrimaryButton text="Meet my Team now !" icon="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Carousel;
