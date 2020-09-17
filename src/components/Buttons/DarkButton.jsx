import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import 'styles/button.scss';

const DarkButton = ({ text, icon, url }) => (
  <>
    <Link to={url}>
      <button type="button" id="dark-button" className="btn btn-dark d-flex justify-content-around align-items-center text-white font-weight-bold">
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

export default DarkButton;

DarkButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.elementType,
}.isRequired;
