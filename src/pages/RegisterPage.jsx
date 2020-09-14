import React, { useEffect, useState } from 'react';
import * as clubAPI from 'services/clubAPI';
import { Link } from 'react-router-dom';
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
    <div className="d-flex">
      <div className="hero-image-register" style={{ width: '60%' }} />
      <div
        className="d-flex flex-column justify-content-center align-items-center py-4"
        style={{
          width: '40%',
          backgroundColor: '#000',
        }}
      >
        <h3 className="text-primary">Register to get Instant Access !</h3>
        <div className="px-3 my-3">
          {setupForm()}
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
          <Link to="/">
            <p className="text-primary">
              Already registered ? Access your account here !
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
