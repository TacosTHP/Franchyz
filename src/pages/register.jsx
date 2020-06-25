import React, { useEffect, useState } from 'react';
import { logup } from 'redux/middlewares/authMiddlewares';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as clubAPI from '../services/clubAPI.jsx';
import * as teamAPI from '../services/teamAPI.jsx';
import '../styles/form.scss';

const Register = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const typeUser = useSelector(state => state.authReducer.typeUser);
  const errors = useSelector(state => state.authReducer.error);

  const [clubs, setClubs] = useState([]);
  const [dataClubs, setDataClubs] = useState([]);
  const [clubId, setClubId] = useState(null);
  const [teamId, setTeamId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('coach');
  const [dataTeams, setDataTeams] = useState([]);
  const [redirect, setRedirect] = useState('')
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (isAuth) {
      if (typeUser === 'coach')
        setRedirect(<Redirect to='/dashboardAdmin' />)
      if (typeUser === 'player')
        setRedirect(<Redirect to='/dashboardPlayer' />)
    } else {
      setRedirect(<Redirect to='/register' />)
    }
  } ,[isAuth])

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

  const getDataClubs = async () => {
    let response = await clubAPI.getClubs() 
    setClubs(response)
    setDataClubs(response.map((club, key) => ( <option key={key} value={club.id}>{club.name}</option>)));
    let teams = response[0].teams.map((team, key) =>( <option key={key} value={team.id}>{team.title}</option>));
    setDataTeams(teams);
  };


  useEffect(() => { getDataClubs() }, []);

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

  return (
    <div>
      {setupAlert()}

      <form className="form-auth p-4 mt-3 mb-3 rounded" action="/action_page.php" onSubmit={submit}>

        <div className="form-group">
          <label htmlFor="email">You are:</label>
          <select type="email" className="form-control" placeholder="Enter email" id="type" onChange={handleType}>
            <option value="coach">Coach</option>
            <option value="player">Player</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">If player, choose your club:</label>
          <select type="email" className="form-control" placeholder="Enter email" id="club" onChange={handleClubId}>
            {dataClubs}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Then, choose your team:</label>
          <select type="email" className="form-control" placeholder="Enter email" id="team" onChange={handleTeamId}>
            {dataTeams}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" placeholder="Enter email" id="email" onChange={handleEmail}/>
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={handlePassword} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
      {redirect}
    </div>
  );
};

export default Register;
