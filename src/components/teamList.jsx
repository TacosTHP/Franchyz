import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Team from 'components/team.jsx'

const TeamList = ({teams}) => {
  const isAdmin = useSelector(state => state.userReducer.isAdmin)


  const createTeam = () => {
    if (isAdmin) {
      return <p><Link to={`/create-team`} className="btn btn-primary mt-3">Create New Team</Link></p>
    } 
  }

  function setList() {
    if (teams !== undefined){
      return teams.map(team => <Team key={team.id} team={team} />)
    }
  }

  if (teams === null) {
    return (
      <div className="container">
        <p>This club don't have team yet !</p>
        {createTeam()}
      </div>
    );
  } else {
    return (
      <div className="container">
        <ul className='list-group list-group-flush'>
          {setList()}
        </ul>
        {createTeam()}
      </div>
    );
  }
};

export default TeamList;
