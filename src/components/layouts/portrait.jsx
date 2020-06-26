import React from 'react';
import portrait from 'assets/portrait.jpeg'
import {Link, useHistory} from 'react-router-dom'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Cookies from 'js-cookie'
import * as authAPI from 'services/authAPI'
import { logoutSuccess } from 'redux/actions/authActions.jsx'
import { infoUserDown } from 'redux/actions/userActions.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { message} from 'antd';



function Portrait() {

  const dispatch = useDispatch();
  const clubId = useSelector(state => state.userReducer.clubId)
  const teamId = useSelector(state => state.userReducer.teamId)
  const userId = useSelector(state => state.userReducer.id)
  const userType = useSelector(state => state.authReducer.userType)

  let history = useHistory();

  function logout(){
    authAPI.signOut(userType)
    dispatch(logoutSuccess())   
    dispatch(infoUserDown())
    Cookies.remove('token', {sameSite: 'lax'});
    Cookies.remove('userInfo', {sameSite: 'lax'});
    history.push("/");
    message.success('You successfully logged out', 2.5)
  }

 

  return(
    <div className="dropdown">
      <div id="navbarDropdownMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <img src={portrait} className="rounded-circle" alt="portrait" id='portrait'/>
      </div>
      {userType === "player" ?  
      <div id="portrait-menu" className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
        <Link className="dropdown-item" to={`/clubs/${clubId}/teams/${teamId}/${userType}s/${userId}`}> Profile </Link>
        <p className="m-0 dropdown-item" onClick={logout}> Logout </p>  
      </div> 
      : 

       <div id="portrait-menu" className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
        <p className="m-0 dropdown-item" onClick={logout}> Logout </p>  
      </div> }
    </div> 

  )
}

export default Portrait
