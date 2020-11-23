import React from 'react';
import PropTypes from 'prop-types';

import NoEventCard from 'components/NoEventCard';

const EventCard = ({ event, linkTo }) => {
  if (event === null || event === undefined) {
    return (
      <>
      </>
    );
  }

  if (event.id === 0) {
    return <NoEventCard event={event} />;
  }

  return (
    <div className="card clickable d-flex justify-content-center align-items-center border bg-dark text-white py-2 mb-3" onClick={() => {linkTo(event)}}>
      <div>
        <img src="..." className="card-img" alt="..." />
      </div>
      <div className="card-body d-flex flex-column justify-content-center align-items-center">
        <h5 className="card-title text-primary">
          {event.title}
        </h5>
        <p className="card-text d-flex flex-column">
          <small className="text-muted">
            Date :
            {' '}
            <span className="text-primary">
              {event.starting_date_time}
            </span>
          </small>
          <small className="text-muted">
            Location :
            {' '}
            <span className="text-primary">
              {`${event.address}, ${event.zip_code}, ${event.city}`}
            </span>
          </small>
        </p>
      </div>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.shape({
    address: PropTypes.string,
    away_team_score: PropTypes.number,
    canceled: PropTypes.bool,
    city: PropTypes.string,
    country: PropTypes.string,
    created_at: PropTypes.string,
    duration: PropTypes.number,
    home_team_score: PropTypes.number,
    id: PropTypes.number,
    long_description: PropTypes.string,
    starting_date_time: PropTypes.string,
    title: PropTypes.string,
    updated_at: PropTypes.string,
    zip_code: PropTypes.string,
  }),
}.isRequired;
