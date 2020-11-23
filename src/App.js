import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import CreatePoll from "./components/CreatePoll/CreatePoll";
import { Settings } from "./components/settings/Settings";
// import PollVote from "./pages/PollVote";
import SingleOrderCreate from "./pages/SingleOrderCreate";
import PollVote from "./components/PollVote/PollVote";
// context
import { AuthContext } from "./contexts/AuthContext";
// style
import "./App.css";
// FontAwesome icons 
import { library } from '@fortawesome/fontawesome-svg-core' 
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faCoffee)


const App = () => {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <Route
        exact
        path="/"
        render={() => {
          return auth.isAuth() ? <Redirect to="/home" /> : <Welcome />;
        }}
      />

      <Route path="/signup">
        <Signup />
      </Route>

      <Route
        path="/login"
        render={() => {
          return auth.isAuth() ? <Redirect to="/home" /> : <Login />;
        }}
      />

      <PrivateRoute path="/home">
        <Home />
      </PrivateRoute>

      <PrivateRoute exact path="/create-poll">
        <CreatePoll />
      </PrivateRoute>

      <PrivateRoute exact path="/settings">
        <Settings />
      </PrivateRoute>

      <PrivateRoute path="/poll-vote/:slug">
        <PollVote />
      </PrivateRoute>

      <PrivateRoute path="/single-order-create/:slug">
        <SingleOrderCreate />
      </PrivateRoute>
    </Router>
  );
};

export default App;
