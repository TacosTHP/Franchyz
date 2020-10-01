import React from 'react';
import PropTypes from 'prop-types';
import InvitationToCreateTeam from 'components/InvitationToCreateTeam';
import StaffList from 'components/StaffList';
import PlayersList from 'components/PlayersList';

const TeamInfo = ({ teams, team }) => {
  if (teams.length === 0) {
    return <InvitationToCreateTeam />;
  }

  return (
    <>
      <h3 className="text-primary">Staff & Players</h3>
      <div className="d-flex justify-content-around">
        <StaffList teams={teams} team={team} />
        <PlayersList teams={teams} team={team} />
      </div>
    </>
  );
};

export default TeamInfo;

TeamInfo.propTypes = {
  teams: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
  team: PropTypes.shape().isRequired,
};
