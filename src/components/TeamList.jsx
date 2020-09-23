import React from 'react';
import PropTypes from 'prop-types';
import TeamCard from 'components/TeamCard';

const TeamList = ({ teams }) => {
  const setList = () => {
    let list;
    if (teams !== undefined) {
      list = teams.map((team) => <TeamCard key={team.id} team={team} />);
    } else {
      list = (
        <div className="container">
          <p>This club doesn&apos;t have team yet !</p>
        </div>
      );
    }
    return list;
  };
  return (
    <div id="team-list" className="d-flex py-2 border">
      {setList()}
      <TeamCard />
    </div>
  );
};

export default TeamList;

TeamList.propTypes = {
  teams: PropTypes.array,
}.isRequired;
