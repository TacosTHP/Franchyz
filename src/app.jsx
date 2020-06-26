import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import store from "./redux/store.js";

// Pages
import NewEvent from "./pages/newEvent.jsx";
import CreateClub from "./pages/createClub.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import CreateTeam from "./pages/createTeam.jsx";
import AdminCoachDashboardPage from "./pages/adminCoachDashboardPage.jsx";
import ShowGame from './pages/showGame.jsx'
import ShowTeam from "./pages/showTeam.jsx";
import ShowPractice from "./pages/showPractice.jsx";
import PlayerDashboardPage from './pages/playerDashboardPage.jsx'
import Profile from './pages/profile.jsx';

//Component
import Navbar from "./components/layouts/navbar.jsx";
import Footer from "./components/layouts/footer.jsx";
import PrivateRoute from "./components/privateRoute";


//CSS
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/antd.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path="/dashboardAdmin" component={AdminCoachDashboardPage} />
          <PrivateRoute exact path="/dashboardPlayer" component={PlayerDashboardPage} />
          <PrivateRoute exact path="/newTeam" component={CreateTeam} />
          <PrivateRoute exact path="/newEvent" component={NewEvent} />
          <PrivateRoute exact path="/newClub" component={CreateClub} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute  path={`/clubs/:clubId/teams/:teamId`} component={ShowTeam} />
          <PrivateRoute path={`/games/:gamesId`} component={ShowGame} />
          <Route path="/login"> <Login /> </Route>
          <Route path="/register"> <Register /> </Route>
          <Route exact path="/"> <Home /> </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
