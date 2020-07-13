import React, { useEffect, useState } from 'react';
import { logup } from 'redux/middlewares/authMiddlewares';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { message } from 'antd';
import useInputChange from 'customHooks/useInputChange';
import * as clubAPI from '../services/clubAPI';
import * as teamAPI from '../services/teamAPI';
import '../styles/form.scss';


const Register = ({ clubs }) => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const userType = useSelector(state => state.authReducer.userType);
  const errors = useSelector(state => state.authReducer.error);

  const [input, handleInputChange] = useInputChange();
  const [dataClubs, setDataClubs] = useState([]);
  const [clubId, setClubId] = useState(null);
  const [teamId, setTeamId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('coach');
  const [dataTeams, setDataTeams] = useState([]);
  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch();
  


  const setupAlert = () => {
    let ans;
    let messageErrors = '';

    if (errors !== '') {
      for (const error in errors) {
        messageErrors = messageErrors + `${error} ${errors[error]} \n`
      };
      ans = (
        <div className='alert alert-danger alert-dismissible' role='alert'>
          <button type='button' className='close' data-dismiss='alert'>&times;</button>
          {messageErrors}
        </div>
      );
    } else {
      ans = null;
    };

    return ans
  };

  const handleClubId = (e) => {
    setClubId(e.currentTarget.value);
    let teams = clubs.find(club => { if (club.id == e.currentTarget.value) return club }).teams
    setTeamId(teams[0].id)

    setDataTeams(teams.map((team, key) =>( <option key={key} value={team.id}>{team.title}</option>)))

  };


  const handleTeamId = (e) => {
    setTeamId(e.currentTarget.value)
  }

  const handleEmail = (e) => {
    setEmail(e.currentTarget.value)
  }

  const handlePassword = (e) => {
    setPassword(e.currentTarget.value)
  }

  const handleType = (e) => {
    setType(e.currentTarget.value)
  }


  const submit = (event) => {
    event.preventDefault();
    dispatch(logup(email, password, type, teamId));
  };

  useEffect(() => {
    if (isAuth) {

      if (userType === 'coach') {
        message.success('You successfully registered as a coach.', 2.5)
        setRedirect(<Redirect to='/dashboardAdmin' />)
      }
       
      if (userType === 'player') {
        message.success('You successfully registered as a player.', 2.5)
        setRedirect(<Redirect to='/dashboardPlayer' />)
      }
       
    } else {
      setRedirect(<Redirect to='/register' />)
    }
  } ,[isAuth])

  return (
    <div>
      {setupAlert()}

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
          <label htmlFor="email">If player, choose your club:</label>
          <select type="email" className="form-control" placeholder="Enter email" id="club" onChange={handleInputChange}>
            {dataClubs}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Then, choose your team:</label>
          <select type="email" className="form-control" placeholder="Enter email" id="team" onChange={handleInputChange}>
            {dataTeams}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={handleInputChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={handleInputChange} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
      {redirect}
    </div>
  );
};

export default Register;
