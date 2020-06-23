import React, {useState, useEffect} from 'react';
import PlayerList from 'components/playerList.jsx'

function TeamPanel({team}){
  console.log(team)

  return(
    <div className='container'>
      <h1> {`${team.title}`} </h1>
    </div>
  )
}

export default TeamPanel
