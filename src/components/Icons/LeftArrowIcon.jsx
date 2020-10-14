import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { CgArrowLeftO } from 'react-icons/cg';

const LeftArrowIcon = ({
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
          <CgArrowLeftO />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <CgArrowLeftO />;
  }
  return icon;
};

export default LeftArrowIcon;

LeftArrowIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

LeftArrowIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'LeftArrowIcon Icon',
};
