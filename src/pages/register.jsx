import React, { useEffect, useState } from 'react';
import { logup } from 'redux/middlewares/authMiddlewares';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom'
import * as clubAPI from '../services/clubAPI.jsx';
import * as teamAPI from '../services/teamAPI.jsx';
import '../styles/form.scss';
import { message} from 'antd';
import { RegisterForm } from 'components/RegisterForm'


const Register = () => {

  const [clubs, setClubs] = useState()

  useEffect( async () => {
    const response = await clubAPI.getClubs()
    setClubs(response);
  })
  return (
    <RegisterForm clubs={clubs} />

  )
};

export default Register;
