import React from 'react';
import PropTypes from 'prop-types';
import InvitationToCreateTeam from 'components/InvitationToCreateTeam';

const TeamInfo = ({ team }) => {
  if (team.length === 0) {
    return <InvitationToCreateTeam />;
  }

  return (
    <>
      { team.title }
    </>
  );
};

export default TeamInfo;

TeamInfo.propTypes = {
  team: PropTypes.shape({
    title: PropTypes.string,
    length: PropTypes.number,
  }).isRequired,
};
