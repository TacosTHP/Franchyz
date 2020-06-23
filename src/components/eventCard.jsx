import React from 'react';

import * as EventsAPI from 'services/eventsAPI';


const EventCard = (props) => {
  let event = props.event
  let player = props.player

  const validate_attendance = (event) => {
    EventsAPI.confirmAttendance(player.player_id, player.club_id, player.team_id, event.id)
    let trig = props.trigger + 1
    props.setTrigger(trig)
  }

  if (event !== undefined) {
    return (
      <>
      <div>
        <div className="card rounded mx-2 my-2">
          <div className="card-body d-flex flex-column align-items-center">
            <h5 className="card-title">{event.title}</h5>
            <p className="card-text">{event.start}</p>
            <button className="btn btn-primary w-75" onClick={() => validate_attendance(event)}>Validate Participation</button>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default EventCard
