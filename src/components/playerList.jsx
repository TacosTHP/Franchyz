import React from 'react';
import Player from 'components/player';

const PlayerList = ({ players }) => {
  const setList = () => {
    let playersList;
    if (players !== undefined) {
      playersList = players.map((player) => <Player key={player.id} player={player} />);
    }
    return playersList;
  };

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
};

export default PlayerList;
