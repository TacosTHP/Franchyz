import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import moment from "moment";


import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import {useSelector } from 'react-redux'


import * as EventsAPI from 'services/eventsAPI';
import * as clubAPI from "services/clubAPI.jsx";

import '../styles/calendar.scss'

function Calendar() {
  const [games, setGames] = useState([])
  const [practices, setPractices] = useState([])
  const userType = useSelector(state => state.authReducer.userType);
  const club_id = useSelector(state => state.userReducer.clubId)
  const team_id = useSelector(state => state.userReducer.teamId)
  const user_id = useSelector(state => state.userReducer.id)
  const history = useHistory();

  const addEventManually = arg => {
    setGames([...games, {title: "Event Now", start: arg.date}])
  }

  const goToEventNew = () => {
    if (userType === "coach"){
      history.push('/newEvent')
    }
  }

  const getGames =() => {
    EventsAPI.getAttendedGames(user_id, club_id, team_id)
    .then(response => {if (response.length === undefined) {
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
  
  
  const retrieveGames = () => {
  if (userType === "player") {
    getGames ()
  } else {
     clubAPI.getClub(club_id)
     .then(response => {if (response.games === undefined) {
      console.log("no games!");
    } else {
      console.log(response.games);
      setGames(response.games)
    }})
  }
 }
 const retrievePractices = () => {
  if (userType === "player") {
    getPractices ()
  } else {
      clubAPI.getClub(club_id)
     .then(response => {if (response.practices === undefined) {
      console.log("no practices!");
      console.log("response" + response);
     } else {
      setPractices(response.practices)
    }})
  }
 }

  useEffect(() => {retrievePractices() }, [])
   useEffect(() => {retrieveGames()} , [])
const handleEvent = () => {
  console.log("event")
}

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
      eventSources={[practices, games]}
      dateClick={goToEventNew}
    />
  )
}

export default Calendar