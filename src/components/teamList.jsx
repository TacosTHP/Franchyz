import React from 'react';
import PropTypes from 'prop-types';
import Team from 'components/team';

const TeamList = ({ teams }) => {
  const renderTeamList = () => {
    let render;
    if (teams.length === 0) {
      render = <p>This club don&apos;t have team yet !</p>;
    } else {
      render = (
        <ul className="list-group list-group-flush">
          { teams.map((team) => <Team key={team.id} team={team} />)}
        </ul>
      );
    }
    return render;
  };

  return (
    <div className="container scrolly">
      { renderTeamList() }
    </div>
  );
};

export default TeamList;

TeamList.propTypes = {
  teams: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
};
