import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap';

import portrait from 'assets/portrait.jpeg';
import * as authAPI from 'services/authAPI';

const Portrait = () => {
  const clubId = useSelector((state) => state.userReducer.clubId);
  const teamId = useSelector((state) => state.userReducer.teamId);
  const userId = useSelector((state) => state.userReducer.id);
  const userType = useSelector((state) => state.authReducer.userType);

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
  };

  return (
    <div className="dropdown">
      <div id="navbarDropdownMenuLink" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
        <img src={portrait} className="rounded-circle" alt="portrait" id="portrait" />
      </div>
      <div id="portrait-menu" className="dropdown-menu mt-2" aria-labelledby="navbarDropdownMenuLink">
        {setupProfileLink}
        <p className="m-0 dropdown-item" onClick={logout}> Logout </p>  
      </div>
    </div>
  );
};

export default Portrait;
