import React, { useState, useEffect } from 'react';
import EventCard from 'components/eventCard'

const EventsList = (props) => {
  let events = props.events
  let player = props.player

  const setList = (events) => {
    if (events !== null){
      return events.map(event => <EventCard key={event.id} event={event} player={player} setTrigger={props.setTrigger} trigger={props.trigger}/>)
    } else {
      return (
        <div className='bg-primary'>
          fxcgbn
        </div>
      )
    }
  }

  useEffect(() => {
    setList(events)
  }, [])

  return (
    <>
      <div className='d-flex flex-wrap mb-3'>
        {setList(events)}
      </div>
    </>
  )
}

export default EventsList
