import React from 'react'
import { Route, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import {useSelector} from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = useSelector((state) => state.userReducer.id);
  const history = useHistory();

  return (
    <Route{...rest} render={(props) =>

        Cookies.get('token') ? 


          (<Component {...props} />) 

          : 

          (history.push("/login"))}
    />
  );
};

export default PrivateRoute
