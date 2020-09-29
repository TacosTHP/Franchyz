import React from 'react';
import PropTypes from 'prop-types';
import InvitationToCreateTeam from 'components/InvitationToCreateTeam';
import TeamCard from 'components/TeamCard';

const TeamList = ({ teams }) => {
  if (teams === undefined) {
    console.log('eoijdfheiu')
    return (<> </>);
  }

  if (teams.length === 0) {
    return <InvitationToCreateTeam />;
  }

  return (
    <div id="team-list" className="d-flex py-2 border">
      { teams.map((team) => <TeamCard key={team.id} team={team} />) }
    </div>
  );
};

export default TeamList;

TeamList.propTypes = {
  teams: PropTypes.array,
}.isRequired;
