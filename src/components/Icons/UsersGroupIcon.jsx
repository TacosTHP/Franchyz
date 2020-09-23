import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { HiUserGroup } from 'react-icons/hi';

const UsersGroupIcon = ({
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
          <HiUserGroup />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <HiUserGroup />;
  }
  return icon;
};

export default UsersGroupIcon;

UsersGroupIcon.PropTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

UsersGroupIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'Users Group Icon',
};
