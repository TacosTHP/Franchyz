import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import useInputChange from 'customHooks/useInputChange';
import { logup } from 'redux/middlewares/authMiddlewares';
import * as teamAPI from 'services/teamAPI';

const RegisterForm = ({ clubs }) => {
  const [teams, setTeams] = useState(null);
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userType = useSelector((state) => state.authReducer.userType);
  const dispatch = useDispatch();
  const [input, handleInputChange] = useInputChange();

  const setupLoadingTeams = () => {
    let content;
    if (teams !== null) {
      content = teams.map((team) => (<option key={`${team.name} ${team.id}`} value={team.id}>{team.title}</option>));
    }
    return content;
  };

  const submit = (event) => {
    event.preventDefault();
    dispatch(logup(input));
  };

  useEffect(() => {
    if (input.clubId !== undefined) {
      const loadTeams = async () => {
        const response = await teamAPI.getTeams(input);
        setTeams(response);
      };
      loadTeams();
    }
  }, [input.clubId]);

  useEffect(() => {
    if (teams !== null) {
      const e = { currentTarget: { name: 'teamId', value: teams[0].id.toString() } };
      handleInputChange(e);
    }
  }, [teams]);

  useEffect(() => {
    if (userType === 'coach') {
      message.success('You successfully connected to your account as a coach.', 2.5);
      history.push('/dashboardAdmin');
    } else if (userType === 'player') {
      message.success('You successfully connected to your account as a player.', 2.5);
      history.push('/dashboardPlayer');
    }
  }, [isAuth]);

  return (
    <form className="form-auth p-4 mt-3 mb-3 rounded" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="type">
          You are:
          <select id="type" name="type" className="form-control" defaultValue="" onChange={handleInputChange} required>
            <option value="" disabled hidden>Choose an option</option>
            <option value="coach">Coach</option>
            <option value="player">Player</option>
          </select>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="club">
          If player, choose your club:
          <select id="clubId" name="clubId" className="form-control" defaultValue="" onChange={handleInputChange}>
            <option value="" disabled hidden>Choose an option</option>
            {clubs.map((club) => (<option key={`${club.name} ${club.id}`} value={club.id}>{club.name}</option>))}
          </select>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="team">
          Then, choose your team:
          <select id="teamId" name="teamId" className="form-control" defaultValue="" onChange={handleInputChange}>
            <option value="" disabled hidden>Choose an option</option>
            {setupLoadingTeams()}
          </select>
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email address:
          <input id="email" name="email" type="email" className="form-control" placeholder="Enter email" onChange={handleInputChange} />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="password">
          Password:
          <input id="password" name="password" type="password" className="form-control" placeholder="Enter password" onChange={handleInputChange} />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default RegisterForm;

RegisterForm.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
