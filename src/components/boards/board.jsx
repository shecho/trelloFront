import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./boards.css";

const Board = (props) => {
  const { id, description, name, members } = props.board;
  let [favorite, setFavorite] = useState(props.board.favorite);

  const addTofavorites = async () => {
    // console.log("adding to favorites");
    let url = `http://127.0.0.1:8000/boards/${id}/`;
    let data = {favorite:[...props.board.favorite, 2]}
    console.log(data);
    let res = await fetch(url, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });

    console.log(res);
    setFavorite(() => !favorite);
  };
  const deleteBoard = async (id) => {
    let url = `http://127.0.0.1:8000/boards/${id}/`;
    console.log(url);
    let request = await fetch(url, { method: "DELETE" });
    console.log(request);
    props.getBoards();
  };
  const handelSetFavorite = () => {
    setFavorite(() => !favorite);
  };
  const activeStyles = {
    color: "rgb(83, 75, 87)",
  };
  
  return (
    <div className="boards" key={id}>
      <div className="child_boards">
        <div className="head_boards">
          <i
            className={`fa fa-heart-o ${members.includes(favorite) ? "text-danger" : ""} `}
            aria-hidden="true"
            onClick={() => addTofavorites()}
          />

          <i
            className="fa fa-trash text-danger"
            aria-hidden="true"
            onClick={() => deleteBoard(id)}
          />

          <NavLink to={`boards/${id}`} activeStyle={activeStyles}>
            <li>
              <i className="fa fa-ellipsis-h " aria-hidden="true" id={id} />
            </li>
          </NavLink>
        </div>

        <div className="card-body">
          <h5 className="card-title"> {name}</h5>
          <p> {description}</p>
          <div className="d-flex justify-content-center ">
            <button type="button" className="btn btn-primary mr-1">
              <i className="fa fa-check bnt btn-success" aria-hidden="true" />{" "}
              Participantes
              <span className="badge bg-secondary p-1">{members.length}</span>
            </button>
            <button type="button" className="btn btn-primary">
              <i className="fa fa-plus bnt btn-success" aria-hidden="true" />{" "}
              Invitados
              <span className="badge bg-secondary p-1"> </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
