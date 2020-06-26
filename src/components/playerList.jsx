import React from 'react';
import Player from 'components/player.jsx'

const PlayerList = ({players, handleCheckboxChange, checkbox}) => {

    const setList = () => {
    if (players !== undefined){
      return players.map(player => <Player key={player.id} player={player} />)
    } 
  }

  if (players === null) {
    return (
      <div className="container">
        <p>This team doesn't have players yet !</p>
      </div>
    );
  } else {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Jersey</th>
            <th scope="col">Position</th>
            <th scope="col">Height</th>
            <th scope="col">Weight</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {setList()}
        </tbody>
      </table>
    );
  }
};

export default PlayerList;
