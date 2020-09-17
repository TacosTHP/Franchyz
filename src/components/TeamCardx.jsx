import React, { useEffect, useState } from "react";
import * as api from "../services/teamAPI.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TeamCard = () => {
  const [playersData, setPlayersData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  let { clubId, teamId } = useParams();

  const getData = () => {
    api.getTeam(clubId, teamId).then((response) => {
      let players = response.players.map((player, key) => (
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
    </div>
  );
};

export default TeamCard;
