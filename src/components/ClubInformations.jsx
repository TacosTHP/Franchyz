import React from 'react';
import PropTypes from 'prop-types';

const ClubInformations = ({ club }) => (
  <div className="container text-white club-informations-container">
    <h5 className="font-weight-bold  mt-3 mb-3 ml-5 text-center text-primary">Club details:</h5>
    <div className="row">
      <div className="col">
        <p>
          <span className="fieldTitleClubInfo"> Club Name : </span>
          {club.name}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> Founded in : </span>
          {club.date_of_creation}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> Description : </span>
          <div className="club-description">
            {club.description}
          </div>
        </p>
      </div>

      <div className="col">
        <p>
          <span className="fieldTitleClubInfo"> Address : </span>
          {club.address}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> Zip Code : </span>
          {club.zip_code}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> City : </span>
          {club.city}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> Country : </span>
          {club.country}
        </p>
      </div>

      <div className="col">
        <p>
          <span className="fieldTitleClubInfo"> League : </span>
          {club.league}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> Pool : </span>
          {club.pool}
        </p>
        <p>
          <span className="fieldTitleClubInfo"> Conference : </span>
          {club.conference}
        </p>
      </div>
    </div>
  </div>
);

export default ClubInformations;

ClubInformations.propTypes = {
  club: PropTypes.shape({
    logo_url: PropTypes.string,
    name: PropTypes.string,
    date_of_creation: PropTypes.string,
    description: PropTypes.string,
    league: PropTypes.string,
    pool: PropTypes.string,
    conference: PropTypes.string,
    address: PropTypes.string,
    zip_code: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
