import React, {useEffect, useState} from 'react';
import '../styles/form.scss'
import {useSelector } from 'react-redux'
import * as EventsAPI from 'services/eventsAPI';
import Calendar from 'components/calendar'
import EventsList from 'components/eventsList'

function PlayerDashboardPage () {
  const [events, setEvents] = useState([])
  const [data, setData] = useState()
  const club_id = useSelector(state => state.userReducer.club_id)
  const team_id = useSelector(state => state.userReducer.team_id)
  const player_id = useSelector(state => state.userReducer.id)
  const player = {club_id, team_id, player_id}

  const unconfirmed_events = () => {
    EventsAPI.getUnconfirmedEvents(player_id, club_id, team_id)
    .then((response) => {setEvents(response)})
  }

  const all_events = () => {
    EventsAPI.getAllPersonalEvents(player_id, club_id, team_id)
    .then((response) => {setEvents(response)})
  }

  useEffect(() => {
    all_events()
  }, [])


  if (events !== null) {
    return(
      <>
        <div className='my-3 mx-3'>
          <EventsList events={events} player={player}/>
          <Calendar player={player} events={events}/>
        </div>
      </>
    )
  } else {
    return (
      <>
      <div className='my-3 mx-3'>
        <Calendar player={player}/>
      </div>
      </>
    )
  }
}

export default PlayerDashboardPage
