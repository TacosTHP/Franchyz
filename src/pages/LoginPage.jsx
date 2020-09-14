import React from 'react';
import { Link } from 'react-router-dom';

import SideLoginForm from 'components/SideLoginForm';

import 'styles/form.scss';

const LoginPage = () => (
  <>
    <div className="d-flex">
      <div
        className="d-flex flex-column justify-content-center align-items-center py-4"
        style={{
          width: '40%',
          backgroundColor: '#000',
        }}
      >
        <h3 className="text-primary">Log in to get Instant Access !</h3>
        <div className="px-3 my-3">
          <SideLoginForm />
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
      <div className="hero-image-login" style={{ width: '60%' }} />
    </div>
  </>
);

export default LoginPage;
