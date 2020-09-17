import React from 'react';
import PropTypes from 'prop-types';

import DarkButton from 'components/Buttons/DarkButton';

const PrimaryCTABandeau = ({
  title,
  description,
  CTA,
  icon,
  url,
}) => {
  const setupElements = () => {
    let content;
    if (title !== undefined && description !== undefined && CTA !== undefined) {
      content = (
        <>
          <div className="container d-flex justify-content-around align-items-center py-5 bg-primary rounded">
            <div className="mx-4 w-75">
              <h3 className="text-dark">
                {title}
              </h3>
              <p className="text-white">
                {description}
              </p>
            </div>
            <div className="mx-4 w-25">
              <DarkButton text={CTA} icon={icon} url={url} />
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
  title: PropTypes.string,
  description: PropTypes.string,
  CTA: PropTypes.string,
  icon: PropTypes.element,
  url: PropTypes.string,
}.isRequired;

PrimaryCTABandeau.defaultProps = {
  icon: '',
};
