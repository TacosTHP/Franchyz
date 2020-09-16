import React, { useState } from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from 'components/Buttons/PrimaryButton';

const FeatureBandeau = ({
  title,
  description,
  image,
  imageLeft,
}) => {
  const [rowLayout, setRowLayout] = useState('flex-row');
  const setupSide = (rule) => {
    const layout = `d-flex ${rowLayout} align-items-center py-3 px-2 bg-dark`;
    if (!rule) {
      setRowLayout('flex-row-reverse');
    }
    return layout;
  };

  const setupElements = () => {
    let content;
    if (
      title !== undefined
      && description !== undefined
      && image !== undefined
      && imageLeft !== undefined
    ) {
      content = (
        <>
          <div className={setupSide(imageLeft)}>
            <div className="col-lg-6 mr-auto">
              <img src={image} alt="jndxjsndj" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 mr-auto">
              <div className="mb-5">
                <h2 className="text-primary">
                  {title}
                </h2>
                <p className="text-white">
                  {description}
                </p>
              </div>
              <PrimaryButton text="Meet my Team now !" icon="" />
            </div>
          </div>
        </>
      );
    }
    return content;
  };

  return (
    <div>
      { setupElements() }
    </div>
  );
};

FeatureBandeau.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageLeft: PropTypes.bool.isRequired,
};

export default FeatureBandeau;
