import React from 'react';
import PropTypes from 'prop-types';

import 'styles/button.scss';

const PrimaryButton = ({ text, icon }) => (
  <>
    <button id="primary-button" type="button" className="btn btn-primary text-white font-weight-bold d-flex align-items-center justify-content-center mx-auto">
      <div>
        {icon}
      </div>
      <div>
        {text}
      </div>
    </button>
  </>
);

export default PrimaryButton;

PrimaryButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.elementType,
}.isRequired;
