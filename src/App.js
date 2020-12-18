import "./App.css";
import React, { useState } from "react";
import Nav from "./components/nav/nav";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Boards from "./components/boards/boards";
import Register from "./components/register/register";
import User from "./components/users/user";
// import SortableContainer from "./components/sortableContainer/sortableComponent";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import BoardDetail from "./components/boards/boardDetail";
import SortableComponent from "./components/sortableContainer/sortableComponent";
function App() {
  const [loginStatus, setLoginStatus] = useState(true);
  const handleLogStatus = (status) => {
    setLoginStatus(() => !loginStatus);
    console.log(loginStatus);
  };
  return (
    <Router>
      <div className="App">
        <div className="navigation">
          <Nav />
        </div>

        <div className="appgeneral">
          <div className="sidebar">
            <div className="box_sidebar">
              <span className="mx-2"> Add List</span>
              <i className="fa fa-plus-circle text-success" aria-hidden="true" />
            </div>
            <div className="box_sidebar">
              <span className="mx-2"> Add List</span>
              <i className="fa fa-plus-circle text-success" aria-hidden="true" />
            </div>
          </div>

          <div className="body_cards">
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
              <Route exact path="/boards/:id" component={BoardDetail} />
              <Route
                exact
                path="/boards/:id/lis"
                component={SortableComponent}
              />
              <Route exact path="/test" component={SortableComponent} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
