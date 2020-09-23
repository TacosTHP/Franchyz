import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { CgArrowTopRightO } from 'react-icons/cg';

const TopRightArrowIcon = ({
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
          <CgArrowTopRightO />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <CgArrowTopRightO />;
  }
  return icon;
};

export default TopRightArrowIcon;

TopRightArrowIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

TopRightArrowIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'TopRightArrow Icon',
};
