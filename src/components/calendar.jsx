import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import * as EventsAPI from 'services/eventsAPI';

import '../styles/calendar.scss'

function Calendar(props) {
  const [games, setGames] = useState([])
  const [practices, setPractices] = useState([])
  let events = props.events
  const user_id = props.player.player_id
  const club_id = props.player.club_id
  const team_id = props.player.team_id
  const history = useHistory();

  console.log(events);

  const addEventManually = arg => {
    setGames([...games, {title: "Event Now", start: arg.date}])
  }

  const goToEventNew = () => {
    history.push('/register')
  }

  const getGames =() => {
    EventsAPI.getAttendedGames(user_id, club_id, team_id)
    .then(response => {if (response.length < 1) {
      console.log("no Attended games!");
    } else {
      response.map(game => setGames([...games, {
        title: `GAME ${game.title}`,
        start: game.start,
        color: game.color,
        allDay: false
      }]))
    }})
  }

  const getPractices =() => {
    EventsAPI.getAttendedPractices(user_id, club_id, team_id)
    .then(response => {
      response.map(practice => setPractices([...practices, {
        title: `PRACTICE ${practice.title}`,
        start: practice.start,
        color: practice.color,
        allDay: false
      }]));
    })
  }

  const manageEvents = (events) => {
    events.forEach((event, i) => {
      if (event.type === "Practice") {
        console.log(event);
        setPractices([...practices, {
          title: `PRACTICE ${event.title}`,
          start: event.start,
          backgroundColor: event.backgroundColor,
          borderColor: event.borderColor,
          textColor: event.textColor,
          allDay: false
        }])
      } else {
        console.log(event);
        return setGames([...games, {
          title: `GAME ${event.title}`,
          start: event.start,
          backgroundColor: event.backgroundColor,
          borderColor: event.borderColor,
          textColor: event.textColor,
          allDay: false
        }])
      }
    });
  }

  useEffect(() => { manageEvents(events) }, [events])


  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      defaultView="dayGridMonth"
      themeSystem="bootstrap"
      height="auto"
      header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
      allDaySlot={false}
      firstDay={1}
      locale= "fr"
      timeZone="UTC"
      buttonText= {{
        today:"Aujourd'hui",
        day: 'Jour',
        month: 'Mois',
        week: 'Semaine',
      }}
      eventSources={[games, practices]}
      dateClick={addEventManually}
    />
  )
}

export default Calendar
