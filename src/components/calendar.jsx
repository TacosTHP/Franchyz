import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import {useSelector } from 'react-redux'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import * as EventsAPI from 'services/eventsAPI';

import '../styles/calendar.scss'

function Calendar(props) {
  const [games, setGames] = useState([])
  const [practices, setPractices] = useState([])
  // const userId = props.player.player_id
  // const clubId = props.player.club_id
  const userId = useSelector(state => state.userReducer.id)
  const clubId = useSelector(state => state.userReducer.clubId)
  const teamId = useSelector(state => state.userReducer.teamId)

  // const teamId = props.player.team_id
  const history = useHistory();

  const tmp_event = {title: "Event Now", start: new Date()}

  const addEventManually = arg => {
    setGames([...games, {title: "Event Now", start: arg.date}])
  }

  console.log("cid" + clubId)
  const goToEventNew = () => {
    history.push('/register')
  }

  const getGames =() => {
    EventsAPI.getAttendedGames(userId, clubId, teamId)
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
    EventsAPI.getAttendedPractices(userId, clubId, teamId)
    .then(response => {if (response.length < 1) {
        console.log("no Attended practices!");
    } else {
      response.map(practice => setPractices([...practices, {
        title: `PRACTICE ${practice.title}`,
        start: practice.start,
        color: practice.color,
        allDay: false
      }]));
    }})
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
