import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { GiAmericanFootballHelmet } from 'react-icons/gi';

const FootballHelmetIcon = ({
  color,
  size,
  className,
  title,
}) => {
  let icon;
  let valueStyling = {};
  if (color !== undefined || size !== undefined || className !== undefined || title !== undefined) {
    valueStyling = {
      color,
      size,
      className,
      title,
    };
    icon = (
      <IconContext.Provider value={valueStyling}>
        <div>
          <GiAmericanFootballHelmet />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <GiAmericanFootballHelmet />;
  }
  return icon;
};

export default FootballHelmetIcon;

FootballHelmetIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

FootballHelmetIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'TopRightArrow Icon',
};
