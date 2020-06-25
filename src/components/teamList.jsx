import React from 'react';
import Team from 'components/team.jsx'

const TeamList = ({teams}) => {


  const setList = () => {
    if (teams !== undefined){
      return teams.map(team => <Team key={team.id} team={team} />)
    }
  }

  if (teams === null) {
    return (
      <div className="container">
        <p>This club don't have team yet !</p>
      </div>
    );
  } else {
    return (
      <div className="container scrolly">
        <ul className='list-group list-group-flush'>
          {setList()}
        </ul>
      </div>
    );
  }
};

export default TeamList;
