import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useInputChange from 'customHooks/useInputChange';
import PropTypes from 'prop-types';
import TransfertList from 'components/transfertList';
import * as teamAPI from 'services/teamAPI';

const EventNewForm = ({ teams }) => {
  const [players, setPlayers] = useState(null);
  const clubId = useSelector((state) => state.userReducer.clubId);

  const [input, handleInputChange] = useInputChange();

  const setupLoadingOrTransfertList = () => {
    let content;
    if (players === null) {
      content = <p> loading... </p>;
    } else {
      content = <TransfertList players={players} />;
    }
    return content;
  };

  useEffect(() => {
    if (input !== null) {
      const loadingPlayers = async () => {
        const response = await teamAPI.getTeam({ clubId, teamId: input.teamId });
        setPlayers(response.players);
      };
      loadingPlayers();
    }
  }, [input.teamId]);

  return (
    <div className="container">
      <select id="teamId" name="teamId" className="form-control" defaultValue="" onChange={handleInputChange}>
        <option value="" disabled hidden>Choose an option</option>
        {teams.map((team) => (<option key={`${team.name} ${team.id}`} value={team.id}>{team.title}</option>))}
      </select>
    </div>
  );
};

export default EventNewForm;

EventNewForm.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
