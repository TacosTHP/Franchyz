import React from 'react';
import PropTypes from 'prop-types';

const Testimonials = ({ testimonials }) => {
  const setupElements = () => {
    let content;
    if (testimonials !== undefined && Object.keys(testimonials).length <= 3) {
      content = Object.keys(testimonials).map((item) => (
        <div className="d-flex w-25 flex-column" key={item.id}>
          <div className=" d-flex justify-content-center mb-4">
            <img className="img-fluid rounded-circle w-50" src={testimonials[item].user_picture} alt="Card cap" />
          </div>
          <div className="bg-white rounded px-3 py-2">
            <h5 className="text-primary">{testimonials[item].user_identity}</h5>
            <p className="">{testimonials[item].user_testimonial}</p>
          </div>
        </div>
      ));
    }
    return content;
  };
  return (
    <div className="d-flex justify-content-around bg-dark py-5">
      { setupElements() }
    </div>
  );
};

Testimonials.propTypes = {
  testimonials: PropTypes.shape({
    first_user: PropTypes.shape({
      user_identity: PropTypes.string,
      user_testimonial: PropTypes.string,
      user_picture: PropTypes.string,
    }),
    second_user: PropTypes.shape({
      user_identity: PropTypes.string,
      user_testimonial: PropTypes.string,
      user_picture: PropTypes.string,
    }),
    third_user: PropTypes.shape({
      user_identity: PropTypes.string,
      user_testimonial: PropTypes.string,
      user_picture: PropTypes.string,
    }),
  }).isRequired,
};

export default Testimonials;
