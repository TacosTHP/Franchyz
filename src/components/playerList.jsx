import React from 'react';
import Player from 'components/player.jsx'

const PlayerList = ({players, handleCheckboxChange, checkbox}) => {

    const setList = () => {
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
