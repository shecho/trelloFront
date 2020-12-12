
import React from "react";
import Login from "../login/login";
import Register from "../register/register";
export default function Home() {
  return (
    <div className="row justify-content-center">
      <Login />
      <Register />
    </div>
  );
}
