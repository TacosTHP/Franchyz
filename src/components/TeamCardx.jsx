import React, { useEffect, useState } from 'react';
import * as api from '../../services/teamAPI.jsx';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


const TeamCard = () => {
  const [playersData, setPlayersData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const clubID = useSelector(state => state.userReducer.club_id);
  const { team_id } = useParams();
  const isAdmin = useSelector(state => state.userReducer.isAdmin);

  console.log(useParams())
  
	const getData = () => {
		api.getTeam(clubID, team_id)
		.then(response => {
      console.log(response)
			let players = response.players.map((player, key) => (
      <tr key={key}>
        <td>{player.first_name} {player.last_name}</td>
        <td>{player.jersey_number}</td>
        <td>{player.position}</td>
        <td>{player.height}cm</td>
        <td>{player.weight}kg</td>
        <td>{player.email}</td>
        <td>{player.phone}</td>
      </tr>
      ));
      let team = response.title;
      setPlayersData(players);
      setTeamData(team);
		});
	};

  useEffect(getData, []);

  return (
  <div>
    <h1>{teamData}</h1>
    <table class="table">
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
        {playersData}
      </tbody>
    </table>
  </div>
  )
};

export default TeamCard;