import React from 'react';
import PropTypes from 'prop-types';

import HeroBuilder from 'helpers/styleBuilderHelpers';

import 'styles/hero.scss';

const Hero = ({
  image,
  width,
  title,
  description,
}) => {
  const heroStyle = HeroBuilder(image, width);
  const setupHeroText = () => {
    let content;
    if (title !== undefined || description !== undefined) {
      content = (
        <>
          <h1 className="text-primary">{title}</h1>
          <p>{description}</p>
        </>
      );
    }
    return content;
  };
  return (
    <>
      <div className="hero-image" style={heroStyle}>
        <div className="hero-text text-primary">
          {setupHeroText}
        </div>
      </div>
    </>
  );
};

export default Hero;

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Hero.defaultProps = {
  title: '',
  description: '',
};
