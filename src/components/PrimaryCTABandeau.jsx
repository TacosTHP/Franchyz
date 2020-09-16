import React from 'react';
import PropTypes from 'prop-types';

import DarkButton from 'components/Buttons/DarkButton';

const PrimaryCTABandeau = ({
  title,
  description,
  CTA,
  icon,
}) => {
  const setupElements = () => {
    let content;
    if (title !== undefined && description !== undefined && CTA !== undefined) {
      content = (
        <>
          <div className=" container d-flex justify-content-around align-items-center py-5 bg-primary">
            <div className="mx-4 w-75">
              <h3 className="text-dark">
                {title}
              </h3>
              <p className="text-white">
                {description}
              </p>
            </div>
            <div className="mx-4 w-25">
              <DarkButton text={CTA} icon={icon} />
            </div>
          </div>
        </>
      );
    }
    return content;
  };
  return (
    <div className="bg-dark py-3">
      { setupElements() }
    </div>
  );
};

export default PrimaryCTABandeau;

PrimaryCTABandeau.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  CTA: PropTypes.string.isRequired,
  icon: PropTypes.element,
};

PrimaryCTABandeau.defaultProps = {
  icon: '',
};