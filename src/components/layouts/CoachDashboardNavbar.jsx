import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrimaryButton from 'components/Buttons/PrimaryButton';
import Portrait from 'components/layouts/portrait';

import 'styles/nav.scss';

const CoachDashboardNavbar = ({ club }) => {
  if (typeof club !== 'object') {
    return (
      <nav className="navbar navbar-expand-lg d-flex align-items-center justify-content-center py-3 px-5 bg-dark" id="navbar">
        <PrimaryButton text="Create New Club" url="/newClub" />
      </nav>
    );
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg py-3 px-5 bg-dark" id="navbar">
        <Link to="/dashboardAdmin" className="logo">{club.name}</Link>
        <div className="float-right" id="authNav">
          <Portrait />
        </div>
      </nav>
    </>
  );
};

export default CoachDashboardNavbar;

CoachDashboardNavbar.propTypes = {
  club: PropTypes.shape({
    address: PropTypes.string,
    city: PropTypes.string,
    conference: PropTypes.string,
    country: PropTypes.string,
    date_of_creation: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
    league: PropTypes.string,
    logo_url: PropTypes.string,
    name: PropTypes.string,
    pool: PropTypes.string,
    zip_code: PropTypes.string,
  }),
}.isRequired;
