import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Portrait from './portrait.jsx';
import '../../styles/nav.scss';

function Navbar() {
  const isAuth = useSelector(state => state.authReducer.isAuth)
  const typeUser = useSelector(state => state.authReducer.typeUser)
  console.log(isAuth);
  console.log("typeUser" + typeUser);

  function authNav() {
    if (!isAuth) {
      return(
        <div>
          <Link to='/register'><button type='button' className='btn btn-sm btn-primary mr-2'>Register</button></Link>
          <Link to='/login'><button type='button' className='btn btn-sm btn-primary'>Login</button></Link>
        </div>
      );
    } else {
      return (
        <Portrait />
      );
    };
  };

  function myDashboardLink() {
    if (isAuth && typeUser === 'coach') {
      return (
        <>
          <li className='nav-item active'>
            <Link to='/dashboardAdmin' className='nav-link'>My Dashboard</Link>
          </li>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>My Club</Link>
          </li>
          <li className='nav-item dropdown active'>
            <Link className='nav-link dropdown-toggle' id='navbarDropdown' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              My Teams
            </Link>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <Link to='/teams' className='dropdown-item'>All Teams</Link>
              <Link to='/create-team' className='dropdown-item'>New Team</Link>
            </div>
          </li>
        </>
      );
    } else if (isAuth && typeUser === 'player') {
      return (
        <>
          <li className='nav-item active'>
            <Link to='/dashboardPlayer' className='nav-link'>Dashboard </Link>
          </li>
        </>
      );
    };
  };

  return(
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <Link to='/' className='logo'>FRANCHYZ</Link>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          { myDashboardLink() }
        </ul>
        <div id='authNav'>
          { authNav() }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
