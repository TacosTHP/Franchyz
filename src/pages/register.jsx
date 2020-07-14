import React, { useEffect, useState } from 'react';
import * as clubAPI from 'services/clubAPI';
import RegisterForm from 'components/RegisterForm';

const Register = () => {
  const [clubs, setClubs] = useState(null);

  const setupLoadingClubs = () => {
    let content;
    if (clubs !== null) {
      content = <RegisterForm clubs={clubs} />;
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
      <h3> Register ! </h3>
      {setupLoadingClubs()}
    </>
  );
};

export default Register;
