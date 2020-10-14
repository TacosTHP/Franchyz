import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { RiQuestionLine } from 'react-icons/ri';

const QuestionMarkIcon = ({
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
          <RiQuestionLine />
        </div>
      </IconContext.Provider>
    );
  } else {
    icon = <RiQuestionLine />;
  }
  return icon;
};

export default QuestionMarkIcon;

QuestionMarkIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
};

QuestionMarkIcon.defaultProps = {
  color: '',
  size: '',
  className: '',
  title: 'TopRightArrow Icon',
};
