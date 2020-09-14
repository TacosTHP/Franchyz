import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { message } from 'antd';

import useInputChange from 'customHooks/useInputChange';
import { logup } from 'redux/middlewares/authMiddlewares';
import * as teamAPI from 'services/teamAPI';
import { setupErrorsMessage } from 'helpers/misc';

const SideRegisterForm = ({ clubs }) => {
  const [teams, setTeams] = useState(null);
  const history = useHistory();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userType = useSelector((state) => state.authReducer.userType);
  const errors = useSelector((state) => state.authReducer.error);
  const dispatch = useDispatch();
  const [input, handleInputChange] = useInputChange();

  const setupLoadingTeams = () => {
    let content;
    if (teams !== null) {
      content = teams.map((team) => (<option key={`${team.name} ${team.id}`} value={team.id}>{team.title}</option>));
    }
    return content;
  };

  const setupForm = () => {
    let content;
    if (input.type === 'player') {
      content = (
        <>
          <div className="form-group">
            <label htmlFor="club">
              Choose your club:
              <select id="clubId" name="clubId" className="form-control" defaultValue="" onChange={handleInputChange}>
                <option value="" disabled hidden>Choose an option</option>
                {clubs.map((club) => (<option key={`${club.name} ${club.id}`} value={club.id}>{club.name}</option>))}
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="team">
              Choose your team:
              <select id="teamId" name="teamId" className="form-control" defaultValue="" onChange={handleInputChange}>
                <option value="" disabled hidden>Choose an option</option>
                {setupLoadingTeams()}
              </select>
            </label>
          </div>
        </>
      );
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

  useEffect(() => {
    if (errors !== '') {
      const errorsMessage = setupErrorsMessage(errors);
      message.error(errorsMessage, 2.5);
    }
  }, [errors]);

  return (
    <form className="border rounded bg-dark p-3" onSubmit={submit}>
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
      {setupForm()}
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
      <div className="form-group">
        <label htmlFor="password_confirmation">
          Password confirmation:
          <input id="password_confirmation" name="password_confirmation" type="password" className="form-control" placeholder="Confirm password" onChange={handleInputChange} />
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
};

export default SideRegisterForm;

SideRegisterForm.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.object).isRequired,
};
