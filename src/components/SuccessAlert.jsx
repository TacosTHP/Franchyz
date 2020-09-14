import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetSuccessMessage } from 'redux/actions/authActions';
import { message } from 'antd';

const ErrorAlert = () => {
  const successMessage = useSelector((state) => state.authReducer.successMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (successMessage !== null) {
      message.success(successMessage, 2.5);
      dispatch(resetSuccessMessage());
    }
  }, [successMessage]);
  return (
    <>
    </>
  );
};

export default ErrorAlert;
