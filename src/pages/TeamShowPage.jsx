import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as teamAPI from 'services/teamAPI';
import PlayersList from 'components/PlayersList';
import 'styles/form.scss';

const TeamShow = () => {
  const { clubId, teamId } = useParams();
  const [team, setTeam] = useState();

  const setupElements = () => {
    let elements;
    if (team.players !== undefined) {
      elements = (
        <>
          <PlayersList players={team.players} />
        </>
      );
    } else {
      elements = (
        <>
          <div>
            No players in the team yet....
          </div>
        </>
      );
    }
  };

  const setupPage = () => {
    let content;
    if (team !== undefined) {
      content = (
        <>
          <div className="text-center">
            <h1>
              {team.title}
            </h1>
          </div>
          { setupElements() }
        </>
      );
    } else {
      content = (
        <>
          <div className="text-center">
            <p>Loading.....</p>
          </div>
        </>
      );
    }
    return content;
  };

  useEffect(() => {
    const loadData = async () => {
      const teamData = await teamAPI.getTeam(clubId, teamId);
      setTeam(teamData);
    };
    loadData();
  }, []);

  return (
    <div className="container mb-3 mt-3">
      { setupPage() }
    </div>
  );
};

export default TeamShow;
