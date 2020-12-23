import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [user, setUser] = useState({});
  let handleInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  const loginUser = async (e) => {
    e.preventDefault();
    let url = `http://localhost:8000/users/login/`;
    console.log(user);
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    let res = await response.json();
    let token = res.tokens;
    console.log(token);
    let  deserialized = token.replace(/'/g, '"');
    console.log(deserialized);
  };
  return (
    <div>
      <form
        onInput={handleInput}
        onSubmit={(e) => loginUser(e)}
        className="form-box animated fadeInUp"
      >
        <h1 className="form-title">SignIn</h1>
        <input name="email" type="email" placeholder="Email" autoFocus />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">
          <i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Login
        </button>
      </form>
    </div>
  );
};
export default Login;
