import React from 'react';
import PropTypes from 'prop-types';

const CoachCard = ({ coach }) => {
  if (coach === undefined) {
    return 'd';
  }

  return (
    <div className="card d-flex justify-content-center align-items-center border bg-dark text-white d-flex py-2 mb-3">
      <div>
        <img src="..." className="card-img" alt="..." />
      </div>
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title text-primary">
          <span className="text-white">Coach</span>
          {' '}
          {coach.first_name}
          {' '}
          {coach.last_name}
        </h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text">
          <small className="text-muted">
            Coaching since :
            {' '}
            <span className="text-primary">
              {coach.arrival}
            </span>
          </small>
        </p>
      </div>
    </div>
  );
};

export default CoachCard;

CoachCard.propTypes = {
  coach: PropTypes.array,
}.isRequired;
