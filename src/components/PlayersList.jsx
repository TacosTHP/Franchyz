import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TopRightArrowIcon from 'components/Icons/TopRightArrowIcon';

import 'styles/staffList.scss';
import colors from 'styles/_scss-variables.scss';

const PlayersList = ({ teams, team }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (team === null) {
      let arrPlayers = [];
      teams.forEach((teamIterable) => {
        arrPlayers = arrPlayers.concat(teamIterable.players);
      });
      setPlayers(arrPlayers);
    } else {
      setPlayers(team.players);
    }
  }, [team]);

  return (
    <div className="d-flex flex-column bg-dark w-50 px-3 py-2 my-3 mx-2 rounded">
      <div className="ml-auto mr-2 mt-2">
        <Link to="/"><TopRightArrowIcon size="1.5em" color={colors.whiteColor} /></Link>
      </div>
      <h4 className="text-white">Players</h4>
      <div className="d-flex">
        <div className="text-primary font-weight-bold mr-2">
          {players.length}
        </div>
        <div className="text-white">
          Players
        </div>
      </div>
      <div className="d-flex my-2">
      </div>
    </div>
  );
};

export default PlayersList;

PlayersList.propTypes = {
  team: PropTypes.shape(),
  teams: PropTypes.shape(),
}.isRequired;
