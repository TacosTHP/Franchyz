import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from 'components/Buttons/PrimaryButton';

const FeatureBandeau = ({
  title,
  description,
  image,
  imageLeft,
  CTA,
  icon,
  url,
}) => {
  const setupSide = (rule) => {
    let layout;
    if (rule) {
      layout = 'flex-row';
    } else {
      layout = 'flex-row-reverse';
    }
    return layout;
  };

  return (
    <>
      <div className={`d-flex align-items-center py-3 px-2 bg-dark + ${setupSide(imageLeft)}`}>
        <div className="col-lg-6 mr-auto">
          <img src={image} alt="jndxjsndj" className="img-fluid rounded" />
        </div>
        <div className="col-lg-6 mr-auto">
          <div className="mb-5">
            <h2 className="text-primary">
              {title}
            </h2>
            <p className="text-white description-bandeau">
              {description}
            </p>
          </div>
          <PrimaryButton text={CTA} icon={icon} url={url} />
        </div>
      </div>
    </>
  );
};

FeatureBandeau.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageLeft: PropTypes.bool,
  CTA: PropTypes.string,
  icon: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default FeatureBandeau;
