import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'styles/button.scss';

const PrimaryButton = ({
  text,
  icon,
  url,
  onClick,
}) => {
  const history = useHistory();
  const setActionOnClick = () => {
    if (url !== '#') {
      history.push(url);
    } else {
      onClick();
    }
  };

  const setupIcon = () => {
    if (icon !== '') {
      return (
        <div className="h-100 d-flex justify-content-center align-items-center mr-2" id="icon">
          {icon}
        </div>
      );
    }
  };

  return (
    <>
      <button
        id="primary-button"
        type="button"
        onClick={setActionOnClick}
        className="btn btn-primary d-flex justify-content-center align-items-center text-white font-weight-bold"
      >
        {setupIcon()}
        <div className="h-100 d-flex justify-content-center align-items-center">
          {text}
        </div>
      </button>
    </>
  );
};

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  icon: PropTypes.elementType,
  onClick: PropTypes.func,
};

PrimaryButton.defaultProps = {
  url: '#',
  icon: '',
  onClick: () => {},
};
