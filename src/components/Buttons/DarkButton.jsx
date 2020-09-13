import React from 'react';
import PropTypes from 'prop-types';

const PrimaryButton = ({ text, icon }) => (
  <>
    <button type="button" className="btn btn-dark text-white font-weight-bold d-flex justify-content-center">
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
