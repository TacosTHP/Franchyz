import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { CgClose } from 'react-icons/cg';

const CloseIcon = ({
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
          <CgClose />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <CgClose />;
  }
  return icon;
};

export default CloseIcon;

CloseIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

CloseIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'Close Icon',
};
