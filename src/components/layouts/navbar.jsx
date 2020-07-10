import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Portrait from './portrait';
import '../../styles/nav.scss';

const Navbar = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userType = useSelector((state) => state.authReducer.userType);

  const setupAuthNav = () => {
    let authNav;
    if (!isAuth) {
      authNav = (
        <div>
          <Link to="/register"><button type="button" className="btn btn-sm btn-primary mr-2">Register</button></Link>
          <Link to="/login"><button type="button" className="btn btn-sm btn-primary">Login</button></Link>
        </div>
      );
    } else {
      authNav = (
        <Portrait />
      );
    }
    return authNav;
  };

  const setupMyDashboardLink = () => {
    let myDashboardLink;
    if (isAuth && userType === 'coach') {
      myDashboardLink = <Link to="/dashboardAdmin" className="nav-link">My Dashboard</Link>;
    } else if (isAuth && userType === 'player') {
      myDashboardLink = <Link to="/dashboardPlayer" className="nav-link">My Dashboard</Link>;
    }
    return myDashboardLink;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="logo">FRANCHYZ</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active" />
          <li className="nav-item">
            { setupMyDashboardLink() }
          </li>
        </ul>
        <div id="authNav">
          { setupAuthNav() }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
