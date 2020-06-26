import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store.js";

// Pages
import Home from "./pages/home.jsx";
import Register from "./pages/register.jsx";
import Login from "./pages/login.jsx";
import Profile from "./pages/profile.jsx";
import AdminCoachDashboardPage from "./pages/adminCoachDashboardPage.jsx";
import PlayerDashboardPage from "./pages/playerDashboardPage.jsx";
import CreateClub from "./pages/createClub.jsx";
import TeamShow from "./pages/teamShow.jsx";
import CreateTeam from "./pages/createTeam.jsx";
import NewEvent from "./pages/newEvent.jsx";
import ShowGame from "./pages/showGame.jsx";
import GameEdit from "./pages/gameEdit.jsx";
// import ShowPractice from "./pages/showPractice.jsx";
import PracticeEdit from "./pages/practiceEdit.jsx";

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
          <PrivateRoute path={`/clubs/:clubId/teams/:teamId/practices/:practiceId/edit`} component={PracticeEdit} />
          <PrivateRoute path={`/clubs/:clubId/teams/:teamId/games/:gameId/edit`} component={GameEdit} />
          <PrivateRoute path={`/clubs/:clubId/teams/:teamId`} component={TeamShow} />
          <PrivateRoute path={`/games/:gamesId`} component={ShowGame} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
