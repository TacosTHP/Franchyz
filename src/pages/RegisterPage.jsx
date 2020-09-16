import React, { useEffect, useState } from 'react';
import Hero from 'components/Hero';
import SideRegisterForm from 'components/SideRegisterForm';
import image from 'assets/men-playing-football-2966245.jpg';

import * as clubAPI from 'services/clubAPI';

import 'styles/form.scss';

const RegisterPage = () => {
  const [clubs, setClubs] = useState(null);

  const setupForm = () => {
    let content;
    if (clubs !== null) {
      content = (
        <SideRegisterForm clubs={clubs} />
      );
    } else {
      content = <p> loading </p>;
    }
    return content;
  };

  useEffect(() => {
    const loadClubs = async () => {
      const response = await clubAPI.getClubs();
      setClubs(response);
    };
    loadClubs();
  }, []);

  return (
    <>
      <div className="d-flex">
        <Hero width="60" image={image} />
        {setupForm()}
      </div>
    </>
  );
};

export default RegisterPage;
