import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Player = ({player, handleCheckboxChange, checkbox}) => {
  const location = useLocation()
  const clubId = useSelector(state => state.userReducer.clubId);
  
  function test(e) {
    console.log(checkbox)
    handleCheckboxChange(e, checkbox)
  }

  function setupElements() {
    if (player !== undefined){ 
      if (location.pathname === '/newEvent')
      {
        return (
          <li className='list-group-item'> 
            <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link> 
            <input type="checkbox" className="form-check-input" id={`checkbox ${player.id}`} name={`checkbox${player.id}`} onChange={test} />
            <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link> 
            <input type="checkbox" className="form-check-input" id={`checkbox ${player.id}`} name='dqdq' onChange={test} />
          </li>
        ) 
      }
      else
      {
        return <li className='list-group-item'> <Link to={`/clubs/${clubId}/teams/${player.team_id}/players/${player.id}`}> {player.first_name} </Link>  </li>
      }
    }
  }
  return (
    <>
      {setupElements()}
    </>
  );
}

export default Player;

