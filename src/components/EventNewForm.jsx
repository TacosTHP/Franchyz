import React from 'react';
import useInputChange from 'customHooks/useInputChange';
import PropTypes from 'prop-types';

const EventNewForm = ({ teams }) => {
  const [input, handleInputChange] = useInputChange();

  return (
    <div className="container">
      <select id="teamId" name="teamId" className="form-control" defaultValue="" onChange={handleInputChange}>
        {teams.map((team) => (<option key={`${team.name} ${team.id}`} value={team.id}>{team.title}</option>))}
      </select>
    </div>
  );
};

export default EventNewForm;

EventNewForm.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.object).isRequired,
};
