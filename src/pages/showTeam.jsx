import React, { useState, useEffect } from 'react';
import '../styles/form.scss';
import { Link, useParams } from 'react-router-dom';
import * as teamAPI from 'services/teamAPI';
import PlayersList from 'components/playersList';

function TeamShow() {
  let {clubId, teamId} = useParams();
  const [team, setTeam] = useState('');

  async function setupTeam() {
    const ans = await teamAPI.getTeam(clubId, teamId);
    setTeam(ans);
  }

  useEffect(() => {
    setupTeam();
  }, []);

  return (
    <>
      <div className="text-center">
        <h1>
          {team.title}
        </h1>
      </div>
      <PlayersList players={team.players} />
    </>
  );
}

export default TeamShow;
