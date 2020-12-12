
import React from 'react';

import { NavLink } from "react-router-dom";
import "./nav.css";

const Nav = (props) => {
  const navStyle = {
    color: "white",
  };
  const activeStyles = {
    color: "rgb(83, 75, 87)",
  };
  return (
    <>
      <nav>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav-links">
          <NavLink style={navStyle} exact to="/" activeStyle={activeStyles}>
            <li>
              <i className="fa fa-home mx-2" aria-hidden="true"></i>Home
            </li>
          </NavLink>

          <NavLink style={navStyle} to="/login" activeStyle={activeStyles}>
            <li>
              <i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Login
            </li>
          </NavLink>
          <NavLink style={navStyle} to="/register" activeStyle={activeStyles}>
            <li>
              <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
              Register
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}
export default Nav 


