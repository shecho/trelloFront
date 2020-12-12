import "./App.css";
import React, { useState } from "react";
import Nav from "./components/nav/nav";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Boards from "./components/boards/boards";
import Register from "./components/register/register";
import User from "./components/users/user";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const handleLogStatus = (status) => {
    setLoginStatus(() => !loginStatus);
    console.log(loginStatus);
  };
  return (
    <Router>
      <div className="App">
        <div className="">
          <Nav />
        </div>

        <div className="row justify-content-center">
          <Switch>
            <Route exact path="/login">
              {loginStatus === true ? (
                <Redirect from="/login" to="/boards" />
              ) : (
                <Login handleLogStatus={handleLogStatus} />
              )}
            </Route>

            <Route exact path="/home" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/boards" component={Boards} />
            <Route exact path="/test" component={User} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
