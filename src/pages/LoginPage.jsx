import React from 'react';

import SideLoginForm from 'components/SideLoginForm';
import Hero from 'components/Hero';

import image from 'assets/men-playing-football-2966245.jpg';

const LoginPage = () => (
  <>
    <div className="d-flex">
      <SideLoginForm />
      <Hero width="60" image={image} />
    </div>
  </>
);

export default LoginPage;
