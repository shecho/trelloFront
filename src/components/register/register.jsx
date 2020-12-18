
import React, { useState } from "react";
import "./register.css";

const Register = () => {
  
  const [user, setUser] = useState({});
  let handleInput = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  let registerUser = async (e) => {
    e.preventDefault();
    let url = `https://academlo-todolist.herokuapp.com/register`;

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(user),
    });
    console.log(response.status);

  };
  return (
    <div>
      <form
        onInput={handleInput}
        onSubmit={(e) => registerUser(e)}
        className="form-box animated fadeInUp"
      >
        <h1 className="form-title">SignUp</h1>
        <input name="name" type="text" placeholder="Username" />
        <input name="email" type="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />
        <button type="submit">
          <i className="fa fa-user-plus px-2" aria-hidden="true"></i>
          Register
        </button>
      </form>
    </div>
  );
}
export default Register 













