import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { message } from 'antd';
import 'bootstrap';

import portrait from 'assets/portrait.jpeg';
import * as authAPI from 'services/authAPI';
import { logoutSuccess } from 'redux/actions/authActions';
import { infoUserDown } from 'redux/actions/userActions';

const Portrait = () => {
  const dispatch = useDispatch();
  const clubId = useSelector((state) => state.userReducer.clubId);
  const teamId = useSelector((state) => state.userReducer.teamId);
  const userId = useSelector((state) => state.userReducer.id);
  const userType = useSelector((state) => state.authReducer.userType);
  const history = useHistory();

  const setupProfileLink = () => {
    let profileLink;
    if (userType === 'player') {
      profileLink = <Link className="dropdown-item" to={`/clubs/${clubId}/teams/${teamId}/${userType}s/${userId}`}> Profile </Link>;
    } else {
      profileLink = null;
    }
    return profileLink;
  };

  const logout = () => {
    authAPI.signOut(userType);
    dispatch(logoutSuccess());
    dispatch(infoUserDown());
    Cookies.remove('token', { sameSite: 'lax' });
    Cookies.remove('userInfo', { sameSite: 'lax' });
    history.push('/');
    message.success('You successfully logged out', 2.5);
  };

  return (
    <div className="dropdown">
      <div id="navbarDropdownMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <img src={portrait} className="rounded-circle" alt="portrait" id="portrait" />
      </div>
      <div id="portrait-menu" className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
        {setupProfileLink()}
        <p className="m-0 dropdown-item" onClick={logout}> Logout </p>  
      </div>
    </div>
  );
};

export default Portrait;
