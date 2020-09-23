import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FaCalendarAlt } from 'react-icons/fa';

const CalendarIcon = ({
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
          <FaCalendarAlt />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <FaCalendarAlt />;
  }
  return icon;
};

export default CalendarIcon;

CalendarIcon.PropTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

CalendarIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'Calendar Icon',
};
