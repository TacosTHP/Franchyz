import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import useInputChange from 'customHooks/useInputChange';
import PropTypes from 'prop-types';
import TransfertList from 'components/transfertList';
import * as teamAPI from 'services/teamAPI';
import * as gameAPI from 'services/gameAPI';
import * as practiceAPI from 'services/practiceAPI';
import GameNewForm from 'components/GameNewForm';
import PracticeNewForm from 'components/PracticeNewForm';
import { purgeInput } from 'helpers/misc';

const EventNewForm = ({ teams }) => {
  const [players, setPlayers] = useState();
  const [validateKeys, setValidateKeys] = useState([]);
  const clubId = useSelector((state) => state.userReducer.clubId);

  const [input, handleInputChange, setInput] = useInputChange({ eventType: 'game' });

  const setupForm = () => {
    let content;
    switch (input.eventType) {
      case 'game':
        content = <GameNewForm handleInputChange={handleInputChange} />;
        break;
      case 'practice':
        content = <PracticeNewForm handleInputChange={handleInputChange} />;
        break;
      default:
        content = <GameNewForm handleInputChange={handleInputChange} />;
    }
    return content;
  };

  const submit = async () => {
    let event;
    switch (input.eventType) {
      case 'game':
        event = await gameAPI.createGame({ clubId, ...input });
        break;
      case 'practice':
        event = await practiceAPI.createPractice({ clubId, ...input });
        break;
      default:
    }
  };

  useEffect(() => {
    if (input.teamId !== undefined) {
      const loadingPlayers = async () => {
        const response = await teamAPI.getTeam({ clubId, teamId: input.teamId });
        setPlayers(response.players);
      };
      loadingPlayers();
    }
  }, [input.teamId]);

  useEffect(() => {
    setInput(purgeInput({ input }));
  }, [input.eventType]);

  return (
    <div className="container">
      <select id="teamId" name="teamId" className="form-control" defaultValue="" onChange={handleInputChange}>
        <option value="" disabled hidden>Choose an option</option>
        {teams.map((team) => (<option key={`${team.name} ${team.id}`} value={team.id}>{team.title}</option>))}
      </select>
      <TransfertList players={players} handleInputChange={handleInputChange} />
      <select id="eventType" name="eventType" className="text-center mt-3" placeholder="Choose event type" onChange={handleInputChange}>
        <option value="game"> Game </option>
        <option value="practice"> Practice </option>
      </select>
      {setupForm()}
      <button type="button" className="btn btn-primary" onClick={submit}> submit </button>
    </div>
  );
};

export default EventNewForm;

EventNewForm.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
