import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";

function App() {
  const myStorage = window.localStorage;
  const {user} = useContext(AuthContext);
  // console.log(user)
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            {user ? <Home/> : <Login />}
          </Route>
          <Route path="/login">
            {user ? <Redirect to="/" /> : <Login myStorage={myStorage}/>}
          </Route>
          <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
          {/* <Messenger /> */}
          </Route>
          <Route path="/profile/:username">
            <Profile />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
