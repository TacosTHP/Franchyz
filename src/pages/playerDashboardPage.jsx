import React, {useEffect, useState} from 'react';
import '../styles/form.scss'
import {useSelector } from 'react-redux'
import * as EventsAPI from 'services/eventsAPI';
import Calendar from 'components/calendar'
import EventsList from 'components/eventsList'
import DashboardPlayerTabs from "components/dashboardPlayerTabs.jsx";
import { BackTop } from 'antd';
import * as clubAPI from "services/clubAPI.jsx";

function PlayerDashboardPage () {
  const [events, setEvents] = useState([])
  const [trigger, setTrigger] = useState(0)
  // const myClubId = 1
  // const club_id = 1


  const clubId = useSelector(state => state.userReducer.clubId)
  const teamId = useSelector(state => state.userReducer.teamId)
  const playerId = useSelector(state => state.userReducer.id)
  const player = {clubId, teamId, playerId}

  const unconfirmed_events = () => {
    EventsAPI.getUnconfirmedEvents(playerId, clubId, teamId)
    .then((response) => {setEvents(response)})
  }

  useEffect(() => {
    unconfirmed_events()
  }, [])

  
  useEffect(() => {
    unconfirmed_events()
  }, [trigger])

  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    };

    console.log("club_id" + clubId)

    const [club, setClub] = useState("");

    useEffect(() => {
      loadClub();
    }, []);
  
    const loadClub = async () => {
      const response = await clubAPI.getClub(clubId);
      setClub(response);
    }
  return(

    <div>
       <div>
       <div className="text-center mt-5">
            <h1>Welcome to FRANCHYZ</h1>
            <h4>Your trainer invited you to FRANCHYZ.</h4>
            <h4>
              You can find your team events in the calendar. 
            </h4>
            <h4>Validate your participation for the events you are invited for.</h4>
            </div>
          </div>
          { events === null ? <h6 className="text-center text-primary">You have no upcoming events </h6>  :   
    <h6 className="text-center text-primary">Let your team know whether you participate in the following events: </h6> }
         
    { clubId === null ?  <h6 className="text-center redtext">You have to ask your trainer to add you to a club/team.</h6>  :  <DashboardPlayerTabs club={club}/>}
        
        <div className="container mb-5">  
        <EventsList events={events} player={player} setTrigger={setTrigger} trigger={trigger}/> 
        <Calendar player={player}/>
        </div>
      
          <BackTop>
      <div style={style}>UP</div>
    </BackTop>
    </div>
  )
}

export default PlayerDashboardPage
