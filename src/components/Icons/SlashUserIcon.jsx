import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FaUserSlash } from 'react-icons/fa';

const SlashUserIcon = ({
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
          <FaUserSlash />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <FaUserSlash />;
  }
  return icon;
};

export default SlashUserIcon;

SlashUserIcon.PropTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

SlashUserIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'SlashUser Icon',
};
