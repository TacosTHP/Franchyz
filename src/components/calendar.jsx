import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useSelector } from 'react-redux'


import * as EventsAPI from 'services/eventsAPI';

import '../styles/calendar.scss'

function Calendar() {
  const [games, setGames] = useState([])
  const [practices, setPractices] = useState([])

  const club_id = useSelector(state => state.userReducer.clubId)
  const team_id = useSelector(state => state.userReducer.teamId)
  const user_id = useSelector(state => state.userReducer.id)


  const history = useHistory();

  const tmp_event = {title: "Event Now", start: new Date()}

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

  useEffect(() => { getGames () }, [])
  useEffect(() => { getPractices () }, [])


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
