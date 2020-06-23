import React from 'react';
import { Link } from 'react-router-dom';

const Team = ({team}) => {

  return (
    <li className='list-group-item'> <Link to={`/clubs/${team.club_id}/teams/${team.id}`}> {team.title} </Link> </li>
  );
}

export default Team;

