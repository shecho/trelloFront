import React, {useState, useEffect } from "react"

function User(){
  const [user, setUser] = useState("")
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async() => {
    let url = `http://127.0.0.1:8000/users/api/v1/3/`;

    let response = await fetch(url);
    let res = await response.json();
    console.log(res);
    setUser(() => res);
    console.log(user);
  }
  return(
        <div className="card bg-dark text-light">
      <p>{user.name}</p>
      <p>{user.lastname}</p>
      <p>{user.email}</p>
    </div>
    )
}

export default User
