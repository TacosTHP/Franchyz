import React, {useState, useEffect} from "react";
import "../styles/form.scss";
import {useParams} from "react-router-dom";
import * as teamAPI from "services/teamAPI";
import PlayerList from "components/playerList.jsx";
import {Link} from "react-router-dom";

function TeamShow() {
  let {clubId, teamId} = useParams();
  useEffect(() => {
    setupTeam();
  }, []);
  const [team, setTeam] = useState("");

  async function setupTeam() {
    const ans = await teamAPI.getTeam(clubId, teamId);
    setTeam(ans);
  }

  return (
    <>
      <div className="text-center mt-5">
        <h1> {team.title} </h1>
      </div>
      <PlayerList players={team.players} />
      <Link to="/create-team">
      </Link>
    </>
  );
}

export default TeamShow;
