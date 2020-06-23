import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Player from 'components/player.jsx'

const PlayerList = ({players, handleCheckboxChange, checkbox}) => {
  const isAdmin = useSelector(state => state.userReducer.isAdmin)
  console.log(players)


  const createTeam = () => {
    if (isAdmin) {
      return <p><Link to={`/create-team`} className="btn btn-primary mt-3">Create New Team</Link></p>
    } 
  }

  function setList() {
    if (players !== undefined){
      return players.map(player => <Player key={player.id} player={player} handleCheckboxChange={handleCheckboxChange} checkbox={checkbox} />)
    }
  }

  if (players === null) {
    return (
      <div className="container">
        <p>This club don't have team yet !</p>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ul className='list-group list-group-flush'>
          {setList()}
        </ul>
      </div>
    );
  }
};

export default PlayerList;
