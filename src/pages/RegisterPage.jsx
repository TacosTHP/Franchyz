import React, { useEffect, useState } from 'react';
import * as clubAPI from 'services/clubAPI';
import SideRegisterForm from 'components/SideRegisterForm';

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
        <div className="hero-image-register" style={{ width: '60%' }} />
        {setupForm()}
      </div>
    </>
  );
};

export default RegisterPage;
