import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Portrait from './portrait.jsx';
import '../../styles/nav.scss';

const Navbar = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const typeUser = useSelector(state => state.authReducer.typeUser);

  const authNav = () => {
    if (!isAuth) {
      return (
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

  const myDashboardLink = () => {
    if (isAuth && typeUser === 'coach') {
      return <Link to='/dashboardAdmin' className='nav-link'>My Dashboard</Link>
    } else if (isAuth && typeUser === 'player') {
      return <Link to='/dashboardPlayer' className='nav-link'>My Dashboard</Link>
    };
  };

  return (
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
          <li className='nav-item'>
            { myDashboardLink() }
          </li>
        </ul>
        <div id='authNav'>
          { authNav() }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
