import React, { useState, useEffect } from "react";
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from "array-move";
function User() {
  const [user, setUser] = useState("");
  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    let url = `http://127.0.0.1:8000/users/api/v1/3/`;

    let response = await fetch(url);
    let res = await response.json();
    console.log(res);
    setUser(() => res);
    console.log(user);
  };

const SortableItem = SortableElement(({value}) => <li>{value}</li>)

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

  return (
    <div className="container text-center">
      <div className="card bg-dark text-light">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
      <div className="card bg-dark text-light">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
      <div className="card bg-dark text-light">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
      <div className="card bg-dark text-light">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
      <div className="card bg-dark text-light">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
      <div className="card bg-dark text-light">
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default User;
