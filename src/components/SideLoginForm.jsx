import React, { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { message } from 'antd';

import useInputChange from 'customHooks/useInputChange';
import { login } from '../redux/middlewares/authMiddlewares';

const SideLoginForm = () => {
  const [input, handleInputChange] = useInputChange();
  const history = useHistory();
  const error = useSelector((state) => state.authReducer.error);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  const userType = useSelector((state) => state.authReducer.userType);
  const dispatch = useDispatch();

  const submit = async (e) => {
    e.preventDefault();
    dispatch(login(input));
  };

  useEffect(() => {
    if (userType === 'coach') {
      message.success('You successfully connected to your account as a coach.', 2.5);
      history.push('/dashboardAdmin');
    } else if (userType === 'player') {
      message.success('You successfully connected to your account as a player.', 2.5);
      history.push('/dashboardPlayer');
    }
  }, [isAuth]);

  useEffect(() => {
    if (error !== '') {
      message.error(error, 2.5);
    }
  }, [error]);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center py-4" id="form-wrapper">
      <h3 className="text-primary">Log in to get Instant Access !</h3>
      <div className="px-3 my-3">
        <form className="rounded bg-dark p-3" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="email">
              You are :
              <select id="type" name="type" className="form-control" defaultValue="" onChange={handleInputChange} required>
                <option value="" disabled hidden>Choose an option</option>
                <option value="coach">Coach</option>
                <option value="player">Player</option>
              </select>
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Email :
              <input id="email" name="email" type="email" className="form-control" placeholder="Enter email" onChange={handleInputChange} />
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password :
              <input id="password" name="password" type="password" className="form-control" placeholder="Enter password" onChange={handleInputChange} />
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
      <div className="d-flex flex-column align-items-center">
        <Link to="/">
          <p className="text-primary">
            Forgot password?
          </p>
        </Link>
        <Link to="/register">
          <p className="text-primary">
            Not registered yet ? Create your account here !
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideLoginForm;
