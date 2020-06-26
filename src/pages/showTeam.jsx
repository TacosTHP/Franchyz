import React, { useState, useEffect } from 'react';
import '../styles/form.scss';
import { Link, useParams } from 'react-router-dom';
import * as teamAPI from 'services/teamAPI';
import PlayerList from 'components/playerList';

function TeamShow() {
  const { clubId, teamId } = useParams();
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
      <PlayerList players={team.players} />
    </>
  );
}

export default TeamShow;
