import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'styles/button.scss';

const PrimaryButton = ({ text, icon, url }) => (
  <>
    <Link to={url}>
      <button id="primary-button" type="button" className="btn btn-primary d-flex align-items-center justify-content-around text-white font-weight-bold mx-auto">
        <div className="mr-2" id="icon">
          {icon}
        </div>
        <div>
          {text}
        </div>
      </button>
    </Link>
  </>
);

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.elementType,
  url: PropTypes.string,
}.isRequired;
