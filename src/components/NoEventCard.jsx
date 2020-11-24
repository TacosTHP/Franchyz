import React from 'react';
import PropTypes from 'prop-types';

const NoEventCard = ({ event }) => (
  <div className="card d-flex justify-content-center align-items-center border bg-dark text-white py-2 mb-3">
    <div>
      <img src="..." className="card-img" alt="..." />
    </div>
    <div className="card-body d-flex flex-column justify-content-center align-items-center">
      <h5 className="card-title text-primary">
        {event.title}
      </h5>
    </div>
  </div>
);

export default NoEventCard;

NoEventCard.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
}.isRequired;
