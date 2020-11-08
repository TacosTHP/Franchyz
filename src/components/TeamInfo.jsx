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
  teams: PropTypes.arrayOf(PropTypes.object),
  team: PropTypes.shape({
    club_id: PropTypes.number,
    coach: PropTypes.shape({
      'admin?': PropTypes.bool,
      arrival: PropTypes.string,
      birthdate: PropTypes.string,
      club_id: PropTypes.number,
      created_at: PropTypes.string,
      email: PropTypes.string,
      first_name: PropTypes.string,
      id: PropTypes.number,
      last_name: PropTypes.string,
      phone: PropTypes.string,
      updated_at: PropTypes.string,
    }),
    creator_id: PropTypes.number,
    id: PropTypes.number,
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }),
};

TeamInfo.defaultProps = {
  teams: PropTypes.shape({
    club_id: '',
    coach: {},
    creator_id: '',
    id: '',
    players: [],
    title: '',
  }),
  team: PropTypes.shape(),
};
