import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Team = ({ team }) => (
  <li className="list-group-item">
    <Link to={`/clubs/${team.club_id}/teams/${team.id}`}>
      {team.title}
    </Link>
  </li>
);

export default Team;

Team.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number,
    club_id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};
