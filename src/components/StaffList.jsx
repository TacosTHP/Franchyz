import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import TopRightArrowIcon from 'components/Icons/TopRightArrowIcon';

import 'styles/staffList.scss';
import colors from 'styles/_scss-variables.scss';

const StaffList = ({ teams, team }) => {
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    if (team === null) {
      const arrCoaches = [];
      teams.forEach((teamIterable) => {
        arrCoaches.push(teamIterable.coach);
      });
      setCoaches(arrCoaches);
    } else {
      setCoaches(team.coach);
    }
  }, [team]);

  return (
    <>
      <div className="d-flex flex-column bg-dark w-50 px-3 py-2 my-3 mx-2 rounded">
        <div className="ml-auto mr-2 mt-2">
          <Link to="/"><TopRightArrowIcon size="1.5em" color={colors.whiteColor} /></Link>
        </div>
        <h4 className="text-white">Coaches</h4>
        <div className="d-flex">
          <div className="text-primary font-weight-bold mr-2">
            {coaches.length}
          </div>
          <div className="text-white">
            Coaches
          </div>
        </div>
        <div className="d-flex my-2">
        </div>
      </div>
    </>
  );
};

export default StaffList;

StaffList.propTypes = {
  coaches: PropTypes.shape(),
  players: PropTypes.shape(),
}.isRequired;
